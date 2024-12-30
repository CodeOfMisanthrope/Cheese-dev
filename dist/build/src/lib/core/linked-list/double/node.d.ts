/**
 * @description Узел двустороннего списка.
 */
export default class DLNode<T> {
    /**
     * @description Ссылка на предыдущий узел.
     */
    prev: DLNode<T> | null;
    /**
     * @description Ссылка на следующий узел.
     */
    next: DLNode<T> | null;
    /**
     * @description Значение (тело) узла.
     */
    data: T;
    constructor(data: T, prev?: CanNull<DLNode<T>>, next?: CanNull<DLNode<T>>);
    [Symbol.iterator](): IterableIterator<T>;
}
