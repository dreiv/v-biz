import { IStorage } from "@/store";

declare module "vue/types/options" {
  interface ComponentOptions {
    storage?: IStorage;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $storage: IStorage;
  }
}

declare module "vuex/types/index" {
  interface Store {
    $storage: IStorage;
  }
}
