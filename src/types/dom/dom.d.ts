import { DOMClassOfAPI } from "./attr/attr.class.js";
import { DOMIdOfAPI } from "./attr/attr.id.js";
import { DOMStyleOfAPI } from "./attr/attr.style.js";
import { DOMCreateAPI } from "./element/create/element.create.js";
import { ElementTags, ResolveTag } from "./element/element.js";
import { DOMGetElementByAPI } from "./element/getElementBy/dom.getElementBy.js";
import { VerifierTagAPI } from "./element/tag-verifier/verifier.js";

export interface DomAPI {
    /**
     *  Access the element's `DOMTokenList` and returns set collection of for it.
     *
     *  @param element - The element to access the `DOMTokenList`.
     */
    ClassOf(element: Element): DOMClassOfAPI;

    /**
     *  A collection of customized and enhanced `create` of `DocumentObjectModel`.
     */
    Create: DOMCreateAPI;

    /**
     *  Access the element's `id` attribute and returns a set of for it.
     *
     *  @param element - The element to access the `id` attribute.
     */
    IdOf(element: Element): DOMIdOfAPI;

    /**
     *  A enhanced version collection of element retrieval methods.
     */
    GetElementBy: DOMGetElementByAPI;

    /**
     *  Mounts the given `childNode` to its given `parentNode`.
     *
     *  @param parentNode - The parent node to mount the given child node.
     *  @param childNode - The given child node to mount.
     */
    Mount(parentNode: ParentNode, childNode: ChildNode): void;

    /**
     *  Mounts the given `childNode` collection to its given `parentNode`.
     *
     *  @param parentNode - The parent node to mount the given collection of child node.
     *  @param childNodes - The given collection of child nodes to mount.
     */
    Mount(parentNode: ParentNode, ...childNodes: ChildNode[]): void;

    /**
     *  Search and retrieves the first element to match the given selector.
     *
     *  @param selector - The selector of element to search.
     *  @returns The element that matches the given selector.
     */
    Select<T extends keyof ElementTags>(selector: T): ResolveTag<T>;

    /**
     *  Search and retrieves the first element to match the given selector.
     *
     *  @param selector - The selector of element to search.
     *  @param root - The parent element to search the given element selector at. (Default: Document)
     *  @returns The element that matches the given selector.
     */
    Select<T extends keyof ElementTags>(selector: T, root: ParentNode): ResolveTag<T>;

    /**
     *  Search and retrieves the collection of elements that matches the given selector.
     *
     *  @param selector - The selector of elements to search.
     *  @returns The collection of elements that matches the given selector.
     */
    SelectAll<T extends keyof ElementTags>(selector: T): ResolveTag<T>;

    /**
     *  Search and retrieves the collection of elements that matches the given selector.
     *
     *  @param selector - The selector of elements to search.
     *  @param root - The parent element to search the given element selector at. (Default: Document)
     *  @returns The collection of elements that matches the given selector.
     */
    SelectAll<T extends keyof ElementTags>(selector: T, root?: ParentNode): ResolveTag<T>;

    /**
     *  Access the element's `CSSStyleDeclaration` and returns a set collection of for it.
     *
     *  @param element - The element to access its `CSSStyleDeclaration`.
     */
    StyleOf(element: Element): DOMStyleOfAPI;

    /**
     *  Unmounts the given `childNode` from its `parentNode`.
     *
     *  @param childNode - The child node to unmount.
     */
    Unmount(childNode: ChildNode): void;

    /**
     *  Unmounts the given `childNode` collection from their `parentNode`.
     *
     *  @param childNodes - The collection of child nodes to unmount.
     */
    Unmount(...childNodes: ChildNode[]): void;

    /**
     *  Verifies the given tag of element.
     *
     *  @param tag - The tag of element to verify.
     *
     *  @throw {ArgumentError} - When parameter tag is not in string format.
     */
    VerifyTag<KTag extends keyof ElementTags>(tag: KTag): VerifierTagAPI<KTag>;
}

declare global {
    /**
     *  A collection of customized and/or enhanced `DocumentObjectModel` methods.
     */
    var DOM: DomAPI;
}

export { }
