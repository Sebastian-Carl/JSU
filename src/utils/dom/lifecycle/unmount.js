import Raise from '../../custom/error/builder/error.builder.js';
import { IsChildNode } from '../../guards/type/guards.type.js';

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
            Raise._ArgumentError(Method, PCN, Node, "ChildNode");

        Node.remove();
    }
}
