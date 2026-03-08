import { ErrorRaiseAPI } from "./builder/error.builder.js";
import { ErrorConstructorAPI } from "./constructor/error.custom.js";

export interface ErrorAPI {
    /**
     *  A collection of customized error constructors.
     */
    readonly Constructors: ErrorConstructorAPI,
    /**
     *  A collection of pre-defined customized error constructors builder.
     */
    readonly Raise: ErrorRaiseAPI
}

declare global {
    /**
     *  A collection of customized error constructors.
     */
    var ERROR: ErrorAPI;
}

export { }
