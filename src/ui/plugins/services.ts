import { provider } from "@/services";
import { IStore } from "@/store";

export const prepareServices = (app: any, store: IStore): void => {
  store.$services = provider();

  app.mixin({
    created() {
      this.$services = store.$services;
    },
  });
};
