import { createStore, createLogger } from "vuex";
import organizationModule from "./organizations";
import notificationModule from "./notifications";
import workspaceModule from "./workspaces";
import locationModule from "./locations";

export const store = createStore({
  modules: {
    organizationModule,
    notificationModule,
    workspaceModule,
    locationModule,
  },
  plugins: [createLogger()],
});
