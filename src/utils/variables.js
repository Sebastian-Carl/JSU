/**
 *  A collection of HTMLElements tags.
 *
 *  ***Source***: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements
 *
 *  @type { Map<string, { Generate: () => HTMLElement }> }
 */
export const HTMLElementTags = [
    "a", "abbr", "acronym", "address", "address", "area", "article", "aside", "audio", "b", "base", "bdi",
    "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col",
    "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em",
    "embed", "fencedframe", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset",
    "geolocation", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe",
    "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu",
    "meta", "meter", "nav", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option",
    "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby",
    "s", "samp", "script", "search", "section", "select", "selectioncontent", "slot", "small", "source", "span",
    "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot",
    "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"
].reduce((Acc, Tag) => {
    const T = Tag.trim().toLowerCase();
    Acc.set(T, { Generate: () => document.createElement(T) });
    return Acc;
}, new Map([]));

/**
 *  A collection of SVGElements tags.
 *
 *  ***Source***: https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element
 *
 *  @type { Map<string, { Generate: () => SVGElement}> }
 */
export const SVGElementTags = [
    "a", "animate", "animateMotion", "animateTransform", "circle", "clipPath", "defs", "desc", "ellipse",
    "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting",
    "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR",
    "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting",
    "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient",
    "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect",
    "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tspan", "use",
    "view"
].reduce((Acc, Tag) => {
    const T = Tag.trim().toLowerCase();
    Acc.set(T, { Generate: () => document.createElementNS("http://www.w3.org/2000/svg", T) });
    return Acc;
}, new Map([]));

/**
 *  A collection of MathMLElements tags.
 *
 *  ***Source***: https://developer.mozilla.org/en-US/docs/Web/MathML/Reference/Element
 *
 *  @type { Map<string, { Generate: () => MathMLElement}> }
 */
export const MathMLElementTags = [
    "math", "maction", "annotation", "annotation-xml", "menclose", "merror", "mfenced", "mfrac", "mi", "mmultiscripts",
    "mn", "mo", "mover", "mpadded", "mphantom", "mpresscripts", "mroot", "mrow", "ms", "semantics", "mspace",
    "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"
].reduce((Acc, Tag) => {
    const T = Tag.trim().toLowerCase();
    Acc.set(T, { Generate: () => document.createElementNS("http://www.w3.org/1998/Math/MathML", T)});
    return Acc;
}, new Map([]));
