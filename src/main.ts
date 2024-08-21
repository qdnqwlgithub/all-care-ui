import { createApp } from "vue";
import "./styles/index.scss";
import App from "@/App.vue";

import "virtual:svg-icons-register";
import router from "./router";
import pinia from "@/store/index";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import emitter from "@/utils/emitter";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.use(pinia);
app.mount("#app");

emitter.emit(`test`);
emitter.emit(`test1`);
