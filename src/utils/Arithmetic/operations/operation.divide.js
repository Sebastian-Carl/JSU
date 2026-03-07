import Raise from '../../custom/error/builder/error.builder.js';
import { NormalizeNumbers } from '../../custom/utils/custom.utils.js';
import { IsNum } from '../../guards/data-types/data-types.js';

/**
 *  Accumulates the total divided value of the given numerical values.
 *
 *  @overload
 *  @param { number } num1 - The first and base numerical value of this operation.
 *  @param { number } num2 - The second numerical value to divide with the first numerical value.
 *  @returns { number } The total accumulated value of the given numerical values.
 */
/**
 *  Accumulates the total divided value of the given numerical values.
 *
 *  @overload
 *  @param { number } num1 - The first and base numerical value of this operation.
 *  @param { number } num2 - The second numerical value to divide with the first numerical value.
 *  @param { number } num3 - The third numerical value to divide with the first and second numerical value.
 *  @returns { number } The total accumulated value of the given numerical values.
 */
/**
 *  Accumulates the total divided value of the given numerical values.
 *
 *  @overload
 *  @param { number } num1 - The first and base numerical value of this operation.
 *  @param { number } num2 - The second numerical value to divide with the first numerical value.
 *  @param { number } num3 - The third numerical value to divide with the first and second numerical value.
 *  @param { number } num4 - The fourth numerical value to divide with the first, second, and third numerical value.
 *  @returns { number } The total accumulated value of the given numerical values.
 */
/**
 *  Accumulates the total divided value of the given numerical values.
 *
 *  @overload
 *  @param { number } num1 - The first and base numerical value of this operation.
 *  @param { number } num2 - The second numerical value to divide with the first numerical value.
 *  @param { number } num3 - The third numerical value to divide with the first and second numerical value.
 *  @param { number } num4 - The fourth numerical value to divide with the first, second, and third numerical value.
 *  @param { number } num5 - The fifth numerical value to divide with the first, second, third, and fourth numerical value.
 *  @returns { number } The total accumulated value of the given numerical values.
 */
/**
 *  Accumulates the total divided value of the given numerical values.
 *
 *  @overload
 *  @param { ...number } nums - The collection of numerical values to divide.
 *  @returns { number } The total accumulated value of the given numerical values.
 */
export default function Divide(...nums) {
    const Method = "Divide", ICtr = nums.length, P = ["num1", "num2", "num3", "num4", "num5"];

    if (ICtr < 2)
        Raise._MissingParameterError(Method, P[ICtr], undefined);

    const NUMS = NormalizeNumbers(...nums);
    if (ICtr === 2) {
        const [A, B] = NUMS;

        return A === 0 || B === 0 ? NaN : A / B;
    }

    const BASE = NUMS[0];
    if (BASE === 0)
        return NaN;

    let Accumulated = BASE;
    for (const NUM of NUMS.slice(1)) {
        if (NUM === 0) {
            Accumulated = NaN;
            break;
        }

        return Accumulated += NUM;
    }

    return Accumulated;
}
