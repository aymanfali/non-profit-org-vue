import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import NewsDetails from "@/views/NewsDetails.vue";
import Impacts from "@/views/Impacts.vue";
import ImpactDetails from "@/views/ImpactDetails.vue";
import Contact from "@/views/Contact.vue";
import About from "@/views/About.vue";

import AuthLayout from "@/views/dashboard/AuthLayout.vue";
import Dashboard from "@/views/dashboard/Dashboard.vue";
import AdminNews from "@/views/dashboard/News.vue";
import AdminImpacts from "@/views/dashboard/Impacts.vue";
import AdminAbout from "@/views/dashboard/AdminAbout.vue";
import AdminContacts from "@/views/dashboard/Contact.vue";
import AdminSettings from "@/views/dashboard/Settings.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/news", name: "News", component: News },
    {
      path: "/news/:id",
      name: "NewsDetails",
      component: NewsDetails,
      props: true,
    },
    { path: "/impacts", name: "Impacts", component: Impacts },
    {
      path: "/impacts/:id",
      name: "ImpactDetails",
      component: ImpactDetails,
      props: true,
    },
    { path: "/about-us", name: "About", component: About },
    { path: "/contact-us", name: "Contact", component: Contact },

    {
      path: "/dashboard",
      component: AuthLayout,
      children: [
        { path: "/", component: Dashboard },
        { path: "/news", component: AdminNews },
        { path: "/impacts", component: AdminImpacts },
        { path: "/contacts", component: AdminContacts },
        { path: "/about", component: AdminAbout },
        { path: "/settings", component: AdminSettings },
      ],
    },
  ],
});

export default router;
