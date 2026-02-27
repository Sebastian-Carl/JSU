type ErrorConstructorAPI = {
    /**
     *  A customized and enhanced `TypeError`.
     */
    ArgumentError: typeof import("../../../../utils/custom/error/constructor/error.custom.js").ArgumentError;
    /**
     *  A customized and enhanced `RangeError`.
     */
    IndexOutOfBoundsError: typeof import("../../../../utils/custom/error/constructor/error.custom.js").IndexOutOfBoundsError;
    /**
     *  A customized error for invalid properties.
     */
    InvalidPropertyError: typeof import("../../../../utils/custom/error/constructor/error.custom.js").InvalidPropertyError;
    /**
     *  A customized error for missing parameter value.
     */
    MissingParameterError: typeof import("../../../../utils/custom/error/constructor/error.custom.js").MissingParameterError;
    /**
     *  A customized error for missing property.
     */
    MissingPropertyError: typeof import("../../../../utils/custom/error/constructor/error.custom.js").MissingPropertyError;
    /**
     *  A customized error for unqualified element's tag.
     */
    NoSuchElementTagError: typeof import("../../../../utils/custom/error/constructor/error.custom.js").NoSuchElementTagError;
    /**
     *  A customized error for not supported objects, etc.
     */
    NotSupportedError: typeof import("../../../../utils/custom/error/constructor/error.custom.js").NotSupportedError;
    /**
     *  A customized error for unknown property.
     */
    UnknownPropertyError: typeof import("../../../../utils/custom/error/constructor/error.custom.js").UnknownPropertyError;
}
