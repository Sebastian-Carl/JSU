export interface TypeGuardsAPI {
    /**
     *  Validates whether if the specified argument is `null` or `undefined`.
     *
     *  @param arg - The argument to validate.
     */
    IsNullOrUndefined<T>(arg: T): Extract<T, null | undefined>;

    /**
     *  Validates whether if the specified argument is a `string`.
     *
     *  @param arg - The argument to validate.
     */
    IsStr(arg: any): arg is string;

    /**
     *  Validates whether if the specified argument is an `array`.
     *
     *  @param arg - The argument to validate.
     */
    IsArr(arg: any): arg is Array;

    /**
     *  Validates whether if the specified argument is a `function`.
     *
     *  @param arg - The argument to validate.
     */
    IsFunc(arg: any): arg is Function;

    /**
     *  Validates whether if the specified argument is a `map object`.
     *
     *  @param arg - The argument to validate.
     */
    IsMapObj(arg: any): arg is Map;

    /**
     *  Validates whether if the specified argument is a `set object`.
     *
     *  @param arg - The argument to validate.
     */
    IsSetObj(arg: any): arg is Set;

    /**
     *  Validates whether if the specified argument is a `plain object`.
     *
     *  @param arg - The argument to validate.
     */
    IsPlainObj(arg: any): arg is { [prop: string]: any }

    /**
     *  Validates whether if the specified argument is a `boolean`.
     *
     *  @param arg - The argument to validate.
     */
    IsBool(arg: any): arg is boolean;

    /**
     *  Validates whether if the specified argument is a `number`.
     *
     *  @param arg - The argument to validate.
     */
    IsNum(arg: any): arg is number;

    /**
     *  Validates whether if the specified argument is a `Node`.
     *
     *  @param arg - The argument to validate.
     */
    IsNode(arg: any): arg is Node;

    /**
     *  Validates whether if the specified argument is a `ParentNode`.
     *
     *  @param arg - The argument to validate.
     */
    IsParentNode(arg: any): arg is ParentNode;

    /**
     *  Validates whether if the specified argument is a `ChildNode`.
     *
     *  @param arg - The argument to validate.
     */
    IsChildNode(arg: any): arg is ChildNode;

    /**
     *  Validates whether if the specified argument is an `Element` or instance of it.
     *
     *  @param arg - The argument to validate.
     */
    IsElement(arg: any): arg is Element;

    /**
     *  Validates whether if the specified argument is an `HTMLElement` or instance of it.
     *
     *  @param arg - The argument to validate.
     */
    IsHTMLElement(arg: any): arg is HTMLElement;

    /**
     *  Validates whether if the specified argument is an `HTMLUnknownElement` or instance of it.
     *
     *  @param arg - The argument to validate.
     */
    IsUnknownElement(arg: any): arg is HTMLUnknownElement;

    /**
     *  Validates whether if the specified argument is `Iterator`.
     *
     *  @param arg - The argument to validate.
     */
    IsIterator(arg: any): arg is Iterator;

    /**
     *  Validates whether if the specified argument is `RegExp`.
     *
     *  @param arg - The argument to validate.
     */
    IsRegExp(arg: any): arg is RegExp;
}
