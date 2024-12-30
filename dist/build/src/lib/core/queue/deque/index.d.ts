import DoubleLinkedList from "~core/linked-list/double";
/**
 * @description Класс двусторней очереди.
 * @template T - Тип значения элемента очереди.
 */
export default class Deque<T> {
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
    protected innerStruct: DoubleLinkedList<T>;
    constructor(iterable?: Iterable<T>);
    [Symbol.iterator](): IterableIterator<T>;
    /**
     * @description Добавляет элемент в начало очереди.
     * @param {T} item Новый элемент очереди.
     */
    insertFirst(item: T): void;
    /**
     * @description Извлекает элемент из начала очереди.
     */
    removeFirst(): T | null;
    /**
     * @description Добавляет элемент в конец очереди.
     * @param {T} item Новый элемент очереди.
     */
    insertLast(item: T): void;
    /**
     * @description Извлекает элемент из конца очереди.
     */
    removeLast(): T | null;
    /**
     * @description Возвращает true, если очередь пуста, и false в обратном случае.
     * @return {boolean}
     */
    isEmpty(): boolean;
    /**
     * @description Очищает очередь.
     */
    clear(): void;
}
