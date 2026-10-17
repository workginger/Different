import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/router";

const app = createApp(App);

// 自訂元件
import Breadcrumbs from "@/components/Breadcrumbs.vue";

app.component("Breadcrumbs", Breadcrumbs);
app.use(router);
app.mount("#app");
