import Emit from '../../custom/error/builder/error.builder.js';
import { IsStrEmpty } from '../../guards/formats/formats.js';
import { IsArr, IsElement, IsStr } from '../../guards/data-types/data-types.js';
import { CountOf } from '../../primitives/obj/obj.accessor.js';

/**
 *  Access the `DOMTokenList` ('class') attribute of the specified target element.
 *
 *  @param { Element } element - The target element.
 *  @returns The response object methods for mutating class of element.
 *
 *  @throws {ArgumentError} - When there's no element provided or an invalid element provided.
 *  @throws {NotSupportedError} - When the provided element does not support 'classList' property.
 */
export default function ClassOf(element) {
    const Method = "ClassOf";

    if (!IsElement(element))
        Emit._ArgumentError(Method, "element", element, "Element");

    if (!("classList" in element))
        Emit._NotSupportedError(Method, "classList");

    const ClassList = element.classList;
    return {
        /**
         *  Checks if the specified `class` token is existing at the element's `DOMTokenList`.
         *
         *  @overload
         *  @param { string } token - The token to check.
         *  @returns { boolean } The response state result of validation.
         */
        /**
         *  Checks if the specified collection of `class` tokens are existing at the element's `DOMTokenList`.
         *
         *  @overload
         *  @param { string[] } tokens - The collection of tokens to check.
         *  @returns { boolean } The response state result of validation.
         */
        Has(...tokens) {
            const Caller = `${Method}.Has`, ICtr = CountOf(tokens);

            if (ICtr === 0)
                return false;

            if (ICtr === 1)
                return IsStr(tokens[0]) && !IsStrEmpty(tokens[0]) && ClassList.contains(tokens[0]);

            return tokens.every(token =>
                IsStr(token) && !IsStrEmpty(token) && ClassList.contains(token)
            );
        },

        /**
         *  Retrieve and returns the collection of element's `DOMTokenList`.
         *
         *  @returns { DOMTokenList } The response object result of retrieval.
         */
        List() {
            return ClassList;
        },

        /**
         *  Removes the specified `class` token from the element's `DOMTokenList`.
         *
         *  @overload
         *  @param { string } token - The token to remove.
         *  @returns { boolean } The response state result of token removal.
         */
        /**
         *  Removes the specified collection of `class` tokens from the element's `DOMTokenList`.
         *
         *  @overload
         *  @param { string[] } tokens - The collection of tokens to remove.
         *  @returns { boolean } The response state result of tokens removal.
         */
        Remove(...tokens) {
            const Caller = `${Method}.Remove`, ICtr = CountOf(tokens);

            if (ICtr === 0)
                return false;

            for (const token of tokens) {
                if (!IsStr(token)) {
                    console.warn(`${Caller}(@${ICtr > 1 ? "tokens" : "token"}: ${ICtr > 1 ? `[${token}]` : token}): Expected to be in string format! (Skipped)`);
                    continue;
                }

                if (IsStrEmpty(token))
                    continue;

                ClassList.remove(token);
            }

            return true;
        },

        /**
         *  Set (or update) the specified `class` token from the element's `DOMTokenList`.
         *
         *  @overload
         *  @param { string } token - The token to set (or update).
         *  @returns { void }
         */
        /**
         *  Set (or update) the specified collection of `class` tokens from the element's `DOMTokenList`.
         *
         *  @overload
         *  @param { string[] } tokens - The collection of tokens to set (or update).
         *  @returns { void }
         */
        Set(...tokens) {
            const Caller = `${Method}.Set`, ICtr = CountOf(tokens);

            if (ICtr === 0)
                return;

            for (const token of tokens.flat(Infinity)) {
                if (!IsStr(token)) {
                    console.warn(`${Caller}(@${ICtr > 1 ? "tokens" : "token"}: ${ICtr > 1 ? `[${token}]` : token}): Expected to be in string format! (Skipped)`);
                    continue;
                }

                if (IsStrEmpty(token))
                    continue;

                ClassList.add(token);
            }
        },

        /**
         *  Toggles the state of the specified `class` token from the element's `DOMTokenList`.
         *
         *  ***States***:
         *   - If the specified token is not currently existing in the element's `DOMTokenList`,
         *     it will be added automatically to the element's `DOMTokenList`, or else, if present, it will be removed
         *     from the element's `DOMTokenList`.
         *
         *  @overload
         *  @param { string } token - The token to toggle.
         *  @param { boolean } [forceState] - A state to set forcefully from the token despite its current state.
         *  @returns { boolean } The response state result of toggled state.
         */
        /**
         *  Toggles the state of the specified collection of `class` tokens from the element's `DOMTokenList`.
         *
         *  ***States***
         *   - If a certain token from the collection of tokens is not currently existing in the element's `DOMTokenList`,
         *     it will be added automatically to the element's `DOMTokenList`, or else, if present, it will be removed
         *     from the element's `DOMTokenList`.
         *
         *  @overload
         *  @param { string[] } tokens - The collection of tokens to toggle.
         *  @param { boolean } [forceState] - A state to set forcefully from the token despite its current state.
         *  @returns { boolean } The response state result of toggled states.
         */
        Toggle(tokens, forceState) {
            const Caller = `${Method}.Toggle`;

            if (!IsArr(tokens))
                tokens = [tokens];

            const ICtr = CountOf(tokens);
            if (ICtr === 0)
                return false;

            if (forceState && typeof forceState !== "boolean")
                Emit._ArgumentError(Caller, "forceState", forceState, "Boolean");

            const Response = [];
            for (const token of tokens) {
                if (!IsStr(token)) {
                    console.warn(`${Caller}(@${ICtr > 1 ? "tokens" : "token"}: ${ICtr > 1 ? `[${token}]` : token}): Expected to be in string format! (Skipped)`);
                    continue;
                }

                if (IsStrEmpty(token))
                    continue;

                Response.push(forceState ? ClassList.toggle(token, forceState) : ClassList.toggle(token));
            }

            return CountOf(Response) > 1 ? Response : Response[0];
        },
    }
}
