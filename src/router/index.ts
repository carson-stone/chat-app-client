
import HomeView from "../views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes : [
    {
      path     : "/",
      name     : "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/HomeView.vue')
      component: HomeView,
    },
  ],
});

export default router;
