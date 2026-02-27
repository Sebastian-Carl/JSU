/**
 *  Contains `@custom` and/or `@enhance` string methods.
 */
const Str = {
    /**
     *  Name of this object.
     */
    name: "Str",

    /**
     *  Contains collection of characters. (E.g. Lowercase(): a-z)
     */
    Chars: {
        /**
         *  Returns a set of character codes of `lowercase` characters.
         *
         *  @returns { string } The set of `lowercase` characters.
         */
        Lowercase() {
            return String.fromCharCode(...Array.from({ length: 26 }, (_, i) => i + 97));
        },

        /**
         *  Returns a set of character codes of `numeric` characters.
         *
         *  @returns { string } The set of `numeric` characters.
         */
        Numeric() {
            return String.fromCharCode(...Array.from({ length: 10 }, (_, i) => i + 48));
        },

        /**
         *  Returns a set of character codes of `special` or `symbol` characters.
         *
         *  @returns { string } The set of `special` or `symbol` characters.
         */
        Symbols() {
            return String.fromCharCode(...Array.from({ length: 15 }, (_, i) => i + 33)) + `=_[]@~{}<>?\\`;
        },

        /**
         *  Returns a set of character codes of `uppercase` characters.
         *
         *  @returns { string } The set of `uppercase` characters.
         */
        Uppercase() {
            return String.fromCharCode(...Array.from({ length: 26 }, (_, i) => i + 65));
        },
    },
}

export default Str;
