export { asyncForeach } from "~core/iter/async";
export { iterInterval } from "~core/iter/async";
export declare function map<T, U>(iterable: Iterable<T>, callback: (value: T, index?: number, iterable?: Iterable<T>) => U, thisArg?: unknown): {
    [Symbol.iterator](): any;
    next(): IteratorReturnResult<any> | {
        value: U;
        done: false | undefined;
    };
};
export declare function filter<T>(iterable: Iterable<T>, predicate: (value: T, index?: number, iterable?: Iterable<T>) => boolean, thisArg?: unknown): {
    [Symbol.iterator](): any;
    next(): IteratorResult<T, any>;
};
export declare function enumerate<T>(iterable: Iterable<T>): {
    [Symbol.iterator](): any;
    next(): IteratorReturnResult<any> | {
        value: (number | T)[];
        done: false | undefined;
    };
};
export declare function take<T>(iterable: Iterable<T>, count: number): {
    [Symbol.iterator](): any;
    next(): {
        value: T;
        done: false | undefined;
    } | {
        value: null;
        done: boolean;
    };
};
export declare function repeat<T>(iterable: Iterable<T>, count: number): {
    [Symbol.iterator](): any;
    next(): {
        value: any;
        done: boolean;
    };
};
