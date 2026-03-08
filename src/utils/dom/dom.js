import { DefineProperty, Global, NameOf } from '../custom/utils/custom.utils.js';
import ClassOf from './attr/attr.class.js';
import StyleOf from './attr/attr.style.js';
import Create from './element/create/element.create.js';
import VerifyTag from './element/tag-verifier/verifier.js';
import Mount from './lifecycle/mount.js';
import Unmount from './lifecycle/unmount.js';
import { Select, SelectAll } from "./element/query/dom.query.js";
import GetElementBy from "./element/getElementBy/dom.getElementBy.js";
import { IsNullOrUndefined } from '../guards/type/guards.type.js';
import { IsStrEmpty } from '../guards/format/guards.format.js';

/**
 *  A customized or enhanced collection of `DOM` methods.
 */
export default function DOM() {
    const DomAPI = {};

    for (const Method of [ClassOf, Create, GetElementBy, Mount, Unmount, Select, SelectAll, StyleOf, VerifyTag]) {
        const Key = NameOf(Method);

        if (!IsNullOrUndefined(Key) && !IsStrEmpty(Key) && !Object.hasOwn(DomAPI, Key) && !(Key === "(ANONYMOUS)"))
            DefineProperty(DomAPI, Key, Method, "med");
    }

    Global("DOM", DomAPI, "soft");
}

DOM();
