import Emit from '../../custom/error/builder/error.builder.js';
import { ConstructorOrTypeOf, NameOf } from '../../custom/utils/custom.utils.js';
import { IsArrEmpty, IsMapObjEmpty, IsPlainObjEmpty, IsSetObjEmpty, IsStrEmpty } from "../../guards/formats/formats.js";
import { IsArr, IsMapObj, IsNullOrUndefined, IsNum, IsPlainObj, IsSetObj, IsStr } from "../../guards/data-types/data-types.js";

/**
 *  Returns an iterable entries of data from the specified ***object*** or
 *  an array of data from a ***plain object***.
 *
 *  ***Expected Objects***:
 *   - ***ARRAY*** | ***PLAIN OBJECT*** | ***MAP OBJECT*** | ***SET OBJECT***.
 *
 *  ***Notes***:
 *   - When object is ***plain object*** it would preserve the array (same result as Object.entries(o)),
 *     the same thing with objects that is an Array, Map, and Set. (E.g. ArrayIterator, MapIterator, and SetIterator)
 *
 *  @template T
 *  @param { T } obj - The object to get its content's entries.
 *  @returns { T extends Map<infer K, infer V> ? MapIterator<[K, V]> :
 *      T extends Set<infer U> ? SetIterator<[U, U]> :
 *      T extends readonly Array<infer V> ? ArrayIterator<[number, V]>
 *      T extends { [p: string]: infer V } | ArrayLike<infer V> ? Array<[string, V]> :
 *      never[]
 *  }
 */
export function EntriesOf(obj) {
    // ❌ - Exits when @obj is none of these expected object formats.
    if (!IsArr(obj) && !IsPlainObj(obj) && !IsMapObj(obj) && !IsSetObj(obj))
        Emit._ArgumentError("EntriesOf", "obj", ConstructorOrTypeOf(obj), "Array", "Map", "Plain Object", "Set");

    // ⚠️ - Warns when the specified @obj is empty or does not have present contents.
    if (IsPlainObj(obj) && IsPlainObjEmpty(obj) || IsArr(obj) && IsArrEmpty(obj) ||
        IsMapObj(obj) && IsMapObjEmpty(obj) || IsSetObj(obj) && IsSetObjEmpty(obj)
    ) {
        console.warn(`EntriesOf(@obj: NO_ELEMENTS_FOUND): The specified object does not have any present elements or contents! (Exited with [])`);
        return [];
    }

    // 📍 - @type = OBJECT
    if (IsPlainObj(obj))
        return Object.entries(obj);

    // 📍 - @type = ARRAY | MAP | SET
    if (IsArr(obj) || IsMapObj(obj) || IsSetObj(obj))
        return obj.entries();

    // 📍 - @type = undefined | null.
    // 💬 - Default detection if type is not in the option (for module namespace, freezed objects, and no constructor objects)
    if (IsNullOrUndefined(ConstructorOrTypeOf(obj)) || IsNullOrUndefined(Object.getPrototypeOf(obj)))
        if (IsPlainObj(obj))
            return Object.entries(obj);
        else if (IsArr(obj) || IsMapObj(obj) || IsSetObj(obj))
            return obj.entries();
        else
            return [];
}

/**
 *  Returns an iterable keys or index of the specified ***object***.
 *
 *  ***Expected Objects***:
 *   - ***ARRAY*** | ***PLAIN OBJECT*** | ***MAP OBJECT*** | ***SET OBJECT***.
 *
 *  @template T
 *  @param { T } obj - The object to get its content's keys.
 *  @returns { T extends Map<infer K, unknown> ? MapIterator<K> :
 *      T extends Set<infer U> ? SetIterator<U> :
 *      T extends Array<infer V> ? ArrayIterator<number> :
 *      T extends { [p: string]: infer V } | ArrayLike<infer V> ? Array<string> :
 *      never[]
 *  }
 */
