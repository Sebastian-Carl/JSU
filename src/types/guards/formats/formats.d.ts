type FormatsModule = typeof import("../../../utils/guards/formats/formats.js");

type GuardsFormatAPI = {
    [K in keyof FormatsModule]: FormatsModule[K];
}
