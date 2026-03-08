import { PrimitivesObjectAccessorAPI } from "./obj/obj.accessor.js";
import { PrimitivesObjectIteratorAPI } from "./obj/obj.iterator.js";
import { PrimitivesStrAPI } from "./str/str.js";

export type PrimitivesAPI = PrimitivesObjectAccessorAPI & PrimitivesObjectIteratorAPI & { Str: PrimitivesStrAPI };

declare global {
    /**
     *  A enhanced version of primitive methods API.
     */
    var Primitives: PrimitivesAPI;
}

export { }
