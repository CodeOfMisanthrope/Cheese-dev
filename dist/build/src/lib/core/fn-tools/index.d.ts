/**
 * @description Функция, которая принимает функцию и возвращает ее debounce-версию.
 * @param fn
 * @param time
 */
export declare function debounce(fn: Function, time: number): (this: unknown, ...args: unknown[]) => void;
/**
 * @description Функция, которая принимает функцию и возвращает ее throttle-версию.
 * @param fn
 */
export declare function throttle(fn: Function, time: number): (this: unknown, ...args: unknown[]) => void;
