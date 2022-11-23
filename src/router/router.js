import { createRouter, createWebHistory } from "vue-router";

import LoadingVue from "../views/LoadingVue.vue";
import GetStarted from "../views/GetStarted.vue";
import Mode from "../views/Mode.vue";
import RegisterOrSignUp from "../views/RegisterOrSignUp.vue";

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
  {
    path: "/mode",
    name: "mode",
    component: Mode,
  },
  {
    path: "/registerorsignup",
    name: "registerorsignup",
    component: RegisterOrSignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
