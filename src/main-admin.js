import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn  from 'element-plus/es/locale/lang/zh-cn.mjs'
import hevueImgPreview from 'hevue-img-preview'

import App from './admin/App.vue'
import router from './admin/router'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/src/index.scss'
import './styles/index.scss'


import 'tailwindcss/tailwind.css'

const app = createApp(App)
for (let [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(hevueImgPreview)

app.mount('#app-admin')
