import { KVStorageEngine, KVStorageOptions, SerializableVal } from "~core/kv-storage/interfaces";
export default class KVStorage {
    protected engine: KVStorageEngine;
    constructor(opts: KVStorageOptions);
    get(key: string): Nullable<SerializableVal>;
    set(key: string, val: SerializableVal): void;
    remove(key: string): void;
}
