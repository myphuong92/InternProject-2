import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import About from "../views/about-us.vue";
import LinhVuc from "../views/linh-vuc-hd.vue";
import FieldDaOp from "../views/comp-views/field-da-op.vue";
import FieldDoGo from "../views/comp-views/field-do-go.vue";

const routes = [
  {
    path: "/InternProject-2/",
    name: "Home",
    component: Home,
  },
  {
    path: "/InternProject-2/about/",
    name: "About",
    component: About,
  },
  {
    path: "/InternProject-2/linhvuc/",
    name: "LinhVuc",
    component: LinhVuc,
    children: [
      {
        path: "daop",
        name: "FieldDaOp",
        component: FieldDaOp,
      },
      {
        path: "dogo",
        name: "FieldDoGo",
        component: FieldDoGo,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory("/"), // Provide the base URL directly
  routes,
});
export default router;
