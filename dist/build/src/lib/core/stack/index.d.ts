/**
 * @description Класс структуры Stack.
 */
export default class Stack<T> {
    #private;
    constructor();
    [Symbol.iterator](): IterableIterator<T>;
    /**
     * @description Добавляет элемент в стек.
     * @param item Новый элемент стека
     */
    insert(item: T): void;
    /**
     * @description Удаляет элемент из стек.
     */
    remove(): T | null;
    /**
     * @description Возвращает true, если стек пустой, и false в обратном случае.
     */
    isEmpty(): boolean;
    /**
     * @description Очищает стек.
     */
    clear(): void;
}
