export type HTMLElementTags = HTMLElementTagNameMap;
export type MathElementTags = MathMLElementTagNameMap;
export type SVGElementTags = SVGElementTagNameMap;
export type ElementTags = HTMLElementTags & MathElementTags & SVGElementTags;
export type CSSDeclaration = CSSStyleDeclaration;

export type XMLNameSpace = "http://www.w3.org/1998/Math/MathML" | "http://www.w3.org/1999/xhtml" | "http://www.w3.org/2000/svg";

export type HTMLElementConfig = {
    ClassNames?: string | string[];
    Id?: string;
    Text?: string;
    Styles?: CSSDeclaration;
    [OtherAttr: string]: any;
}

export type MathElementConfig = {
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

export type SVGElementConfig = {
    ClassNames?: string | string[];
    Id?: string;
    Styles?: CSSDeclaration;
    XML_Language?: string;
    TabIndex?: number;
    XML_Space?: "default" | "preserve";
    [OtherAttr: string]: any;
}

export type ResolveTag<T extends keyof ElementTags> =
    T extends keyof HTMLElementTags ? HTMLElementTags[T] :
    T extends keyof MathElementTags ? MathElementTags[T] :
    T extends keyof SVGElementTags ? SVGElementTags[T] : null;

export type ResolveTagNS<NS extends XMLNameSpace, T extends keyof ElementTags> =
    NS extends "http://www.w3.org/1998/Math/MathML" ?
    T extends keyof MathElementTags ? MathElementTags[T] : MathMLElement :
    NS extends "http://www.w3.org/1999/xhtml" ?
    T extends keyof HTMLElementTags ? HTMLElementTags[T] : HTMLElement :
    NS extends "http://www.w3.org/2000/svg" ?
    T extends keyof SVGElementTags ? SVGElementTags[T] : SVGElement :
    never;
