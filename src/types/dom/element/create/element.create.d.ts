import { HTMLElementConfig, HTMLElementTags, MathElementConfig, MathElementTags, ResolveTag, SVGElementConfig, SVGElementTags } from "../element.js";

/**
 *  A collection of `DOM` element creation API methods.
 */
export interface DOMCreateAPI {
    /**
     *  Generates an instance of `HTMLElement` with the given qualified tag.
     *
     *  @param tag - The tag of `HTMLElement` to generate.
     *
     *  @throws {ArgumentError} - When parameter tag is not in string format.
     *  @throws {NoSuchElementTagError} - When the given tag of `HTMLElement` is not qualified.
     */
    HTMLElement<T extends keyof HTMLElementTags>(tag: T): ResolveTag<T>;

    /**
     *  Generates an instance of `HTMLElement` with the given qualified tag.
     *
     *  @param tag - The tag of `HTMLElement` to generate.
     *  @param conf - A configuration properties for `HTMLElement` instance.
     *
     *  @throws {ArgumentError} - When parameter tag is not in string format.
     *  @throws {NoSuchElementTagError} - When the given tag of `HTMLElement` is not qualified.
     */
    HTMLElement<T extends keyof HTMLElementTags>(tag: T, conf?: HTMLElementConfig): ResolveTag<T>;

    /**
     *  Generates an instance of `MathMLElement` with the given qualified tag.
     *
     *  @param tag - The tag of `MathMLElement` to generate.
     *
     *  @throws {ArgumentError} - When parameter tag is not in string format.
     *  @throws {NoSuchElementTagError} - When the given tag of `MathMLElement` is not qualified.
     */
    MathElement<T extends keyof MathElementTags>(tag: T): ResolveTag<T>;

    /**
     *  Generates an instance of `MathMLElement` with the given qualified tag.
     *
     *  @param tag - The tag of `MathMLElement` to generate.
     *  @param conf - A configuration properties for `MathMLElement` instance.
     *
     *  @throws {ArgumentError} - When parameter tag is not in string format.
     *  @throws {NoSuchElementTagError} - When the given tag of `MathMLElement` is not qualified.
     */
    MathElement<T extends keyof MathElementTags>(tag: T, conf?: MathElementConfig): ResolveTag<T>;

    /**
     *  Generates an instance of `SVGElement` with the given qualified tag.
     *
     *  @param tag - The tag of `SVGElement` to generate.
     *
     *  @throws {ArgumentError} - When parameter tag is not in string format.
     *  @throws {NoSuchElementTagError} - When the given tag of `SVGElement` is not qualified.
     */
    SVGElement<T extends keyof SVGElementTags>(tag: T): ResolveTag<T>;

    /**
     *  Generates an instance of `SVGElement` with the given qualified tag.
     *
     *  @param tag - The tag of `SVGElement` to generate.
     *  @param conf - A configuration properties for `SVGElement` instance.
     *
     *  @throws {ArgumentError} - When parameter tag is not in string format.
     *  @throws {NoSuchElementTagError} - When the given tag of `SVGElement` is not qualified.
     */
    SVGElement<T extends keyof SVGElementTags>(tag: T, conf?: SVGElementConfig): ResolveTag<T>;
}
