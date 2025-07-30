import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import NewsDetails from "@/views/NewsDetails.vue";
import Impacts from "@/views/Impacts.vue";
import ImpactDetails from "@/views/ImpactDetails.vue";
import Contact from "@/views/Contact.vue";
import About from "@/views/About.vue";

import Dashboard from "@/views/dashboard/Dashboard.vue";
import AdminNews from "@/views/dashboard/News.vue";
import AdminAbout from "@/views/dashboard/About.vue";
import AdminContacts from "@/views/dashboard/Contact.vue";
import AdminSettings from "@/views/dashboard/Settings.vue";
import Index from "@/views/dashboard/impacts/Index.vue";

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
      children: [
        { path: "/dashboard/", component: Dashboard },
        { path: "/dashboard/news", component: AdminNews },
        { path: "/dashboard/impacts", component: Index },
        { path: "/dashboard/contacts", component: AdminContacts },
        { path: "/dashboard/about", component: AdminAbout },
        { path: "/dashboard/settings", component: AdminSettings },
      ],
    },
  ],
});

export default router;
