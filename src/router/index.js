import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Project from "../views/Project.vue";
import Message from "../views/Message.vue";
import Dashboard from "../views/Dashboard.vue";
import Fire from "../views/FIrebase_Test";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
  {
    path: "/message",
    name: "Message",
    component: Message,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/firebase-test",
    name: "Fire",
    component: Fire,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
