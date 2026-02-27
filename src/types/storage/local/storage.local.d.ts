type LocalStorageResponse<OtherMeta extends {} = {}> = {
    State: boolean;
    Reason?: "DUPLICATE_KEY_FOUND" | "INVALID_KEY" | "NO_SUCH_KEY" | "NOT_SUPPORTED"
} & OtherMeta;

interface LocalStorageAPI {
    /**
     *  The current total count of items at `localStorage`.
     */
    ITEMS_COUNT: number;

    /**
     *  The current total accumulated bytes size of items at `localStorage`.
     *
     *  ***Notes***
     *   - This does not tells or let you know on how much of a bytes size is remaining at your
     *     browser `localStorage` API.
     *
     *  @returns The total accumulated bytes size.
     */
    SIZE(): number;

    /**
     *  Indicates whether if the `localStorage` API is supported on your or user's current browser environment version.
     */
    readonly IS_SUPPORTED: boolean;

    /**
     *  Retrieves the stored data of the specified `localStorage` key.
     *
     *  ***Notes***
     *   - Automatically parsed the `JSON` object of the retrieved data. If you want it to
     *     be in raw format, provide a `false` state as its second parameter.
     *
     *  @param localKey - The access key of `localStorage` item.
     *  @returns The retrieved data at `localStorage`.
     */
    GET(localKey: string): LocalStorageResponse<{ Data: unknown | undefined }>;

    /**
     *  Retrieves the stored data of the specified `localStorage` key.
     *
     *  ***Notes***
     *   - Automatically parsed the `JSON` object of the retrieved data. If you want it to
     *     be in raw format, provide a `false` state as its second parameter.
     *
     *  @param localKey - The access key of storage item to retrieve.
     *  @param autoParse - A state for controlling whether if it should automatically parse the retrieved data at `localStorage` item or not.
     *  @returns The retrieved data at `localStorage`.
     */
    GET<B extends boolean = true>(localKey: string, autoParse?: B): LocalStorageResponse<{
        Data: (B extends true ? unknown : string) | undefined;
    }>;

    /**
     *  Store a new item with its data at the `localStorage` API.
     *
     *  ***Notes***:
     *   - If there's a already storage item with the same `key` at `localStorage` API, it will automatically
     *     terminate the process and returns a default response object with reason in it.
     *   - Automatically converts the specified data to store along with the new storage item into its stringified
     *     format using `JSON.stringify` built-in method.
     *
     *  @param localKey - The access key of new storage item.
     *  @param data - The data of the new storage item.
     *  @returns The response object of this process.
     */
    NEW(localKey: string, data?: any): LocalStorageResponse;

    /**
     *  Removes the specified `key` of a storage item at `localStorage` API.
     *
     *  @param localKey - The access key of storage item to remove.
     *  @returns The response object of this process.
     */
    REMOVE(localKey: string): LocalStorageResponse;

    /**
     *  Updates the data of the specified `key` of storage item with the given new data for it at `localStorage` API.
     *
     *  @param localKey - The access key of storage item to update.
     *  @param newData - The new data to set at storage item.
     *  @returns The response object of this process.
     */
    UPDATE(localKey: string, newData?: any): LocalStorageResponse;
}
