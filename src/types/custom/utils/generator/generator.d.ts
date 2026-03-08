/**
 *  Configuration for generator's contents.
 */
export interface GeneratorAPIConfig {
    /**
     *  A configuration state for including or excluding numerical values at generator's content.
     */
    numbers?: boolean;

    /**
     *  A configuration state for including or excluding lowercase characters at generator's content.
     */
    lowercase?: boolean;

    /**
     *  A configuration state for including or excluding symbol characters at generator's contents.
     */
    symbols?: boolean;

    /**
     *  A configuration state for including or excluding uppercase characters at generator's contents.
     */
    uppercase?: boolean;

    /**
     *  A configuration state for secure random values generator of generator's contents.
     *
     *  ***States***:
     *   - `true`: Sets entropy to 'window.crypto' for secure generator's randomized value (32-bits).
     *   - `false`: Sets entropy to `Math.random()` for fast but not secure generator's randomized contents.
     */
    secure?: boolean;
}

/**
 *  A collection of randomized content generators.
 */
export class GeneratorAPI {
    /**
     *  The `size` or `length` of contents of generators to generate.
     */
    Size: number;

    /**
     *  The maximum `size` or `length` of contents of generators to generate.
     */
    readonly Max: number;

    /**
     *  Configuration for generator's contents.
     */
    Conf?: GeneratorAPIConfig;

    /**
     *  A collection of characters that is used in generators as their contents referenced pool.
     */
    readonly Chars?: string[];

    /**
     *  Constructs the size and configuration for generator's contents.
     *
     *  ***Notes***:
     *   - If `size` is less than the generator's minimum `size` or higher than its maximum `size`, it will be
     *     clamped to it minimum and/or maximum `size`.
     *   - If both of configuration `lowercase` and `uppercase` are set to `false` state, the generator's would
     *     automatically use uppercase as preferred characters.
     *   - By default, the secure randomized of generators are disabled for performance efficiency, you can just enabled
     *     it for security related use for a little trade of performance.
     *
     *  @param size - The `size` or `length` of generator's contents to generate.
     *  @param conf - A configuration for generator's contents.
     */
    constructor(size: number, conf?: GeneratorAPIConfig);

    /**
     *  Generates a random integer value and returns it.
     *
     *  @param min - The minimum or lowest integer value it can generate. (Default: 0)
     *  @param max - The maximum or highest integer value it can generate. (Default: 1)
     */
    RandomInteger(min?: number, max?: number): number;

    /**
     *  Generates a set of randomized characters in lowercase and/or uppercase.
     */
    RandomCharacters(): string;

    /**
     *  Generates a new set of randomized tokens that can be used for ids, session id, etc.
     */
    NewToken(): string;
}
