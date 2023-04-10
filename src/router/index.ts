import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import OrganizationsDashboard from "../views/OrganizationsDashboard.vue";
//import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import NotFound from "../views/NotFound.vue";
import WorkspaceView from "../views/WorkspaceView.vue";
import LocationsView from "../views/LocationsView.vue";
import SyncTargetView from "../views/SyncTargetView.vue";
import PlacementsView from "../views/PlacementsView.vue";
import OidcCallback from "../views/OidcCallback.vue";
import OidcPopupCallback from "../views/OidcPopupCallback.vue";
import OidcCallbackError from "../views/OidcCallbackError.vue";

import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc'
import  { store } from '@/store'

const routes: Array<RouteRecordRaw> = [
 // {
 //   path: "/",
 //   name: "Login",
 //   component: Login,
 //   meta: { layout: "empty" },
 // },
  {
    path: "/",
    name: "OrganizationsDashboard",
    component: OrganizationsDashboard,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/organizations/:organization/workspaces/:workspace",
    name: "WorkspaceView",
    component: WorkspaceView,
  },
  {
    path: "/organizations/:organization/workspaces/:workspace/locations",
    name: "LocationsView",
    component: LocationsView,
  },
  {
    path: "/organizations/:organization/workspaces/:workspace/placements",
    name: "PlacementsView",
    component: PlacementsView,
  },
  {
    path: "/organizations/:organization/workspaces/:workspace/synctargets",
    name: "SyncTargetView",
    component: SyncTargetView,
  },
  {
    path: '/oidc-callback', // Needs to match redirectUri in you oidcSettings
    name: 'oidcCallback',
    component: OidcCallback
  },
  {
    path: '/oidc-popup-callback', // Needs to match popupRedirectUri in you oidcSettings
    name: 'oidcPopupCallback',
    component: OidcPopupCallback
  },
  {
    path: '/oidc-callback-error', // Needs to match redirect_uri in you oidcSettings
    name: 'oidcCallbackError',
    component: OidcCallbackError,
    meta: {
      isPublic: true
    }
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(vuexOidcCreateRouterMiddleware(store, "oidcStore"))

export default router;
