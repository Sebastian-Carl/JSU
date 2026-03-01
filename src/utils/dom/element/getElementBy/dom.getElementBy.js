import Emit from '../../../custom/error/builder/error.builder.js';
import { IsNullOrUndefined, IsParentNode, IsStr } from '../../../guards/data-types/data-types.js';
import { IsStrEmpty } from '../../../guards/formats/formats.js';
import { XMLNameSpace } from '../../../variables.js';

/**
 *  Contains `DOMElement` retrieval methods.
 */
const GetElementBy = {
    /**
     *  The name of this object.
     */
    name: "GetElementBy",

    /**
     *  Search and retrieves the element that matches the given unique `id`.
     *
     *  @overload
     *  @param { string } id - The unique `id` of element to search.
     *  @returns { HTMLElement | "<NO_SUCH_ELEMENT_ID>" | null }
     */
    /**
     *  Search and retrieve the element that matches the given unique `id`.
     *
     *  @overload
     *  @param { string } id - The unique `id` of element to search.
     *  @param { ParentNode } [root] - The parent element of where to search and retrieve element with the given unique `id`.  (Default: Document)
     *  @returns { HTMLElement | "<NO_SUCH_ELEMENT_ID>" | null }
     */
    ID(id, root = document) {
        const Method = `${this.name}.ID`;

        if (!IsStr(id))
            Emit._ArgumentError(Method, "id", id, "String");

        if (IsStrEmpty(id)) {
            console.warn(`${Method}(@id: \'\'): Expects a non-empty-string! (Exited with null)`);
            return null;
        }

        if (typeof root.getElementById !== "function") {
            console.warn(`${Method}(@root: NOT_SUPPORTED_ROOT): Expects a root element that supports 'getElementById'! (Exited with null)`);
            return null;
        }

        return root.getElementById(id) ?? "<NO_SUCH_ELEMENT_ID>";
    },

    /**
     *  Search and retrieves the elements that matches the given class name.
     *
     *  @overload
     *  @param { string } cls - The class name of elements to search.
     *  @returns { HTMLCollectionOf<Element> }
     */
    /**
     *  Search and retrieves the elements that matches the given class name.
     *
     *  @overload
     *  @param { string } cls - The class name of elements to search.
     *  @param { ParentNode } [root] - The parent element of where to search and retrieve elements with the given class name.  (Default: Document)
     *  @returns { HTMLCollectionOf<Element> }
     */
    ClassName(cls, root = document) {
        const Method = `${this.name}.ClassName`;

        if (!IsStr(cls))
            Emit._ArgumentError(Method, "cls", cls, "String");

        if (IsStrEmpty(cls)) {
            console.warn(`${Method}(@cls: \'\'): Expects a non-empty-string! (Exited with [])`);
            return [];
        }

        if (!IsParentNode(root)) {
            console.warn(`${Method}(@root: NOT_SUPPORTED_ROOT): Expects a root element that supports 'getElementsByClassName'! (Exited with [])`);
            return [];
        }

        return root.getElementsByClassName(cls);
    },

    /**
     *  Search and retrieves the elements that matches the given tag name.
     *
     *  @template { keyof ElementTags } T
     *  @overload
     *  @param { T } tag - The tag of element to retrieve.
     *  @returns { HTMLCollectionOf<ResolveTag<T>> }
     */
    /**
     *  Search and retrieves the elements that matches the given tag name.
     *
     *  @template { keyof ElementTags } T
     *  @overload
     *  @param { T } tag - The tag of element to retrieve.
     *  @param { ParentNode } [root] - The parent element of where to search and retrieve the elements that matches the given tag.  (Default: Document)
     *  @returns { HTMLCollectionOf<ResolveTag<T>> }
     */
    TagName(tag, root = document) {
        const Method = `${this.name}.TagName`;

        if (!IsStr(tag))
            Emit._ArgumentError(Method, "tag", tag, "String");

        if (IsStrEmpty(tag)) {
            console.warn(`${Method}(@tag: \'\'): Expects a non-empty-string! (Exited with [])`);
            return [];
        }

        if (!IsParentNode(root)) {
            console.warn(`${Method}(@root: NOT_SUPPORTED_ROOT): Expects a root element that supports 'getElementsByTagName'! (Exited with [])`)
            return [];
        }

        return root.getElementsByTagName(tag);
    },

    /**
     *  Search and retrieves the elements that matches the given namespace and tag name.
     *
     *  @template { keyof ElementTags } T
     *  @template { XMLNameSpace } NS
     *  @overload
     *  @param { NS } namespace - The namespace of element to retrieve.
     *  @param { T } tag - The tag of element with the given namespace to retrieve.
     *  @returns { HTMLCollectionOf<ResolveTagNS<NS, T>> }
     */
    /**
     *  Search and retrieves the elements that matches the given namespace and tag name.
     *
     *  @template { keyof ElementTags } T
     *  @template { XMLNameSpace } NS
     *  @overload
     *  @param { NS } namespace - The namespace of element to retrieve.
     *  @param { T } tag - The tag of element with the given namespace to retrieve.
     *  @param { ParentNode } [root] - The parent element of where to search and retrieve the elements with the given namespace and tag. (Default: Document)
     *  @returns { HTMLCollectionOf<ResolveTagNS<NS, T>> }
     */
    TagNameNS(namespace, tag, root = document) {
        const Method = `${this.name}.TagNameNS`;

        if (!IsStr(namespace))
            Emit._ArgumentError(Method, "namespace", namespace, "String");

        if (!IsStr(tag))
            Emit._ArgumentError(Method, "tag", tag, "String");

        if (IsStrEmpty(namespace)) {
            console.warn(`${Method}(@namespace: \'\'): Expects a non-empty-string! (Exited with [])`);
            return [];
        }

        if (IsStrEmpty(tag)) {
            console.warn(`${Method}(@tag: \'\'): Expects a non-empty-string! (Exited with [])`);
            return [];
        }

        if (!XMLNameSpace.includes(namespace))
            console.warn(`${Method}(@namespace: ${namespace}): Received a unknown XML namespace of element! It will be treated as custom element but it might cause to throw an error when it violates the format.`);

        if (!IsParentNode(root)) {
            console.warn(`${Method}(@root: NOT_SUPPORTED_ROOT): Expects a root element that supports 'getElementsByTagNameNS'! (Exited with [])`);
            return [];
        }

        return root.getElementsByTagNameNS(namespace, tag);
    }
}

export default GetElementBy;
