import type { RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path:'/home',
        component:()=>import('@/views/Home.vue'),
        children:[
            {
                path:'message',
                component:()=>import('@/views/Message.vue')
            },
            {
                path:'news',
                component:()=>import('@/views/News.vue')
            },
            {
                path:'',
                redirect:'/home/message'
            }
        ]
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