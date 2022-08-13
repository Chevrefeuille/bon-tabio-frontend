import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import CurriesView from "@/views/CurriesView.vue";
import CurryView from "@/views/CurryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/curries",
      name: "curries",
      component: CurriesView,
    },
    {
      path: "/curries/:id",
      name: "curry",
      component: CurryView,
    },
  ],
});

export default router;
