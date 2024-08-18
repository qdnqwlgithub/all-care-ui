import { createApp } from "vue";
import "./styles/index.scss";
import App from "@/App.vue";

import "virtual:svg-icons-register";
import router from "./router";
import pinia from "@/store/index";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
