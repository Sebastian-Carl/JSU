# JSU - ERROR API - Constructors.ArgumentError()

## Table Of Contents

- [JSU - ERROR API - Constructors.ArgumentError()](#jsu---error-api---constructorsargumenterror)
  - [Table Of Contents](#table-of-contents)
  - [What it does?](#what-it-does)
  - [Parameter](#parameter)
  - [Properties](#properties)
  - [Example Usage](#example-usage)
  - [Navigate To](#navigate-to)

## What it does?

- It raises a report on your project's runtime for any arguments type that violates the expected argument type of certain ***functions*** or ***methods***.

## Parameter

- `meta` - The meta data object of this error.
  - `meta.Message` - The message of this error. ( ***Required*** )
  - `meta.Context` - The meta context object of this error.
    - `meta.Context.Message` - A context message that points the root cause of error.
    - `meta.Context.Emitter` - The source id of an object that is responsible of raising this error.
  - `meta.Args` - A meta argument object of this error to check the reported arguments.
    - `meta.Args.Id` - The reported argument id that cause this error.
    - `meta.Args.ReceivedArgument` - The reported received argument value that triggered this error.
    - `meta.Args.ExpectedArguments` - A list of expected arguments to receive from an argument.
  - `Guide` - A guide for fixing this error.

## Properties

- `Message` - The message of this error.
- `Context` - The context object of this error.
- `Args` - The arguments object of this error.
- `Guide` - A provided guide for fixing this error.
- `TimeStamp` - The date & time of when this error has occurred.

## Example Usage

```js
// #: Check and raise an argument error when data is not-a-string type.
const data = 1;
const IsStr = typeof data === "string";

if (!IsStr)
    throw new ERROR.Constructors.ArgumentError({
        Message: "Received a non-string data!",
        Context: {
            Message: "constant 'data' is a non-string data!",
            Emitter: "foo"
        },
        Args: {
            Id: "data",
            ReceivedArgument: data,
            ExpectedArguments: ["String"]
        },
        Guide: "Ensure to provide a string value from constant 'data'!"
    });

// [Terminal]: Uncaught ArgumentError ...
```

## Navigate To

- [Error](../../error.md) - *An API that provides a collection of customized and/or enhanced error classes.*
  - [Constructors](../error.constructor.md) - *A collection of customized error class constructors.*
    - [IndexOutOfBoundsError()](./indexOutOfBounds.md) - *A custom version of Javascript's **RangeError** for index that exceeded the maximum index-bound of an object.*
    - [InvalidPropertyError()](./invalidPropertyError.md) - *A custom error class for objects with invalid property.*
    - [MissingParameterError()](./missingParameterError.md) - *A custom error class for parameters that does not provided a data.*
    - [MissingPropertyError()](./missingPropertyError.md) - *A custom error class for incomplete or missing key-pair data of an object.*
    - [NoSuchElementTagError()](./noSuchElementTagError.md) - *A custom error class for unknown or not qualified **HTMLElement**, **MathMLElement**, **SVGElement** tags.*
    - [NotSupportedError()](./notSupportedError.md) - *A custom error class for not supported **objects**, **methods**, and/or **functions**.*
    - [UnknownPropertyError()](./unknownPropertyError.md) - *A custom error class for unknown property that is trying to be access from an object.*
  - [Raise](../../builder/builder.md) - *A collection of pre-defined contents builder and raiser of errors.*

- [JSU - README](../../../../../../README.MD) - *JSU Homepage Documentation.*
  - [APIs](../../../../api/api.md) - *A complete collection list of available APIs of ***JSU***.*
    - [Custom](../../../custom.md) - *An API that provides a collection of customized and/or enhanced utilities or objects.*
