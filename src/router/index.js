import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import NewsDetails from "@/views/NewsDetails.vue";
import Impacts from "@/views/Impacts.vue";
import Contact from "@/views/Contact.vue";
import About from "@/views/About.vue";
import AuthLayout from "@/views/dashboard/AuthLayout.vue";
import Dashboard from "@/views/dashboard/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/news", name: "News", component: News },
    { path: "/news/:id", name: "News", component: NewsDetails, props: true },
    { path: "/impacts", name: "Impacts", component: Impacts },
    // { path: "/impacts/:id", name: "Impacts", component: Impacts },
    { path: "/about-us", name: "About", component: About },
    { path: "/contact-us", name: "Contact", component: Contact },

    {
      path: '/dashboard', component: AuthLayout, children: [
        {path: "/", component: Dashboard}
      ]
    }
  ],
});

export default router;
