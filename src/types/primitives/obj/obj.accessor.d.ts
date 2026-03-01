type ObjAccessorModule = typeof import("../../../utils/primitives/obj/obj.accessor.js");

type PrimitivesObjAccessorAPI = {
    [K in keyof ObjAccessorModule]: ObjAccessorModule[K];
}
