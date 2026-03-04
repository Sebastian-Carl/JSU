# JSU - Custom API - Generator().RandomInteger()

## Table Of Contents

- [JSU - Custom API - Generator().RandomInteger()](#jsu---custom-api---generatorrandominteger)
  - [Table Of Contents](#table-of-contents)
  - [What it does?](#what-it-does)
  - [Parameters](#parameters)
  - [Example Usage](#example-usage)
  - [Navigate To](#navigate-to)

## What it does?

- `Generator().RandomInteger(min, max)` generates a random integer value within the given `minimum` and `maximum` range.

## Parameters

- `min` - The minimum integer value of this generator can generate.
- `max` - The maximum integer value of this generator can generate.

## Example Usage

```js
const Generate = new Custom.Generator(10, { secure: true });

console.log(Generate.RandomInteger(0, 10)); // Logs the generated random integer value within the given range.
```

## Navigate To

- [Custom](../../../custom.md) - ***An API that contains only customized and/or enhanced version of utilities, methods, and more.***
  - [Clamp()](../../clamp.md) - Mutates the given numerical value within the given `minimum` and `maximum` range.
  - [ConstructorOrTypeOf()](../../constructorOrTypeOf.md) - Retrieves the `constructor` or `type` of the given argument.
  - [Generator()](../generator.md) - A customized generator constructor for generating randomized `tokens`, `characters`, and `integer`.
    - [NewToken()](./generator.newToken.md) - Generates a randomized sequence of characters of `A-Z`, `a-z`, `0-9` and `symbols`.
    - [RandomCharacters()](./generator.randomCharacters.md) - Generates a sequence of randomized characters of `A-Z` and/or `a-z`.

- [JSU - README](../../../../../../README.MD) - JSU's Homepage Documentation.
