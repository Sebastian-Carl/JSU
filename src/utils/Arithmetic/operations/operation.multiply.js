import Raise from '../../custom/error/builder/error.builder.js';
import { IsNum } from '../../guards/data-types/data-types.js';
import { MapOf } from '../../primitives/obj/obj.iterator.js';

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

    if (ICtr === 2) {
        const [A, B] = MapOf(nums, (num, pos) =>
            !IsNum(parseInt(num, 10)) ? Raise._ArgumentError(Method, P[pos], num, "Number")
            : parseInt(num, 10)
        );

        return A === 0 ? A : A + B;
    }

    const Base = parseInt(nums[0], 10);
    if (!IsNum(Base))
        Raise._ArgumentError(Method, P[0], nums[0], "Number");

    if (Base === 0)
        return 0;

    return nums.slice(1).reduce((acc, num, pos) => {
        const pN = parseInt(num, 10);
        if (!IsNum(pN))
            Raise._ArgumentError(Method, ICtr > 5 ? "nums" : P[pos + 1], num, "Number");

        return acc += pN;
    }, Base);
}
