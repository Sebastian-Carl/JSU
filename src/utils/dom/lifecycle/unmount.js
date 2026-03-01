import Emit from '../../custom/error/builder/error.builder.js';
import { DefineProperty } from '../../custom/utils/custom.utils.js';
import { IsChildNode, IsNullOrUndefined, IsPropertyAt } from '../../guards/data-types/data-types.js';

/**
 *  Unmounts the given `childNode` to its `parentNode`.
 *
 *  ***Reference***:
 *      `remove()`
 *
 *  @overload
 *  @param { ChildNode } childNode - The `childNode` to unmount at its `parentNode`.
 *  @returns { void }
 */
/**
 *  Unmounts the given `childNode` collection to their `parentNode`.
 *
 *  ***Reference***:
 *      `remove()`
 *
 *  @overload
 *  @param { ...ChildNode[] } childNodes - The `childNode` collection to unmount to their respective `parentNode`.
 *  @return { void }
 */
export default function Unmount(...childNodes) {
    const Method = "Unmount", ICtr = childNodes.length, PCN = ICtr > 1 ? "childNodes" : "childNode";

    if (childNodes.length === 0) {
        console.warn(`${Method}(): Expects at least 1 or more 'childNode' to remove. (Exited)`);
        return;
    }

    for (const Node of childNodes) {
        if (!IsChildNode(Node))
            Emit._ArgumentError(Method, PCN, Node, "ChildNode");

        if (!IsPropertyAt(Node, "remove")) {
            console.warn(`${Method}(@${PCN}${ICtr > 1 ? `[${Node}]` : `: ${Node}`}: NOT_SUPPORTED_METHOD): A given child node does not support the 'remove()' method! (${ICtr > 1 ? "Skipped" : "Exited"})`);
            continue;
        }

        Node.remove();
    }
}

if (IsNullOrUndefined(globalThis.DOM))
    Global("DOM", {}, "soft");

DefineProperty(globalThis.DOM, "Unmount", Unmount, "soft")
