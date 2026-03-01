import Emit from '../../../custom/error/builder/error.builder.js';
import { IsArrEmpty, IsPlainObjEmpty, IsStrEmpty } from '../../../guards/formats/formats.js';
import { IsArr, IsElement, IsNum, IsPlainObj, IsStr } from '../../../guards/data-types/data-types.js';
import { CountOf } from '../../../primitives/obj/obj.accessor.js';
import ClassOf from '../../attr/attr.class.js';
import IdOf from '../../attr/attr.id.js';
import StyleOf from '../../attr/attr.style.js';
import VerifyTag from '../tag-verifier/verifier.js';

/* -- Helpers -- */
/**
 *  Handles the parameter validation of tag and configuration for element creation.
 *
 *  @param { string } caller - The caller id of this validation.
 *  @param { string } tag - The tag to validate.
 *  @param { Record<string, unknown> } conf - The configuration to validate.
 *  @returns { void } Does not return any as it only handles the validation process.
 */
function ValidateTagAndConfiguration(caller, tag, conf) {
    const Caller = IsStr(caller) ? caller : "(Anonymous)";

    if (!IsStr(tag))
        Emit._ArgumentError(Caller, "tag", tag, "String");

    if (!IsPlainObj(conf))
        Emit._ArgumentError(Caller, "conf", conf, "Plain Object ({})");
}

/**
 *  Formats the configuration of element's properties.
 *
 *  @template T
 *  @param { T } conf - the configuration to format.
 *  @param { Array<string> } definedKeys - The default or expected property id of the configuration.
 *  @returns { T extends Record<string, infer V> ? Record<string, V> : {} }
 */
function FormatConfig(conf, definedKeys) {
    if (!IsPlainObj(conf))
        return {};

    if (!IsArr(definedKeys) || IsArrEmpty(definedKeys))
        return conf;

    if (IsPlainObjEmpty(conf))
        return conf;

    const DKLower = definedKeys.map(K => String(K).trim().toLowerCase()), ConfKeys = Object.keys(conf);

    return ConfKeys.reduce((Acc, Key) => {
        const Pos = DKLower.indexOf(Key.trim().toLowerCase());
        if (Pos >= 0)
            Acc[definedKeys[Pos]] = conf[Key];
        else {
            if (!Object.hasOwn(Acc, "Others"))
                Acc["Others"] = {};

            Acc["Others"][Key] = conf[Key];
        }

        return Acc;
    }, {});
}

/**
 *  Contains methods for `DOM` creation objects.
 */
