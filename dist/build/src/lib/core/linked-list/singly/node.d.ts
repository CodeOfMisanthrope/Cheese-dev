/**
 * @description Узел односвязного списка.
 * @template T - Тип значения (тела) узла.
 */
export default class LLNode<T> {
    /**
     * @description Ссылка на следующий узел.
     */
    next: LLNode<T> | null;
    /**
     * @description Значение (тело) узла.
     */
    data: T;
    constructor(data: T, next?: LLNode<T> | null);
    [Symbol.iterator](): IterableIterator<T>;
}
