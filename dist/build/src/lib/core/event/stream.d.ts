import EventEmitter from "~core/event/index";
/**
 * @description Функция для создания потока событий через асинхронный итератор.
 * @template T
 * @param {EventEmitter} ee
 * @param {string} event
 * @returns {AsyncIterableIterator<T>}
 */
export default function streamEvent<T>(ee: EventEmitter<T>, event: string): AsyncIterableIterator<T>;
