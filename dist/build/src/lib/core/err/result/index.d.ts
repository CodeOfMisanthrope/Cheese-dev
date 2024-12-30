/**
 * @description Класс Result представляет обёртку над данными, которых могут содержать ошибку.
 */
export default class Result<T> {
    #private;
    /**
     * @description возвращает true, если данные содержат ошибку, и false в обратном случае.
     */
    get isError(): boolean;
    constructor(data: CanError<T>);
    /**
     * @description возвращает данные, или кидает исключение (если есть ошибка).
     */
    unwrap(): CanError<T>;
    /**
     * @description Возвращает новый объект Result. Принимает callback, и в новый Result будет возвращаться то, что
     * функция вернула. Но если данные isError, то возвращается Result(this.#data)
     * @param cb
     */
    then(cb: (data: CanError<T>) => unknown): Result<unknown>;
    /**
     * @description Возвращает новый объект Result. Принимает callback, и в новый Result будет возвращаться то, что
     * функция вернула, если есть ошибка. Но если данные не isError, то возвращается Result(this.#data).
     * @param cb
     */
    catch(cb: (data: CanError<T>) => unknown): Result<T>;
}
