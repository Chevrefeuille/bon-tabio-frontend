import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import CurriesView from "@/views/CurriesView.vue";
import CurryView from "@/views/CurryView.vue";
import PostsViews from "@/views/PostsViews.vue";
import PostViews from "@/views/PostViews.vue";
import RecipesView from "@/views/RecipesView.vue";

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
    {
      path: "/posts",
      name: "posts",
      component: PostsViews,
    },
    {
      path: "/posts/:id",
      name: "post",
      component: PostViews,
    },
    {
      path: "/recipes",
      name: "recipes",
      component: RecipesView,
    },
  ],
});

export default router;
