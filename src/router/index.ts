import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Forms from "../views/Forms.vue";
import Tables from "../views/Tables.vue";
import UIElements from "../views/UIElements.vue";
//import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Modal from "../views/Modal.vue";
import Chart from "../views/ChartView.vue";
import Card from "../views/CardView.vue";
import Blank from "../views/BlankView.vue";
import NotFound from "../views/NotFound.vue";
import WorkspaceView from "../views/WorkspaceView.vue";
import idsrvAuth from '../oauthclient/idsrvAuth';

const routes: Array<RouteRecordRaw> = [
 // {
 //   path: "/",
 //   name: "Login",
 //   component: Login,
 //   meta: { layout: "empty" },
 // },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      authName: idsrvAuth.authName
    },
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
    meta: {
      authName: idsrvAuth.authName
    },
  },
  {
    path: "/organizations/:organization/workspaces/:workspace",
    name: "WorkspaceView",
    component: WorkspaceView,
    meta: {
      authName: idsrvAuth.authName
    },
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Card,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/ui-elements",
    name: "UIElements",
    component: UIElements,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/charts",
    name: "Chart",
    component: Chart,
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

idsrvAuth.useRouter(router)

export default router;
