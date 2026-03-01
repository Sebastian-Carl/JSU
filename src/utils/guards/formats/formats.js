import { HTMLElementTags } from '../../variables.js';
import { IsArr, IsFunc, IsMapObj, IsNullOrUndefined, IsNum, IsPlainObj, IsSetObj, IsStr } from '../data-types/data-types.js';

/**
 *  Validates whether if the specified ***function*** argument is ***anonymous***.
 *
 *  @param { Function } func - The function to validate.
 *  @returns { boolean }
 */
export function IsFuncAnonymous(func) {
    return IsFunc(func) && !func.toString().startsWith("function") && !func.toString().includes("=>");
}

/**
 *  Validates whether if the specified ***function*** argument is ***asynchronous***.
 *
 *  @param { Function } func - The function to validate.
 *  @returns { boolean }
 */
export function IsFuncAsynchronous(func) {
    return IsFunc(func) && !IsNullOrUndefined(func?.constructor?.name) && func.constructor.name === "AsyncFunction";
}

/**
 *  Validates whether if the specified ***string*** argument includes lowercase characters.
 *
 *  @param { string } str - The string to validate.
 *  @returns { boolean }
 */
export function HasLowerCase(str) {
    return IsStr(str) && /[a-z]/.test(str);
}

/**
 *  Validates whether if the specified ***string*** argument starts with lowercase character.
 *
 *  @param { string } str - The string to validate.
 *  @returns { boolean }
 */
export function IsStartsWithLowerCase(str) {
    return IsStr(str) && /^[a-z]/.test(str);
}

/**
 *  Validates whether if the specified ***string*** argument ends with lowercase character.
 *
 *  @param { string } str - The string to validate.
 *  @returns { boolean }
 */
export function IsEndsWithLowerCase(str) {
    return IsStr(str) && /[a-z]$/.test(str);
}

/**
 *  Validates whether if the specified ***string*** argument includes uppercase characters.
 *
 *  @param { string } str - The string to validate.
 *  @returns { boolean }
 */
export function HasUpperCase(str) {
    return IsStr(str) && /[A-Z]/.test(str);
}

/**
 *  Validates whether if the specified ***string*** argument starts with uppercase character.
 *
 *  @param { string } str - The string to validate.
 *  @returns { boolean }
 */
export function IsStartsWithUpperCase(str) {
    return IsStr(str) && /^[A-Z]/.test(str);
}

/**
 *  Validates whether if the specified ***string*** argument ends with uppercase character.
 *
 *  @param { string } str - The string to validate.
 *  @returns { boolean }
 */
export function IsEndsWithUpperCase(str) {
    return IsStr(str) && /[A-Z]$/.test(str);
}

/**
 *  Validates whether if the specified ***string*** argument includes numbers.
 *
 *  @param { string } str - The string to validate.
 *  @returns { boolean }
 */
export function HasNumbers(str) {
    return IsStr(str) && /\d/.test(str);
}

/**
 *  Validates whether if the specified ***string*** argument starts with number.
 *
 *  @param { string } str - The string to validate.
 *  @returns { boolean }
 */
export function IsStartsWithNumber(str) {
    return IsStr(str) && /^\d/.test(str);
}

/**
 *  Validates whether if the specified ***string*** argument ends with number.
 *
 *  @param { string } str - The string to validate.
 *  @returns { boolean }
 */
export function IsEndsWithNumber(str) {
    return IsStr(str) && /\d$/.test(str);
}

/**
 *  Validates whether if the specified ***string*** argument includes specified characters.
 *
 *  @param { string } str - The string to validate.
 *  @returns { boolean }
 */
export function HasSpecialCharacters(str) {
    return IsStr(str) && /[^a-zA-Z\d]/.test(str);
}

/**
 *  Validates whether if the specified ***string*** argument starts with special character.
 *
 *  @param { string } str - The string to validate.
 *  @returns { boolean }
 */
export function IsStartsWithSpecialCharacter(str) {
    return IsStr(str) && /^[^a-zA-Z\d]/.test(str);
}

/**
 *  Validates whether if the specified ***string*** argument ends with special character.
 *
 *  @param { string } str - The string to validate.
 *  @returns { boolean }
 */
export function IsEndsWithSpecialCharacter(str) {
    return IsStr(str) && /[^a-zA-Z\d]$/.test(str);
}

/**
 *  Validates whether if the specified ***string*** argument includes ASCII characters.
 *
 *  @param { string } str - The string to validate.
 *  @returns { boolean }
 */
export function HasASCII(str) {
    return IsStr(str) && /[^\x00-\x7F]/.test(str);
}

