import { LocalStorageAPI } from "./local/storage.local.js";
import { SessionStorageAPI } from "./session/storage.session.js";

export interface StorageAPI {
    /**
     *  Indicates whether if the `StorageAPI` is supported on your or user's browser environment version.
     */
    IS_SUPPORTED(): boolean;

    /**
     *  A enhanced version of `localStorage` API.
     */
    LOCAL: LocalStorageAPI;

    /**
     *  A enhanced version of `sessionStorage` API.
     */
    SESSION: SessionStorageAPI;
}


declare global {
    /**
     *  A enhanced version of `StorageAPI` methods.
     */
    var STORAGE: StorageAPI;
}

export { }
