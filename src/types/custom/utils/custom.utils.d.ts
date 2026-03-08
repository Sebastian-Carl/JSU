/**
 *  A collection of customized utilities (`ad-hoc`).
 */
export type CustomUtilitiesAPI = {
    /**
     *  Clamps the current numeric value into its `minimum` and/or `maximum` numeric value.
     *
     *  ***Notes***:
     *   - If `minimum` is greater than `maximum`, its value will be automatically swapped. (min -> max, max -> min)
     *
     *  @param value - The current numeric value to clamp.
     *  @param min - The `minimum` numeric value of current numeric value it can be. (Default: 0)
     *  @param max - The `maximum` numeric value of current numeric value it can be. (Default: 1)
     *  @returns The clamped numeric value.
     */
    Clamp(value: number, min?: number, max?: number): number;

    /**
     *  Retrieves the `constructor` or `type` of the specified argument.
     *
     *  ***Notes***:
     *   - Preferred to return the `constructor` of argument as possible if available, or
     *     default to `type` of argument if also available, or else `undefined`.
     *
     *  @param arg - The argument to retrieve its `constructor` or `type`.
     *  @returns The `constructor` or `type` of the argument in string format.
     */
    ConstructorOrTypeOf(arg: any): string | undefined;

    /**
     *  Defines the given key-pair data to the target object.
     *
     *  ***Options***:
     *   - `def` - Allows the defined key-pair data to be **writable**, **configurable**, and **enumerable**. (Default)
     *   - `hard` - Prevents the defined key-pair data to be **writable**, **configurable**, and **enumerable**.
     *   - `med` - Prevents the defined key-pair data to be **writable** and **configurable** but, can be **enumerable**.
     *   - `soft` - Prevents the defined key-pair data to be **writable** but, can be **configurable** and **enumerable**.
     *
     *  @param obj - The target object to define the key-pair data at.
     *  @param key - The key of key-pair data.
     *  @param data - The data of key-pair data.
     *  @param opt - A options of what would be the state configuration of the defined key-pair data.
     */
    DefineProperty<K, D>(obj: { [prop: string]: any }, key: K, data: D, opt?: 'def' | 'hard' | 'med' | 'soft'): { [prop: string]: any } & { [prop in K extends string ? K : string]: D; };

    /**
     *  Defines the given key-pair data to the `globalThis` or `window` API.
     *
     *  @param key - The key of key-pair data.
     *  @param data - The data of key-pair data.
     *  @param opt - A options of what would be the state configuration of the defined key-pair data.
     */
    Global(key: string, data: any, opt?: 'def' | 'hard' | 'med' | 'soft'): void;

    /**
     *  Retrieves the `name` property of the specified object.
     *
     *  ***Notes***:
     *   - Retrieves the `name` property of the specified object in any case format it can be and returns it.
     *     (E.g. Name, NAme, naME, NaMe)
     *   - Supports any object that contains a `name` property.
     *
     *  @param obj - The object to retrieve `name` property.
     *  @returns The `name` property value of the object.
     */
    NameOf(obj: {}): string;

    /**
     *  Validates and normalize the given numerical value to valid numerical value.
     *
     *  @param num1 - The numerical value to normalize.
     *  @returns The normalized numerical value.
     */
    NormalizeNumbers(num1: number): number;

    /**
     *  Validates and normalize the given collection of numerical values to a valid numerical values.
     *
     *  @param num1 - The first numerical value to normalize.
     *  @param num2 - The second numerical value to normalize.
     *  @returns The normalized collection of numerical values.
     */
    NormalizeNumbers(num1: number, num2: number): number[];

    /**
     *  Validates and normalize the given collection of numerical values to a valid numerical values.
     *
     *  @param num1 - The first numerical value to normalize.
     *  @param num2 - The second numerical value to normalize.
     *  @param num3 - The third numerical value to normalize.
     *  @returns The normalized collection of numerical values.
     */
    NormalizeNumbers(num1: number, num2: number, num3: number): number[];

    /**
     *  Validates and normalize the given collection of numerical values to a valid numerical values.
     *
     *  @param num1 - The first numerical value to normalize.
     *  @param num2 - The second numerical value to normalize.
     *  @param num3 - The third numerical value to normalize.
     *  @param num4 - The fourth numerical value to normalize.
     *  @returns The normalized collection of numerical values.
     */
    NormalizeNumbers(num1: number, num2: number, num3: number, num4: number): number[];

    /**
     *  Validates and normalize the given collection of numerical values to a valid numerical values.
     *
     *  @param num1 - The first numerical value to normalize.
     *  @param num2 - The second numerical value to normalize.
     *  @param num3 - The third numerical value to normalize.
     *  @param num4 - The fourth numerical value to normalize.
     *  @param num5 - The fifth numerical value to normalize.
     *  @returns The normalized collection of numerical values.
     */
    NormalizeNumbers(num1: number, num2: number, num3: number, num4: number, num5: number): number[];

    /**
     *  Validates and normalize the given collection of numerical values to a valid numerical values.
     *
     *  @param nums - The collection of numerical values to normalize.
     *  @returns The normalized collection of numerical values.
     */
    NormalizeNumbers(...nums: number[]): number[];
}
