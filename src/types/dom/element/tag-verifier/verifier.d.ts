interface VerifierTagAPI<K extends keyof ElementTags> {
    /**
     *  Verifies the given tag of element whether if its qualified as instance of `HTMLElement`.
     */
    HTMLElement(): K extends keyof HTMLElementTags ? HTMLElementTags[K] : null;

    /**
     *  Verifies the given tag of element whether if its qualified as instance of `MathMLElement`.
     */
    MathElement(): K extends keyof MathElementTags ? MathElementTags[K] : null;

    /**
     *  Verifies the given tag of element whether if its qualified as instance of `SVGElement`.
     */
    SVGElement(): K extends keyof SVGElementTags ? SVGElementTags[K] : null;
}
