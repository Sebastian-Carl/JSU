import { IsNullOrUndefined } from '../guards/type/guards.type.js';
import { IsStrEmpty } from '../guards/format/guards.format.js';
import * as CustomUtils from "./utils/custom.utils.js";
import Generator from './utils/generator/generator.js';

/**
 *  Attach a collection of customized `@modules` and/or `@utilities` to `globalThis`.
 */
export default function Custom() {
    const CustomAPI = {};

    for (const Method of [...Object.values(CustomUtils), Generator]) {
        const Key = CustomUtils.NameOf(Method);
        if (!IsNullOrUndefined(Key) && !IsStrEmpty(Key) && !Object.hasOwn(CustomAPI, Key) && !(Key === "(ANONYMOUS)"))
            CustomUtils.DefineProperty(CustomAPI, Key, Method, "med");
    }

    CustomUtils.Global("Custom", CustomAPI, "soft");
}
Custom();
