import DLNode from "~core/linked-list/double/node";
/**
 * @description Класс двустороннего списка.
 * @template T
 */
export default class DoubleLinkedList<T> {
    /**
     * @description Возвращает первый узел списка.
     */
    get first(): CanNull<T>;
    /**
     * @description Возвращает первый узел списка.
     */
    get last(): CanNull<T>;
    /**
     * @description Возвращает длину списка.
     */
    get length(): number;
    /**
     * @description Ссылка на первый элемент списка.
     * @protected
     */
    protected firstNode: CanNull<DLNode<T>>;
    /**
     * @description Ссылка на последний элемент списка.
     * @protected
     */
    protected lastNode: CanNull<DLNode<T>>;
    /**
     * @description Длина списка.
     * @protected
     */
    protected lengthList: number;
    constructor(iterable?: Iterable<T>);
    [Symbol.iterator](): IterableIterator<T>;
    /**
     * @description Добавляет элемент в начало списка.
     * @param {T} item - Новый элемент списка.
     */
    insertFirst(item: T): void;
    /**
     * @description Удаляет элемент из начала списка.
     * @return {T | null}
     */
    removeFirst(): T | null;
    /**
     * @description Добавляет элемент в конец списка.
     * @param {T} item - Новый элемент списка.
     */
    insertLast(item: T): void;
    /**
     * @description Удаляет элемент из конца списка.
     * @return {T | null}
     */
    removeLast(): T | null;
    /**
     * @description Возвращает true, если список пустой, и false в обратном случае.
     * @return boolean
     */
    isEmpty(): boolean;
    /**
     * @description Очищает список.
     */
    clear(): void;
}
