import type { CacheStrategy } from "~core/cache-data/strategy/interface";
import type { LRUCacheOptions } from "~core/cache-data/strategy/lru/interface";
/**
 * @description Класс LRU-кеширования.
 */
export default class LRUCache<T> implements CacheStrategy<T> {
    #private;
    constructor(opts?: LRUCacheOptions);
    hasKey(key: string): boolean;
    get(key: string): T | undefined;
    set(key: string, value: T): void;
    remove(key: string): void;
    clear(): void;
    isEmpty(): boolean;
    isFull(): boolean;
}
