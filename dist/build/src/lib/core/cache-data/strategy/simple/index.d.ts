import type { CacheStrategy } from "~core/cache-data/strategy/interface";
/**
 * @description Класс простого кеширования.
 */
export default class SimpleCache<T> implements CacheStrategy<T> {
    #private;
    constructor();
    hasKey(key: string): boolean;
    get(key: string): T | undefined;
    set(key: string, value: T): void;
    remove(key: string): void;
    clear(): void;
    isEmpty(): boolean;
    isFull(): boolean;
}
