import { IsPlainObjEmpty } from '../../../guards/formats/formats.js';
import { IsBool, IsNum, IsPlainObj } from '../../../guards/data-types/data-types.js';
import { CountOf, KeysOf } from '../../../primitives/obj/obj.accessor.js';
import { EachOf, MapOf } from '../../../primitives/obj/obj.iterator.js';
import Str from '../../../primitives/str/str.js';
import Raise from '../../error/builder/error.builder.js';
import { Clamp } from '../custom.utils.js';

/**
 *  A collection of generators module.
 */
export default class Generator {
    /**
     *  The `size` of generators in this `@class` to be used.
     */
    Size = 0;

    /**
     *  A configuration that allows you to customize the generators contents.
     */
    Conf = {
        /**
         * @type { boolean } - Includes or excludes numerical characters (0-9) from generator's contents.
         */
        numbers: true,

        /**
         *  @type { boolean } - Includes or excludes symbol characters (!@#...) from generator's contents.
         */
        symbols: true,

        /**
         *  @type { boolean } - Includes or excludes lowercase characters (a-z) from generator's contents.
         */
        lowercase: true,

        /**
         *  @type { boolean } - Includes or excludes uppercase characters (A-Z) from generator's contents.
         */
        uppercase: true,

        /**
         *  @type { boolean } - Whether to change its entropy from `Math.random()` into `window.crypto`.
         *
         *  ***Notes***:
         *   - When entropy set to `window.crypto` it makes the generator of integer more secure but with some
         *     performance cost. While `Math.random()` does no reduce performance but procures a non-secure random integer value.
         */
        secure: false,
    };

    /**
     *  Construct the specified size and configuration to use throughout the generators.
     *
     *  ***Notes***:
     *   - If the specified `size` is less than 1, it will be automatically set by the generators requirement.
     *   - If `size` is below 0, it will be automatically converted into its absolute value.
     *   - The maximum `size` of generator(s) are 25, it will be automatically clamped if its above the maximum.
     *   - The generators in this class is not for security related use, as its uses `Math.random()` as its entropy.
     *
     *  @param { number } [Size] - The `size` of contents to generate. {Default: Generator-Specified}
     *  @param {{ numbers?: boolean, symbols?: boolean, lowercase?: boolean, uppercase?: boolean, secure?: boolean }} [Conf] - A configuration for security and customization of the generator's contents.
     */
    constructor(Size = this.Size, Conf = this.Conf) {
        Size = Math.abs(parseInt(Size));
        const CONFKeys = ["numbers", "symbols", "lowercase", "uppercase", "secure"];

        if (!IsNum(Size))
            Raise._ArgumentError(this.constructor.name, "Size", Size, "Number");

        if (!IsPlainObj(Conf))
            Raise._ArgumentError(this.constructor.name, "Conf", Conf, "Plain Object");

        if (IsPlainObjEmpty(Conf))
            Conf = { numbers: true, symbols: true, lowercase: true, uppercase: true, secure: false };

        Conf = CONFKeys.reduce((Acc, Key) => {
            const Keys = KeysOf(Conf);

            const Pos = MapOf(Keys, K => K.toLowerCase()).indexOf(Key);
            if (Pos < 0 || !IsBool(Conf[Keys[Pos]]))
                Acc[Key] = Key === "secure" ? false : true;
            else
                Acc[Key] = Conf[Keys[Pos]];

            return Acc;
        }, {});

        this.Conf = Conf;
        this.Size = Size;
        Object.defineProperties(this, {
            Max: {
                value: 25,
                writable: false, configurable: false, enumerable: false
            },
            Chars: {
                value: MapOf(KeysOf(Str.Chars), K => Str.Chars[K]()),
                writable: false, configurable: false, enumerable: false
            }
        });
    }

