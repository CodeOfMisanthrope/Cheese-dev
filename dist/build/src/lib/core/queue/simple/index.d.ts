import { FirstLastList } from "~core/linked-list";
/**
 * @description Класс очереди.
 * @template T - Тип значения элемента очереди.
 */
export default class Queue<T> {
    /**
     * @description Возвращает первый элемент очереди.
     */
    get first(): CanNull<T>;
    /**
     * @description Возвращает первый элемент очереди.
     */
    get last(): CanNull<T>;
    /**
     * @description Возвращает длину очереди.
     */
    get length(): number;
    /**
     * @description Внутреняя структура для очереди.
     * @protected
     */
    protected innerStruct: FirstLastList<T>;
    constructor(iterable?: Iterable<T>);
    [Symbol.iterator](): IterableIterator<T>;
    /**
     * @description Добавляет элемент в очередь.
     * @param {T} item Новый элемент очереди.
     */
    insert(item: T): void;
    /**
     * @description Извлекает элемент из очереди.
     */
    remove(): T | null;
    /**
     * @description Возвращает true, если очередь пуста, и false в обратном случае.
     * @return boolean
     */
    isEmpty(): boolean;
    /**
     * @description Очищает очередь.
     */
    clear(): void;
}
