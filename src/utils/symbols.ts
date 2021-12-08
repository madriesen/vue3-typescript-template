import { InjectionKey } from "vue";
import { Store } from "@/interfaces";

export const StoreKey: InjectionKey<Store> = Symbol("Store");
