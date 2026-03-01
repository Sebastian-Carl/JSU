import { DefineProperty, Global } from '../custom/utils/custom.utils.js';
import * as T from "./data-types/data-types.js";
import * as F from "./formats/formats.js";

/**
 *  Contains validations methods for types such ah ***string***, ***null***,
 *  ***function*** and many more!
 */
export default function Guards() {
  const GuardsAPI = {};

  for (const Method of [...Object.values(T), ...Object.values(F)]) {
    const Key = Method.name;
    if (!T.IsNullOrUndefined(Key) && !F.IsStrEmpty(Key) && !T.IsPropertyAt(GuardsAPI, Key))
      DefineProperty(GuardsAPI, Key, Method, "med");
  }

  Global("Guards", GuardsAPI, "soft");
}

Guards();
