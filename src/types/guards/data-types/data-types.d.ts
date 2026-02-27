type DataTypesModule = typeof import("../../../utils/guards/data-types/data-types.js");

type GuardsDataTypesAPI = {
    [K in keyof DataTypesModule]: DataTypesModule[K];
}
