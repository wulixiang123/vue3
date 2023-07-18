import type { RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path:'/home',
        component:()=>import('@/views/Home.vue')
    },
    {
        path:'/about',
        component:()=>import('@/views/About.vue')
    },
    {
        path:'/',
        redirect:'/home'
    },
]
export default routes