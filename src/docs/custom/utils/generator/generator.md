# JSU - Custom API - Generator()

## Table Of Contents

- [JSU - Custom API - Generator()](#jsu---custom-api---generator)
  - [Table Of Contents](#table-of-contents)
  - [What It Does?](#what-it-does)
  - [Parameters](#parameters)
  - [Properties / Methods](#properties--methods)
  - [Example Usage](#example-usage)
  - [Navigate To](#navigate-to)

## What It Does?

- Provides a pre-made random generator methods which can be use on however you use it such as game's token session, lobby token, and more!

## Parameters

- `size` - The size of generator's contents to generate.
- `conf` - A configuration for customizing the contents of generators and secureness of this generator's contents.
  - `conf.lowercase` - Accepts a `boolean` state, and determines whether to include or exclude lowercase characters from generator's contents. (`a-z`)
  - `conf.numbers` - Accepts a `boolean` state, and determines whether to include or exclude numerical characters from generator's contents. (`0-9`)
  - `conf.secure` - Accepts a `boolean` state, and determines the entropy to use for generating the generator's contents. (`crypto` | `Math.random()`)
  - `conf.symbols` - Accepts a `boolean` state, and determines whether to include or exclude symbol characters from generator's contents. (`~!@#$%^&*()-_+=`...)
  - `conf.uppercase` - Accepts a `boolean` state, and determines whether to include or exclude uppercase characters from generator's contents. (`A-Z`)

## Properties / Methods

- [NewToken()](./methods/generator.newToken.md) - Generates a randomized sequence of characters of `A-Z`, `a-z`, `0-9` and `symbols`
- [RandomCharacters()](./methods/generator.randomCharacters.md) - Generates a sequence of randomized characters of `A-Z` and/or `a-z`.
- [RandomInteger()](./methods/generator.randomInteger.md) - Generates a randomized integer value from the given `minimum` and `maximum` range.

## Example Usage

```js
const Generate = new Custom.Generator(10, { secure: true });

// #: Generate a sequence of randomized token that can be use for security such as session id, validation token, etc.
// #: Only when configuration's 'secure' property is enabled.
const Token = Generate.NewToken();

// #: Generate a sequence of randomized characters that can be used for security such as session id, validation token, etc.
// #: Only when configuration's 'secure' property is enabled.
const CToken = Generate.RandomCharacters();

// #: Generate a randomized integer value.
const RInt = Generate.RandomInteger();
```

## Navigate To

- [Custom](../../custom.md) - ***An API that contains only customized and/or enhanced version of utilities, methods, and more.***
  - [Clamp()](../clamp.md) - Mutates the given numerical value within the given `minimum` and `maximum` range.
  - [ConstructorOrTypeOf()](../constructorOrTypeOf.md) - Retrieves the `constructor` or `type` of the given argument.
  - [NameOf()](../nameOf.md) - Retrieves the `name` property of the given object.

- [JSU - README](../../../../../README.MD) - JSU's Homepage Documentation.
