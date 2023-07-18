import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "homeView",
    component: HomeView,
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