export function KeysOf(obj) {
    // ❌ - Exits when @obj is none of these expected object formats.
    if (!IsArr(obj) && !IsPlainObj(obj) && !IsMapObj(obj) && !IsSetObj(obj))
        Emit._ArgumentError("KeysOf", "obj", ConstructorOrTypeOf(obj), "Array", "Map", "Plain Object", "Set");

    // ⚠️ - Warns when the specified @obj is empty or does not have present contents.
    if (IsPlainObj(obj) && IsPlainObjEmpty(obj) || IsArr(obj) && IsArrEmpty(obj) ||
        IsMapObj(obj) && IsMapObjEmpty(obj) || IsSetObj(obj) && IsSetObjEmpty(obj)
    ) {
        console.warn(`KeysOf(@obj: NO_ELEMENTS_FOUND): The specified object does not have any present elements or contents! (Exited with [])`);
        return [];
    }

    // 📍 - @type = OBJECT
    if (IsPlainObj(obj))
        return Object.keys(obj);

    // 📍 - @type = ARRAY | MAP | SET
    if (IsArr(obj) || IsMapObj(obj) || IsSetObj(obj))
        return obj.keys();

    // 📍 - @type = undefined | null.
    // 💬 - Default detection if type is not in the option (for module namespace, freezed objects, and no constructor objects)
    if (IsNullOrUndefined(obj.constructor) || IsNullOrUndefined(Object.getPrototypeOf(obj)))
        if (IsPlainObj(obj))
            return Object.keys(obj);
        else if (IsArr(obj) || IsMapObj(obj) || IsSetObj(obj))
            return obj.keys();
        else
            return [];
}

/**
 *  Returns an iterable values of the specified ***object***.
 *
 *  ***Expected Objects***:
 *   - ***ARRAY*** | ***PLAIN OBJECT*** | ***MAP OBJECT*** | ***SET OBJECT***.
 *
 *  @template T
 *  @param { T } obj - The object to return its content's values.
 *  @throws `@ArgumentError` when the specified object is invalid.
 *  @returns { T extends Map<unknown, infer V> ? MapIterator<V> :
 *      T extends Set<infer U> ? SetIterator<U> :
 *      T extends Array<infer V> ? ArrayIterator<V> :
 *      T extends { [p: string]: infer V } | ArrayLike<infer V> ? Array<V> :
 *      never[]
 *  }
 */
export function ValuesOf(obj) {
    // ❌ - Exits when @obj is none of these expected object formats.
    if (!IsArr(obj) && !IsPlainObj(obj) && !IsMapObj(obj) && !IsSetObj(obj))
        Emit._ArgumentError("ValuesOf", "obj", ConstructorOrTypeOf(obj), "Array", "Map", "Plain Object", "Set");

    // ⚠️ - Warns when the specified @obj is empty or does not have present contents.
    if (IsPlainObj(obj) && IsPlainObjEmpty(obj) || IsArr(obj) && IsArrEmpty(obj) ||
        IsMapObj(obj) && IsMapObjEmpty(obj) || IsSetObj(obj) && IsSetObjEmpty(obj)
    ) {
        console.warn(`ValuesOf(@obj: NO_ELEMENTS_FOUND): The specified object does not have any present elements or contents! (Exited with [])`);
        return [];
    }

    // 📍 - @type = OBJECT
    if (IsPlainObj(obj))
        return Object.values(obj);

    // 📍 - @type = ARRAY | MAP | SET
    if (IsArr(obj) || IsMapObj(obj) || IsSetObj(obj))
        return obj.values();

    // 📍 - @type = undefined | null.
    // 💬 - Default detection if type is not in the option (for module namespace, freezed objects, and no constructor objects)
    if (IsNullOrUndefined(obj.constructor) || IsNullOrUndefined(Object.getPrototypeOf(obj)))
        if (IsPlainObj(obj))
            return Object.values(obj);
        else if (IsArr(obj) || IsMapObj(obj) || IsSetObj(obj))
            return obj.values();
        else
            return [];
}

