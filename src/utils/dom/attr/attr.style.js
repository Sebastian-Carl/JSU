import Emit from '../../custom/error/builder/error.builder.js';
import { IsPlainObjEmpty, IsStrEmpty } from '../../guards/formats/formats.js';
import { IsArr, IsElement, IsNullOrUndefined, IsPlainObj, IsStr } from '../../guards/data-types/data-types.js';
import { CountOf } from '../../primitives/obj/obj.accessor.js';
import { DefineProperty, Global } from '../../custom/utils/custom.utils.js';

/**
 *  Access the element's style object and returns a collection object methods for it.
 *
 *  @param { Element } element - The target element.
 *  @returns The response object method for mutating style of element.
 */
export default function StyleOf(element) {
    const Method = "StyleOf";

    if (!IsElement(element))
        Emit._ArgumentError(Method, "element", element, "Element");

    if (!("style" in element))
        Emit._NotSupportedError(Method, "style");

    /** @type { CSSStyleDeclaration } */
    const StyleObj = element.style;
    return {
        /**
         *  Set and apply the CSSStyle object properties from the target element.
         *
         *  @param { CSSStyleDeclaration } CSSObj - The CSSStyle object properties.
         *  @returns { void }
         */
        Set(CSSObj = {}) {
            const Caller = `${Method}.Set`;

            if (!IsPlainObj(CSSObj))
                Emit._ArgumentError(Caller, "CSSObj", CSSObj, "Plain Object ({})");

            if (IsPlainObjEmpty(CSSObj))
                return;

            for (const [SK, SV] of Object.entries(CSSObj)) {
                if (!(SK in StyleObj)) {
                    console.warn(`${Caller}(@CSSObj: { ${SK}: ... }): Unknown CSS property! (Skipped)`);
                    continue;
                }

                if (!IsStr(SV)) {
                    console.warn(`${Caller}(@CSSObj: { ${SK}: ${SV} }): Expects a string format value! (Skipped)`);
                    continue;
                }

                if (IsStrEmpty(SV)) {
                    console.warn(`${Caller}(@CSSObj: { ${SK}: "" }): Expects a value! (Skipped)`);
                    continue;
                }

                StyleObj[SK] = SV;
            }
        },

        /**
         *  Removes the specified CSS property from the target element.
         *
         *  @overload
         *  @param { keyof CSSStyleDeclaration } CSSProperty - The CSS property to remove.
         *  @returns { boolean }
         */
        /**
         *  Removes the specified CSS properties from the target element.
         *
         *  @overload
         *  @param { Array<keyof CSSStyleDeclaration> } CSSProperties - The CSS properties to remove.
         *  @returns { boolean }
         */
        Remove(...CSSProperties) {
            const Caller = `${Method}.Remove`, ICtr = CountOf(CSSProperties), P = ICtr > 1 ? "CSSProperties" : "CSSProperty";

            if (ICtr === 0)
                return false;

            for (const SK of CSSProperties) {
                const PV = ICtr > 1 ? `[${SK}]` : `: ${SK}`
                if (!IsStr(SK)) {
                    console.warn(`${Caller}(@${P}${PV}): Expects a CSS property to be in string format! (Skipped)`);
                    continue;
                }

                if (IsStrEmpty(SK)) {
                    console.warn(`${Caller}(@${P}${PV}): Expects a non-empty value! (Skipped)`);
                    continue;
                }

                if (!(SK in StyleObj)) {
                    console.warn(`${Method}(@${P}${PV}): Unknown CSS Property! (Skipped)`);
                    continue;
                }

                StyleObj.removeProperty(SK);
            }

            return true;
        },

        /**
         *  Returns the current value of the specified CSSStyle property.
         *
         *  @param { keyof CSSStyleDeclaration } CSSProperty - The CSS property to retrieve.
         *  @returns { string | null }
         */
        Get(CSSProperty) {
            const Caller = `${Method}.Get`;
            if (!IsStr(CSSProperty))
                Emit._ArgumentError(Caller, "CSSProperty", CSSProperty, "String");

            if (IsStrEmpty(CSSProperty)) {
                console.warn(`${Caller}(@CSSProperty: ${CSSProperty}): Expects a non-empty string key value! (Exited with null)`);
                return null;
            }

            if (!(CSSProperty in StyleObj)) {
                console.warn(`${Caller}(@CSSProperty: ${CSSProperty}): Unknown CSS property! (Exited with null)`);
                return null;
            }

            const Value = StyleObj[CSSProperty];

            return IsStrEmpty(Value) ? "<NO_DATA>" : Value;
        }
    }
}

if (IsNullOrUndefined(globalThis.DOM))
    Global("DOM", {}, "soft");

DefineProperty(globalThis.DOM, "StyleOf", StyleOf, "soft");