/**
 *  Validates whether if the specified ***string*** argument starts with ASCII character.
 *
 *  @param { string } str - The string to validate.
 *  @returns { boolean }
 */
export function IsStartsWithASCII(str) {
    return IsStr(str) && /^[^\x00-\x7F]/.test(str);
}

/**
 *  Validates whether if the specified ***string*** argument ends with ASCII character.
 *
 *  @param { string } str - The string to validate.
 *  @returns { boolean }
 */
export function IsEndsWithASCII(str) {
    return IsStr(str) && /[^\x00-\x7F]$/.test(str);
}

/**
 *  Validates whether if the specified ***string*** argument is empty.
 *
 *  @param { string } str - The string to validate.
 *  @returns { boolean }
 */
export function IsStrEmpty(str) {
    return IsStr(str) && str.trim().length <= 0;
}

/**
 *  Validates whether if the specified ***array*** argument is empty.
 *
 *  @template T
 *  @param { Array<T> } arr - The array to validate.
 *  @returns { arr extends Array<never> ? true : false }
 */
export function IsArrEmpty(arr) {
    return IsArr(arr) && arr.length <= 0;
}

/**
 *  Validates whether if the specified ***plain object*** is empty.
 *
 *  @param { Record<string, unknown> } obj - The plain object to validate.
 *  @returns { boolean }
 */
export function IsPlainObjEmpty(obj) {
    return IsPlainObj(obj) && Object.entries(obj).length <= 0;
}

/**
 *  Validates whether if the specified ***map object*** is empty.
 *
 *  @param { Map<unknown, unknown> } mObj - The map object to validate.
 *  @returns { boolean }
 */
export function IsMapObjEmpty(mObj) {
    return IsMapObj(mObj) && mObj.size <= 0;
}

/**
 *  Validates whether if the specified ***set object*** is empty.
 *
 *  @param { Set<unknown> } sObj - The set object to validate.
 *  @returns { boolean }
 */
export function IsSetObjEmpty(sObj) {
    return IsSetObj(sObj) && sObj.size <= 0;
}

/**
 *  Validates whether if the specified `object` has the specified `property` id.
 *
 *  @overload
 *  @param {{ [prop: string]: unknown }} obj - The object to check the property.
 *  @param { string } propertyId - The property id to check.
 *  @returns { boolean }
 */
/**
 *  Validates whether if the specified `map object` has the specified `property` id.
 *
 *  @template T
 *  @overload
 *  @param { T } obj - The map object to check the property.
 *  @param { string } propertyId - The property id to check.
 *  @returns { boolean }
 */
export function HasProperty(obj = {}, propertyId) {
    if (IsPlainObj(obj)) {
        if (!IsStr(propertyId) || !IsStrEmpty(propertyId))
            return false;

        return Object.hasOwn(obj, propertyId);
    }

    if (IsMapObj(obj))
        return obj.has(propertyId);

    return false;
}

/**
 *  Validates whether if the specified `Array` or `Set` of elements includes the specified search `element`.
 *
 *  @param { Array<unknown> | Set<unknown> } obj - The `Array` or `Set` of elements.
 *  @param { any } searchElement - The element to search.
 *  @param { number } [atPos] - A optional parameter to start looking at collection of elements. (Default: 0)
 *  @returns { boolean }
 */
export function HasValue(obj, searchElement, atPos = 0) {
    const Pos = atPos < 0 ? Math.abs(atPos) : atPos;

    if (IsArr(obj))
        return obj.includes(searchElement, Pos);

    if (IsSetObj(obj))
        return [...obj.values()].includes(searchElement, Pos);

    return false;
}

if (IsNullOrUndefined(globalThis.Guards))
    Object.defineProperty(globalThis, "Guards", {
        value: {},
        writable: false, configurable: true, enumerable: true
    });

[
    IsArrEmpty, IsEndsWithASCII, IsEndsWithLowerCase, IsEndsWithNumber, IsEndsWithSpecialCharacter,
    IsEndsWithUpperCase, IsFuncAnonymous, IsFuncAsynchronous, IsMapObjEmpty, IsPlainObjEmpty,
    IsSetObjEmpty, IsStartsWithASCII, IsStartsWithLowerCase, IsStartsWithNumber, IsStartsWithSpecialCharacter,
    IsStartsWithUpperCase, IsStrEmpty, HasASCII, HasLowerCase, HasNumbers, HasProperty,
    HasSpecialCharacters, HasUpperCase, HasValue
].forEach(format => Object.defineProperty(globalThis.Guards, format.name, {
    value: format,
    writable: false, configurable: true, enumerable: true
}));
