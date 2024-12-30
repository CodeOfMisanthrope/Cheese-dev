import LLNode from "~core/linked-list/singly/node";
/**
 * @description Класс односвязного списка.
 * @template T - Тип значения узла списка.
 */
export default class LinkedList<T> {
    /**
     * @description Возвращает первый узел списка.
     */
    get first(): CanNull<T>;
    /**
     * @description Возвращает длину списка.
     */
    get length(): number;
    /**
     * @description Ссылка на первый элемент списка.
     * @protected
     */
    protected firstNode: CanNull<LLNode<T>>;
    /**
     * @description Длина списка.
     * @protected
     */
    protected lengthList: number;
    constructor(iterable?: Iterable<T>);
    [Symbol.iterator](): IterableIterator<T>;
    /**
     * @description Добавляет элемент в начало списка.
     * @param {T} item Новый элемент списка.
     */
    insertFirst(item: T): void;
    /**
     * @description Удаляет элемент из начала списка.
     * @return {T | null}
     */
    removeFirst(): T | null;
    /**
     * @description Разворачивает список.
     */
    reverse(): void;
    /**
     * @description Возвращает true, если список пустой,
     * и false в обратном случае.
     * @return boolean
     */
    isEmpty(): boolean;
    /**
     * @description Очищает список.
     */
    clear(): void;
}
