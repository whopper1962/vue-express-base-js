import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const myAxios = axios.create({
  baseURL: "http://localhost:3005",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

myAxios.interceptors.request.use((config) => {
  const { method, baseURL, url } = config;
  const fullUrl = `${baseURL}${url}`;
  const accessToken = localStorage.getItem("accessToken");
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${accessToken}`,
  };
  console.log(`🚀 ${method?.toUpperCase()}: ${fullUrl} Request`, config);
  return config;
});

myAxios.interceptors.response.use(
  (response) => {
    const { method, baseURL, url } = response.config;
    const { status } = response;
    const fullUrl = `${baseURL}${url}`;
    console.log(
      `📬 ${method?.toUpperCase()}: ${fullUrl} Response(${status})`,
      response
    );
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      alert("Your session has expired, please login again.");
      localStorage.removeItem("accessToken");
      router.push({
        name: "loginView",
      });
    }
    return Promise.reject(error);
  }
);

Vue.prototype.axios = myAxios;

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
