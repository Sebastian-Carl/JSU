import * as CustomErrorClasses from "./constructor/error.custom.js";
import Emit from './builder/error.builder.js';

/**
 *  Returns a customized collection of `@error_class_modules` and `@error_class_builder_modules`.
 *  @returns {import('./constructor/error.custom.js').ErrorConstructorsAPI & import('./builder/error.builder.js').ErrorEmitterAPI}
 */
export default function ERROR() {
    const ErrorAPI = {};
    const Constructors = { name: "Constructors", ...CustomErrorClasses };

    for (const Method of [Constructors, Emit]) {
        if (!(Method.name === null || Method.name === undefined) && (Method.name.trim().length > 0) && !ErrorAPI[Method.name])
            Object.defineProperty(ErrorAPI, Method.name, {
                value: Method,
                writable: false, configurable: false, enumerable: true
            });
    }

    return ErrorAPI;
}
