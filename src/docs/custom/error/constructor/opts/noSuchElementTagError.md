# JSU - ERROR API - Constructors.NoSuchElementTagError()

## Table Of Contents

- [JSU - ERROR API - Constructors.NoSuchElementTagError()](#jsu---error-api---constructorsnosuchelementtagerror)
  - [Table Of Contents](#table-of-contents)
  - [What it does?](#what-it-does)
  - [Parameter](#parameter)
  - [Properties](#properties)
  - [Example Usage](#example-usage)
  - [Navigate To](#navigate-to)

## What it does?

- It raises a report on your project's runtime about a provided unknown or not-qualified element's tag of `Element`.

## Parameter

- `meta` - The meta data object of this error.
  - `meta.Message` - The message of this error. ( **_Required_** )
  - `meta.Context` - The meta context object of this error.
    - `meta.Context.Message` - A context message that points the root cause of error.
    - `meta.Context.Emitter` - The source id of an object that is responsible of raising this error.
  - `meta.Args` - A meta argument object of this error to check the reported arguments.
    - `meta.Args.Id` - The reported argument id that cause this error.
    - `meta.Args.Tag` - The provided unknown or not-qualified tag of element.
    - `meta.Args.TagOf` - The element type or instance that does not have the provided tag. (Options: **_HTMLElement_**, **_MathMLElement_**, **_SVGElement_**)
  - `Guide` - A guide for fixing this error.

## Properties

- `Message` - The message of this error.
- `Context` - The context object of this error.
- `Args` - The arguments object of this error.
- `Guide` - A provided guide for fixing this error.
- `TimeStamp` - A record of date & time of when this error has occurred.

## Example Usage

```js
function CreateElement(tag) {
  if (tag === null || tag === undefined || typeof tag !== "string" || tag.trim().length === 0) return null;

  // #: VariablesAPI.HTMLElementTags - Provided collection of HTMLElements tag.
  if (!Variables.HTMLElementTags.has(tag))
    throw new ERROR.Constructor.NoSuchElementTag({
      Message: `A not-qualified HTMLElement tag is found at CreateElement()!`,
      Context: {
        Message: `CreateElement(@tag: ${tag}): Unknown HTMLElement Tag`,
        Emitter: "CreateElement",
      },
      Args: {
        Id: "tag",
        Tag: tag,
        TagOf: "HTMLElement",
      },
      Guide: "Ensure to provided a qualified HTMLElement tag!",
    });

  return document.createElement(tag);
}

CreateElement("dib"); // Uncaught NoSuchElementTagError: ...
```

## Navigate To

- [Error](../../error.md) - *An API that provides a collection of customized and/or enhanced error classes.*
  - [Constructors](../error.constructor.md) - *A collection of customized error class constructors.*
    - [ArgumentError()](./argumentError.md) - *A custom version of Javascript's **TypeError** for invalid arguments types.*
    - [IndexOutOfBoundsError()](./indexOutOfBounds.md) - *A custom version of Javascript's **RangeError** for index that exceeded the maximum index-bound of an object.*
    - [InvalidPropertyError()](./invalidPropertyError.md) - *A custom error class for objects with invalid property.*
    - [MissingParameterError()](./missingParameterError.md) - *A custom error class for parameters that does not provided a data.*
    - [MissingPropertyError()](./missingPropertyError.md) - *A custom error class for incomplete or missing key-pair data of an object.*
    - [NotSupportedError()](./notSupportedError.md) - *A custom error class for not supported **objects**, **methods**, and/or **functions**.*
    - [UnknownPropertyError()](./unknownPropertyError.md) - *A custom error class for unknown property that is trying to be access from an object.*
  - [Raise](../../builder/builder.md) - *A collection of pre-defined contents builder and raiser of errors.*

- [JSU - README](../../../../../../README.MD) - _JSU Homepage Documentation._
  - [APIs](../../../../api/api.md) - \*A complete collection list of available APIs of **_JSU_**.\*
    - [Custom](../../../custom.md) - _An API that provides a collection of customized and/or enhanced utilities or objects._
