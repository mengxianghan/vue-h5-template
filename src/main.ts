import { createApp } from 'vue'
import { router } from '@/router'
import { store } from '@/store'
import App from './App.vue'
import 'vant/lib/index.css'
import '@/styles/index.scss'

function bootstrap() {
  const app = createApp(App)

  app.use(store)
  app.use(router)

  app.mount('#app')
}

bootstrap()
