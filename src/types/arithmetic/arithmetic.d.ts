interface ArithmeticAPI {
    /**
     *  Accumulates the total divided value of the first and second numerical values.
     *
     *  ***Note***:
     *   - Using a zero (`0`) to divide other given numerical values would always resulted to `NaN`.
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to divide with primary value.
     *  @returns The total accumulated result of this operation.
     */
    Divide(num1: number, num2: number): number;

    /**
     *  Accumulates the total divided value of the first, second, and third numerical values.
     *
     *  ***Note***:
     *   - Using a zero (`0`) to divide other given numerical values would always resulted to `NaN`.
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to divide with primary value.
     *  @param num3 - The third numerical value to divide with the given first 2 numerical values.
     *  @returns The total accumulated result of this operation.
     */
    Divide(num1: number, num2: number, num3: number): number;

    /**
     *  Accumulates the total divided value of the first, second, third, and fourth numerical values.
     *
     *  ***Note***:
     *   - Using a zero (`0`) to divide other given numerical values would always resulted to `NaN`.
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to divide with primary value.
     *  @param num3 - The third numerical value to divide with the given first 2 numerical values.
     *  @param num4 - The fourth numerical value to divide with the given first 3 numerical values.
     *  @returns The total accumulated result of this operation.
     */
    Divide(num1: number, num2: number, num3: number, num4: number): number;

    /**
     *  Accumulates the total divided value of the first, second, third, and fourth numerical values.
     *
     *  ***Note***:
     *   - Using a zero (`0`) to divide other given numerical values would always resulted to `NaN`.
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to divide with primary value.
     *  @param num3 - The third numerical value to divide with the given first 2 numerical values.
     *  @param num4 - The fourth numerical value to divide with the given first 3 numerical values.
     *  @returns The total accumulated result of this operation.
     */
    Divide(num1: number, num2: number, num3: number, num4: number): number;

    /**
     *  Accumulates the total divided value of the first, second, third, fourth, and fifth numerical values.
     *
     *  ***Note***:
     *   - Using a zero (`0`) to divide other given numerical values would always resulted to `NaN`.
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to divide with primary value.
     *  @param num3 - The third numerical value to divide with the given first 2 numerical values.
     *  @param num4 - The fourth numerical value to divide with the given first 3 numerical values.
     *  @param num5 - The fifth numerical value to divide with the other given 4 numerical values.
     *  @returns The total accumulated result of this operation.
     */
    Divide(num1: number, num2: number, num3: number, num4: number, num5: number): number;

    /**
     *  Accumulates the total divided value of the given collection of numerical values.
     *
     *  ***Note***:
     *   - Using a zero (`0`) to divide other given numerical values would always resulted to `NaN`.
     *
     *  @param nums - The collection of numerical values to divide.
     *  @returns The total accumulated result of this operation.
     */
    Divide(...nums: number[]): number;

    /**
     *  Accumulates the total multiplied value of the first and second numerical values.
     *
     *  ***Note***:
     *   - Using a zero (`0`) to multiply other given numerical values would always resulted to (`0`).
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to multiply with primary value.
     *  @returns The total accumulated result of this operation.
     */
    Multiply(num1: number, num2: number): number;

    /**
     *  Accumulates the total multiplied value of the first, second, and third numerical values.
     *
     *  ***Note***:
     *   - Using a zero (`0`) to multiply other given numerical values would always resulted to (`0`).
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to multiply with primary value.
     *  @param num3 - The third numerical value to multiply with the given first 2 numerical values.
     *  @returns The total accumulated result of this operation.
     */
    Multiply(num1: number, num2: number, num3: number): number;

    /**
     *  Accumulates the total multiplied value of the first, second, third, and fourth numerical values.
     *
     *  ***Note***:
     *   - Using a zero (`0`) to multiply other given numerical values would always resulted to (`0`).
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to multiply with primary value.
     *  @param num3 - The third numerical value to multiply with the given first 2 numerical values.
     *  @param num4 - The fourth numerical value to multiply with the given first 3 numerical values.
     *  @returns The total accumulated result of this operation.
     */
    Multiply(num1: number, num2: number, num3: number, num4: number): number;

    /**
     *  Accumulates the total multiplied value of the first, second, third, and fourth numerical values.
     *
     *  ***Note***:
     *   - Using a zero (`0`) to multiply other given numerical values would always resulted to (`0`).
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to multiply with primary value.
     *  @param num3 - The third numerical value to multiply with the given first 2 numerical values.
     *  @param num4 - The fourth numerical value to multiply with the given first 3 numerical values.
     *  @returns The total accumulated result of this operation.
     */
    Multiply(num1: number, num2: number, num3: number, num4: number): number;

    /**
     *  Accumulates the total multiplied value of the first, second, third, fourth, and fifth numerical values.
     *
     *  ***Note***:
     *   - Using a zero (`0`) to multiply other given numerical values would always resulted to (`0`).
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to multiply with primary value.
     *  @param num3 - The third numerical value to multiply with the given first 2 numerical values.
     *  @param num4 - The fourth numerical value to multiply with the given first 3 numerical values.
     *  @param num5 - The fifth numerical value to multiply with the other given 4 numerical values.
     *  @returns The total accumulated result of this operation.
     */
    Multiply(num1: number, num2: number, num3: number, num4: number, num5: number): number;

    /**
     *  Accumulates the total multiplied value of the given collection of numerical values.
     *
     *  ***Note***:
     *   - Using a zero (`0`) to multiply other given numerical values would always resulted to (`0`).
     *
     *  @param nums - The collection of numerical values to multiply.
     *  @returns The total accumulated result of this operation.
     */
    Multiply(...nums: number[]): number;

    /**
     *  Accumulates the total subtracted value of the first and second numerical values.
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to subtract with primary value.
     *  @returns The total accumulated result of this operation.
     */
    Subtract(num1: number, num2: number): number;

    /**
     *  Accumulates the total subtracted value of the first, second, and third numerical values.
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to subtract with primary value.
     *  @param num3 - The third numerical value to subtract with the given first 2 numerical values.
     *  @returns The total accumulated result of this operation.
     */
    Subtract(num1: number, num2: number, num3: number): number;

    /**
     *  Accumulates the total subtracted value of the first, second, third, and fourth numerical values.
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to subtract with primary value.
     *  @param num3 - The third numerical value to subtract with the given first 2 numerical values.
     *  @param num4 - The fourth numerical value to subtract with the given first 3 numerical values.
     *  @returns The total accumulated result of this operation.
     */
    Subtract(num1: number, num2: number, num3: number, num4: number): number;

    /**
     *  Accumulates the total subtracted value of the first, second, third, and fourth numerical values.
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to subtract with primary value.
     *  @param num3 - The third numerical value to subtract with the given first 2 numerical values.
     *  @param num4 - The fourth numerical value to subtract with the given first 3 numerical values.
     *  @returns The total accumulated result of this operation.
     */
    Subtract(num1: number, num2: number, num3: number, num4: number): number;

    /**
     *  Accumulates the total subtracted value of the first, second, third, fourth, and fifth numerical values.
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to subtract with primary value.
     *  @param num3 - The third numerical value to subtract with the given first 2 numerical values.
     *  @param num4 - The fourth numerical value to subtract with the given first 3 numerical values.
     *  @param num5 - The fifth numerical value to subtract with the other given 4 numerical values.
     *  @returns The total accumulated result of this operation.
     */
    Subtract(num1: number, num2: number, num3: number, num4: number, num5: number): number;

    /**
     *  Accumulates the total subtracted value of the given collection of numerical values.
     *
     *  @param nums - The collection of numerical values to subtract.
     *  @returns The total accumulated result of this operation.
     */
    Subtract(...nums: number[]): number;

    /**
     *  Accumulates the total summed value of the first and second numerical values.
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to sum with primary value.
     *  @returns The total accumulated result of this operation.
     */
    Sum(num1: number, num2: number): number;

    /**
     *  Accumulates the total summed value of the first, second, and third numerical values.
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to sum with primary value.
     *  @param num3 - The third numerical value to sum with the given first 2 numerical values.
     *  @returns The total accumulated result of this operation.
     */
    Sum(num1: number, num2: number, num3: number): number;

    /**
     *  Accumulates the total summed value of the first, second, third, and fourth numerical values.
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to sum with primary value.
     *  @param num3 - The third numerical value to sum with the given first 2 numerical values.
     *  @param num4 - The fourth numerical value to sum with the given first 3 numerical values.
     *  @returns The total accumulated result of this operation.
     */
    Sum(num1: number, num2: number, num3: number, num4: number): number;

    /**
     *  Accumulates the total summed value of the first, second, third, and fourth numerical values.
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to sum with primary value.
     *  @param num3 - The third numerical value to sum with the given first 2 numerical values.
     *  @param num4 - The fourth numerical value to sum with the given first 3 numerical values.
     *  @returns The total accumulated result of this operation.
     */
    Sum(num1: number, num2: number, num3: number, num4: number): number;

    /**
     *  Accumulates the total summed value of the first, second, third, fourth, and fifth numerical values.
     *
     *  @param num1 - The first or primary base numerical value of this operation.
     *  @param num2 - The second numerical value to sum with primary value.
     *  @param num3 - The third numerical value to sum with the given first 2 numerical values.
     *  @param num4 - The fourth numerical value to sum with the given first 3 numerical values.
     *  @param num5 - The fifth numerical value to sum with the other given 4 numerical values.
     *  @returns The total accumulated result of this operation.
     */
    Sum(num1: number, num2: number, num3: number, num4: number, num5: number): number;

    /**
     *  Accumulates the total summed value of the given collection of numerical values.
     *
     *  @param nums - The collection of numerical values to sum.
     *  @returns The total accumulated result of this operation.
     */
    Sum(...nums: number[]): number;
}
