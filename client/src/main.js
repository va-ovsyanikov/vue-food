import { createApp } from 'vue'
import App from './App.vue'
import Notifications from '@kyvg/vue3-notification'
import router from './router'
import store from './store'
import './assets/style.less'

createApp(App).use(Notifications).use(store).use(router).mount('#app')
