# JSU - Custom API - NameOf()

## Table Of Contents

- [JSU - Custom API - NameOf()](#jsu---custom-api---nameof)
  - [Table Of Contents](#table-of-contents)
  - [What it does?](#what-it-does)
  - [Parameter](#parameter)
  - [Example Usage](#example-usage)
  - [Navigate To](#navigate-to)

## What it does?

- `NameOf()` checks and retrieves the `name` property of the specified or given object in any case format.

## Parameter

- `obj` - The specified or given object to retrieve its `name` property.

## Example Usage

```js
const Os = [{ name: "o1" }, { NaMe: "o2" }, { NAme: "o3" }, { naME: "o4" }, { nAMe: "o5" }];

for (const O of Os) {
    console.log(Custom.NameOf(O)); // "o1" to "o5"
}
```

## Navigate To

- [Custom](../custom.md) - **_An API that contains only customized and/or enhanced version of utilities, methods, and more._**
  - [Clamp()](./clamp.md) - Mutates the given numerical value within the given `minimum` and `maximum` range.
  - [ConstructorOrTypeOf()](./constructorOrTypeOf.md) - Retrieves the `constructor` or `type` of the given argument.
  - [Generator()](./generator/generator.md) - A customized generator constructor for generating randomized `tokens`, `characters`, and `integer`.

- [JSU - README](../../../../README.MD) - JSU's Homepage Documentation.
