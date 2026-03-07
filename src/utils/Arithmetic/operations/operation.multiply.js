import Raise from '../../custom/error/builder/error.builder.js';
import { NormalizeNumbers } from '../../custom/utils/custom.utils.js';
import { IsNum } from '../../guards/data-types/data-types.js';

/**
 *  Accumulates the total multiplied value of the given numerical values.
 *
 *  @overload
 *  @param { number } num1 - The first and base numerical value of this operation.
 *  @param { number } num2 - The second numerical value to multiply with the first numerical value.
 *  @returns { number } The total accumulated value of the given numerical values.
 */
/**
 *  Accumulates the total multiplied value of the given numerical values.
 *
 *  @overload
 *  @param { number } num1 - The first and base numerical value of this operation.
 *  @param { number } num2 - The second numerical value to multiply with the first numerical value.
 *  @param { number } num3 - The third numerical value to multiply with the first and second numerical value.
 *  @returns { number } The total accumulated value of the given numerical values.
 */
/**
 *  Accumulates the total multiplied value of the given numerical values.
 *
 *  @overload
 *  @param { number } num1 - The first and base numerical value of this operation.
 *  @param { number } num2 - The second numerical value to multiply with the first numerical value.
 *  @param { number } num3 - The third numerical value to multiply with the first and second numerical value.
 *  @param { number } num4 - The fourth numerical value to multiply with the first, second, and third numerical value.
 *  @returns { number } The total accumulated value of the given numerical values.
 */
/**
 *  Accumulates the total multiplied value of the given numerical values.
 *
 *  @overload
 *  @param { number } num1 - The first and base numerical value of this operation.
 *  @param { number } num2 - The second numerical value to multiply with the first numerical value.
 *  @param { number } num3 - The third numerical value to multiply with the first and second numerical value.
 *  @param { number } num4 - The fourth numerical value to multiply with the first, second, and third numerical value.
 *  @param { number } num5 - The fifth numerical value to multiply with the first, second, third, and fourth numerical value.
 *  @returns { number } The total accumulated value of the given numerical values.
 */
/**
 *  Accumulates the total multiplied value of the given numerical values.
 *
 *  @overload
 *  @param { ...number } nums - The collection of numerical values to multiply.
 *  @returns { number } The total accumulated value of the given numerical values.
 */
export default function Multiply(...nums) {
    const Method = "Multiply", ICtr = nums.length, P = ["num1", "num2", "num3", "num4", "num5"];

    if (ICtr < 2)
        Raise._MissingParameterError(Method, P[ICtr], undefined);

    const NUMS = NormalizeNumbers(...nums);
    if (ICtr === 2) {
        const [A, B] = NUMS;

        return A === 0 || B === 0 ? 0 : A * B;
    }

    const BASE = NUMS[0];
    let Accumulated = BASE;
    for (const NUM of NUMS.slice(1)) {
        if (NUM === 0) {
            Accumulated = 0;
            break;
        }

        Accumulated *= NUM;
    }

    return Accumulated;
}
