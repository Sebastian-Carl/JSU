import { IsNullOrUndefined, IsNum, IsPlainObj, IsStr, IsArr } from '../../guards/data-types/data-types.js';
import { IsStrEmpty } from '../../guards/formats/formats.js';
import { EachOf, MapOf, SomeOf } from '../../primitives/obj/obj.iterator.js';
import Raise from '../error/builder/error.builder.js';

/**
 *  Retrieves the `name` property of the specified `function` or other `object` that supports this property.
 *
 *  ***Notes***:
 *   - This is not case-sensitive for `name` property of the specified object as long as it has it.
 *
 *  @param {{}} obj - The object to get the name from.
 *  @returns { string } Returns a '(ANONYMOUS)' value as default when the specified object does not have or support the `name` property.
 */
export function NameOf(obj) {
    let Key = null;

    const Keys = Object.getOwnPropertyNames(obj).filter(K => K.length === 4);
    for (const K of Keys) {
        if (!(/^(N|n)/.test(K)))
            continue;

        if (!(/(A|a)/.test(K.charAt(1))))
            continue;

        if (!(/(M|m)/.test(K.charAt(2))))
            continue;

        if (!(/(E|e)/.test(K.charAt(K.length - 1))))
            continue;

        Key = K;
        break;
    }

    return !IsStr(Key) ? "(Anonymous)" : obj[Key];
}

/**
 *  Returns the `constructor` or `type` of the specified `argument`.
 *
 *  @param { any } arg - The argument to get its constructor or type.
 *  @returns { string | undefined } Returns a stringified `constructor` and/or `type` of the argument.
 */
export function ConstructorOrTypeOf(arg) {
    if (IsNullOrUndefined(arg))
        return undefined;

    return !IsNullOrUndefined(arg["constructor"]) ? arg["constructor"]["name"] : typeof arg;
}

/**
 *  Clamps the given `number` value to its specified `minimum` and `maximum` value that it can have.
 *
 *  ***Notes***:
 *   - If the specified `value`, `min` and `max` are not a valid numeric value, it will return a `-1` value.
 *   - If the specified `min` value is greater than the specified `max` value, it will swap their values.
 *
 *  @param { number } value - The current numeric value.
 *  @param { number } min - The minimum value that the current numeric value can have.
 *  @param { number } max - The maximum value that the current numeric value can have.
 *  @returns { number } The clamped numeric value.
 */
export function Clamp(value, min = 0, max = 1) {
    let RANGE = MapOf([value, min, max], VAL => parseInt(VAL));

    // ❌ - Exits if value, minimum, and/or maximum are not valid numeric values.
    if (SomeOf(RANGE, VAL => !IsNum(VAL)))
        return -1;

    if (RANGE[1] > RANGE[2] || RANGE[2] < RANGE[1]) {
        const TEMP = RANGE[1];
        RANGE[1] = RANGE[2];
        RANGE[2] = TEMP;
    }

    return Math.min(Math.max(RANGE[0], RANGE[1]), RANGE[2]);
}

/**
 *  Define the given key-pair from the object.
 *
 *  @param {{ [p: string]: any }} obj - The object to define the key-pair at.
 *  @param { string } key - The access key of key-pair item.
 *  @param { * } data - The data of key-pair item.
 *  @param { "hard" | "med" | "soft" | "def" } [opt] - Optional on how to store the key-pair dat at `globalThis` API. (writable, configurable, enumerable)
 */
export function DefineProperty(obj = {}, key, data, opt = "def") {
    const Method = "DefineProperty";

    if (!IsPlainObj(obj))
        obj = {};

    if (!IsStr(key))
        Raise._ArgumentError(Method, "key", key, "String");

    if (IsStrEmpty(key)) {
        console.warn(`${Method}(@key: \'\'): Expects a not-empty-string! (Exited)`);
        return;
    }

    const CONF = {
        Writable: true,
        Configurable: true,
        Enumerable: true
    }
    if (!IsStr(opt) || IsStrEmpty(opt) || !(opt === "def" || opt === "hard" || opt === "med" || opt === "soft"))
        opt = "def";

    if (opt === "hard")
        CONF.Configurable = false, CONF.Enumerable = false, CONF.Writable = false;

    if (opt === "med")
        CONF.Configurable = false, CONF.Writable = false;

    if (opt === "soft")
        CONF.Writable = false;

    if (opt === "def")
        CONF.Configurable = true, CONF.Enumerable = true, CONF.Writable = true;

    return Object.defineProperty(obj, key, {
        value: data,
        writable: CONF.Writable, configurable: CONF.Configurable, enumerable: CONF.Enumerable
    });
}

