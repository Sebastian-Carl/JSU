import { DefineProperty, Global, NameOf } from '../custom/utils/custom.utils.js';
import { IsNullOrUndefined, IsPropertyAt } from '../guards/data-types/data-types.js';
import { IsStrEmpty } from '../guards/formats/formats.js';
import * as OAC from "./obj/obj.accessor.js";
import * as OI from "./obj/obj.iterator.js";
import STR from "./str/str.js";

/**
 *  Contains reusable primitives methods of ***array***, ***string***, and many more!.
 */
export default function Primitives() {
    const PrimitivesAPI = {};

    for (const Method of [...Object.values(OAC), ...Object.values(OI), STR]) {
        const Key = NameOf(Method);
        if (!IsNullOrUndefined(Key) && !IsStrEmpty(Key) && !IsPropertyAt(PrimitivesAPI, Key) && !(Key === "(ANONYMOUS)"))
            DefineProperty(PrimitivesAPI, Key, Method, "med");
    }

    Global("Primitives", PrimitivesAPI, "soft");
}

Primitives();
