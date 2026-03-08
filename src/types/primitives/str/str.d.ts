export interface PrimitivesStrAPI {
    /**
     *  A collection of characters.
     */
    readonly Chars: {
        /**
         *  A collection of numeric characters. (`0-9`)
         */
        Numeric(): string;

        /**
         *  A collection of lowercase characters. (`a-z`)
         */
        Lowercase(): string;

        /**
         *  A collection of special or symbol characters. (`~!@#$...`)
         */
        Symbols(): string;

        /**
         *  A collection of uppercase characters. (`A-Z`)
         */
        Uppercase(): string;
    }
}
