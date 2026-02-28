import { NameOf } from '../custom/utils/custom.utils.js';
import ClassOf from './attr/attr.class.js';
import StyleOf from './attr/attr.style.js';
import Create from './element/create/element.create.js';
import VerifyTag from './element/tag-verifier/verifier.js';
import Mount from './lifecycle/mount.js';
import Unmount from './lifecycle/unmount.js';

/**
 *  A customized or enhanced collection of `DOM` methods.
 */
export default function DOM() {
    const Acc = {};

    for (const method of [ClassOf, Create, Mount, Unmount, StyleOf, VerifyTag]) {
        const Name = NameOf(method);

        if (!(Name === "(ANONYMOUS)"))
            Object.defineProperty(Acc, Name, {
                value: method,
                writable: false, configurable: false, enumerable: true
            })
    }

    return Acc;
}
