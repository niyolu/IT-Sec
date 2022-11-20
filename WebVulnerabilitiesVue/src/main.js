import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./router/routes";
import App from "@/App";
import "../src/assets/css/main.css";

const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

app.use(router);

app.mount("#app");
