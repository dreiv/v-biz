import { App } from "vue";
import { makeStorage, IStore } from "@/store";

export const prepareStorage = (app: App, store: IStore): void => {
  store.$storage = makeStorage(store);

  app.mixin({
    created() {
      this.$storage = store.$storage;
    },
  });
};
