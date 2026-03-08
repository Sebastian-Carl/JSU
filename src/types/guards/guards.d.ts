import { FormatGuardsAPI } from "./format/guards.format.js";
import { TypeGuardsAPI } from "./type/guards.type.js";

export type GuardsAPI = FormatGuardsAPI & TypeGuardsAPI;

declare global {
    /**
     *  A collection of data types and formats guards validation.
     */
    var Guards: GuardsAPI;
}

export { }
