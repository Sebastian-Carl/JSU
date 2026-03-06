# JSU - Custom API - ConstructorOrTypeOf()

## Table Of Contents

- [JSU - Custom API - ConstructorOrTypeOf()](#jsu---custom-api---constructorortypeof)
  - [Table Of Contents](#table-of-contents)
  - [What It Does?](#what-it-does)
  - [Parameter](#parameter)
  - [Example Usage](#example-usage)
  - [Navigate To](#navigate-to)

## What It Does?

- `Custom.ConstructorOrTypeOf()` checks and returns the `constructor` or `type` of the given argument, by default, it prioritize on checking and retrieving the `constructor` of the given argument and safely fallback on checking and retrieving the `type` of the given argument if `constructor` is not present.

## Parameter

- `arg` - The given argument to check and retrieve its `constructor` or `type`.

## Example Usage

```js
const CTs = [{}, [], '', 0, new Map(), new Set].map(arg => {
    return Custom.ConstructorOrTypeOf(arg);
});

console.log(CTs); // #: [Object, Array, String, Number, Map, Set]
```

## Navigate To

- [Custom](../custom.md) - *An API that provides a collection of customized and/or enhanced utilities or objects.*
  - [Clamp()](./clamp.md) - Mutates the given numerical value within the given **minimum** and **maximum** range.
  - [Generator()](./generator/generator.md) - A customized generator constructor for generating randomized **tokens**, **characters**, and **integer**.
  - [NameOf()](./nameOf.md) - Retrieves the **name** property of the given object.

- [JSU - README](../../../../README.MD) - *JSU Homepage Documentation.*
  - [APIs](../../api/api.md) - *A complete collection of available APIs of **JSU**.*
    - [ERROR](../error/error.md) - *An API that provides a collection of customized and/or enhanced error classes.*
