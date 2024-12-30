import { Handler } from "~core/event/interfaces";
export { default as streamEvent } from "./stream";
/**
 * @description Класс для работы с событиями.
 */
export default class EventEmitter<T> {
    #private;
    get handlers(): Map<string, Set<Handler<T>>>;
    constructor();
    private hasKey;
    clear(): void;
    once(event: string, cb: (v: T) => unknown): void;
    on(event: string, cb: (v: T) => unknown): void;
    off(event: string, cb?: (v: unknown) => unknown): void;
    emit(event: string, val: T): void;
}
