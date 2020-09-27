import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home_01 from '@/components/Home_01'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/Home_01',
            name: 'Home_01',
            component: Home_01
        }, {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }

    ]
})