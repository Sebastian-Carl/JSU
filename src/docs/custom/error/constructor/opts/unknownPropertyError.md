# JSU - ERROR API - Constructors.UnknownPropertyError()

## Table Of Contents

- [JSU - ERROR API - Constructors.UnknownPropertyError()](#jsu---error-api---constructorsunknownpropertyerror)
  - [Table Of Contents](#table-of-contents)
  - [What it does?](#what-it-does)
  - [Parameter](#parameter)
  - [Properties](#properties)
  - [Example Usage](#example-usage)
  - [Navigate To](#navigate-to)

## What it does?

- It raises a report on your project's runtime about a property that is not existing on a certain object.

## Parameter

- `meta` - The meta data object of this error.
  - `meta.Message` - The message of this error. ( **_Required_** )
  - `meta.Context` - The meta context object of this error.
    - `meta.Context.Message` - A context message that points the root cause of error.
    - `meta.Context.Emitter` - The source id of an object that is responsible of raising this error.
  - `meta.Args` - A meta argument object of this error to check the reported arguments.
    - `meta.Args.Id` - The reported argument id that cause this error.
    - `meta.Args.PropertyId` - The unknown property that is trying to be accessed.
  - `Guide` - A guide for fixing this error.

## Properties

- `Message` - The message of this error.
- `Context` - The context object of this error.
- `Args` - The arguments object of this error.
- `Guide` - A provided guide for fixing this error.
- `TimeStamp` - A record of date & time of when this error has occurred.

## Example Usage

```js
function GetPropertyOf(obj, prop) {
    if (typeof obj !== "object" || Array.isArray(obj) || obj instanceof Map || obj instanceof Set)
        throw new ERROR.Constructors.ArgumentError({...});

    if (typeof prop !== "string")
        throw new ERROR.Constructors.ArgumentError({...});

    if (!Object.hasOwn(obj, prop))
        throw new ERROR.Constructors.UnknownPropertyError({
            Message: `Unknown property '${prop}' of 'obj'!`,
            Context: {
                Message: `GetPropertyOf(@obj.${prop}: UNKNOWN_PROPERTY)`,
                Emitter: "GetPropertyOf"
            },
            Args: {
                Id: "obj",
                PropertyId: prop
            },
            Guide: "Ensure to provide only a existing property id of obj!"
        });

    return obj[prop];
}

GetPropertyOf({ pi: 3.14, n: 0 }, "p"); // Uncaught UnknownPropertyError: ...
```

## Navigate To

- [Error](../../error.md) - *An API that provides a collection of customized and/or enhanced error classes.*
  - [Constructors](../error.constructor.md) - *A collection of customized error class constructors.*
    - [ArgumentError()](./argumentError.md) - *A custom version of Javascript's **TypeError** for invalid arguments types.*
    - [IndexOutOfBoundsError()](./indexOutOfBounds.md) - *A custom version of Javascript's **RangeError** for index that exceeded the maximum index-bound of an object.*
    - [InvalidPropertyError()](./invalidPropertyError.md) - *A custom error class for objects with invalid property.*
    - [MissingParameterError()](./missingParameterError.md) - *A custom error class for parameters that does not provided a data.*
    - [MissingPropertyError()](./missingPropertyError.md) - *A custom error class for incomplete or missing key-pair data of an object.*
    - [NoSuchElementTagError()](./noSuchElementTagError.md) - *A custom error class for unknown or not qualified **HTMLElement**, **MathMLElement**, **SVGElement** tags.*
    - [NotSupportedError()](./notSupportedError.md) - *A custom error class for not supported **objects**, **methods**, and/or **functions**.*
  - [Raise](../../builder/builder.md) - *A collection of pre-defined contents builder and raiser of errors.*

- [JSU - README](../../../../../../README.MD) - *JSU Homepage Documentation.*
  - [APIs](../../../../api/api.md) - *A complete collection list of available APIs of ***JSU***.*
    - [Custom](../../../custom.md) - *An API that provides a collection of customized and/or enhanced utilities or objects.*
