import * as CustomErrorClasses from "./constructor/error.custom.js";
import Emit from './builder/error.builder.js';
import { DefineProperty, Global, NameOf } from '../utils/custom.utils.js';
import { IsNullOrUndefined, IsPropertyAt, IsStr } from '../../guards/data-types/data-types.js';
import { IsStrEmpty } from '../../guards/formats/formats.js';

/**
 *  Returns a customized collection of `@error_class_modules` and `@error_class_builder_modules`.
 *  @returns {import('./constructor/error.custom.js').ErrorConstructorsAPI & import('./builder/error.builder.js').ErrorEmitterAPI}
 */
function ERROR() {
    const ErrorAPI = {};
    const Constructors = { name: "Constructors", ...CustomErrorClasses };

    for (const Method of [Constructors, Emit]) {
        const Key = NameOf(Method);
        if (!IsNullOrUndefined(Key) && !IsStrEmpty(Key) && !IsPropertyAt(ErrorAPI, Key) && !(Key === "(ANONYMOUS)"))
            DefineProperty(ErrorAPI, NameOf(Method), Method, "med")
    }

    Global("ERROR", ErrorAPI, "soft");
}

ERROR();
