import { IsNullOrUndefined } from '../../../guards/data-types/data-types.js';
import { DefineProperty, Global } from '../../utils/custom.utils.js';
import * as _ from "../constructor/error.custom.js";

/* Meta Builder */
/**
 *  @param { string } message
 *  @param { string } c_message
 *  @param { string } emitter_id
 *  @param { string } argument_id
 *  @param { Record<string, any> } otherArgument
 *  @param { string } [guide]
 */
const BuildMeta = (message, c_message, emitter_id, argument_id, otherArgument, guide) => {
    /** @type { MetaBaseObject<{}> } */
    const Meta = {
        Message: message,
        Context: {
            Message: c_message,
            Emitter: emitter_id
        },
        Args: {
            Id: argument_id
        },
        Guide: guide
    }

    if ((typeof otherArgument === "object" && !Array.isArray(otherArgument) &&
        !(otherArgument === null || otherArgument === undefined) &&
        !(otherArgument instanceof Map || otherArgument instanceof Set)) &&
        Object.values(otherArgument).length > 0)
        Object.assign(Meta.Args, otherArgument);

    return Meta;
}

/**
 *  Contains a `@custom` or `@enhance` collection version of `error` builder.
 *
 *  Note:
 *   - The contents of available error builder(s) in this object are fixed, only the specified or
 *     required value are changing.
 */
