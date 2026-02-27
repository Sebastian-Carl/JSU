import * as OAC from "./obj/obj.accessor.js";
import * as OI from "./obj/obj.iterator.js";
import STR from "./str/str.js";

/**
 *  Contains reusable primitives methods of ***array***, ***string***, and many more!.
 */
export default function Primitives() {
    const acc = {};

    for (const method of [...Object.values(OAC), ...Object.values(OI), STR]) {
        if (!(method.name === null || method.name === undefined) && !(method.name.trim() <= 0) && !acc[method.name])
            Object.defineProperty(acc, method.name, {
                value: method,
                writable: false, configurable: false, enumerable: true
            });
    }

    return acc;
}
