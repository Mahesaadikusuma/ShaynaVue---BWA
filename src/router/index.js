import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import successYeay from "../views/successYeay.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/product",
    // props: true,
    name: "product",
    component: ProductView,
  },

  {
    path: "/cart",
    // props: true,
    name: "cartShayna",
    component: ShoppingCart,
  },

  {
    path: "/success",
    // props: true,
    name: "successYeay",
    component: successYeay,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