/**
 *  Register the specified key-pair to `globalThis` API.
 *
 *  @param { string } key - The access key of item to store at `globalThis` API.
 *  @param { * } data - The data of new item at `globalThis` API.
 *  @param { "hard" | "med" | "soft" | "def" } [opt] - Optional on how to store the key-pair dat at `globalThis` API. (writable, configurable, enumerable)
 */
export function Global(key, data, opt = "def") {
    const Method = "Global";

    if (!IsStr(key))
        Raise._ArgumentError(Method, "key", key, "String");

    if (IsStrEmpty(key)) {
        console.warn(`${Method}(@key: \'\'): Expects a non-empty-string! (Exited)`);
        return;
    }

    if (!IsStr(opt) || IsStrEmpty(opt) || !(opt === "def" || opt === "hard" || opt === "med" || opt === "soft"))
        opt = "def";

    DefineProperty(globalThis, key, data, opt);
}

/**
 *  Validates the given collection of numerical values whether if its a valid numerical value, and returns
 *  the parsed numeric collection of it.
 *
 *  ***Note***:
 *   - This automatically parse a argument data if its a numerical value in string format.
 *
 *  @overload
 *  @param { number } num1 - The first numerical value to validate and normalize.
 *  @returns { number } The validate and parsed numerical value.
 *
 *  @overload
 *  @param { number } num1 - The first numerical value to validate and normalize.
 *  @param { number } num2 - The second numerical value to validate and normalize.
 *  @returns { number[] } The validated and parsed collection of numerical values.
 *
 *  @overload
 *  @param { number } num1 - The first numerical value to validate and normalize.
 *  @param { number } num2 - The second numerical value to validate and normalize.
 *  @param { number } num3 - The third numerical value to validate and normalize.
 *  @returns { number[] } The validated and parsed collection of numerical values.
 *
 *  @overload
 *  @param { number } num1 - The first numerical value to validate and normalize.
 *  @param { number } num2 - The second numerical value to validate and normalize.
 *  @param { number } num3 - The third numerical value to validate and normalize.
 *  @param { number } num4 - The fourth numerical value to validate and normalize.
 *  @returns { number[] } The validated and parsed collection of numerical values.
 *
 *  @overload
 *  @param { number } num1 - The first numerical value to validate and normalize.
 *  @param { number } num2 - The second numerical value to validate and normalize.
 *  @param { number } num3 - The third numerical value to validate and normalize.
 *  @param { number } num4 - The fourth numerical value to validate and normalize.
 *  @param { number } num5 - The fifth numerical value to validate and normalize.
 *  @returns { number[] } The validated and parsed collection of numerical values.
 *
 *  @overload
 *  @param { ...number } nums - The given collection of numerical values to validate.
 *  @returns { number[] } The validated and parsed collection of numerical values.
 */
export function NormalizeNumbers(...nums) {
    const Method = "NormalizeNumbers", ICtr = nums.length, P = ["num1", "num2", "num3", "num4", "num5"];

    if (ICtr === 0)
        Raise._MissingParameterError(Method, P[ICtr], undefined);

    return nums.reduce((acc, num, pos) => {
        const pN = parseInt(num, 10);
        if (!IsNum(pN))
            Raise._ArgumentError(Method, ICtr > 5 ? "nums" : P[pos], num, "Number");

        if (ICtr > 1) {
            if (!IsArr(acc))
                acc = [];

            acc.push(pN);
        } else
            acc = pN;

        return acc;
    });
}
