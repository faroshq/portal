import { createStore, createLogger } from "vuex";
import organizationModule from "./organizations";
import notificationModule from "./notifications";
import workspaceModule from "./workspaces";

export const store = createStore({
  modules: {
    organizationModule,
    notificationModule,
    workspaceModule,
  },
  plugins: [createLogger()],
});
