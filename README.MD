# README

## Table-Of-Contents

- [README](#readme)
  - [Table-Of-Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [About](#about)
  - [Installation](#installation)
  - [How To Use](#how-to-use)
  - [Example](#example)
  - [Source Code / Repository](#source-code--repository)
  - [License](#license)
  - [Navigate To](#navigate-to)

---

## Introduction

- Hello welcome to my first utility project **JavaScriptUtilities** (**JSU**) for `JavaScript`. This project provides a collection of **customs** and **enhanced** version of methods and/or utilities `ad-hoc` such as `TypeGuards`, `Formats`, `CustomizedErrors`, and many more!

## About

- I build this project for myself to enhanced my productivity and decided to make it public which might help other developer for re-writing common or mostly used `ad-hoc` utilities for their projects.

## Installation

```cmd
npm i @carlsebastian/jsu
```

## How To Use

- With bundler or path resolver.

```js
import "@carlsebastian/jsu";
```

- Or via HTML file:

```html
<html>
  <body>
    <!-- Must always be first or top order of other scripts -->
    <script type="module">
      import "@carlsebastian/jsu";
    </script>
    <script src="your-scripts-path"></script>
  </body>
</html>
```

- Without bundler or path resolver.

```js
import "./node_modules/@carlsebastian/jsu/global.js";
```

- Or via HTML file:

```html
<html>
  <body>
    <!-- Must always be first or top order of other scripts -->
    <script type="module" src="./node_modules/@carlsebastian/jsu/global.js"></script>
    <script src="your-scripts-path"></script>
  </body>
</html>
```

## Example

```js
// @Required
// Check #HowToUse section if you didn't check or read it, to avoid confusion.
import "@carlsebastian/jsu";

// #: Creating an anchor element with facebook link.
const Anchor = DOM.Create.HTMLElement("a", {
  // -- Pre-defined properties --
  ClassNames: ["link", "fb-link"], // Can also be a single class token by provided a string value.
  Id: "link-fb", // Unique identified (id).
  Text: "Facebook Link", // textContent.
  // Style property with CSSStyleDeclaration intellisense.
  Styles: {
    all: "unset",
    backgroundColor: "#153499",
    color: "#fff",
    padding: "10px 15px",
    cursor: "pointer"
  }
  // -- Other / Customized properties --
  href: "https://www.facebook.com/" // { [OtherAttr: string]: any }
});

// #: Mount or display it at <body> of html document.
const B = DOM.Select("body"); // <body>...</body>
DOM.Mount(B, Anchor); // Now visible to document contents or user's view.
```

## Source Code / Repository

- [Github - Sebastian-Carl/JSU](https://github.com/Sebastian-Carl/JSU)

## License

- [Apache 2.0](http://www.apache.org/licenses/)

## Navigate To

- [APIs](./src/docs/api/api.md) - *A complete collection list of available APIs of ***JSU***.*
