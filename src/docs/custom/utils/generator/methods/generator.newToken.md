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

- [Custom](../../../custom.md) - ***An API that contains only customized and/or enhanced version of utilities, methods, and more.***
  - [Clamp()](../../clamp.md) - Mutates the given numerical value within the given `minimum` and `maximum` range.
  - [ConstructorOrTypeOf()](../../constructorOrTypeOf.md) - Retrieves the `constructor` or `type` of the given argument.
  - [Generator()](../generator.md) - A customized generator constructor for generating randomized `tokens`, `characters`, and `integer`.
    - [RandomCharacters()](./generator.randomCharacters.md) - Generates a sequence of randomized characters of `A-Z` and/or `a-z`.
    - [RandomInteger()](./generator.randomInteger.md) - Generates a randomized integer value from the given `minimum` and `maximum` range.

- [JSU - README](../../../../../../README.MD) - JSU's Homepage Documentation.
