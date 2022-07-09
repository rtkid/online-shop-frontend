import { createRouter, createWebHistory } from "vue-router";
import LoadView from "../views/LoadView.vue";

const routes = [
  {
    path: "/",
    name: "load",
    component: LoadView,
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("../views/WelcomeView.vue"),
  },
  {
    path: "/info",
    name: "info",
    component: () => import("../views/InfoView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
