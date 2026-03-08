import { ArgumentErrorMeta, IndexOutOfBoundsErrorMeta, InvalidPropertyErrorMeta, MissingParameterErrorMeta, MissingPropertyErrorMeta, NoSuchElementTagErrorMeta, NotSupportedErrorMeta, UnknownPropertyErrorMeta } from "./error.meta.js";

export type ErrorConstructorAPI = {
    /**
     *  A customized and enhanced `TypeError`.
     */
    ArgumentError: {
        new(meta: ArgumentErrorMeta): ArgumentErrorMeta;
    };
    /**
     *  A customized and enhanced `RangeError`.
     */
    IndexOutOfBoundsError: {
        new(meta: IndexOutOfBoundsErrorMeta): IndexOutOfBoundsErrorMeta;
    };
    /**
     *  A customized error for invalid properties.
     */
    InvalidPropertyError: {
        new(meta: InvalidPropertyErrorMeta): InvalidPropertyErrorMeta;
    };
    /**
     *  A customized error for missing parameter value.
     */
    MissingParameterError: {
        new(meta: MissingParameterErrorMeta): MissingParameterErrorMeta;
    };
    /**
     *  A customized error for missing property.
     */
    MissingPropertyError: {
        new(meta: MissingPropertyErrorMeta): MissingPropertyErrorMeta;
    };
    /**
     *  A customized error for unqualified element's tag.
     */
    NoSuchElementTagError: {
        new(meta: NoSuchElementTagErrorMeta): NoSuchElementTagErrorMeta;
    };
    /**
     *  A customized error for not supported objects, etc.
     */
    NotSupportedError: {
        new(meta: NotSupportedErrorMeta): NotSupportedErrorMeta;
    };
    /**
     *  A customized error for unknown property.
     */
    UnknownPropertyError: {
        new(meta: UnknownPropertyErrorMeta): UnknownPropertyErrorMeta;
    };
}
