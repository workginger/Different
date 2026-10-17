import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/router";
import PrimeVue from "primevue/config";

const app = createApp(App);

import Breadcrumb from "primevue/breadcrumb";

app.use(router);
app.use(PrimeVue);
app.component("Breadcrumb", Breadcrumb);
app.mount("#app");
