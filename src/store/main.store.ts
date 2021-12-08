import { inject, provide, Ref, ref } from "vue";

const mainStoreKey = Symbol("__projection_store__");

export function provideMainStore(): void {
  provide(mainStoreKey, composeMainStore());
}
export function useMainStore() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return inject<ReturnType<typeof composeMainStore>>(mainStoreKey)!();
}

export function composeMainStore() {
  const message: Ref<string> = ref("Hello from store");
  return function useMainStore() {
    return {
      message,
    };
  };
}
