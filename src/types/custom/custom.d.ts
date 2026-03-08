import { CustomUtilitiesAPI } from "./utils/custom.utils.js"
import { GeneratorAPI } from "./utils/generator/generator.js"

export type CustomAPI = CustomUtilitiesAPI & GeneratorAPI;

declare global {
    /**
     *  A collection of customized utilities (`ad-hoc`)
     */
    var Custom: CustomAPI;
}

export { }
