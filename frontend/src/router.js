import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "homeView",
    component: HomeView,
  },
  {
    path: "/login",
    name: "loginView",
    component: LoginView,
  },
  {
    path: "*",
    redirect: {
      name: "homeView",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
