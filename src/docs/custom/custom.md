# JSU - Custom API

## Table Of Contents

- [JSU - Custom API](#jsu---custom-api)
  - [Table Of Contents](#table-of-contents)
  - [About](#about)
  - [Usage](#usage)
  - [Properties / Methods](#properties--methods)
  - [Example Usage](#example-usage)
  - [Navigate To](#navigate-to)

## About

- Provides and handles the attachment of available customized `ad-hoc` and/or `objects` from your projects runtime.

## Usage

```js
import "@carlsebastian/jsu"; // Loads all available APIs of JSU.

// OR specific module.

import "@carlsebastian/jsu/custom"; // Loads only Custom API of JSU.
```

## Properties / Methods

- [Clamp()](./utils/clamp.md) - Mutates the given numerical value within the given `minimum` and `maximum` range.
- [ConstructorOrTypeOf()](./utils/constructorOrTypeOf.md) - Retrieves the `constructor` or `type` of the given argument.
- [Generator()](./utils/generator/generator.md) - A customized generator constructor for generating randomized `tokens`, `characters`, and `integer`.
- [NameOf()](./utils/nameOf.md) - Retrieves the `name` property of the given object.

## Example Usage

```js
// #: Ensures that the given numerical value does not exceeds the given range.
const Pos = 10, minR = 2, maxR = 7;
console.log(Custom.Clamp(Pos, minR, maxR)); // 7

// #: Retrieves the constructor or type of the given argument.
const Obj = {};
console.log(Custom.ConstructorOrTypeOf(Obj)); // Object

// #: Generate a token that can be use for session id, user-id, password generator.
const Generate = new Custom.Generator(10, { secure: true });
console.log(Generate.NewToken()); // Generated token.

// #: Retrieves the name property of the given object.
const O = { NaME: "o1" };
console.log(Custom.NameOf(O)); // 'o1'
```

## Navigate To

- [JSU - APIs](../api/api.md) - A complete collection list of available APIs of ***JSU***.

- [JSU - README](../../../README.MD) - JSU's Homepage Documentation.
