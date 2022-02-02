import { createApp } from "vue";
import { createI18n } from "vue-i18n/index";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

import us from "./locale/en.json";
import es from "./locale/es.json";
import br from "./locale/br.json";
import fr from "./locale/fr.json";

const app = createApp(App);

const i18n = createI18n({
  locale: localStorage.getItem("lang") || "us",
  fallbackLocale: "us",
  messages: {
    us: us,
    es: es,
    br: br,
    fr: fr,
  },
});

app.use(router);
app.use(i18n);

app.mount("#app");

export default i18n;
