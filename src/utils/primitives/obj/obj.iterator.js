import Raise from '../../custom/error/builder/error.builder.js';
import { ConstructorOrTypeOf } from '../../custom/utils/custom.utils.js';
import { IsFuncAnonymous, IsStrEmpty } from '../../guards/format/guards.format.js';
import { IsArr, IsFunc, IsIterator, IsMapObj, IsNullOrUndefined, IsSetObj } from '../../guards/type/guards.type.js';
import { CountOf } from './obj.accessor.js';

/* Parameters Id and Expected Object Formats */
const Args = ["obj", "callback", "thisArg"];
const ObjectFormats = ["Array", "Map", "Set"];
const ValidateParameters = function (m, o, c, tA, p) {
    const M = IsStrEmpty(m) ? "(ANONYMOUS)" : m.trim();

    if (!IsArr(o) && !IsMapObj(o) && !IsSetObj(o) && !(p in o))
        Raise._ArgumentError(M, Args[0], o, ...ObjectFormats);

    if (!IsFunc(c))
        Raise._ArgumentError(M, Args[1], c, "Function");

    if (!IsIterator(o) && CountOf(o) <= 0) {
        console.warn(`${M}(${Args[0]}: EMPTY): No elements to iterate. (Terminated)`);
        return true;
    }

    if (!IsNullOrUndefined(tA) && IsFuncAnonymous(c))
        console.warn(`${M}(@callback: anonymous): Does not support the 'this' keyword! This may throw an error in case of being used somewhere in callback function.`);

    return false;
}

/**
 *  Iterates and perform the specified `callback function` on each of the elements of the specified `object`.
 *
 *  @template T, A
 *  @param { T } obj - The object to get the elements from.
 *  @param { (value: import('../../../types/primitives/obj/obj.iterator.js').IterableElement<T>, index: number, arr: import('../../../types/primitives/obj/obj.iterator.js').IterableElement<T>[]) => void } callback - The callback function to perform.
 *  @param { A } [thisArg] - An optional parameter to hold the specified value and access it using the `this` keyword.
 *  @returns { void } - Does not return any data or value.
 */
export function EachOf(obj, callback, thisArg) {
    const Method = "EachOf", Process = "forEach";

    if (ValidateParameters(Method, obj, callback, thisArg, Process))
        return;

    /* @Iterate */
    obj[Process](callback, thisArg);
}

/**
 *  Iterates and perform the specified `callback function` on each of the elements of the specified `object`,
 *  and returns a new array that contains the result(s).
 *
 *  @template T, A, U
 *  @param { T } obj - The object to get the elements from.
 *  @param { (value: import('../../../types/primitives/obj/obj.iterator.js').IterableElement<T>, index: number, arr: import('../../../types/primitives/obj/obj.iterator.js').IterableElement<T>[]) => U } callback - The callback function to perform.
 *  @param { A } [thisArg] - An optional parameter to hold the specified value and access it using the `this` keyword.
 *  @returns { U[] } - Returns a new array that contains the result(s).
 */
export function MapOf(obj, callback, thisArg) {
    const Method = "MapOf", Process = "map";

    if (ValidateParameters(Method, obj, callback, thisArg, Process))
        return [];

    /* @Iterate */
    return obj[Process](callback, thisArg);
}

/**
 *  Iterates and perform the specified `callback function` on each of the elements of the specified `object`,
 *  and determines whether if some of the elements in the `object` satisfies the specified `callback function`.
 *
 *  @template T, A
 *  @param { T } obj - The object to get the elements from.
 *  @param { (value: import('../../../types/primitives/obj/obj.iterator.js').IterableElement<T>, index: number, arr: import('../../../types/primitives/obj/obj.iterator.js').IterableElement<T>[]) => unknown } callback - The callback function to perform.
 *  @param { A } [thisArg] - An optional parameter to hold the specified value and access it using the `this` keyword.
 *  @returns { boolean } - Returns `true` if some of the elements in the `object` satisfies the specified `callback function`, otherwise `false`.
 */
export function SomeOf(obj, callback, thisArg) {
    const Method = "SomeOf", Process = "some";

    if (ValidateParameters(Method, obj, callback, thisArg, Process))
        return false;

    /* @Iterate */
    return obj[Process](callback, thisArg);
}

/**
 *  Iterates and perform the specified `callback function` on each of the elements of the specified `object`,
 *  and determines whether if all of the elements in the `object` satisfies the specified `callback function`.
 *
 *  @template T, A
 *  @param { T } obj - The object to get the elements from.
 *  @param { (value: import('../../../types/primitives/obj/obj.iterator.js').IterableElement<T>, index: number, arr: import('../../../types/primitives/obj/obj.iterator.js').IterableElement<T>[]) => unknown } callback - The callback function to perform.
 *  @param { A } [thisArg] - An optional parameter to hold the specified value and access it using the `this` keyword.
 *  @returns { boolean } - Returns `true` if all of the elements in the `object` satisfies the specified `callback function`, otherwise `false`.
 */
export function EveryOf(obj, callback, thisArg) {
    const Method = "EveryOf", Process = "every";

    if (ValidateParameters(Method, obj, callback, thisArg, Process))
        return false;

    /* @Iterate */
    return obj[Process](callback, thisArg);
}

/**
 *  Iterates through the elements of given object and accumulates the result of performed callback function to each of elements.
 *
 *  @template T, A, R
 *  @param { T } obj - The object of elements.
 *  @param { (accumulator: A, value: import('../../../types/primitives/obj/obj.iterator.js').IterableElement<T>, index: number, arr: import('../../../types/primitives/obj/obj.iterator.js').IterableElement<T>[]) => R } callback - The callback function to perform.
 *  @param { A } [thisArg] - The default value of accumulator of this process.
 *  @returns { R } The accumulated result of performed callback function.
 */
export function Accumulate(obj, callback, thisArg) {
    const Method = "Accumulate", Process = "reduce";

    if (ValidateParameters(Method, obj, callback, thisArg, Process))
        return;

    return obj[Process](callback, thisArg);
}
