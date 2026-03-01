import Emit from '../../custom/error/builder/error.builder.js';
import { IsStrEmpty } from '../../guards/formats/formats.js';
import { IsElement, IsNullOrUndefined, IsStr } from '../../guards/data-types/data-types.js';
import { DefineProperty, Global } from '../../custom/utils/custom.utils.js';

/**
 *  Access the `id` attribute of element and returns a set of methods for it.
 *
 *  @param { Element } element - The element to access the `id` attribute.
 *  @returns The set of methods for `id` attribute.
 */
export default function IdOf(element) {
    const Method = "IdOf";

    if (!IsElement(element))
        Emit._ArgumentError(Method, "element", element, "Element");

    return {
        /**
         *  The current unique `id` of element.
         *
         *  ***Note***:
         *   - If the element has no `id`, the default value would be '\<NO_ID\>'.
         */
        Value: IsStrEmpty(element.id) || IsNullOrUndefined(element.id) ? "\<NO_ID\>" : element.id,

        /**
         *  Removes the `id` of the element.
         *
         *  @returns { boolean } The response state result of removal `id` process.
         */
        Remove() {
            if (!element.hasAttribute("id")) {
                console.warn(`${Method}.Remove(@element): Does not currently have an id! (Exited)`);
                return false;
            }

            element.removeAttribute("id");
            this.Value = "<NO_ID>";
            return true;
        },

        /**
         *  Set the current unique `id` of the element.
         *
         *  @param id - The new unique `id` to set.
         *  @returns { string } The new current unique `id` of element.
         */
        Set(id = "") {
            const Caller = `${Method}.Set`;

            if (!IsStr(id))
                Emit._ArgumentError(Caller, "id", id, "String");

            if (IsStrEmpty(id)) {
                element.removeAttribute("id");
                this.Value = "<NO_ID>";
                return "<NO_ID>";
            }

            element.setAttribute("id", id);
            this.Value = id;
        },
    }
}

if (IsNullOrUndefined(globalThis.DOM))
    Global("DOM", {}, "soft");

DefineProperty(globalThis.DOM, "IdOf", IdOf, "soft");
