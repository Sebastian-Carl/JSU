type CustomAPI = & {
    [K in keyof CustomUtilitiesAPI]: CustomUtilitiesAPI[K];
} & {
    Generator: typeof GeneratorAPI;
}

interface DomAPI {
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

interface ErrorAPI {
    Constructors: ErrorConstructorAPI;
    Emit: ErrorEmitterAPI;
}

type GuardsAPI = GuardsDataTypesAPI & GuardsFormatAPI;

type PrimitivesAPI = PrimitivesIteratorAPI & PrimitivesObjAccessorAPI & { Str: PrimitivesStrAPI };

interface StorageAPI {
    /**
     *  Indicates whether if the `StorageAPI` is supported on your or user's browser environment version.
     */
    IS_SUPPORTED(): boolean;

    /**
     *  A enhanced version of `localStorage` API.
     */
    LOCAL: LocalStorageAPI;

    /**
     *  A enhanced version of `sessionStorage` API.
     */
    SESSION: SessionStorageAPI;
}

interface EnhancedGlobalUtilsAPI {
    readonly Custom: CustomAPI;
    readonly DOM: DomAPI;
    readonly ERROR: ErrorAPI;
    readonly Guards: GuardsAPI;
    readonly Primitives: PrimitivesAPI;
    readonly STORAGE: StorageAPI;
}
