import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import $httpMessageState from '@/methods/pushMessageState'

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')

app.config.globalProperties.$httpMessageState = $httpMessageState
