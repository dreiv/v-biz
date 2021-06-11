import { makeStorage, IStore } from "@/store";

export const prepareStorage = (app: any, store: IStore): void => {
  store.$storage = makeStorage(store);

  app.mixin({
    created() {
      this.$storage = store.$storage;
    },
  });
};
