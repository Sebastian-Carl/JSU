import Raise from '../../custom/error/builder/error.builder.js';

/* Helper */
/**
 *  Validates the parameter `sessionKey` format.
 *
 *  @param { string } caller - The caller method id that performs this validation.
 *  @param { string } sessionKey - The access key of the storage to validate.
 *  @param { string } processId - The process of caller id that is going to be performed.
 *  @returns { string | false } The state of validation process result.
 */
function ValidateStorageKey(caller, sessionKey, processId) {
    const Method = typeof caller === "string" && caller.length > 0
        ? caller : `STORAGE.SESSION.(ANONYMOUS)`;

    if (typeof sessionKey !== "string")
        Raise._ArgumentError(Method, "sessionKey", sessionKey, "String");

    if (typeof processId !== "string")
        Raise._ArgumentError(Method, "processId", processId, "String");

    const Key = sessionKey.trim();
    if (Key.length === 0) {
        console.warn(`${Method}(): Cannot perform the ${processId} process with an empty string of storage access key!`);
        return false;
    }

    return Key;
}

/**
 *  A session `storage` API methods for accessing user's built-in browser session storage.
 */
const SessionStorageMethods = {
    /**
     *  The name of this object.
     */
    NAME: "SESSION",

    /**
     *  The total count of existing items at session `storage`.
     */
    ITEM_COUNT: sessionStorage.length,

    /**
     *  The total accumulated size of session `storage` API in `bytes` format.
     *
     *  ***Notes***:
     *   - This is not the base for checking on the maximum size in (bytes) of session `storage` that it can hold, but
     *     can be used to check on the current accumulated (bytes) size of session `storage`.
     *   - The maximum (bytes) size of session `storage` may vary on your or the user's browser environment. But commonly is
     *     ~ `5` Megabytes per domain.
     *
     *  @returns { number } The current total used (bytes) size in session `storage`.
     */
    SIZE() {
        let Byte = 0;

        for (let I = 0; I < this.ITEM_COUNT; I++) {
            const Key = localStorage.key(I);

            if (!Key)
                continue;

            const Data = localStorage.getItem(Key) ?? "";

            Byte += (Key.length + Data.length) * 2;
        }

        return Byte;
    },

    /**
     *  A state that indicates whether if the session `storage` API is supported in user's browser version.
     */
    IS_SUPPORTED: (function () {
        try {
            const Key = "__TEST_SESSION_KEY__";

            sessionStorage.setItem(Key, "__TEST__");
            sessionStorage.removeItem(Key);

            return true;
        } catch (err) {
            return false;
        }
    })(),

    /**
     *  Returns the data of the specified access key of item at session `storage`.
     *
     *  ***Notes***:
     *   - If there's no existing item for the specified access key at session `storage`, it will
     *     return a default response `object`.
     *   - Automatically parsed the data of the item of specified access key at session `storage` into its
     *     original type by using `JSON.parse()` parser. (Can be disabled by providing a `false` state as second parameter.)
     *
     *  @template { boolean } [B=true]
     *  @overload
     *  @param { string } sessionKey - The access key of item at session `storage`.
     *  @param { B } [autoParse] - A optional state parameter for automatically parsing the retrieved data.
     *  @returns {{
     *      State: boolean,
     *      Data: B extends true ? unknown : string | undefined,
     *      Reason?: "INVALID_KEY" | "NO_SUCH_KEY" | "NOT_SUPPORTED"
     *  }} The response object result of retrieval process.
     */
    GET(sessionKey, autoParse = true) {
        const Method = `STORAGE.${this.NAME}.GET`, Response = { State: false, Data: undefined };

        if (!this.IS_SUPPORTED) {
            console.error(`${Method}(): Your current environment does not supported 'Storage' API! Please upgrade your environment to its latest version.`);
            return { ...Response, Reason: "NOT_SUPPORTED" };
        }

        const Key = ValidateStorageKey(Method, sessionKey, "retrieval");
        if (!Key)
            return { ...Response, Reason: "INVALID_KEY" };

        if (typeof autoParse !== "boolean")
            autoParse = true;

        if (this.ITEM_COUNT === 0 || Object.keys(sessionStorage).indexOf(Key) < 0)
            return { ...Response, Reason: "NO_SUCH_KEY" };

        const Data = sessionStorage.getItem(Key);
        Response.State = true;
        Response.Data = autoParse ? JSON.parse(Data) : Data;

        return Response;
    },

    /**
     *  Store a new session `storage` item with the specified access key and its data at session `storage`.
     *
     *  ***Notes***:
     *   - Terminates the creation process when there's already existing session item with the same key provided
     *     at session `storage`.
     *
     *  @param { string } sessionKey - The access key of item at session `storage`.
     *  @param { any } [data] - The data to store at new session item. (Default: undefined)
     *  @returns {{ State: boolean, Reason?: "DUPLICATE_KEY_FOUND" | "INVALID_KEY" | "NOT_SUPPORTED" }} The response object result of creation process.
     */
    NEW(sessionKey, data) {
        const Method = `STORAGE.${this.NAME}.NEW`, Response = { State: false, Reason: undefined };

        if (!this.IS_SUPPORTED) {
            console.error(`${Method}(): Your current environment does not supported 'Storage' API! Please upgrade your environment to its latest version.`);
            Response.Reason = "NOT_SUPPORTED";
            return Response;
        }

        const Key = ValidateStorageKey(Method, sessionKey, "creation");
        if (!Key) {
            Response.Reason = "INVALID_KEY";
            return Response;
        }

        if (this.GET(Key).State) {
            console.warn(`${Method}(): There's already existing session storage item with an access key of '${Key}'! (Exited)`);
            Response.Reason = "DUPLICATE_KEY_FOUND";
            return Response;
        }

        sessionStorage.setItem(sessionKey, JSON.stringify(data));
        Response.State = true;
        return Response;
    },

    /**
     *  Removes an item at session `storage` that matches the specified access key.
     *
     *  @param { string } sessionKey - The access key of item at session `storage`.
     *  @returns {{ State: boolean, Reason?: "INVALID_KEY" | "NO_SUCH_KEY" | "NOT_SUPPORTED" }} The response object result of removal process.
     */
    REMOVE(sessionKey) {
        const Method = `STORAGE.${this.NAME}.REMOVE`, Response = { State: false, Reason: undefined };

        if (!this.IS_SUPPORTED) {
            console.error(`${Method}(): Your current environment does not supported 'Storage' API! Please upgrade your environment to its latest version.`);
            Response.Reason = "NOT_SUPPORTED";
            return Response;
        }

        const Key = ValidateStorageKey(sessionKey);
        if (!Key) {
            Response.Reason = "INVALID_KEY";
            return Response;
        }

        if (!this.GET(Key).State) {
            Response.Reason = "NO_SUCH_KEY";
            return Response;
        }

        sessionStorage.removeItem(Key);
        Response.State = true;
        return Response;
    },

    /**
     *  Updates the current data with the specified new data of an item at session `storage` that matches the specified access key.
     *
     *  @param { string } sessionKey - The access key of item at session `storage`.
     *  @param { any } newData - The data to set as new data of the item of session `storage`.
     *  @returns {{ State: boolean, Reason?: "INVALID_KEY" | "NO_SUCH_KEY" | "NOT_SUPPORTED" }} The response object result of update process.
     */
    UPDATE(sessionKey, newData) {
        const Method = `STORAGE.${this.NAME}.UPDATE`, Response = { State: false, Reason: undefined };

        if (!this.IS_SUPPORTED) {
            console.error(`${Method}(): Your current environment does not supported 'Storage' API! Please upgrade your environment to its latest version.`);
            Response.Reason = "NOT_SUPPORTED";
            return Response;
        }

        const Key = ValidateStorageKey(sessionKey);
        if (!Key) {
            Response.Reason = "INVALID_KEY";
            return Response;
        }

        const This = this.GET(Key);
        if (!This.State) {
            Response.Reason = This.Reason;
            return Response;
        }

        This.Data = JSON.stringify(newData);
        sessionStorage.setItem(Key, This.Data);
        Response.State = true;
        return Response;
    }
}

export default SessionStorageMethods;
