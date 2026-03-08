import { CSSDeclaration } from "../element/element.js";

export interface DOMStyleOfAPI {
    /**
     *  Set the given `CSSStyle` object properties from the element.
     *
     *  @param CSSObj - The `CSSStyle` object properties to set.
     */
    Set(CSSObj: CSSDeclaration): void;

    /**
     *  Removes the given `CSSStyle` property from the element.
     *
     *  @param CSSProperty - The `CSSStyle` property to remove.
     *  @returns The state of `CSSStyle` property removal process result.
     */
    Remove(CSSProperty: keyof CSSDeclaration): boolean;

    /**
     *  Removes the given `CSSStyle` properties collection from the element.
     *
     *  @param CSSProperty - The collection of `CSSStyle` properties to remove.
     *  @returns The state of `CSSStyle` properties removal process result.
     */
    Remove(...CSSProperties: (keyof CSSDeclaration)[]): boolean;

    /**
     *  Retrieves the current data value of the given `CSSStyle` property of the element.
     *
     *  @param CSSProperty - The `CSSStyle` property to retrieve.
     *  @returns The retrieved data of given `CSSStyle` property.
     */
    Get(CSSProperty: keyof CSSDeclaration): string | null;
}
