import CustomError from './error.base.js';

/**
 *  A custom error class for invalid or unknown arguments.
 *  @class Argument
 *  @extends { CustomError<ArgumentErrorMeta> }
 */
export class ArgumentError extends CustomError {
    /**
     * @param { ArgumentErrorMeta } meta
     */
    constructor(meta) {
        super(meta);
    }
}

/**
 *  A custom error class for invalid key-pair object.
 *
 *  @extends { CustomError<InvalidPropertyErrorMeta> }
 */
export class InvalidPropertyError extends CustomError {
    /**
     *  @param { InvalidPropertyErrorMeta } meta
     */
    constructor(meta) {
        super(meta);
    }
}

/**
 *  A custom error class for out-of-bounds index accessor at object(s).
 *  @extends { CustomError<IndexOutOfBoundsErrorMeta> }
 */
export class IndexOutOfBoundsError extends CustomError {
    /**
     *  @param { IndexOutOfBoundsErrorMeta } meta
     */
    constructor(meta) {
        super(meta);
    }
}

/**
 *  A custom error class for missing parameter value.
 *  @extends { CustomError<MissingParameterErrorMeta> }
 */
export class MissingParameterError extends CustomError {
    /**
     *  @param { MissingParameterErrorMeta } meta
     */
    constructor(meta) {
        super(meta);
    }
}

/**
 *  A custom error class for missing key-pair object.
 *  @extends { CustomError<MissingPropertyErrorMeta> }
 */
export class MissingPropertyError extends CustomError {
    /**
     *  @param { MissingPropertyErrorMeta } meta
     */
    constructor(meta) {
        super(meta);
    }
}

/**
 *  A custom error class for not supported method.
 *  @extends { CustomError<NotSupportedErrorMeta> }
 */
export class NotSupportedError extends CustomError {
    /**
     *  @param { NotSupportedErrorMeta } meta
     */
    constructor(meta) {
        super(meta);
    }
}

/**
 *  A custom error class for unknown key-pair object.
 *  @extends { CustomError<UnknownPropertyErrorMeta> }
 */
export class UnknownPropertyError extends CustomError {
    /**
     *  @param { UnknownPropertyErrorMeta } meta
     */
    constructor(meta) {
        super(meta);
    }
}

/**
 *  A custom error class for unknown element tag.
 *  @extends { CustomError<NoSuchElementTagErrorMeta> }
 */
export class NoSuchElementTagError extends CustomError {
    /**
     *  @param { NoSuchElementTagErrorMeta } meta
     */
    constructor(meta) {
        super(meta);
    }
}
