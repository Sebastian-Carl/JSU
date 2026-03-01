import Emit from '../../../custom/error/builder/error.builder.js';
import { IsStrEmpty } from '../../../guards/formats/formats.js';
import { IsNullOrUndefined, IsStr } from '../../../guards/data-types/data-types.js';
import * as VAR from '../../../variables.js';
import { DefineProperty, Global } from '../../../custom/utils/custom.utils.js';

/**
 *  Verifies the specified tag of `Element` and returns its representative `Element`.
 *
 *  @template { keyof ElementTags } KTag
 *  @param { KTag } tag - The tag of Element to verify.
 *  @returns The response object methods for element instance verification type.
 */
export default function VerifyTag(tag) {
    const Method = "VerifyTag";

    if (!IsStr(tag) || IsStrEmpty(tag))
        Emit._ArgumentError(Method, "tag", tag, "String");

    tag = tag.trim().toLowerCase()
    return {
        /**
         *  Verifies the provided tag from the collection of `HTMLElementTagsMap` and returns a generated
         *  `HTMLElement` instance from it, if its qualified.
         *
         *  @returns { VerifierTagAPI<KTag> }
         */
        HTMLElement() {
            if (!VAR.HTMLElementTags.has(tag))
                Emit._NoSuchElementTagError(`${Method}.HTMLElement`, "tag", tag, "HTMLElement");

            return VAR.HTMLElementTags.get(tag)?.Generate() ?? null;
        },

        /**
         *  Verifies the provided tag from the collection of `SVGElementTagsMap` and returns generated
         *  `SVGElement` instance from it, if its qualified.
         *
         *  @returns { VerifierTagAPI<K> }
         */
        SVGElement() {
            if (!VAR.SVGElementTags.has(tag))
                Emit._NoSuchElementTagError(`${Method}.SVGElement`, "tag", tag, "SVGElement");

            return VAR.SVGElementTags.get(tag)?.Generate() ?? null;
        },

        /**
         *  Verifies the provided tag from the collection of `MathMLElementTagsMap` and returns generated
         *  `MathMlElement` instance from it, if its qualified.
         *
         *  @returns { VerifierTagAPI<K> }
         */
        MathElement() {
            if (!VAR.MathMLElementTags.has(tag))
                Emit._NoSuchElementTagError(`${Method}.MathMLElement`, "tag", tag, "MathMLElement");

            return VAR.MathMLElementTags.get(tag)?.Generate();
        }
    }
}

if (IsNullOrUndefined(globalThis.DOM))
    Global("DOM", {}, "soft");

DefineProperty(globalThis.DOM, "VerifyTag", VerifyTag, "soft");
