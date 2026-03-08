export type InferKeyOptions<T> = T extends { [prop: string]: infer V } | ArrayLike<infer V> ? keyof T : string;

export interface PrimitivesObjectAccessorAPI {
    /**
     *  Returns the iterable entries of data from the given map object.
     *
     *  @param obj - The map object to get its collection of data entries.
     *  @returns The iterable data entries of map object.
     */
    EntriesOf<K, V>(obj: Map<K, V>): MapIterator<[K, V]>;

    /**
     *  Returns the iterable entries of data from the given set object.
     *
     *  @param obj - The set object to get its collection of data entries.
     *  @returns The iterable data entries of set object.
     */
    EntriesOf<U>(obj: Set<U>): SetIterator<[U, U]>;

    /**
     *  Returns the iterable entries of data from the given array object.
     *
     *  @param obj - The array object to get its collection of data entries.
     *  @returns The iterable data entries of array object.
     */
    EntriesOf<T>(obj: readonly T[]): ArrayIterator<[number, T]>;

    /**
     *  Returns the array of data entries from the given `Object` object.
     *
     *  @param obj - The plain `Object` object to get its collection of data entries.
     *  @returns The array of data entries of plain `Object` object.
     */
    EntriesOf<T extends Record<string, any>>(obj: T): Array<[keyof T, T[keyof T]]>;

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
     *  @param obj - The object to get its content's entries.
     */
    EntriesOf(obj: unknown): unknown[];

    /**
     *  Returns a iterable keys of the given map object.
     *
     *  @param obj - The map object to get its collection of keys.
     *  @returns The iterable keys of map object.
     */
    KeysOf<K, V>(obj: Map<K, V>): MapIterator<K>;

    /**
     *  Returns a iterable keys of the given set object.
     *
     *  @param obj - The set object to get its collection of keys.
     *  @returns The iterable keys of set object.
     */
    KeysOf<U>(obj: Set<U>): SetIterator<U>;

    /**
     *  Returns a iterable keys of the given array object.
     *
     *  @param obj - The array object to get its collection of keys.
     *  @returns The iterable keys of array object.
     */
    KeysOf<T>(obj: readonly T[]): Array<number>;

    /**
     *  Returns a array keys of the given plain `Object` object.
     *
     *  @param obj - The plain `Object` object to get its collection of keys.
     *  @returns The array keys of plain `Object` object.
     */
    KeysOf<T extends Record<string, any>>(obj: T): Array<keyof T>;

    /**
     *  Returns an iterable keys or index of the specified ***object***.
     *
     *  ***Expected Objects***:
     *   - ***ARRAY*** | ***PLAIN OBJECT*** | ***MAP OBJECT*** | ***SET OBJECT***.
     *
     *  @param obj - The object to get its content's keys.
     */
    KeysOf(obj: unknown): unknown[];

    /**
     *  Returns an iterable values data from the given map object.
     *
     *  @param obj - The map object to get its collection values data.
     *  @returns The iterable values data of map object.
     */
    ValuesOf<K, V>(obj: Map<K, V>): MapIterator<V>;

    /**
     *  Returns an iterable values data from the given set object.
     *
     *  @param obj - The set object to get its collection values data.
     *  @returns The iterable values data of set object.
     */
    ValuesOf<U>(obj: Set<U>): SetIterator<U>;

    /**
     *  Returns an iterable values data from the given array object.
     *
     *  @param obj - The array object to get its collection values data.
     *  @returns The iterable values data of array object.
     */
    ValuesOf<T>(obj: readonly T[]): Array<T>;

    /**
     *  Returns an iterable values data from the given plain `Object` object.
     *
     *  @param obj - The plain `Object` object to get its collection values data.
     *  @returns The iterable values data of plain `Object` object.
     */
    ValuesOf<T extends Record<string, any>>(obj: T): Array<T[keyof T]>;

    /**
     *  Returns an iterable values of the specified ***object***.
     *
     *  ***Expected Objects***:
     *   - ***ARRAY*** | ***PLAIN OBJECT*** | ***MAP OBJECT*** | ***SET OBJECT***.
     *
     *  @param obj - The object to return its content's values.
     */
    ValuesOf(obj: unknown): unknown[];

    /**
     *  Returns the computed argument `length` of given function argument.
     *
     *  @param arg - The function argument to get its computed argument `length`.
     *  @returns The computed argument `length` of function argument.
     */
    CountOf(arg: Function): number;

    /**
     *  Returns the computed `length` of given string argument.
     *
     *  @param arg - The string argument to get its computed `length`.
     *  @returns The computed `length` of string argument.
     */
    CountOf(arg: string): number;

    /**
     *  Returns the computed `size` of given map object.
     *
     *  @param arg - The map object to get its computed `size`.
     *  @returns The computed `size` of map object.
    */
    CountOf(arg: Map<unknown, unknown>): number;

    /**
     *  Returns the computed `size` of given set object.
     *
     *  @param arg - The set object to get its computed `size`.
     *  @returns The computed `size` of set object.
    */
    CountOf(arg: Set<unknown>): number;

    /**
     *  Returns the computed `length` of given array object.
     *
     *  @param arg - The array object to get its computed `length`.
     *  @returns The computed `length` of array object.
     */
    CountOf(arg: unknown[]): number;

    /**
     *  Returns the computed `length` of given plain `Object` object.
     *
     *  @param arg - The plain `Object` object to get its computed `length`.
     *  @returns The computed `length` of plain `Object` object.
     */
    CountOf(arg: { [prop: string]: unknown } | ArrayLike<unknown>): number;

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
     *  @param arg - The argument to retrieve the current size or length from.
     *  @returns The retrieved size or length of object.
     */
    CountOf(arg: unknown): number;

    /**
     *  Retrieves and returns the value of the specified property in the specified plain `object`.
     *
     *  ***Notes***:
     *   - This uses a non-case-sensitive for retrieving the data of the specified property id at
     *     plain object, this would retrieve the data of the first property that matches the specified
     *     property id in any case.
     *   - Returns `undefined` if parameter `obj` or `propertyId` is invalid.
     *
     *  @param obj - The collection of key-pairs to retrieve at.
     *  @param propertyId - The property id of key-pair to retrieve.
     */
    GetPropertyOf<T, P extends InferKeyOptions<T>>(obj: T, propertyId: P): P extends keyof T ? T[P] : undefined ;
}
