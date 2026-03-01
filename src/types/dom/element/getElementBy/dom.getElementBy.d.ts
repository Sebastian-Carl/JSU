interface DOMGetElementByAPI {
    /**
     *  Search and retrieves the elements with the given class name.
     *
     *  @param cls - The class name of element to search.
     *  @returns The collection of elements with the given class name.
     */
    ClassName(cls: string): HTMLCollectionOf<Element>;

    /**
     *  Search and retrieves the elements with the given class name.
     *
     *  @param cls - The class name of element to search.
     *  @param root - The parent element of where to search the elements with the given class name. (Default: Document)
     *  @returns The collection of elements with the given class name.
    */
    ClassName(cls: string, root?: ParentNode): HTMLCollectionOf<Element>;

    /**
     *  Search and retrieves the element with the given unique `id`.
     *
     *  @param id - The unique `id` of element to search.
     *  @returns The element with the given unique `id`.
     */
    ID(id: string): HTMLElement | null;

    /**
     *  Search and retrieves the element with the given unique `id`.
     *
     *  @param id - The unique `id` of element to search.
     *  @param root - The root element of where to search the element with the given `unique` id. (Default: Document)
     *  @returns The element with the given unique `id`.
     */
    ID(id: string, root?: ParentNode): HTMLElement | null;

    /**
     *  Search and retrieves the elements with the given tag.
     *
     *  @param id - The tag of element to search.
     *  @returns The collection of elements with the given tag.
     */
    TagName<T extends keyof ElementTags>(tag: T): ResolveTag<T>;

    /**
     *  Search and retrieves the elements with the given tag.
     *
     *  @param id - The tag of element to search.
     *  @param root - The parent element of where to search the elements with the given tag. (Default: Document)
     *  @returns The collection of elements with the given tag.
     */
    TagName<T extends keyof ElementTags>(tag: T, root?: ParentNode): ResolveTag<T>;

    /**
     *  Search and retrieves the elements with the given XML namespace and tag.
     *
     *  @param namespace - The XML namespace of element.
     *  @param tag - The tag of element with the given XML namespace to search.
     *  @returns The collection of elements with the given XML namespace and tag.
     */
    TagNameNS<NS extends XMLNameSpace, T extends keyof ElementTags>(namespace: NS, tag: T): ResolveTagNS<NS, T>;

    /**
     *  Search and retrieves the elements with the given XML namespace and tag.
     *
     *  @param namespace - The XML namespace of element.
     *  @param tag - The tag of element with the given XML namespace to search.
     *  @param root - The parent element of where to search the elements with the given XML namespace and tag. (Default: Document)
     *  @returns The collection of elements with the given XML namespace and tag.
     */
    TagNameNS<NS extends XMLNameSpace, T extends keyof ElementTags>(namespace: NS, tag: T, root?: ParentNode): ResolveTagNS<NS, T>;
}
