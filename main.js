import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

//引入icon组件
import myIcon from './components/icon.vue'
// 全局注册icon组件，方便其他页面使用
Vue.component('myIcon',myIcon)



const app = new Vue({
    ...App
})
app.$mount()
