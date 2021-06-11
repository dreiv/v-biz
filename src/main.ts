import { createApp } from "vue";

import "./registerServiceWorker";
import { App, router } from "./ui";
import { makeStore } from "./store";
import { prepareServices, prepareStorage } from "./ui/plugins";

const store = makeStore();

const app = createApp(App).use(store).use(router).mount("#app");

prepareStorage(app, store);
prepareServices(app, store);
