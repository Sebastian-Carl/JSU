# JSU - ERROR API - Constructors.InvalidPropertyError()

## Table Of Contents

- [JSU - ERROR API - Constructors.InvalidPropertyError()](#jsu---error-api---constructorsinvalidpropertyerror)
  - [Table Of Contents](#table-of-contents)
  - [What it does?](#what-it-does)
  - [Parameter](#parameter)
  - [Properties](#properties)
  - [Example Usage](#example-usage)
  - [Navigate To](#navigate-to)

## What it does?

- It raises a report on your project's runtime upon a certain object that contains a invalid property (key-pair) data at certain object found. This is useful for strict object structure.

## Parameter

- `meta` - The meta data object of this error.
  - `meta.Message` - The message of this error. ( ***Required*** )
  - `meta.Context` - The meta context object of this error.
    - `meta.Context.Message` - A context message that points the root cause of error.
    - `meta.Context.Emitter` - The source id of an object that is responsible of raising this error.
  - `meta.Args` - A meta argument object of this error to check the reported arguments.
    - `meta.Args.Id` - The reported argument id that cause this error.
    - `meta.Args.PropertyId` - The invalid property that has been found at argument id.`
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
  Greet() => { ... },
  T() => { ... }
}
const UserProps = ["Id", "Name", "Address", "Age", "Greed"];
for (const prop of Object.keys(User)) {
  if (!UserProps.includes(prop))
    throw new ERROR.Constructors.InvalidPropertyError({
      Message: "A invalid property is found at user object!",
      Context: {
        Message: `User.${prop}: Property is unknown or not part of user's object properties.`
        Emitter: "foo"
      },
      Args: {
        Id: "User",
        PropertyId: prop
      },
      Guide: "Ensure to not provide or include a unknown property from 'User' object!"
    });
}

// #: Uncaught InvalidPropertyError: ...
```

## Navigate To

- [Error](../../error.md) - *An API that provides a collection of customized and/or enhanced error classes.*
  - [Constructors](../error.constructor.md) - *A collection of customized error class constructors.*
    - [ArgumentError()](./argumentError.md) - *A custom version of Javascript's **TypeError** for invalid arguments types.*
    - [IndexOutOfBoundsError()](./indexOutOfBounds.md) - *A custom version of Javascript's **RangeError** for index that exceeded the maximum index-bound of an object.*
    - [MissingParameterError()](./missingParameterError.md) - *A custom error class for parameters that does not provided a data.*
    - [MissingPropertyError()](./missingPropertyError.md) - *A custom error class for incomplete or missing key-pair data of an object.*
    - [NoSuchElementTagError()](./noSuchElementTagError.md) - *A custom error class for unknown or not qualified **HTMLElement**, **MathMLElement**, **SVGElement** tags.*
    - [NotSupportedError()](./notSupportedError.md) - *A custom error class for not supported **objects**, **methods**, and/or **functions**.*
    - [UnknownPropertyError()](./unknownPropertyError.md) - *A custom error class for unknown property that is trying to be access from an object.*
  - [Raise](../../builder/builder.md) - *A collection of pre-defined contents builder and raiser of errors.*

- [JSU - README](../../../../../../README.MD) - *JSU Homepage Documentation.*
  - [APIs](../../../../api/api.md) - *A complete collection list of available APIs of ***JSU***.*
    - [Custom](../../../custom.md) - *An API that provides a collection of customized and/or enhanced utilities or objects.*
