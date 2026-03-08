export interface VariablesAPI {
    /**
     *  A collection of `HTMLElement` tags name.
     *
     *  ***Source***: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements
     */
    HTMLElementTags: Map<keyof HTMLElementTags, { Generate(): HTMLElement; }>;

    /**
     *  A collection of `SVGElement` tags name.
     *
     *  ***Source***: https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element
     */
    SVGElementTags: Map<keyof SVGElementTags, { Generate(): SVGElement; }>;

    /**
     *  A collection of `MathMLElement` tags name.
     *
     *  ***Source***: https://developer.mozilla.org/en-US/docs/Web/MathML/Reference/Element
     */
    MathElementTags: Map<keyof MathElementTags, { Generate(): MathMLElement; }>;

    /**
     *  A collection of available XML namespace of elements.
     */
    XMLNameSpace: ["http://www.w3.org/1998/Math/MathML", "http://www.w3.org/1999/xhtml", "http://www.w3.org/2000/svg"];
}
