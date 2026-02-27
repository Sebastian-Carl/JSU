import * as T from "./data-types/data-types.js";
import * as F from "./formats/formats.js";

/**
 *  Contains validations methods for types such ah ***string***, ***null***,
 *  ***function*** and many more!
 */
export default function Guards() {
  const acc = {};

  for (const method of [...Object.values(T), ...Object.values(F)]) {
    if (!T.IsNullOrUndefined(method.name) && !F.IsStrEmpty(method.name) && !acc[method.name]) {
      Object.defineProperty(acc, method.name, {
        value: method,
        writable: false, configurable: false, enumerable: true,
      });
    }
  }

  return acc;
}
