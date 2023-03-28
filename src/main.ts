import { createApp } from "vue";

import VueApexCharts from "vue3-apexcharts";
import DashboardLayout from "./components/DashboardLayout.vue";
import EmptyLayout from "./components/EmptyLayout.vue";

import "./assets/tailwind.css";

import App from "./App.vue";
import router from "./router";
import { store } from "./store";

const app = createApp(App);

app.component("default-layout", DashboardLayout);
app.component("empty-layout", EmptyLayout);

app.use(router).
use(VueApexCharts).
use(store).
mount("#app");

console.log('Startup was ok')
console.log(process.env.NODE_ENV)
