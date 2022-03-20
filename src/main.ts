
import { createApp } from "@vue/runtime-dom";

import App from "./App.vue";
import router from "./router";

import "./index.styl";

const app = createApp(App);

app.use(router);

app.mount("#app");
