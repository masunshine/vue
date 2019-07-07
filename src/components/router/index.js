import VueRouter from 'vue-router'
import Vue from 'vue'
import list from './list'
import app from './app'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        ...list,
        ...app
    ]
})

export default router