# JSU - ERROR API - Constructors.MissingPropertyError()

## Table Of Contents

- [JSU - ERROR API - Constructors.MissingPropertyError()](#jsu---error-api---constructorsmissingpropertyerror)
  - [Table Of Contents](#table-of-contents)
  - [What it does?](#what-it-does)
  - [Parameter](#parameter)
  - [Properties](#properties)
  - [Example Usage](#example-usage)
  - [Navigate To](#navigate-to)

## What it does?

- It raises a report on your project's runtime about a missing property of a certain object.

## Parameter

- `meta` - The meta data object of this error.
  - `meta.Message` - The message of this error. ( **_Required_** )
  - `meta.Context` - The meta context object of this error.
    - `meta.Context.Message` - A context message that points the root cause of error.
    - `meta.Context.Emitter` - The source id of an object that is responsible of raising this error.
  - `meta.Args` - A meta argument object of this error to check the reported arguments.
    - `meta.Args.Id` - The reported argument id that cause this error.
    - `meta.Args.PropertyId` - The missing property id of the argument.
  - `Guide` - A guide for fixing this error.

## Properties

- `Message` - The message of this error.
- `Context` - The context object of this error.
- `Args` - The arguments object of this error.
- `Guide` - A provided guide for fixing this error.
- `TimeStamp` - A record of date & time of when this error has occurred.

## Example Usage

```js
const User = {
  Id: 0,
  Name: "Carl Aaron ...",
  Address: "...",
  Age: 21,
};
const UserProps = ["Id", "Name", "Address", "Age", "Greet"];
for (const prop of UserProps.keys) {
  if (!Object.hasOwn(prop))
    throw new ERROR.Constructors.MissingPropertyError({
        Message: "A missing property is found at User object!",
        Context: {
            Message: `User?.${prop}: Missing property!`,
            Emitter: "foo"
        },
        Args: {
            Id: "User",
            PropertyId: prop
        },
        Guide: `Ensure to provide property '${prop}' at User object!`
    });
}

// #: Uncaught MissingPropertyError: ...
```

## Navigate To

- [Error](../../error.md) - *An API that provides a collection of customized and/or enhanced error classes.*
  - [Constructors](../error.constructor.md) - *A collection of customized error class constructors.*
    - [ArgumentError()](./argumentError.md) - *A custom version of Javascript's **TypeError** for invalid arguments types.*
    - [IndexOutOfBoundsError()](./indexOutOfBounds.md) - *A custom version of Javascript's **RangeError** for index that exceeded the maximum index-bound of an object.*
    - [InvalidPropertyError()](./invalidPropertyError.md) - *A custom error class for objects with invalid property.*
    - [MissingParameterError()](./missingParameterError.md) - *A custom error class for parameters that does not provided a data.*
    - [NoSuchElementTagError()](./noSuchElementTagError.md) - *A custom error class for unknown or not qualified **HTMLElement**, **MathMLElement**, **SVGElement** tags.*
    - [NotSupportedError()](./notSupportedError.md) - *A custom error class for not supported **objects**, **methods**, and/or **functions**.*
    - [UnknownPropertyError()](./unknownPropertyError.md) - *A custom error class for unknown property that is trying to be access from an object.*
  - [Raise](../../builder/builder.md) - *A collection of pre-defined contents builder and raiser of errors.*

- [JSU - README](../../../../../../README.MD) - *JSU Homepage Documentation.*
  - [APIs](../../../../api/api.md) - *A complete collection list of available APIs of ***JSU***.*
    - [Custom](../../../custom.md) - *An API that provides a collection of customized and/or enhanced utilities or objects.*
