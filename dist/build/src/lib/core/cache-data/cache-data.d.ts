import type { CacheOptions } from "~core/cache-data/interface";
export default class CacheData<T> {
    #private;
    constructor(opts?: CacheOptions<T>);
    get(key: string): T | undefined;
    hasKey(key: string): boolean;
    set(key: string, value: T): void;
    remove(key: string): void;
    clear(): void;
    isEmpty(): boolean;
    isFull(): boolean;
}
