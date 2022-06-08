import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// importing bootstrap css
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

// middleware
app.use(router);

app.mount("#app");

// importing bootstrap js
import "bootstrap/dist/js/bootstrap.js";
