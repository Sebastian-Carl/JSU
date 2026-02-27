type HTMLElementTags = HTMLElementTagNameMap;
type MathElementTags = MathMLElementTagNameMap;
type SVGElementTags = SVGElementTagNameMap;
type ElementTags = HTMLElementTags & MathElementTags & SVGElementTags;
type CSSDeclaration = CSSStyleDeclaration;

type HTMLElementConfig = {
    ClassNames?: string | string[];
    Id?: string;
    Text?: string;
    Styles?: CSSDeclaration;
    [OtherAttr: string]: any;
}

type MathElementConfig = {
    Data?: {
        [DataCustomKey: string]: string;
    },
    Dir?: "ltr" | "rtl";
    DisplayStyle?: boolean;
    Href?: string;
    /** @deprecated */
    MathBackground?: string;
    /** @deprecated */
    MathColor?: string;
    /** @deprecated */
    MathSize?: string;
    ScriptLevel?: string;
}

type SVGElementConfig = {
    ClassNames?: string | string[];
    Id?: string;
    Styles?: CSSDeclaration;
    XML_Language?: string;
    TabIndex?: number;
    XML_Space?: "default" | "preserve";
    [OtherAttr: string]: any;
}
