import 'core-js/stable'
import { createPinia } from 'pinia'
import { createApp, h } from 'vue'
import router from './router'
import './styles/globals.css'
import App from './views/app'

const app = createApp({
  setup () {
    return () => h(App)
  },
})

app
  .use(createPinia())
  .use(router)
  .mount('#app')
