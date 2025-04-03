import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import hevueImgPreview from 'hevue-img-preview'

import App from './portal/App.vue'
import router from './portal/router'
import pinia from '@/portal/stores/index.js'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/src/index.scss'
import './styles/index.scss'


import 'tailwindcss/tailwind.css'
import 'swiper/swiper-bundle.css'

const app = createApp(App)
for (let [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(hevueImgPreview)

app.mount('#app-portal')
