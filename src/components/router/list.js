const topDetail = () => import(/* webpackChunkName: "vmsMaintainManage" */ '../page/top-detail.vue')
const mcDetail = () => import(/* webpackChunkName: "vmsMaintainManage" */ '../page/mc-detail.vue')
export default [
    {
        path: '/page/top-detail/:id/:type',
        component: topDetail
        // meta: { tag: '/page/index', title: '排行详情' }
    },
    {
        path: '/page/mc-detail/:name',
        component: mcDetail
    }
]