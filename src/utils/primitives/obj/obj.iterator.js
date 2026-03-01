import Emit from '../../custom/error/builder/error.builder.js';
import { ConstructorOrTypeOf, DefineProperty } from '../../custom/utils/custom.utils.js';
import { IsFuncAnonymous } from '../../guards/formats/formats.js';
import { IsArr, IsFunc, IsMapObj, IsNullOrUndefined, IsSetObj } from '../../guards/data-types/data-types.js';
import { CountOf } from './obj.accessor.js';

/* Parameters Id and Expected Object Formats */
const Args = ["obj", "callback", "thisArg"];
const ObjectFormats = ["Array", "Map", "Set"];

/**
 *  Iterates and perform the specified `callback function` on each of the elements of the specified `object`.
 *
 *  @template T, A
 *  @param { T } obj - The object to get the elements from.
 *  @param { (value: IterableValue<T>, index: number, arr: IterableValue<T>[]) => void } callback - The callback function to perform.
 *  @param { A } [thisArg] - An optional parameter to hold the specified value and access it using the `this` keyword.
 *  @returns { void } - Does not return any data or value.
 */
export function EachOf(obj, callback, thisArg) {
    const Method = "EachOf";

    // ❌ - Exits when the provided object is not valid or not supported.
    if (!IsArr(obj) && !IsMapObj(obj) && !IsSetObj(obj) && !("forEach" in obj))
        Emit._ArgumentError(Method, Args[0], ConstructorOrTypeOf(obj), ...ObjectFormats);

    // ❌ - Exits when callback is not callable or function.
    if (!IsFunc(callback))
        Emit._ArgumentError(Method, Args[1], ConstructorOrTypeOf(callback), "Function");

    // ⚠️ - Notify and terminate the continuation of this process when the provided object is empty.
    if (!(obj instanceof Iterator) && CountOf(obj) <= 0) {
        console.warn(`${Method}(${Args[0]}: EMPTY): No elements to iterate. (Terminated)`);
        return;
    }

    // ⚠️ - Warns about possible conflicts when accessing or using the provided @thisArg inside of a anonymous @callback function.
    if (!IsNullOrUndefined(thisArg) && IsFuncAnonymous(callback))
        console.warn(`${Method}(@callback: anonymous): May throw or cause an error to your program if 'this' keyword is used inside of the anonymous callback function.`);

    /* @Iterate */
    obj["forEach"](callback, thisArg);
}

/**
 *  Iterates and perform the specified `callback function` on each of the elements of the specified `object`,
 *  and returns a new array that contains the result(s).
 *
 *  @template T, A, U
 *  @param { T } obj - The object to get the elements from.
 *  @param { (value: IterableValue<T>, index: number, arr: IterableValue<T>[]) => U } callback - The callback function to perform.
 *  @param { A } [thisArg] - An optional parameter to hold the specified value and access it using the `this` keyword.
 *  @returns { U[] } - Returns a new array that contains the result(s).
 */
export function MapOf(obj, callback, thisArg) {
    const Method = "MapOf";

    // ❌ - Exits when the provided object is not valid or not supported.
    if (!IsArr(obj) && !IsMapObj(obj) && !IsSetObj(obj) && !("map" in obj))
        Emit._ArgumentError(Method, Args[0], ConstructorOrTypeOf(obj), ...ObjectFormats);

    // ❌ - Exits when callback is not callable or function.
    if (!IsFunc(callback))
        Emit._ArgumentError(Method, Args[1], ConstructorOrTypeOf(callback), "Function");

    // ⚠️ - Notify and terminate the continuation of this process when the provided object is empty.
    if (!(obj instanceof Iterator) && CountOf(obj) <= 0) {
        console.warn(`${Method}(${Args[0]}: EMPTY): No elements to iterate. (Terminated)`);
        return [];
    }

    // ⚠️ - Warns about possible conflicts when accessing or using the provided @thisArg inside of a anonymous @callback function.
    if (!IsNullOrUndefined(thisArg) && IsFuncAnonymous(callback))
        console.warn(`${Method}(@callback: anonymous): May throw or cause an error to your program if 'this' keyword is used inside of the anonymous callback function.`);

    /* @Iterate */
    return obj["map"](callback, thisArg);
}

