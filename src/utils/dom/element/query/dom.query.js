import Raise from '../../../custom/error/builder/error.builder.js';
import { IsStr, IsParentNode } from '../../../guards/type/guards.type.js';
import { IsStrEmpty } from '../../../guards/format/guards.format.js';

/**
 *  Search and retrieves the first `DOMElement` that matches the given selector.
 *
 *  @template { keyof ElementTags } T
 *  @overload
 *  @param { T } selector - The selector of element to search.
 *  @returns { ResolveTag<T> } The first element that matches the given selector.
 */
/**
 *  Search and retrieves the first `DOMElement` that matches the given selector.
 *
 *  @template { keyof ElementTags } T
 *  @overload
 *  @param { T } selector - The selector of element to search.
 *  @param { ParentNode } [root] - The parent node of where to look the given selector at. (Default: Document)
 *  @returns { ResolveTag<T> } The first element that matches the given selector.
 */
export function Select(selector, root = document) {
    const Method = "Select";

    if (!IsStr(selector))
        Raise._ArgumentError(Method, "selector", selector, "String");

    if (IsStrEmpty(selector)) {
        console.warn(`${Method}(@selector: \'\'): Expects a non-empty-string! (Exited with null)`);
        return null;
    }

    if (!IsParentNode(root)) {
        console.warn(`${Method}(@root: ${root}): Expects a root element that supports 'querySelector'! (Exited with null)`);
        return null;
    }

    return root.querySelector(selector);
}

/**
 *  Search and retrieves a collection of elements that matches the given selector.
 *
 *  @template { keyof ElementTags } T
 *  @overload
 *  @param { T } selector - The selector of elements to search.
 *  @returns { ResolveTag<T>[] } The collection of elements that matches the given selector.
 */
/**
 *  Search and retrieves a collection of elements that matches the given selector.
 *
 *  @template { keyof ElementTags } T
 *  @overload
 *  @param { T } selector - The selector of elements to search.
 *  @param { ParentNode } [root] - The parent node of where to look the given selector at. (Default: Document)
 *  @returns { ResolveTag<T>[] } The collection of elements that matches the given selector.
 */
export function SelectAll(selector, root = document) {
    const Method = "SelectAll";

    if (!IsStr(selector))
        Raise._ArgumentError(Method, "selector", selector, "String");

    if (IsStrEmpty(selector)) {
        console.warn(`${Method}(@selector: \'\'): Expects a non-empty-string! (Exited with null)`);
        return null;
    }

    if (!IsParentNode(root)) {
        console.warn(`${Method}(@root: ${root}): Expects a root element that supports 'querySelectorAll'! (Exited with null)`);
        return null;
    }

    return Array.from(root.querySelectorAll(selector));
}
