import "core-js/stable";
import "./styles/globals.css";
import { createApp, h } from "vue";
import App from './views/app'
import router from "./router";
import { createPinia } from "pinia";

const app = createApp({
  setup () {
    return () => h(App);
  },
});

app
  .use(createPinia())
  .use(router)
  .mount("#app");
