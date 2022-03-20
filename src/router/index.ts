import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import TextView from "../views/TextView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/textview",
    name: "TextView",
    component: TextView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
