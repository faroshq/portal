import { createApp } from "vue";
import idsrvAuth from './oauthclient/idsrvAuth'

import VueApexCharts from "vue3-apexcharts";
import DashboardLayout from "./components/DashboardLayout.vue";
import EmptyLayout from "./components/EmptyLayout.vue";


import "./assets/tailwind.css";

import App from "./App.vue";
import router from "./router";
import { store } from "./store";

idsrvAuth.startup().then(ok => {
    if (ok) {
        const app = createApp(App);
        app.config.globalProperties.$oidc = idsrvAuth

        app.component("default-layout", DashboardLayout);
        app.component("empty-layout", EmptyLayout);

        app.use(router).use(VueApexCharts).use(store).mount("#app");

        console.log('Startup was ok')
        console.log(process.env.NODE_ENV)
    } else {
      console.log('Startup was not ok')
    }
  })
