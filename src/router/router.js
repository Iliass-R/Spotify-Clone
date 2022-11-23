import { createRouter, createWebHistory } from "vue-router";

import LoadingVue from "../views/LoadingVue.vue";
import GetStarted from "../views/GetStarted.vue";

const routes = [
  {
    path: "/loading",
    name: "Loading",
    component: LoadingVue,
  },
  {
    path: "/getstarted",
    name: "getstarted",
    component: GetStarted,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
