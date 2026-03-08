export interface FormatGuardsAPI {
    /**
     *  Validates whether if the specified ***function*** argument is ***anonymous***.
     *
     *  @param func - The function to validate.
     */
    IsFuncAnonymous(func: Function): boolean;

    /**
     *  Validates whether if the specified ***function*** argument is ***asynchronous***.
     *
     *  @param func - The function to validate.
     */
    IsFuncAsynchronous(func: Function): func is AsyncGeneratorFunction;

    /**
     *  Validates whether if the specified ***string*** argument includes lowercase characters.
     *
     *  @param str - The string to validate.
     */
    HasLowerCase(str: string): boolean;

    /**
     *  Validates whether if the specified ***string*** argument starts with lowercase character.
     *
     *  @param str - The string to validate.
     */
    IsStartsWithLowerCase(str: string): boolean;

    /**
     *  Validates whether if the specified ***string*** argument ends with lowercase character.
     *
     *  @param str - The string to validate.
     */
    IsEndsWithLowerCase(str: string): boolean;

    /**
     *  Validates whether if the specified ***string*** argument includes uppercase characters.
     *
     *  @param str - The string to validate.
     */
    HasUpperCase(str: string): boolean;

    /**
     *  Validates whether if the specified ***string*** argument starts with uppercase character.
     *
     *  @param str - The string to validate.
     */
    IsStartsWithUpperCase(str)

    /**
     *  Validates whether if the specified ***string*** argument ends with uppercase character.
     *
     *  @param str - The string to validate.
     */
    IsEndsWithUpperCase(str: string): boolean;

    /**
     *  Validates whether if the specified ***string*** argument includes numbers.
     *
     *  @param str - The string to validate.
     */
    HasNumbers(str: string): boolean;

    /**
     *  Validates whether if the specified ***string*** argument starts with number.
     *
     *  @param str - The string to validate.
     */
    IsStartsWithNumber(str: string): boolean;

    /**
     *  Validates whether if the specified ***string*** argument ends with number.
     *
     *  @param str - The string to validate.
     */
    IsEndsWithNumber(str: string): boolean;

    /**
     *  Validates whether if the specified ***string*** argument includes specified characters.
     *
     *  @param str - The string to validate.
     */
    HasSpecialCharacters(str: string): boolean;

    /**
     *  Validates whether if the specified ***string*** argument starts with special character.
     *
     *  @param str - The string to validate.
     */
    IsStartsWithSpecialCharacter(str: string): boolean;

    /**
     *  Validates whether if the specified ***string*** argument ends with special character.
     *
     *  @param str - The string to validate.
     */
    IsEndsWithSpecialCharacter(str: string): boolean;

    /**
     *  Validates whether if the specified ***string*** argument includes ASCII characters.
     *
     *  @param str - The string to validate.
     */
    HasASCII(str: string): boolean;

    /**
     *  Validates whether if the specified ***string*** argument starts with ASCII character.
     *
     *  @param str - The string to validate.
     */
    IsStartsWithASCII(str: string): boolean;

    /**
     *  Validates whether if the specified ***string*** argument ends with ASCII character.
     *
     *  @param str - The string to validate.
     */
    IsEndsWithASCII(str: string): boolean;

    /**
     *  Validates whether if the specified ***string*** argument is empty.
     *
     *  @param str - The string to validate.
     */
    IsStrEmpty(str: string): boolean;

    /**
     *  Validates whether if the specified ***array*** argument is empty.
     *
     *  @param arr - The array to validate.
     */
    IsArrEmpty(arr: Array<unknown>): arr is never[];

    /**
     *  Validates whether if the specified ***plain object*** is empty.
     *
     *  @param obj - The plain object to validate.
     */
    IsPlainObjEmpty(obj: { [prop: string]: unknown }): boolean;

    /**
     *  Validates whether if the specified ***map object*** is empty.
     *
     *  @param mObj - The map object to validate.
     */
    IsMapObjEmpty(mObj: Map<unknown, unknown>): boolean;

    /**
     *  Validates whether if the specified ***set object*** is empty.
     *
     *  @param sObj - The set object to validate.
     */
    IsSetObjEmpty(sObj: Set<unknown>): boolean;
}
