import Custom from './custom/custom.js';
import DOM from './dom/dom.js';
import ERROR from './custom/error/error.js';
import Guards from './guards/guards.js';
import Primitives from './primitives/primitives.js';
import STORAGE from './storage/storage.js';
import { NameOf } from './custom/utils/custom.utils.js';

function Register(obj, key, data) {
    if (typeof obj !== "object" || typeof obj === "object" && (Array.isArray(obj) || obj instanceof Map || obj instanceof Set))
        throw new TypeError("Register(): Expects a valid object! ({})");

    if (key && typeof key !== "string")
        throw new TypeError("Register(): Expects a valid property key in string format! (key: string)");

    Object.defineProperty(obj, key, {
        value: data,
        writable: false, configurable: true, enumerable: true
    });
}

(function () {
    Register(globalThis, "Utils", {});
    let CurModule = undefined, PrevModule = undefined, TargetObj = undefined, ChangeState = false;

    for (const Module of [Custom, DOM, ERROR, Guards, Primitives, STORAGE]) {
        const ModuleID = NameOf(Module);

        if (!CurModule)
            CurModule = ModuleID;

        if (!TargetObj)
            TargetObj = globalThis["Utils"];

        if (CurModule !== ModuleID)
            ChangeState = true;

        if (ChangeState) {
            if (!PrevModule || PrevModule !== ModuleID)
                PrevModule = CurModule;

            ChangeState = false;
            CurModule = ModuleID;
            TargetObj = globalThis["Utils"];
        }

        for (const [PK, PV] of Object.entries(typeof Module === "function" ? Module() : Module)) {
            if (!Object.hasOwn(globalThis["Utils"], CurModule)) {
                Register(TargetObj, CurModule, {});
                TargetObj = TargetObj[CurModule];
            }

            if (!Object.hasOwn(globalThis, CurModule))
                Register(globalThis, CurModule, {});

            Register(globalThis[CurModule], PK, PV);
            Register(TargetObj, PK, PV);
        }
    }
})();
