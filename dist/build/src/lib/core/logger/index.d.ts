import type { LoggerOpts } from "~core/logger/interface";
export { LoggerOpts, LoggerEngine } from "~core/logger/interface";
export { default as ConsoleEngine } from "~core/logger/engines/console";
export default class Logger {
    #private;
    namespace: string;
    constructor(namespace: string, loggerOpts?: LoggerOpts);
    log(msg: string, ...args: unknown[]): void;
    warn(msg: string, ...args: unknown[]): void;
    error(err: string | Error, ...args: unknown[]): void;
}
