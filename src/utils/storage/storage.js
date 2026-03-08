import Raise from '../custom/error/builder/error.builder.js';
import { Global } from '../custom/utils/custom.utils.js';
import { IsNullOrUndefined } from '../guards/type/guards.type.js';
import LocalStorageMethods from './local/storage.local.js';
import SessionStorageMethods from './session/storage.session.js';

/**
 *  A built-in `Storage` API interfaces for user's browser environment.
 */
const STORAGE = {
    /**
     *  The name of this object.
     *  @readonly
     */
    NAME: "STORAGE",

    /**
     *  Verifies a state whether if all of available `storage` instances or API are supported in your or user's current environment.
     *
     *  ***Notes***:
     *   - Does not throw a `NotSupportedError` when there's at least 1 or more of the `storage` instances or API that is supported.
     *   - Only throw a `NotSupportedError` when trying to access the not supported `storage` instances or API.
     *
     *  @returns { true | void }
     */
    IS_SUPPORTED() {
        if (!this.LOCAL.IS_SUPPORTED && !this.SESSION.IS_SUPPORTED)
            Raise._NotSupportedError(`${this.NAME}.${this.IS_SUPPORTED.name}`, this.NAME);

        return true;
    },

    /**
     *  A local `storage` API for storing user's activity or history permanently which can be used for storing
     *  configurations, and many more.
     *
     *  ***Notes***:
     *   - This local `storage` API has a very limited size to offer, that is could only be around `5` to `10` Megabytes (MB).
     *
     *  @readonly
     */
    LOCAL: LocalStorageMethods,

    /**
     *  A session `storage` API methods for storing user's activity temporarily that would be automatically
     *  removed once the page changed or the user's leaved.
     *
     *  ***Notes***:
     *   - This session `storage` API has a very limited size to offer, that is could only about `5` to `10` Megabytes (MB).
     *
     *  @readonly
     */
    SESSION: SessionStorageMethods,
}

export default STORAGE;

if (IsNullOrUndefined(globalThis.STORAGE) || !Object.hasOwn(globalThis, "STORAGE"))
    Global("STORAGE", STORAGE, "soft");
