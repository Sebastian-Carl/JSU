import { ElementTags, ResolveTag } from "../element.js";

export interface VerifierTagAPI<K extends keyof ElementTags> {
    /**
     *  Verifies the given tag of element whether if its qualified as instance of `HTMLElement`.
     */
    HTMLElement(): ResolveTag<K>;

    /**
     *  Verifies the given tag of element whether if its qualified as instance of `MathMLElement`.
     */
    MathElement(): ResolveTag<K>;

    /**
     *  Verifies the given tag of element whether if its qualified as instance of `SVGElement`.
     */
    SVGElement(): ResolveTag<K>;
}
