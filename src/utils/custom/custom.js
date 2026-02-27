import * as CustomUtils from "./utils/custom.utils.js";
import Generator from './utils/generator/generator.js';

/**
 *  Returns a collection of customized `@modules` and/or `@utilities`.
 */
export default function Custom() {
    const acc = {};

    for (const method of [...Object.values(CustomUtils), Generator]) {
        if (!(method.name === null || method.name === undefined) && method.name.trim().length > 0 && !acc[method.name])
            Object.defineProperty(acc, method.name, {
                value: method,
                writable: false, configurable: false, enumerable: true
            });
    }

    return acc;
}
