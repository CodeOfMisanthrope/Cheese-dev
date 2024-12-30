export declare function asyncForeach<T>(iterable: Iterable<T>, timePoint?: number, timeout?: number): {
    [Symbol.asyncIterator](): any;
    next(): Promise<IteratorResult<T, any>>;
};
export declare function iterInterval<T>(iterable: AsyncIterable<T>, interval: number): {
    [Symbol.asyncIterator](): any;
    next(): Promise<IteratorResult<T, any>>;
};
