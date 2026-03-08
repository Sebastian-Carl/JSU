/**
 *  A collection of customized error emitter contents for `ErrorConstructorAPI`.
 */
export type ErrorRaiseAPI = {
    /**
     *  Builds and emit the contents of `ArgumentError`.
     *
     *  @param emitter_id - The object id that called this error.
     *  @param argument_id - The argument of the source emitter that cause the error.
     *  @param received_arg - The received argument data.
     *  @param expected_args - The expected argument(s) of emitter to receive.
     */
    _ArgumentError(emitter_id: string, argument_id?: string, received_arg?: string, ...expected_args: string[]): never;

    /**
     *  Builds and emit the contents of `IndexOutOfBoundsError`.
     *
     *  @param emitter_id - The object id that called this error.
     *  @param argument_id - The argument of the source emitter that cause the error.
     *  @param index - The received index position that overlapped the maximum bound position or argument.
     *  @param maximum_bound - The maximum bound index position of an index can be.
     */
    _IndexOutOfBoundsError(emitter_id: string, argument_id?: string, index?: number, maximum_bound?: number): never;

    /**
     *  Builds and emit the contents of `InvalidPropertyError`.
     *
     *  @param emitter_id - The object id that called this error.
     *  @param argument_id - The argument of the source emitter that cause the error.
     *  @param property_id - The invalid property of argument.
     */
    _InvalidPropertyError(emitter_id: string, argument_id?: string, property_id?: string): never;

    /**
     *  Builds and emit the contents of `MissingParameterError`.
     *
     *  @param emitter_id - The object id that called this error.
     *  @param argument_id - The argument of the source emitter that cause the error.
     *  @param arg_value - The current state value of the missing argument.
     */
    _MissingParameterError(emitter_id: string, argument_id?: string, arg_value?: string): never;

    /**
     *  Builds and emit the contents of `MissingPropertyError`.
     *
     *  @param emitter_id - The object id that called this error.
     *  @param argument_id - The argument of the source emitter that cause the error.
     *  @param property_id - The missing property id of argument.
     */
    _MissingPropertyError(emitter_id: string, argument_id?: string, property_id?: string): never;

    /**
     *  Builds and emit the contents of `NoSuchElementTagError`.
     *
     *  @param emitter_id - The object id that called this error.
     *  @param argument_id - The argument of the source emitter that cause the error.
     *  @param tag - The received unqualified tag of argument.
     *  @param tagOf - The instance that is trying to verify the tag.
     */
    _NoSuchElementTagError(emitter_id: string, argument_id?: string, tag?: string, tagOf?: "HTMLElement" | "MathMLElement" | "SVGElement"): never;

    /**
     *  Builds and emit the contents of `NotSupportedError`.
     *
     *  @param emitter_id - The object id that called this error.
     *  @param unsupported_id - The unsupported argument id of the source emitter that cause the error.
     */
    _NotSupportedError(emitter_id: string, unsupported_id?: string): never;

    /**
     *  Builds and emit the contents of `UnknownPropertyError`.
     *
     *  @param emitter_id - The object id that called this error.
     *  @param argument_id - The argument of the source emitter that cause the error.
     *  @param property_id - The unknown property of argument that is trying to accessed.
     */
    _UnknownPropertyError(emitter_id: string, argument_id?: string, property_id?: string): never;
}
