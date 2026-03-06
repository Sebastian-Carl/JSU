# JSU - ERROR API - Constructors.IndexOutOfBoundsError()

## Table Of Contents

- [JSU - ERROR API - Constructors.IndexOutOfBoundsError()](#jsu---error-api---constructorsindexoutofboundserror)
  - [Table Of Contents](#table-of-contents)
  - [What it does?](#what-it-does)
  - [Parameters](#parameters)
  - [Properties](#properties)
  - [Example Usage](#example-usage)
  - [Navigate To](#navigate-to)

## What it does?

- It raises a report on your project's runtime from an index that exceeded the maximum index-bound of an object list.

## Parameters

- `meta` - The meta data object of this error.
  - `meta.Message` - The message of this error. ( ***Required*** )
  - `meta.Context` - The meta context object of this error.
    - `meta.Context.Message` - A context message that points the root cause of error.
    - `meta.Context.Emitter` - The source id of an object that is responsible of raising this error.
  - `meta.Args` - A meta argument object of this error to check the reported arguments.
    - `meta.Args.Id` - The reported argument id that cause this error.
    - `meta.Args.Index` - The index the falls or exceeds the maximum-bound of the object list.
    - `meta.Args.MaxBound` - The maximum-bound of index can be at object list.
  - `Guide` - A guide for fixing this error.

## Properties

- `Message` - The message of this error.
- `Context` - The context object of this error.
- `Args` - The arguments object of this error.
- `Guide` - A provided guide for fixing this error.
- `TimeStamp` - The date & time of when this error has occurred.

## Example Usage

```js
const Pos = 5;
const Nums = [1, 2, 3, 4, 5];

if (Pos > (Nums.length - 1))
    throw new ERROR.Constructors.IndexOutOfBounds({
        Message: "A out-of-bounds index is found!",
        Context: {
            Message: `Index '${Pos}' has exceeded the maximum bound of Nums[]`,
            Emitter: "foo"
        },
        Args: {
            Id: "Pos",
            Index: Pos,
            MaxBound: (Nums.length - 1)
        },
        Guide: `Ensure to provide a index that is within the maximum bound of an object list.`
    });

// #: Uncaught IndexOutOfBoundsError: ...
```

## Navigate To

- [Error](../../error.md) - *An API that provides a collection of customized and/or enhanced error classes.*
  - [Constructors](../error.constructor.md) - *A collection of customized error class constructors.*
    - [ArgumentError()](./argumentError.md) - *A custom version of Javascript's **TypeError** for invalid arguments types.*
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
