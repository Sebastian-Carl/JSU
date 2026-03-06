# JSU - Custom API - Generator().NewToken()

## Table Of Contents

- [JSU - Custom API - Generator().NewToken()](#jsu---custom-api---generatornewtoken)
  - [Table Of Contents](#table-of-contents)
  - [What It Does?](#what-it-does)
  - [Example Usage](#example-usage)
  - [Navigate To](#navigate-to)

## What It Does?

- `Generator().NewToken()` Generates a sequence of random characters which can be used as session id, data id, game lobby id, and more.

## Example Usage

```js
const Generate = new Custom.Generator(10, { secure: true, lowercase: false }); // Base size and configuration to use from generators.

const VToken = Generate.NewToken(); // Generated token with symbols, numbers, and uppercase only.
```

## Navigate To

- [Custom](../../../custom.md) - *An API that provides a collection of customized and/or enhanced utilities or objects.*
  - [Clamp()](../../clamp.md) - *Mutates the given numerical value within the given **minimum** and **maximum** range.*
  - [ConstructorOrTypeOf()](../../constructorOrTypeOf.md) - *Retrieves the **constructor** or **type** of the given argument.*
  - [NameOf()](../../nameOf.md) - *Retrieves the **name** property of the given object.*
  - [Generator()](../generator.md) - *A customized generator constructor for generating randomized **tokens**, **characters**, and **integer**.*
    - [RandomCharacters()](./generator.randomCharacters.md) - *Generates a sequence of randomized characters of **A-Z** and/or **a-z**.*
    - [RandomInteger()](./generator.randomInteger.md) - *Generates a randomized integer value from the given **minimum** and **maximum** range.*

- [JSU - README](../../../../../../README.MD) - *JSU Homepage Documentation.*
  - [APIs](../../../../api/api.md) - *A complete collection of available APIs of **JSU**.*
    - [ERROR](../../../error/error.md) - *An API that provides a collection of customized and/or enhanced error classes.*
