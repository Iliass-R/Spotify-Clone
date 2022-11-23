import { createRouter, createWebHistory } from "vue-router";

import LoadingVue from "../views/LoadingVue.vue";

const routes = [
  {
    path: "/loading",
    name: "Loading",
    component: LoadingVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
