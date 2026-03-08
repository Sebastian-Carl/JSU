import * as CustomErrorClasses from "./constructor/error.custom.js";
import Raise from './builder/error.builder.js';
import { DefineProperty, Global, NameOf } from '../utils/custom.utils.js';
import { IsNullOrUndefined, IsStr } from '../../guards/type/guards.type.js';
import { IsStrEmpty } from '../../guards/format/guards.format.js';

/**
 *  Returns a customized collection of `@error_class_modules` and `@error_class_builder_modules`.
 */
function ERROR() {
    const ErrorAPI = {};
    const Constructors = { name: "Constructors", ...CustomErrorClasses };

    for (const Method of [Constructors, Raise]) {
        const Key = NameOf(Method);
        if (!IsNullOrUndefined(Key) && !IsStrEmpty(Key) && !Object.hasOwn(ErrorAPI, Key) && !(Key === "(ANONYMOUS)"))
            DefineProperty(ErrorAPI, NameOf(Method), Method, "med")
    }

    Global("ERROR", ErrorAPI, "soft");
}

ERROR();
