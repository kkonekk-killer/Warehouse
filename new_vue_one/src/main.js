// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button } from 'vant'
import { Col, Row } from 'vant'
import { NavBar } from 'vant'
import { Icon } from 'vant'
import { Swipe, SwipeItem } from 'vant'
import { Popup } from 'vant'
import { Cell, CellGroup } from 'vant'

Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Popup)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Icon)
Vue.config.productionTip = false
Vue.use(NavBar)
Vue.use(Button)
Vue.use(Col)
Vue.use(Row)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})