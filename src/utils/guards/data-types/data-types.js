/**
 *  Validates whether if the specified argument is `null` or `undefined`.
 *
 * @template T
 *  @param { T } arg - The argument to validate.
 *  @returns { arg is Extract<T, null | undefined> }
 */
export function IsNullOrUndefined(arg) {
    return arg === null || arg === undefined;
}

/**
 *  Validates whether if the specified argument is a `string`.
 *
 *  @param { any } arg - The argument to validate.
 *  @returns { arg is string }
 */
export function IsStr(arg) {
    return typeof arg === "string" || arg?.constructor === String;
}

/**
 *  Validates whether if the specified argument is an `array`.
 *
 *  @template T
 *  @param { T } arg - The argument to validate.
 *  @returns { arg is Array<T> }
 */
export function IsArr(arg) {
    return typeof arg === "object" && Array.isArray(arg);
}

/**
 *  Validates whether if the specified argument is a `function`.
 *
 *  @param { any } arg - The argument to validate.
 *  @returns { arg is Function }
 */
export function IsFunc(arg) {
    return typeof arg === "function" || arg?.constructor === Function;
}

/**
 *  Validates whether if the specified argument is a `map object`.
 *
 *  @template T
 *  @param { T } arg - The argument to validate.
 *  @returns { arg is T extends Map<infer K, infer V> ? Map<K, V> : boolean }
 */
export function IsMapObj(arg) {
    return arg?.constructor === Map || arg instanceof Map;
}

/**
 *  Validates whether if the specified argument is a `set object`.
 *
 *  @template T
 *  @param { T } arg - The argument to validate.
 *  @returns { arg is Set<T> }
 */
export function IsSetObj(arg) {
    return arg?.constructor === Set || arg instanceof Set;
}

/**
 *  Validates whether if the specified argument is a `plain object`.
 *
 *  @template T
 *  @param { T } arg - The argument to validate.
 *  @returns { arg is T extends { [p: string]: infer V } ? Record<string, V> : boolean }
 */
export function IsPlainObj(arg) {
    return typeof arg === "object" && !(IsArr(arg) || IsNullOrUndefined(arg) || IsMapObj(arg) || IsSetObj(arg));
}

/**
 *  Validates whether if the specified argument is a `boolean`.
 *
 *  @param { any } arg - The argument to validate.
 *  @returns { arg is boolean }
 */
export function IsBool(arg) {
    return typeof arg === "boolean" || arg?.constructor === Boolean;
}

/**
 *  Validates whether if the specified argument is a `number`.
 *
 *  @param { any } arg - The argument to validate.
 *  @returns { arg is number }
 */
export function IsNum(arg) {
    return (typeof arg === "number" || arg?.constructor === Number) && !Number.isNaN(arg);
}

/**
 *  Validates whether if the specified argument is a `Node`.
 *
 *  @param { any } arg - The argument to validate.
 *  @returns { arg is Node }
 */
export function IsNode(arg) {
    return arg?.constructor === Node;
}

/**
 *  Validates whether if the specified argument is a `ParentNode`.
 *
 *  @param { any } arg - The argument to validate.
 *  @returns { arg is ParentNode }
 */
export function IsParentNode(arg) {
    if (arg === null || arg === undefined)
        return false;

    const IsQueryAble = [
        "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS"
    ].every(prop => typeof arg[prop] === "function");

    return "children" in arg && "firstElementChild" in arg && "lastElementChild" in arg && IsQueryAble;
}

/**
 *  Validates whether if the specified argument is a `ChildNode`.
 *
 *  @param { any } arg - The argument to validate.
 *  @returns { arg is ChildNode }
 */
export function IsChildNode(arg) {
    if (IsNullOrUndefined(arg))
        return false;

    return (
        typeof arg.after === "function" && typeof arg.before === "function" &&
        typeof arg.remove === "function" && typeof arg.replaceWith === "function"
    );
}

/**
 *  Validates whether if the specified argument is an `Element` or instance of it.
 *
 *  @param { any } arg - The argument to validate.
 *  @returns { arg is Element }
 */
export function IsElement(arg) {
    return arg?.constructor === Element || arg instanceof Element;
}

/**
 *  Validates whether if the specified argument is an `HTMLElement` or instance of it.
 *
 *  @param { any } arg - The argument to validate.
 *  @returns { arg is HTMLElement }
 */
export function IsHTMLElement(arg) {
    return arg?.constructor === HTMLElement || arg instanceof HTMLElement;
}

/**
 *  Validates whether if the specified argument is an `HTMLUnknownElement` or instance of it.
 *
 *  @param { any } arg - The argument to validate.
 *  @returns { arg is HTMLUnknownElement }
 */
export function IsUnknownElement(arg) {
    return arg?.constructor === HTMLUnknownElement || arg instanceof HTMLUnknownElement;
}

/**
 *  Validates whether if the specified argument is `Iterator`.
 *
 *  @param { any } arg - The argument to validate.
 *  @returns { arg is Iterator }
 */
export function IsIterator(arg) {
    return arg?.constructor === Iterator || arg instanceof Iterator;
}

/**
 *  Validates whether if the specified argument is `RegExp`.
 *
 *  @param { any } arg - The argument to validate.
 *  @returns { arg is RegExp }
 */
export function IsRegExp(arg) {
    return arg?.constructor === RegExp || arg instanceof RegExp;
}

/**
 *  Validates whether if the specified argument supported the specified property.
 *
 *  @param { any } arg - The argument to validate.
 *  @param { string } property - The property to check.
 *  @returns { boolean } The validation state result.
 */
export function IsPropertyAt(arg, property) {
    if (IsNullOrUndefined(arg) || !IsStr(property) || property.trim().length === 0)
        return false;

    return Object.hasOwn(arg, property) || property in arg;
}
