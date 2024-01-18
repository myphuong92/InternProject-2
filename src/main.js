import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import header from "/src/components/header.vue";
createApp(App).mount("#app");
createApp(header).mount("#header");
