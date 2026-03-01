import { IsNullOrUndefined } from '../../../guards/data-types/data-types.js';
import { DefineProperty, Global } from '../../utils/custom.utils.js';
import { MissingParameterError } from './error.custom.js';

/* -- Default Values -- */
const Base = (id) => `_NO_${typeof id === "string" ? id.toUpperCase() : String(id).toUpperCase()}_PROVIDED_`;
const Default = {
    Message: Base("message"),
    Context: Base("context"),
    Args: Base("args"),
    Guide: Base("guide")
}

/* -- Meta Data Property Validation -- */

/**
 *  @param { string | Record<string, unknown> | Array<unknown> } metaValue
 *  @param { any } defaultValue
 */
const ValidateMetaProperty = (metaValue, defaultValue) => {
    if (metaValue === null || metaValue === undefined)
        return defaultValue;

    if (typeof metaValue === "string" && metaValue.trim().length <= 0)
        return defaultValue;

    if (typeof metaValue === "object" && ((Array.isArray(metaValue) && metaValue.length <= 0) || Object.values(metaValue).length <= 0))
        return defaultValue;

    return metaValue;
}

/**
 * A centralized custom error class for custom and/or modified error classes.
 * @template {Record<string, any>} OtherArgs
 */
export default class CustomError extends Error {
    Args = { Id: undefined };
    Context = {
        Message: undefined,
        Emitter: undefined
    };
    Guide = "";
    Message = "";
    Name = "CustomError";
    TimeStamp = new Date();
    /**
     * @param { MetaBaseObject<OtherArgs> } Meta
     */
    constructor(Meta) {
        if (Meta.Message === null || Meta.Message === undefined || typeof Meta.Message === "string" && Meta.Message.trim().length === 0)
            throw new MissingParameterError({
                Message: `A message must be provided for the error!`,
                Context: {
                    Message: `CustomError.constructor(Meta: { Message: undefined } [REQUIRED]) {...}`,
                    Emitter: "CustomError.constructor"
                },
                Args: {
                    Id: "Meta",
                    Value: Meta
                },
                Guide: "Ensure to provide the 'Message' property at 'Meta' object!"
            });

        super(Meta.Message);
        this.Name = ValidateMetaProperty(Meta.Name, this.constructor.name);
        this.Message = ValidateMetaProperty(Meta.Message, Default.Message);
        this.Context = ValidateMetaProperty(Meta.Context, Default.Context);
        this.Args = ValidateMetaProperty(Meta.Args, Default.Args);
        this.Guide = ValidateMetaProperty(Meta.Guide, Default.Guide);
        this.TimeStamp = new Date();
    }
}

if (IsNullOrUndefined(globalThis.ERROR))
    Global("ERROR", {}, "soft");

if (IsNullOrUndefined(globalThis.ERROR.Constructors))
    DefineProperty(globalThis.ERROR, "Constructors", {}, "soft");

DefineProperty(globalThis.ERROR.Constructors, "CustomError", CustomError, 'soft');
