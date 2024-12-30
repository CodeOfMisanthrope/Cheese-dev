/**
 * @description Класс Option представляет обертку над данными, которых может не быть.
 */
export default class Option<T> {
    #private;
    static None: undefined;
    /**
     * @description возвращает true, если данных нет, и false в обратном случае.
     */
    get isNone(): boolean;
    constructor(data: Nullable<T>);
    /**
     * @description Возвращает данные, либо кидает исключение (данных нет).
     */
    unwrap(): NonNullable<T>;
    /**
     * @description Возвращает новый объект Option. Принимает callback, и в новый option будет возвращаться то, что
     * функция вернула. Но если данные isNone, то возвращается Option(Option.None)
     * @param cb
     */
    then(cb: (data: T) => Nullable<T>): Option<T>;
    /**
     * @description Принимает новый объект Option и возвращает его, если данные None
     * @param option
     */
    or(option: Option<T>): Option<T>;
}
