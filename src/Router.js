import Vue from "vue";
import Router from "vue-router";
import List from "./components/Order/List.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/order/:id",
      name: "order",
      component: () => import("./components/Order/OrderDetails"),
    },
    {
      path: "/",
      name: "OrderList",
      component: List,
    },
  ],
});
