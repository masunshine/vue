const index = () => import(/* webpackChunkName: "vmsMaintainManage" */ '../page/index.vue')
export default [
    {
        path: '*',
        redirect: '/app'
    },
    {
        path: '/app',
        name: '首页',
        component: index
    }
]