# JSU - ERROR API - Constructors.NotSupportedError()

## Table Of Contents

- [JSU - ERROR API - Constructors.NotSupportedError()](#jsu---error-api---constructorsnotsupportederror)
  - [Table Of Contents](#table-of-contents)
  - [What it does?](#what-it-does)
  - [Parameter](#parameter)
  - [Properties](#properties)
  - [Example Usage](#example-usage)
  - [Navigate To](#navigate-to)

## What it does?

- It raises a report on your project's runtime when a certain functions, methods, or API are was accessed but not supported.

## Parameter

- `meta` - The meta data object of this error.
  - `meta.Message` - The message of this error. ( **_Required_** )
  - `meta.Context` - The meta context object of this error.
    - `meta.Context.Message` - A context message that points the root cause of error.
    - `meta.Context.Emitter` - The source id of an object that is responsible of raising this error.
  - `meta.Args` - A meta argument object of this error to check the reported arguments.
    - `meta.Args.Id` - The object id that is being access but not supported.
  - `Guide` - A guide for fixing this error.

## Properties

- `Message` - The message of this error.
- `Context` - The context object of this error.
- `Args` - The arguments object of this error.
- `Guide` - A provided guide for fixing this error.
- `TimeStamp` - A record of date & time of when this error has occurred.

## Example Usage

```js
const IsLocalStorageAPISupported = (function () {
    try {
        const Key = "__TEST_KEY__";
        localStorage.setItem(Key, "__TEST__");
        localStorage.removeItem(Key);

        return true;
    } catch (e) {
        return false;
    }
})()

// #: Will throw when your or user's environment does not support LocalStorageAPI.
if (!IsLocalStorageAPISupported)
    throw new ERROR.Constructors.NotSupportedError({
        Message: "LocalStorageAPI is not supported!",
        Context: {
            Message: "LocalStorageAPI is not currently supported on user's current browser environment!",
            Emitter: "foo"
        },
        Args: {
            Id: "LocalStorage"
        },
        Guide: "Try to update your current browser environment to its latest update or switch to another browser such as 'Chrome', 'FireFox' or 'Brave'."
    });
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
    - [UnknownPropertyError()](./unknownPropertyError.md) - *A custom error class for unknown property that is trying to be access from an object.*
  - [Raise](../../builder/builder.md) - *A collection of pre-defined contents builder and raiser of errors.*

- [JSU - README](../../../../../../README.MD) - *JSU Homepage Documentation.*
  - [APIs](../../../../api/api.md) - *A complete collection list of available APIs of ***JSU***.*
    - [Custom](../../../custom.md) - *An API that provides a collection of customized and/or enhanced utilities or objects.*