const Emit = {
    /**
     *  Name of this object.
     */
    name: "Emit",

    /**
     *  Builds and emit the contents of `@ArgumentError`.
     *
     *  @param { string } emitter_id - The id of object that throws this error.
     *  @param { string } argument_id - The id of object's argument (either an object or parameter) that triggered or cause the error.
     *  @param { Array<string> } [expected_arguments] - The expected argument(s) that should be received by the argument.
     */
    _ArgumentError(emitter_id, argument_id, received_argument, ...expected_argument) {
        throw new _.ArgumentError(BuildMeta(
            `An argument error has occurred at ${emitter_id}()! ${emitter_id} expects a '${expected_argument.join(" | ")}' not '${received_argument}'.`,
            `${emitter_id}(@${argument_id}: INVALID_ARGUMENT) {...}`,
            emitter_id, argument_id,
            { ReceivedArgument: received_argument, ExpectedArgument: expected_argument },
            `Ensure to provide the expected argument(s) from this '${argument_id}' argument.`
        ));
    },

    /**
     *  Builds and emit the contents of `@IndexOutOfBoundsError`.
     *
     *  @param { string } emitter_id - The id of object that throws this error.
     *  @param { string } argument_id - The id of object's argument (either an object or parameter) that triggered or cause the error.
     *  @param { number } [index] - The index that the argument received that is out-of-bounds. (Undefined: -1)
     *  @param { number } [maximum_bound] - The maximum bound index of the argument object value that an index can be. (Undefined: -1)
     */
    _IndexOutOfBoundsError(emitter_id, argument_id, index = -1, maximum_bound = -1) {
        throw new _.IndexOutOfBoundsError(BuildMeta(
            `A out-of-bounds index has been received at ${emitter_id}()!`,
            `${emitter_id}(@${argument_id}[${index}]: OUT_OF_BOUNDS) {...}`,
            emitter_id, argument_id, { Index: index, MaxBound: maximum_bound },
            `Ensure to provide an index that is within the bounds of this ${argument_id} argument.`
        ));
    },

    /**
     *  Builds an emit the contents of `@InvalidPropertyError`.
     *
     *  @param { string } emitter_id - The id of object that throws this error.
     *  @param { string } argument_id - The id of object's argument (either an object or parameter) that triggered or cause the error.
     *  @param { string } property_id - The invalid property that the argument received.
     */
    _InvalidPropertyError(emitter_id, argument_id, property_id) {
        throw new _.InvalidPropertyError(BuildMeta(
            `An invalid property is found at ${emitter_id}()!`,
            `${emitter_id}(@${argument_id}[${property_id}]: INVALID_PROPERTY) {...}`,
            emitter_id, argument_id, { PropertyId: property_id },
            `Ensure to provide a valid or available property (provided by its intellisense) from this '${argument_id}' argument object at ${emitter_id}.`
        ));
    },

    /**
     *  Builds and emit the contents of `@MissingParameterError`.
     *
     *  @param { string } emitter_id - The id of object that throws this error.
     *  @param { string } argument_id - The id of object's argument (either an object or parameter) that triggered or cause the error.
     *  @param { any } [argument_value] - The current value of the argument.
     */
    _MissingParameterError(emitter_id, argument_id, argument_value) {
        throw new _.MissingParameterError(BuildMeta(
            `A missing parameter is found at ${emitter_id}!`,
            `${emitter_id}(@${argument_id}: MISSING) {...}`,
            emitter_id, argument_id, { Value: argument_value },
            `Ensure to provide or assign a value from this '${argument_id}' argument at ${emitter_id}.`
        ));
    },

    /**
     *  Builds and emit the contents of `@MissingPropertyError`.
     *
     *  @param { string } emitter_id - The id of object that throws this error.
     *  @param { string } argument_id - The id of object's argument (either an object or parameter) that triggered or cause the error.
     *  @param { string } property_id - The missing property that the argument received.
     */
    _MissingPropertyError(emitter_id, argument_id, property_id) {
        throw new _.MissingPropertyError(BuildMeta(
            `A missing property is found at ${emitter_id}()!`,
            `${emitter_id}(@${argument_id}[${property_id}]: MISSING_PROPERTY) {...}`,
            emitter_id, argument_id, { MissingPropertyId: property_id },
            `Ensure to provide the property '${property_id}' and its dedicated value from this '${argument_id}' argument object at ${emitter_id}.`
        ));
    },

    /**
     *  Builds and emit the contents of `@NoSuchElementTagError`.
     *
     *  @param { string } emitter_id - The id of object that throws this error.
     *  @param { string } argument_id - The id of object's argument (either an object or parameter) that triggered or cause the error.
     *  @param { string } tag - The tag that is not known or exists.
     *  @param { "HTMLElement" | "SVGElement" | "MathMLElement" } tagOf - The instance/type of element
     */
    _NoSuchElementTagError(emitter_id, argument_id, tag, tagOf) {
        tagOf = typeof tagOf == "string" && tagOf.trim().length > 0 ? tagOf : "NOT_PROVIDED";

        throw new _.NoSuchElementTagError(BuildMeta(
            `A non-qualified tag of ${tagOf} is found at ${emitter_id}()!`,
            `${emitter_id}(@tag: ${tag} - UNKNOWN_TAG_OF_${tagOf.toUpperCase()}) {...}`,
            emitter_id, argument_id, { Tag: tag, TagOf: tagOf },
            `Ensure to only provide the valid tag of ${tagOf} at this @${argument_id} parameter.`
        ));
    },

    /**
     *  Builds and emit the contents of `@NotSupportedError`.
     *
     *  @param { string } emitter_id - The id of object that throws this error.
     *  @param { string } unsupported_id - The id of the unsupported object that is being accessed.
     */
    _NotSupportedError(emitter_id, unsupported_id) {
        throw new _.NotSupportedError(BuildMeta(
            `A not supported method or object is being accessed!`,
            `${emitter_id}.${unsupported_id}() { NOT_SUPPORTED }`,
            emitter_id, unsupported_id,
            `Ensure to upgrade your browser environment or your Javascript version.`
        ));
    },

    /**
     *  Builds and emit the contents of `@UnknownPropertyError`.
     *
     *  @param { string } emitter_id - The id of object that throws this error.
     *  @param { string } argument_id - The id of object's argument (either an object or parameter) that triggered or cause the error.
     *  @param { string } property_id - The unknown property id that is trying to be accessed.
     */
    _UnknownPropertyError(emitter_id, argument_id, property_id) {
        throw new _.UnknownPropertyError(BuildMeta(
            `Cannot access a unknown or non-existing property at ${emitter_id}()!`,
            `${emitter_id}(@${argument_id}: { ${property_id}: UNKNOWN_OR_NOT_FOUND }) {...}`,
            emitter_id, argument_id, { PropertyId: property_id },
            `Ensure to only access a existing key-pair or property at this '${argument_id}' argument object at ${emitter_id}.`
        ));
    }
}

export default Emit;

if (IsNullOrUndefined(globalThis.ERROR))
    Global("ERROR", {}, "soft");

DefineProperty(globalThis.ERROR, "Emit", Emit, "soft");
