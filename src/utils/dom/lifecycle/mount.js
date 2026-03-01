import Emit from '../../custom/error/builder/error.builder.js';
import { DefineProperty, Global } from '../../custom/utils/custom.utils.js';
import { IsChildNode, IsNullOrUndefined, IsParentNode, IsPropertyAt } from '../../guards/data-types/data-types.js';

/**
 *  Mounts the given `childNode` to the specified `parentNode`.
 *
 *  ***Reference***:
 *      `appendChild()`.
 *
 *  @overload
 *  @param { ParentNode } parentNode - The parent node to mount the given `childNode` at.
 *  @param { ChildNode } childNode - The `childNode` to mount at `parentNode`.
 *  @returns { void }
 */
/**
 *  Mounts the given `childNode` collection to the specified `parentNode`.
 *
 *  ***Reference***:
 *      `appendChild()`
 *
 *  @overload
 *  @param { ParentNode } parentNode - The parent node to mount the given `childNode` collection at.
 *  @param { ...ChildNode } childNodes - The `childNode` collection to mount at `parentNode`.
 *  @returns { void }
 */
export default function Mount(parentNode, ...childNodes) {
    const Method = "Mount", PCN = childNodes.length > 1 ? "childNodes" : "childNode";

    if (!IsParentNode(parentNode))
        Emit._ArgumentError(Method, "parentNode", parentNode, "ParentNode");

    if (childNodes.length === 0) {
        console.warn(`${Method}(@childNode: NOT_PROVIDED): Expects at least 1 or more child node(s) to mount! (Exited)`);
        return;
    }

    if (!IsPropertyAt(parentNode, "appendChild")) {
        console.warn(`${Method}(@parentNode: NOT_SUPPORTED_METHOD): The specified parent node does not support the property method 'appendChild'! (Exited)`);
        return;
    }

    for (const Node of childNodes) {
        if (!IsChildNode(Node))
            Emit._ArgumentError(Method, PCN, Node, "ChildNode");

        parentNode.appendChild(Node);
    }
}

if (IsNullOrUndefined(globalThis.DOM))
    Global("DOM", {}, "soft");

DefineProperty(globalThis.DOM, "Mount", Mount, "soft")
