# JSU - Custom API - Generator().RandomCharacters()

## Table Of Contents

- [JSU - Custom API - Generator().RandomCharacters()](#jsu---custom-api---generatorrandomcharacters)
  - [Table Of Contents](#table-of-contents)
  - [What it does?](#what-it-does)
  - [Example Usage](#example-usage)
  - [Navigate To](#navigate-to)

## What it does?

- `Generator().RandomCharacters()` generates a sequence of characters of `A-Z` and/or `a-z`. Its contents will be based on the given configuration at `Generator()`.

## Example Usage

```js
const Generate = new Custom.Generator(10, { secure: true });

const VChars = Generate.RandomCharacters(); // Generates random sequence of characters that consist both upper and lower case characters.
```

## Navigate To

- [Custom](../../../custom.md) - *An API that provides a collection of customized and/or enhanced utilities or objects.*
  - [Clamp()](../../clamp.md) - *Mutates the given numerical value within the given **minimum** and **maximum** range.*
  - [ConstructorOrTypeOf()](../../constructorOrTypeOf.md) - *Retrieves the **constructor** or **type** of the given argument.*
  - [NameOf()](../../nameOf.md) - *Retrieves the **name** property of the given object.*
  - [Generator()](../generator.md) - *A customized generator constructor for generating randomized **tokens**, **characters**, and **integer**.*
    - [NewToken()](./generator.newToken.md) - *Generates a randomized sequence of characters of **A-Z**, **a-z**, **0-9** and **symbols**.*
    - [RandomInteger()](./generator.randomInteger.md) - *Generates a randomized integer value from the given **minimum** and **maximum** range.*

- [JSU - README](../../../../../../README.MD) - *JSU Homepage Documentation.*
  - [APIs](../../../../api/api.md) - *A complete collection of available APIs of **JSU**.*
    - [ERROR](../../../error/error.md) - *An API that provides a collection of customized and/or enhanced error classes.*
