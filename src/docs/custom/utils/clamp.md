# JSU - Custom API - Clamp()

## Table Of Contents

- [JSU - Custom API - Clamp()](#jsu---custom-api---clamp)
  - [Table Of Contents](#table-of-contents)
  - [What It Does?](#what-it-does)
  - [Parameters](#parameters)
  - [Example Usage](#example-usage)
  - [Navigate To](#navigate-to)

## What It Does?

- `Custom.Clamp()` method ensures that the given numerical value would never fall or exceeds the given `minimum` and `maximum` range bounds. Once it does, it will automatically be clamped to those given bounds.

## Parameters

- `value` - The given current numeric value.
- `min` - The minimum range bound of the given numeric value.
- `max` - The maximum range bound of the given numeric value.

## Example Usage

```js
// #: Ensures that the given index would never exceeds the length of an array.
const chars = ["a", "b", "c", "d", "e"];
const charPos = 10;

// #: Without clamp
console.log(chars[charPos]); // undefined - might cause an error or trouble on your project.

// #: With clamp
console.log(chars[Custom.Clamp(charPos, 0, chars.length - 1)]); // It would always resulted to 'e' it exceeds the maximum bound (4) or 'a' when falls the minimum bound.
```

## Navigate To

- [Custom](../custom.md) - *An API that provides a collection of customized and/or enhanced utilities or objects.*
  - [ConstructorOrTypeOf()](./constructorOrTypeOf.md) - *Retrieves the **constructor** or **type** of the given argument.*
  - [Generator()](./generator/generator.md) - *A customized generator constructor for generating randomized **tokens**, **characters**, and **integer**.*
  - [NameOf()](./nameOf.md) - *Retrieves the **name** property of the given object.*

- [JSU - README](../../../../README.MD) - *JSU Homepage Documentation.*
  - [APIs](../../api/api.md) - *A complete collection of available APIs of **JSU**.*
    - [ERROR](../error/error.md) - *An API that provides a collection of customized and/or enhanced error classes.*
