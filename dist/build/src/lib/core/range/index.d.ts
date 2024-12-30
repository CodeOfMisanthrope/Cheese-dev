import { RangeType, RangeVal } from "~core/range/interfaces";
/**
 * A class representing a range of values (either numbers or characters).
 *
 * @remarks
 * This class allows you to create ranges of values that can be either numeric
 * or string-based. When creating an instance of the class, it checks that the
 * start and end values are of the same type. If they are different, a
 * `TypeError` is thrown with the message "Start and end must be of the same type."
 *
 * @example
 * Example usage:
 * ```typescript
 * const r = new Range("a", "c");
 * console.log([...r]); // ['a', 'b', 'c']
 *
 * const r2 = new Range(1, 3);
 * console.log([...r2]); // [1, 2, 3]
 *
 * for (const n of new Range(1,3)) {
 * 	console.log(n); // Outputs: 1, 2, 3
 * }
 *
 * const r4 = new Range(1, "c"); // Uncaught TypeError: Start and end must be of the same type.
 * ```
 */
export declare class Range {
    /**
     * The starting value of the range.
     */
    protected start: number;
    /**
     * The ending value of the range.
     */
    protected end: number;
    /**
     * The type of values in the range: 'number' or 'string'.
     */
    protected type: RangeVal;
    /**
     * Creates a new instance of the Range class.
     *
     * @param {RangeType} start - The starting value of the range, which can be a number or a string.
     * @param {RangeType} end - The ending value of the range, which can be a number or a string.
     * @throws {TypeError} If start and end are of different types.
     */
    constructor(start: RangeType, end?: RangeType);
    [Symbol.iterator](): {
        next(): {
            value: number;
            done: boolean;
        } | {
            value: null;
            done: boolean;
        };
        [Symbol.iterator](): {
            next(): {
                value: number;
                done: boolean;
            } | {
                value: null;
                done: boolean;
            };
            [Symbol.iterator](): any;
        };
    } | {
        next(): {
            value: string;
            done: boolean;
        } | {
            value: null;
            done: boolean;
        };
        [Symbol.iterator](): {
            next(): {
                value: string;
                done: boolean;
            } | {
                value: null;
                done: boolean;
            };
            [Symbol.iterator](): any;
        };
    };
}