    /**
     *  Generate a randomized integer value within the specified `maximum` value.
     *
     *  ***Notes***:
     *   - If `max` is below zero (0), it will be automatically converted into its absolute value.
     *   - When `max` is zero, the generator would add a 1 to `max` value. (E.g. max = 0 -> max = 0 + 1)
     *
     *  @overload
     *  @param { number } [max] - The specified maximum value of integer to generate. (Default: 10)
     *  @returns { number } Returns a randomized integer within the specified range.
     */
    /**
     *  Generate a randomized integer value within the specified `minimum` and `maximum` range.
     *
     *  ***Notes***:
     *   - If `min` and/or `max` are below zero (0), it will automatically converted into their absolute value.
     *   - When `min` is greater than `max`, their value will be switched. (min -> max, max -> min)
     *   - If `min` and `max` are the same, the generator would add a 1 to `max` value. (E.g. min & max = 10, max + 1);
     *
     *  @overload
     *  @param { number } [min] - The specified minimum value of integer to generate. (Default: 0)
     *  @param { number } [max] - The specified maximum value of integer to generate. (Default: 1)
     *  @returns { number } Returns a randomized integer within the specified range.
     */
    RandomInteger(min = 0, max = 1) {
        const Method = "RandomInteger";
        let Range = MapOf([min, max], Val => Math.abs(parseInt(Val, 10)));

        EachOf(Range, (R, Pos) => {
            if (!IsNum(R))
                Raise._ArgumentError(Method, ["min", "max"][Pos], R, "Number");
        });

        if (Range[0] > Range[1])
            [Range[0], Range[1]] = [Range[1], Range[0]];

        if (Range[0] === Range[1])
            Range[1]++;

        const R = (Range[1] - Range[0]) + 1;
        if (this.Conf.secure) {
            // console.log(`--[GENERATING IN ${this.Conf.secure ? "SECURE-MODE" : "NON-SECURE-MODE"}]--`);
            const Arr = new Uint32Array(1); // 32-bit
            const MaxUInt = 0xFFFFFFFF; // 32-bit
            crypto.getRandomValues(Arr);
            return Range[0] + Math.floor((Arr[0] / (MaxUInt + 1)) * R);
        }

        return Math.floor(Math.random() * (Range[1] - Range[0] + 1) + Range[0]);
    }

    /**
     *  Generates a set of randomized characters (numeric & symbol characters are not included) within the specified `size`.
     *
     *  ***Notes***:
     *   - If `size` is below 6 or higher than 25, it will be automatically clamped between this value.
     *   - If both of configuration `lowercase` and `uppercase` as set to false, the generated will use `uppercase` as default.
     *
     *  @returns { string } The generated random characters.
     */
    RandomCharacters() {
        const Method = "RandomCharacters", CONFKeys = ["lowercase", "uppercase"];
        let [Size, Conf] = [
            Clamp(this.Size, 6, this.Max),
            { lowercase: this.Conf.lowercase, uppercase: this.Conf.uppercase }
        ];

        const Map = Conf.lowercase ? Conf.uppercase ? (this.Chars[CountOf(this.Chars) - 1] + this.Chars[0]) : this.Chars[0] : this.Chars[CountOf(this.Chars) - 1];

        return Array.from({ length: Size }, (_, I) => {
            return Map[this.RandomInteger(Map.length - 1)];
        }).join("");
    }

    /**
     *  Generates a randomized token string that can be used as temporary id, lobby, etc., and returns it.
     *
     *  ***Notes***:
     *   - If `size` is below 7 or higher than 25, it will be automatically clamped between this value.
     *   - If both of configuration `lowercase` and `uppercase` as set to false, the generated will use `uppercase` as default.
     *
     *  @returns { string } The generated token.
     */
    NewToken() {
        const Method = "NewToken";
        let [Size, Conf] = [Clamp(this.Size, 7, this.Max), this.Conf], Token = "";
        const CharsOnly = (Conf.lowercase || Conf.uppercase) && (!Conf.numbers && !Conf.symbols);
        const Chars = Conf.uppercase ? Conf.lowercase ? (this.Chars[CountOf(this.Chars) - 1] + this.Chars[0]) : this.Chars[CountOf(this.Chars) - 1] : this.Chars[0];
        const Map = Chars + (Conf.numbers ? Conf.symbols ? (this.Chars[1] + this.Chars[2]) : this.Chars[1] : this.Chars[2]);

        for (let I = 0; I < Size; I++) {
            if (CharsOnly) {
                Token += Chars[this.RandomInteger(Chars.length - 1)];
                continue;
            }

            if (/([A-Za-z]{6,})$/.test(Token)) {
                const NS = (Conf.numbers ? this.Chars[1] : "") + (Conf.symbols ? this.Chars[2] : "");
                Token += NS[this.RandomInteger(NS.length - 1)];
                continue;
            }

            if (Conf.symbols && /([^A-Za-z\d]{3,})$/.test(Token)) {
                const CN = Chars + (Conf.numbers ? this.Chars[1] : "");
                Token += CN[this.RandomInteger(CN.length - 1)];
                continue;
            }

            if (Conf.numbers && /\d{2,}$/.test(Token)) {
                const CS = Chars + (Conf.symbols ? this.Chars[2] : "");
                Token += CS[this.RandomInteger(CS.length - 1)];
                continue;
            }

            Token += Map[this.RandomInteger(Map.length - 1)];
        }

        return Token;
    }
}
