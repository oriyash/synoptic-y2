import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// importing bootstrap css
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);
const pinia = createPinia();

// middleware
app.use(router);
app.use(pinia);

app.mount("#app");

// importing bootstrap js
import "bootstrap/dist/js/bootstrap.js";
