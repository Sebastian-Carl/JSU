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
     *  Access the element's `CSSStyleDeclaration` and returns a set collection of for it.
     *
     *  @param element - The element to access its `CSSStyleDeclaration`.
     */
    StyleOf(element: Element): DOMStyleOfAPI;

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