/**
 *  Returns the current `size` or `length` of the specified argument.
 *
 *  ***Known Objects or Types***:
 *   - ***ARRAY*** | ***PLAIN OBJECT*** | ***MAP OBJECT*** | ***SET OBJECT*** | ***STRING***
 *
 *  ***Capability-Based Behavior***:
 *   - This accessor is **not strictly type-limited**.
 *   - Any value that exposes a numeric `length` or `size` property
 *     may be supported, including **custom user-defined objects**,
 *     **library abstractions**, **module namespaces**, and other
 *     object-like structures.
 *
 *  ***Notes***:
 *   - The accessor prioritizes the `length` property when present,
 *     otherwise falls back to the `size` property.
 *   - A default value of `-1` is returned if the specified argument
 *     is invalid, unsupported, or exposes a non-numeric `length`
 *     or `size` property.
 *
 *  @template T
 *  @param { T } arg - The argument to retrieve the current size or length from.
 *  @returns { number } The computed size or length, or `-1` on failure.
 */
export function CountOf(arg) {
    const Method = "CountOf";

    // ❌ - Exits with default value if argument is not provided.
    if (IsNullOrUndefined(arg))
        return -1;

    // ⚠️ - Warns and exit with default value if the argument does not support or have 'length' and 'size' property.
    if ((typeof arg === "string" && IsNullOrUndefined(arg.length) || IsPlainObj(arg) && IsNullOrUndefined(Object.keys(arg).length)) && IsNullOrUndefined(arg.size)) {
        console.warn(`${Method}(@arg: NOT_SUPPORTED): The provided argument of type '${ConstructorOrTypeOf(arg)}' does not support or have 'length' and/or 'size' property! (Exited with -1)`);
        return -1;
    }

    // 📍 - length property.
    if (Object.hasOwn(arg, "length") || IsPlainObj(arg)) {
        const parsedLength = IsPlainObj(arg) ? parseInt(Object.entries(arg)["length"], 10) : parseInt(arg["length"]);
        if (!IsNum(arg["length"]) && !IsNum(parsedLength)) {
            console.warn(`CountOf(@arg.length): The length '${arg["length"]}' property value of the specified argument is not a valid number! (Exited with -1)`);
            return -1;
        }

        return parsedLength;
    }

    // 📍 - size property.
    if (Object.hasOwn(arg, "size")) {
        const parsedSize = parseInt(arg["size"], 10);
        if (!IsNum(arg["size"]) && !IsNum(parsedSize)) {
            console.warn(`CountOf(@arg.size): The size '${arg["size"]}' property value of the specified argument is not a valid number! (Exited with -1)`);
            return -1;
        }

        return parsedSize;
    }
}

/**
 *  Retrieves and returns the value of the specified property in the specified plain `object`.
 *
 *  ***Notes***:
 *   - This uses a non-case-sensitive for retrieving the data of the specified property id at
 *     plain object, this would retrieve the data of the first property that matches the specified
 *     property id in any case.
 *   - Returns `undefined` if parameter `obj` or `propertyId` is invalid.
 *
 *  @template T
 *  @template { InferKeyOptions<T> } P
 *  @param { T } obj - The collection of key-pairs to retrieve at.
 *  @param { P } propertyId - The property id of key-pair to retrieve.
 *  @returns { T[P] | undefined }
 */
export function GetPropertyOf(obj, propertyId) {
    if (!IsPlainObj(obj) || !IsStr(propertyId) || !IsStrEmpty(propertyId))
        return undefined;

    let Result;
    for (const [PK, PV] of Object.entries(obj)) {
        if (PK.trim().toLowerCase() !== propertyId.trim().toLowerCase())
            continue;

        Result = PV;
        break;
    }

    return Result;
}
