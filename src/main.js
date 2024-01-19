import { createApp } from "vue";
import "./style.css";
import home from "./vue-comp/home.vue";
import aboutUs from "./vue-comp/about-us.vue";

createApp(home).mount("#home");
createApp(aboutUs).mount("#about-us");
