import { DefineProperty, Global, NameOf } from '../custom/utils/custom.utils.js';
import { IsNullOrUndefined } from '../guards/type/guards.type.js';
import { IsStrEmpty } from '../guards/format/guards.format.js';
import * as OAC from "./obj/obj.accessor.js";
import * as OI from "./obj/obj.iterator.js";
import Str from "./str/str.js";

/**
 *  Contains reusable primitives methods of ***array***, ***string***, and many more!.
 */
export default function Primitives() {
    const PrimitivesAPI = {};

    for (const Method of [...Object.values(OAC), ...Object.values(OI), Str]) {
        const Key = NameOf(Method);
        if (!IsNullOrUndefined(Key) && !IsStrEmpty(Key) && !Object.hasOwn(PrimitivesAPI, Key) && !(Key === "(ANONYMOUS)"))
            DefineProperty(PrimitivesAPI, Key, Method, "med");
    }

    Global("Primitives", PrimitivesAPI, "soft");
}

Primitives();
