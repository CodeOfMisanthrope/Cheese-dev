import { WatchHandler } from "~core/object/watch/interfaces";
export type { WatchHandler };
export default function watch<T extends object>(obj: T, handler: WatchHandler<unknown>, path?: (string | symbol)[]): T;
