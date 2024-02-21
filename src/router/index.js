import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import Home from "../views/home.vue";
import About from "../views/about-us.vue";
import LinhVuc from "../views/linh-vuc-hd.vue";
import FieldDaOp from "../views/field-da-op.vue";
import FieldDoGo from "../views/field-do-go.vue";
import News from "../views/news.vue";
import Article from "../views/article.vue";
import Contact from "../views/contact.vue";
import JobRecruit from "../views/job-recruit.vue";
import JobDesc from "../views/job-desc.vue";
import NotFoundComponent from "../views/not-found.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/linhvuc",
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
  {
    path: "/news",
    name: "News",
    component: News,
    children: [
      // {
      //   path: "article",
      //   name: "Article",
      //   component: Article,
      // },
    ],
  },
  {
    path: "/news/article",
    name: "Article",
    component: Article,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/job-recruit",
    name: "JobRecruit",
    component: JobRecruit,
  },
  {
    path: "/job-desc",
    name: "JobDesc",
    component: JobDesc,
  },
  {
    path: "/:pathMatch(.*)", // Catch-all route for 404 errors
    name: "NotFound",
    component: NotFoundComponent,
  },
];
const router = createRouter({
  history: createWebHistory("/InternProject-2/"), // Provide the base URL directly
  routes,
});
// Chuyển lên đầu trang khi qua route mới
router.beforeEach((to, from, next) => {
  // Kiểm tra path của route
  if (to.path !== "/linhvuc/daop" && to.path !== "/linhvuc/dogo") {
    window.scrollTo(0, 0); // Cuộn lên đầu trang
  }
  next();
});

export default router;
