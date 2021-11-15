import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Project from "../views/Project.vue";
import School from "../views/School.vue";
import Test from "../views/Test.vue";

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
    path: "/school",
    name: "School",
    component: School,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
