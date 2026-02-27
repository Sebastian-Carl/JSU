/**
 *  A collection of customized utilities (`ad-hoc`).
 */
type CustomUtilitiesAPI = {
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
}