/**
 *  Iterates and perform the specified `callback function` on each of the elements of the specified `object`,
 *  and determines whether if some of the elements in the `object` satisfies the specified `callback function`.
 *
 *  @template T, A
 * @param { T } obj - The object to get the elements from.
 *  @param { (value: IterableValue<T>, index: number, arr: IterableValue<T>[]) => unknown } callback - The callback function to perform.
 *  @param { A } [thisArg] - An optional parameter to hold the specified value and access it using the `this` keyword.
 *  @returns { boolean } - Returns `true` if some of the elements in the `object` satisfies the specified `callback function`, otherwise `false`.
 */
export function SomeOf(obj, callback, thisArg) {
    const Method = "SomeOf";

    // ❌ - Exits when the provided object is not valid or not supported.
    if (!IsArr(obj) && !IsMapObj(obj) && !IsSetObj(obj) && !("some" in obj))
        Emit._ArgumentError(Method, Args[0], ConstructorOrTypeOf(obj), ...ObjectFormats);

    // ❌ - Exits when callback is not callable or function.
    if (!IsFunc(callback))
        Emit._ArgumentError(Method, Args[1], ConstructorOrTypeOf(callback), "Function");

    // ⚠️ - Notify and terminate the continuation of this process when the provided object is empty.
    if (!(obj instanceof Iterator) && CountOf(obj) <= 0) {
        console.warn(`${Method}(${Args[0]}: EMPTY): No elements to iterate. (Terminated)`);
        return [];
    }

    // ⚠️ - Warns about possible conflicts when accessing or using the provided @thisArg inside of a anonymous @callback function.
    if (!IsNullOrUndefined(thisArg) && IsFuncAnonymous(callback))
        console.warn(`${Method}(@callback: anonymous): May throw or cause an error to your program if 'this' keyword is used inside of the anonymous callback function.`);

    /* @Iterate */
    return obj["some"](callback, thisArg);
}

/**
 *  Iterates and perform the specified `callback function` on each of the elements of the specified `object`,
 *  and determines whether if all of the elements in the `object` satisfies the specified `callback function`.
 *
 *  @template T, A
 * @param { T } obj - The object to get the elements from.
 *  @param { (value: IterableValue<T>, index: number, arr: IterableValue<T>[]) => unknown } callback - The callback function to perform.
 *  @param { A } [thisArg] - An optional parameter to hold the specified value and access it using the `this` keyword.
 *  @returns { boolean } - Returns `true` if all of the elements in the `object` satisfies the specified `callback function`, otherwise `false`.
 */
export function EveryOf(obj, callback, thisArg) {
    const Method = "EveryOf";

    // ❌ - Exits when the provided object is not valid or not supported.
    if (!IsArr(obj) && !IsMapObj(obj) && !IsSetObj(obj) && !("every" in obj))
        Emit._ArgumentError(Method, Args[0], ConstructorOrTypeOf(obj), ...ObjectFormats);

    // ❌ - Exits when callback is not callable or function.
    if (!IsFunc(callback))
        Emit._ArgumentError(Method, Args[1], ConstructorOrTypeOf(callback), "Function");

    // ⚠️ - Notify and terminate the continuation of this process when the provided object is empty.
    if (!(obj instanceof Iterator) && CountOf(obj) <= 0) {
        console.warn(`${Method}(${Args[0]}: EMPTY): No elements to iterate. (Terminated)`);
        return [];
    }

    // ⚠️ - Warns about possible conflicts when accessing or using the provided @thisArg inside of a anonymous @callback function.
    if (!IsNullOrUndefined(thisArg) && IsFuncAnonymous(callback))
        console.warn(`${Method}(@callback: anonymous): May throw or cause an error to your program if 'this' keyword is used inside of the anonymous callback function.`);

    /* @Iterate */
    return obj["every"](callback, thisArg);
}

if (IsNullOrUndefined(globalThis.Primitives))
    Global("Primitives", {}, "soft");

[EachOf, EveryOf, MapOf, SomeOf].forEach(iter =>
    DefineProperty(globalThis.Primitives, iter.name, iter, "soft")
);
