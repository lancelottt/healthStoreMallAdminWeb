import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import VCharts from 'v-charts'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'
import './utils/filter'

import '@/icons' // icon
import '@/permission' // permission control 
// import VueUeditorWrap from 'vue-ueditor-wrapp'
// Vue.component('vue-ueditor-wrap', VueUeditorWrap)

Vue.use(ElementUI, { locale })
Vue.use(VCharts)

import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'



Vue.use(VueQuillEditor)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})