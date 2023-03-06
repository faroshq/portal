import { createStore, createLogger } from "vuex";
import organizationModule from "./organizations";
import notificationModule from "./notifications";

export const store = createStore({
  modules: {
    organizationModule,
    notificationModule,
  },
  plugins: [createLogger()],
});
