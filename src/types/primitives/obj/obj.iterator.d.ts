/**
 *  Source: CHATGPT
 */
export type IterableElement<T> =
    T extends Iterable<infer U> ? U :
    T extends Iterator<infer U> ? U :
    never;

export interface PrimitivesObjectIteratorAPI {
    /**
     *  Iterates through the elements of given object and performs the given callback function to each element of elements.
     *
     *  @param obj - The object to get the elements from.
     *  @param callback - The callback function to perform.
     *  @param thisArg - An optional parameter to hold the specified value and access it using the `this` keyword.
     */
    EachOf<T, A>(obj: T, callback: (value: IterableElement<T>, index: number, arr: IterableElement<T>[]) => void, thisArg?: A): void;

    /**
     *  Iterates through the elements of given object and performs the given callback function to each element of elements and returns the a
     *  new array of elements out from it.
     *
     *  @param obj - The object to get the elements from.
     *  @param callback - The callback function to perform.
     *  @param thisArg - An optional parameter to hold the specified value and access it using the `this` keyword.
     *  @returns Returns a new array of elements.
     */
    MapOf<T, A, R>(obj: T, callback: (value: IterableElement<T>, index: number, arr: IterableElement<T>[]) => R, thisArg?: A): R[];

    /**
     *  Iterates through elements of given object and performs the given callback function to each element of elements and returns a
     *  boolean state when one of the elements of given object satisfy the performed callback function.
     *
     *  @template T, A
     *  @param obj - The object to get the elements from.
     *  @param callback - The callback function to perform.
     *  @param thisArg - An optional parameter to hold the specified value and access it using the `this` keyword.
     *  @returns Returns the boolean state result of this process.
     */
    SomeOf<T, A>(obj: T, callback: (value: IterableElement<T>, index: number, arr: IterableElement<T>[]) => unknown, thisArg?: A): boolean;

    /**
     *  Iterates through elements of given object and perform the given callback function to each element of elements and returns a
     *  boolean state response when all of elements of object satisfy the performed callback function.
     *
     *  @param obj - The object to get the elements from.
     *  @param callback - The callback function to perform.
     *  @param thisArg - An optional parameter to hold the specified value and access it using the `this` keyword.
     *  @returns Returns the boolean state result of this process.
     */
    EveryOf<T, A>(obj: T, callback: (value: IterableElement<T>, index: number, arr: IterableElement<T>[]) => unknown, thisArg?: A): boolean;

    /**
     *  Iterates through the elements of given object and accumulates the result of performed callback function to each element of elements.
     *
     *  @param obj - The object of elements.
     *  @param callback - The callback function to perform.
     *  @param thisArg - The default value of accumulator of this process.
     *  @returns The accumulated result of performed callback function.
     */
    Accumulate<T, A, R>(obj: T, callback: (accumulator: A, value: IterableElement<T>, index: number, arr: IterableElement<T>[]) => R, thisArg: A): R;
}
