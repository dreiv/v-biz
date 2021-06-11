import { IProvider } from "@/services";

declare module "vue/types/options" {
  interface ComponentOptions {
    services?: IProvider;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $services: IProvider;
  }
}

declare module "vuex/types/index" {
  interface Store {
    $services: IProvider;
  }
}
