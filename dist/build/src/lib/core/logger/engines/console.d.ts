import { LoggerEngine } from "~core/logger/engines/interface";
export default class ConsoleEngine implements LoggerEngine {
    #private;
    constructor();
    log(msg: string, ...args: unknown[]): void;
    warn(msg: string, ...args: unknown[]): void;
    error(err: string | Error, ...args: unknown[]): void;
}
