type ObjIteratorModule = typeof import("../../../utils/primitives/obj/obj.iterator.js");

type PrimitivesIteratorAPI = {
    [K in keyof ObjIteratorModule]: ObjIteratorModule[K];
}
