import Emit from '../../custom/error/builder/error.builder.js';

/* -- Helper -- */
/**
     *  Validates the parameter `localKey` format.
     *
     *  @param { string } caller - The caller method id that performs this validation.
     *  @param { string } localKey - The access key of the storage to validate.
     *  @param { string } processId - The process of caller id that is going to be performed.
     *  @returns { string | false } The state of validation process result.
     */
function ValidateStorageKey(caller, localKey, processId) {
    const Method = typeof caller === "string" && caller.length > 0
        ? caller : `STORAGE.LOCAL.(ANONYMOUS)`;

    if (typeof localKey !== "string")
        Emit._ArgumentError(Method, "localKey", localKey, "String");

    if (typeof processId !== "string")
        Emit._ArgumentError(Method, "processId", processId, "String");

    const Key = localKey.trim();
    if (Key.length === 0) {
        console.warn(`${Method}(): Cannot perform the ${processId} process with an empty string of storage access key!`);
        return false;
    }

    return Key;
}

/**
 *  A local `storage` API methods for accessing user's built-in browser local storage.
 */
const LocalStorageMethods = {
    /**
     *  Name of this object.
     */
    NAME: "LOCAL",

    /**
     *  The total count of existing items at local `storage`.
     */
    ITEMS_COUNT: localStorage.length,

    /**
     *  The total used storage size (MB) in bytes that is calculated in UTF-16 for every existing data at local `storage`.
     *
     *  ***Notes***:
     *   - This is not the base for checking on the maximum size in (bytes) of local `storage` that it can hold, but
     *     can be used to check on the current used (bytes) size of local `storage`.
     *   - The maximum (bytes) size of local `storage` may vary on your or the user's browser environment. But commonly is
     *     ~ `5` Megabytes per domain.
     *
     *  @returns { number } The current total used (bytes) size in local `storage`.
     */
    SIZE() {
        let Byte = 0;

        for (let I = 0; I < this.ITEMS_COUNT; I++) {
            const Key = localStorage.key(I);

            if (!Key)
                continue;

            const Data = localStorage.getItem(Key) ?? "";

            Byte += (Key.length + Data.length) * 2;
        }

        return Byte;
    },

    /**
     *  A state that indicates whether if the local `storage` API is supported in user's browser version.
     */
    IS_SUPPORTED: (function () {
        try {
            const Key = "__TEST_LOCAL_KEY__";

            localStorage.setItem(Key, "__TEST__");
            localStorage.removeItem(Key);

            return true;
        } catch (err) {
            return false;
        }
    })(),

    /**
     *  Returns the data of the specified access key of item at local `storage`.
     *
     *  ***Notes***:
     *   - If there's no existing item for the specified access key at local `storage`, it will
     *     return a default response `object`.
     *   - Automatically parsed the data of the item of specified access key at local `storage` into its
     *     original type by using `JSON.parse()` parser. (Can be disabled by providing a `false` state as second parameter.)
     *
     *  @template { boolean } [B=true]
     *  @overload
     *  @param { string } localKey - The access key of item at local `storage`.
     *  @param { B } [autoParse] - A optional state parameter for automatically parsing the retrieved data.
     *  @returns {{
     *      State: boolean,
     *      Data: B extends true ? unknown : string | undefined,
     *      Reason?: "INVALID_KEY" | "NO_SUCH_KEY" | "NOT_SUPPORTED"
     *  }} The response object result of retrieval process.
     */
    GET(localKey, autoParse = true) {
        const Method = "STORAGE.LOCAL.GET", Response = { State: false, Data: undefined };

        if (!this.IS_SUPPORTED) {
            console.error(`${Method}(): Your current environment does not supported 'Storage' API! Please upgrade your environment to its latest version.`);
            return { ...Response, Reason: "NOT_SUPPORTED" };
        }

        const Key = ValidateStorageKey(Method, localKey, "retrieval");
        if (Key === false)
            return { ...Response, Reason: "INVALID_KEY" };

        if (typeof autoParse !== "boolean")
            autoParse = true;

        if (this.ITEMS_COUNT === 0 || Object.keys(localStorage).indexOf(Key) < 0)
            return { ...Response, Reason: "NO_SUCH_KEY" };

        const Data = localStorage.getItem(Key);

        Response.State = true;
        Response.Data = autoParse ? JSON.parse(Data) : Data;

        return Response;
    },

    /**
     *  Store a new local `storage` item with the specified access key and its data at local `storage`.
     *
     *  ***Notes***:
     *   - Terminates the creation process when there's already existing local item with the same key provided
     *     at local `storage`.
     *
     *  @param { string } localKey - The access key of item at local `storage`.
     *  @param { any } [data] - The data to store at new local item. (Default: undefined)
     *  @returns {{ State: boolean, Reason?: "DUPLICATE_KEY_FOUND" | "INVALID_KEY" | "NOT_SUPPORTED" }} The response object result of creation process.
     */
    NEW(localKey, data) {
        const Method = "STORAGE.LOCAL.NEW", Response = { State: false, Reason: undefined };

        if (!this.IS_SUPPORTED) {
            console.error(`${Method}(): Your current environment does not supported 'Storage' API! Please upgrade your environment to its latest version.`);
            Response.Reason = "NOT_SUPPORTED";
            return Response;
        }

        const Key = ValidateStorageKey(Method, localKey, "creation");
        if (Key === false) {
            Response.Reason = "INVALID_KEY";
            return Response;
        }

        if (this.GET(Key).State) {
            Response.Reason = "DUPLICATE_KEY_FOUND";
            return Response;
        }

        localStorage.setItem(Key, JSON.stringify(data));
        Response.State = true;
        return Response;
    },

    /**
     *  Removes an item at local `storage` that matches the specified access key.
     *
     *  @param { string } localKey - The access key of item at local `storage`.
     *  @returns {{ State: boolean, Reason?: "INVALID_KEY" | "NO_SUCH_KEY" | "NOT_SUPPORTED" }} The response object result of removal process.
     */
    REMOVE(localKey) {
        const Method = "STORAGE.LOCAL.REMOVE", Response = { State: false, Reason: undefined };

        if (!this.IS_SUPPORTED) {
            console.error(`${Method}(): Your current environment does not supported 'Storage' API! Please upgrade your environment to its latest version.`);
            Response.Reason = "NOT_SUPPORTED";
            return Response;
        }

        const Key = ValidateStorageKey(Method, localKey, "removal");
        if (Key === false) {
            Response.Reason = "INVALID_KEY";
            return Response;
        }

        if (!this.GET(Key).State) {
            Response.Reason = "NO_SUCH_KEY";
            return Response;
        }

        localStorage.removeItem(Key);
        Response.State = true;
        return Response;
    },

    /**
     *  Updates the current data with the specified new data of an item at local `storage` that matches the specified access key.
     *
     *  @param { string } localKey - The access key of item at local `storage`.
     *  @param { any } newData - The data to set as new data of the item of local `storage`.
     *  @returns {{ State: boolean, Reason?: "INVALID_KEY" | "NO_SUCH_KEY" | "NOT_SUPPORTED" }} The response object result of update process.
     */
    UPDATE(localKey, newData) {
        const Method = "STORAGE.LOCAL.UPDATE", Response = { State: false, Reason: undefined };

        if (!this.IS_SUPPORTED) {
            console.error(`${Method}(): Your current environment does not supported 'Storage' API! Please upgrade your environment to its latest version.`);
            Response.Reason = "NOT_SUPPORTED"
            return Response;
        }

        const Key = ValidateStorageKey(Method, localKey, "data update");
        if (Key === false) {
            Response.Reason = "INVALID_KEY";
            return Response;
        }

        let Local = this.GET(Key);
        if (!Local.State) {
            Response.Reason = "NO_SUCH_KEY";
            return Response;
        }

        Local.Data = JSON.stringify(newData);
        localStorage.setItem(Key, Local.Data);
        Response.State = true;
        return Response;
    },
}

export default LocalStorageMethods;
