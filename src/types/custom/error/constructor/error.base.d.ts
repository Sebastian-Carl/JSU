import { BaseMeta } from "./error.meta.js";

/**
 *  A central class constructor for making customized or enhanced error.
 */
export class CustomError<Meta extends BaseMeta = BaseMeta> extends Error {}
