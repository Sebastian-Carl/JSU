interface DOMClassOfAPI {
    /**
     *  Search the given `class` token at the element's `DOMTokenList`.
     *
     *  ***Notes***:
     *   - If the token is not in string format, it would automatically return a `false` state result.
     *
     *  @param token - The `class` token to search.
     */
    Has(token: string): boolean;

    /**
     *  Search every of the given collection of `class` tokens at the element's `DOMTokenList`.
     *
     *  ***Notes***:
     *   - If one or more of token at collection of token are not in string format, It would automatically
     *     return a `false` state result.
     *
     *  @param tokens - The collection of `class` token to search.
     */
    Has(...tokens: string[]): boolean;

    /**
     *  Retrieves the current collection of element's `DOMTokenList`.
     */
    List(): DOMTokenList;

    /**
     *  Removes the given `class` token at the element's `DOMTokenList`.
     *
     *  @param token - The `class` token to remove.
     */
    Remove(token: string): boolean;

    /**
     *  Removes the given `class` collection of tokens at the element's `DOMTokenList`.
     *
     *  @param token - The collection of `class` token to remove.
     */
    Remove(...tokens: string[]): boolean;

    /**
     *  Sets a new given `class` token at the element's `DOMTokenList`.
     *
     *  @param token - The `class` token to set.
     */
    Set(token: string): void;

    /**
     *  Sets a collection of new given `class` tokens at the element's `DOMTokenList`.
     *
     *  @param token - The collection of `class` token to set.
     */
    Set(...tokens: string[]): void;

    /**
     *  Toggles the state of the given `class` token at the element's `DOMTokenList`.
     *
     *  ***States***:
     *   - TRUE: The given `class` token will be added at the element's `class` attribute and `DOMTokenList`.
     *   - FALSE: The given `class` token will be remove at the element's `class` attribute and `DOMTokenList`.
     *
     *  @param token - The `class` token to toggle.
     *  @param forceState - Forcefully set the state of the given `class` token, despite its current state.
     *  @returns The new state of toggled `class` token.
     */
    Toggle(token: string, forceState?: boolean): boolean;

    /**
     *  Toggles the state of the given `class` collection tokens at the element's `DOMTokenList`.
     *
     *  ***States***:
     *   - TRUE: A certain collection of `class` token will be added at the element's `class` attribute and `DOMTokenList`.
     *   - FALSE: A certain collection of `class` token will be remove at the element's `class` attribute and `DOMTokenList`.
     *
     *  @param token - The `class` token to toggle.
     *  @param forceState - Forcefully set the state of the given `class` collection token, despite their current state.
     *  @returns The collection of new states of toggled `class` tokens.
     */
    Toggle(tokens: string[], forceState?: boolean): boolean[];
}