const Create = {
    /**
     *  The name of this object.
     */
    Name: "Create",

    /**
     *  Generates an instance of `HTMLElement` with the given qualified `tag`.
     *
     *  @template { HTMLElementTags["Key"] } T
     *  @param { T } tag - The tag of element to generate.
     *  @param { HTMLElementConfig } [conf] - A configuration properties of element.
     *  @returns { T extends HTMLElementTags["Key"] ? HTMLElementTags["Map"][T] : null }
     *
     *  @throws {ArgumentError} - When parameters are invalid.
     *  @throws {NoSuchElementTagError} - When the given element tag is not qualified.
     */
    HTMLElement(tag, conf = {}) {
        const Method = `${this.Name}.HTMLElement`;
        let [Tag, Conf] = [tag, conf];

        ValidateTagAndConfiguration(Method, Tag, Conf);

        const ThisElement = VerifyTag(Tag).HTMLElement();
        if (!IsElement(ThisElement)) {
            console.warn(`${Method}(): There's no such element tag of '${Tag}'! (Exited with null)`);
            return null;
        }

        const ConfigKeys = ["ClassNames", "Id", "Text", "Styles"];
        Conf = FormatConfig(Conf, ConfigKeys);
        if (CountOf(Conf) > 0) {
            if (Conf.ClassNames)
                ClassOf(ThisElement).Set(Conf.ClassNames);

            if (Conf.Id)
                IdOf(ThisElement).Set(Conf.Id);

            if (Conf.Text) {
                if (!IsStr(Conf.Text))
                    Conf.Text = String(Conf.Text);

                ThisElement.textContent = Conf.Text;
            }

            if (Conf.Styles)
                StyleOf(ThisElement).Set(Conf.Styles);

            if (Conf?.Others && IsPlainObj(Conf.Others) && CountOf(Conf.Others) > 0) {
                for (const [OK, OV] of Object.entries(Conf.Others))
                    ThisElement.setAttribute(OK, OV);
            }
        }

        return ThisElement;
    },

    /**
     *  Generates an instance of `SVGElement` with the given qualified tag.
     *
     *  @template { SVGElementTags["Key"] } T
     *  @param { T } tag - The tag of svg element to generate.
     *  @param { SVGElementConfig } [conf] - A configuration properties of svg element.
     *  @returns { T extends SVGElementTags["Key"] ? SVGElementTags["Map"][T] : null }
     *
     *  @throws {ArgumentError} - When parameters are invalid.
     *  @throws {NoSuchElementTagError} - When the given svg tag is not qualified.
     */
    SVGElement(tag, conf = {}) {
        const Method = `${this.Name}.SVGElement`;
        let [Tag, Conf] = [tag, conf];

        ValidateTagAndConfiguration(Method, Tag, Conf);

        const ThisElement = VerifyTag(Tag).SVGElement();
        if (!IsElement(ThisElement)) {
            console.warn(`${Method}(): There's no such svg element tag of '${Tag}'! (Exited with null)`);
            return null;
        }

        const ConfKeys = ["ClassNames", "Id", "Styles", "TabIndex", "XML_Language", "XML_Space"];
        Conf = FormatConfig(Conf);
        if (CountOf(Conf) > 0) {
            if (Conf.ClassNames)
                ClassOf(ThisElement).Set(Conf.ClassNames);

            if (Conf.Id)
                IdOf(ThisElement).Set(Conf.Id);

            if (Conf.Styles)
                StyleOf(ThisElement).Set(Conf.Styles);

            if (Conf.TabIndex) {
                if (!IsNum(Conf.Tabindex)) {
                    const ParsedIndex = parseInt(Conf.TabIndex, 10);
                    if (!IsNum(ParsedIndex))
                        Emit._ArgumentError(Method, "conf.TabIndex", Conf.TabIndex, "Number");

                    Conf.TabIndex = ParsedIndex;
                }

                ThisElement.setAttribute("tabindex", Conf.TabIndex);
            }

            if (Conf.XML_Language) {
                if (!IsStr(Conf.XML_Language))
                    Emit._ArgumentError(Method, "conf.XML_Language", Conf.XML_Language, "String");

                if (!IsStrEmpty(Conf.XML_Language))
                    ThisElement.setAttribute("xml:lang", Conf.XML_Language);
            }

            if (Conf.XML_Space) {
                if (!IsStr(Conf.XML_Space))
                    Emit._ArgumentError(Method, "conf.XML_Space", Conf.XML_Space, "String");

                if (IsStrEmpty(Conf.XML_Space) || Conf.XML_Space !== "default" && Conf.XML_Space !== "preserve")
                    Conf.XML_Space = "default";

                ThisElement.setAttribute("xml:space", Conf.XML_Space);
            }

            if (Conf?.Others && IsPlainObj(Conf.Others) && CountOf(Conf.Others) > 0) {
                for (const [OK, OV] of Object.entries(Conf.Others))
                    ThisElement.setAttribute(OK, OV);
            }
        }

        return ThisElement;
    },

    /**
     *  Generates an instance of `MathMLElement` with the given qualified tag.
     *
     *  @template { MathMLElementTags["Key"] } T
     *  @param { T } tag - The tag of math element to generate.
     *  @param { MathElementConfig } [conf] - A configuration properties of math element.
     *  @returns { T extends MathMLElementTags["Key"] ? MathMLElementTags["Map"][T] : null }
     *
     *  @throws {ArgumentError} - When parameters are invalid.
     *  @throws {NoSuchElementTagError} - When the given math tag is not qualified.
     */
    MathElement(tag, conf = {}) {
        const Method = `${this.Name}.MathElement`;
        let [Tag, Conf] = [tag, conf];

        ValidateTagAndConfiguration(Method, Tag, Conf);

        const ThisElement = VerifyTag(Tag).MathElement();
        if (!IsElement(ThisElement)) {
            console.warn(`${Method}(): There's no such math element tag of '${Tag}'! (Exited with null)`);
            return null;
        }

        const ConfKeys = ["Data", "Dir", "DisplayStyle", "Href", "Id", "MathBackground", "MathColor", "MathSize", "ScriptLevel"];
        Conf = FormatConfig(Conf, ConfKeys);
        if (CountOf(Conf) > 0) {
            if (Conf.Data) {
                if (!IsPlainObj(Conf.Data))
                    Emit._ArgumentError(Method, "conf.Data", Conf.Data, "Plain Object ({})");

                if (CountOf(Conf.Data) > 0)
                    for (const [DK, DV] of Object.entries(Conf.Data)) {
                        if (!IsStr(DV)) {
                            console.warn(`${Method}(@conf: { ${DK}: ${DV} }): Expects a string format value! (Skipped)`);
                            continue;
                        }

                        if (IsStrEmpty(DV))
                            continue;

                        ThisElement.setAttribute(`data-${DK.trim().toLowerCase()}`, DV);
                    }
            }

            if (Conf.Dir) {
                if (!IsStr(Conf.Dir))
                    Emit._ArgumentError(Method, "conf.Dir", Conf.Dir, "String");

                if (IsStrEmpty(Conf.Dir) || (Conf.Dir !== "ltr" && Conf.Dir !== "rtl"))
                    Conf.Dir = "ltr";

                ThisElement.setAttribute("dir", Conf.Dir);
            }

            if (Conf.DisplayStyle && typeof Conf.DisplayStyle === "boolean")
                ThisElement.setAttribute("displaystyle", Conf.DisplayStyle);

            if (Conf.Href) {
                if (!IsStr(Conf.Href))
                    Emit._ArgumentError(Method, "conf.Href", Conf.Href, "String");

                if (!IsStrEmpty(Conf.Href))
                    ThisElement.setAttribute("href", Conf.Href);
            }

            if (Conf.Id) {
                if (!IsStr(Conf.Id))
                    Emit._ArgumentError(Method, "conf.Id", Conf.Id, "String");

                if (!IsStrEmpty(Conf.Id))
                    ThisElement.id = Conf.Id;
            }

            if (Conf.ScriptLevel) {
                if (!IsStr(Conf.ScriptLevel))
                    Emit._ArgumentError(Method, "conf.ScriptLevel", Conf.ScriptLevel, "String");

                if (!IsStrEmpty(Conf.ScriptLevel))
                    ThisElement.setAttribute("scriptlevel", Conf.ScriptLevel);
            }

            if (Conf.MathBackground) {
                if (!IsStr(Conf.MathBackground))
                    Emit._ArgumentError(Method, "conf.MathBackground", Conf.MathBackground, "String");

                if (!IsStrEmpty(Conf.MathBackground))
                    ThisElement.setAttribute("mathbackground", Conf.MathBackground);
            }

            if (Conf.MathColor) {
                if (!IsStr(Conf.MathColor))
                    Emit._ArgumentError(Method, "conf.MathColor", Conf.MathColor, "String");

                if (!IsStrEmpty(Conf.MathColor))
                    ThisElement.setAttribute("mathcolor", Conf.MathColor);
            }

            if (Conf.MathSize) {
                if (!IsStr(Conf.MathSize))
                    Emit._ArgumentError(Method, "conf.MathSize", Conf.MathSize, "String");

                if (!IsStrEmpty(Conf.MathSize))
                    ThisElement.setAttribute("mathsize", Conf.MathSize);
            }

            if (Conf?.Others && IsPlainObj(Conf.Others) && CountOf(Conf.Others) > 0) {
                for (const [OK, OV] of Object.entries(Conf.Others))
                    ThisElement.setAttribute(OK, OV);
            }
        }

        return ThisElement;
    }
};
export default Create;
