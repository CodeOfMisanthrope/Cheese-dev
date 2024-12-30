import { KVStorageEngine } from "~core/kv-storage/engines/interfaces";
export default class LocalStorage {
    get(key: string): ReturnType<KVStorageEngine["get"]>;
    set(key: string, val: string): ReturnType<KVStorageEngine["set"]>;
    remove(key: string): ReturnType<KVStorageEngine["remove"]>;
}
