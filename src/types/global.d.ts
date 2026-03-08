/// <reference types="./api/api.d.ts" />
/// <reference types="./api/element.d.ts" />
/// <reference types="./arithmetic/arithmetic.d.ts" />
/// <reference types="./dom/dom.d.ts" />
/// <reference types="./custom/custom.d.ts" />
/// <reference types="./custom/error/error.d.ts" />
/// <reference types="./guards/guards.d.ts" />
/// <reference types="./primitives/primitives.d.ts" />
/// <reference types="./storage/storage.d.ts" />

import { ArithmeticAPI } from "./arithmetic/arithmetic.js";
import { CustomAPI } from "./custom/custom.js";
import { DomAPI } from "./dom/dom.js";
import { DOMGetElementByAPI } from "./dom/element/getElementBy/dom.getElementBy.js";
import { ErrorAPI } from "./custom/error/error.js";
import { GuardsAPI } from "./guards/guards.js";
import { PrimitivesAPI } from "./primitives/primitives.js";
import { StorageAPI } from "./storage/storage.js";
import { VariablesAPI } from "./variables.js";

declare global {
    var Arithmetic: ArithmeticAPI;
    var Custom: CustomAPI;
    var DOM: DomAPI;
    var ERROR: ErrorAPI;
    var GetElementBy: DOMGetElementByAPI;
    var Guards: GuardsAPI;
    var Primitives: PrimitivesAPI;
    var STORAGE: StorageAPI;
    var Variables: VariablesAPI;
}

export { };
