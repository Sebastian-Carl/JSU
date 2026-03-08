export type SessionStorageResponse<OtherMeta extends {} = {}, OReason extends string> = {
    State: boolean;
    Reason?: "DUPLICATE_KEY_FOUND" | "INVALID_KEY" | "NOT_SUPPORTED" |& OReason
} & OtherMeta;

export interface SessionStorageAPI {
    /**
     *  The current total count of items at `sessionStorage`.
     */
    ITEMS_COUNT: number;

    /**
     *  The current total accumulated bytes size of items at `sessionStorage`.
     *
     *  ***Notes***
     *   - This does not tells or let you know on how much of a bytes size is remaining at your
     *     browser `sessionStorage` API.
     *
     *  @returns The total accumulated bytes size.
     */
    SIZE(): number;

    /**
     *  Indicates whether if the `sessionStorage` API is supported on your or user's current browser environment version.
     */
    readonly IS_SUPPORTED: boolean;

    /**
     *  Retrieves the stored data of the specified `sessionStorage` key.
     *
     *  ***Notes***
     *   - Automatically parsed the `JSON` object of the retrieved data. If you want it to
     *     be in raw format, provide a `false` state as its second parameter.
     *
     *  @param sessionKey - The access key of `sessionStorage` item.
     *  @returns The retrieved data at `sessionStorage`.
     */
    GET(sessionKey: string): SessionStorageResponse<{ Data: unknown | undefined }, "NO_SUCH_KEY">;

    /**
     *  Retrieves the stored data of the specified `sessionStorage` key.
     *
     *  ***Notes***
     *   - Automatically parsed the `JSON` object of the retrieved data. If you want it to
     *     be in raw format, provide a `false` state as its second parameter.
     *
     *  @param sessionKey - The access key of storage item to retrieve.
     *  @param autoParse - A state for controlling whether if it should automatically parse the retrieved data at `sessionStorage` item or not.
     *  @returns The retrieved data at `sessionStorage`.
     */
    GET<B extends boolean = true>(sessionKey: string, autoParse?: B): SessionStorageResponse<{
        Data: (B extends true ? unknown : string) | undefined;
    }, "NO_SUCH_KEY">;

    /**
     *  Store a new item with its data at the `sessionStorage` API.
     *
     *  ***Notes***:
     *   - If there's a already storage item with the same `key` at `sessionStorage` API, it will automatically
     *     terminate the process and returns a default response object with reason in it.
     *   - Automatically converts the specified data to store along with the new storage item into its stringified
     *     format using `JSON.stringify` built-in method.
     *
     *  @param sessionKey - The access key of new storage item.
     *  @param data - The data of the new storage item.
     *  @returns The response object of this process.
     */
    NEW(sessionKey: string, data?: any): SessionStorageResponse<{}, undefined>;

    /**
     *  Removes the specified `key` of a storage item at `sessionStorage` API.
     *
     *  @param sessionKey - The access key of storage item to remove.
     *  @returns The response object of this process.
     */
    REMOVE(sessionKey: string): SessionStorageResponse<{}, "NO_SUCH_KEY">;

    /**
     *  Updates the data of the specified `key` of storage item with the given new data for it at `sessionStorage` API.
     *
     *  @param sessionKey - The access key of storage item to update.
     *  @param newData - The new data to set at storage item.
     *  @returns The response object of this process.
     */
    UPDATE(sessionKey: string, newData?: any): SessionStorageResponse<{}, "NO_SUCH_KEY">;
}
