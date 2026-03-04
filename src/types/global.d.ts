/// <reference types="./api/api.d.ts" />
/// <reference types="./api/element.d.ts" />
/// <reference types="./dom/dom.d.ts" />
/// <reference types="./custom/custom.d.ts" />
/// <reference types="./custom/error/error.d.ts" />
/// <reference types="./guards/guards.d.ts" />
/// <reference types="./primitives/primitives.d.ts" />
/// <reference types="./storage/storage.d.ts" />

declare global {
    readonly var Utils: EnhancedGlobalUtilsAPI;
    readonly var DOM: DomAPI;
    readonly var Custom: CustomAPI;
    readonly var ERROR: ErrorAPI;
    readonly var Guards: GuardsAPI;
    readonly var Primitives: PrimitivesAPI;
    readonly var STORAGE: StorageAPI;
    readonly var GetElementBy: DOMGetElementByAPI;
}

export { };
