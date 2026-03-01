import { IsNullOrUndefined, IsPropertyAt } from '../guards/data-types/data-types.js';
import { IsStrEmpty } from '../guards/formats/formats.js';
import * as CustomUtils from "./utils/custom.utils.js";
import Generator from './utils/generator/generator.js';

/**
 *  Attach a collection of customized `@modules` and/or `@utilities` to `globalThis`.
 */
export default function Custom() {
    const CustomAPI = {};

    for (const Method of [...Object.values(CustomUtils), Generator]) {
        const Key = CustomUtils.NameOf(Method);
        if (!IsNullOrUndefined(Key) && !IsStrEmpty(Key) && !IsPropertyAt(CustomAPI, Key) && !(Key === "(ANONYMOUS)"))
            CustomUtils.DefineProperty(CustomAPI, Key, Method, "med");
    }

    CustomUtils.Global("Custom", CustomAPI, "soft");
}
Custom();
