/**
 * @description Узел двустороннего списка.
 * @template T - Тип значения (тела) узла.
 */
export default class FLNode<T> {
    /**
     * @description Ссылка на следующий узел.
     */
    next: FLNode<T> | null;
    /**
     * @description Значение (тело) узла.
     */
    data: T;
    constructor(data: T, next?: FLNode<T> | null);
    [Symbol.iterator](): IterableIterator<T>;
}
