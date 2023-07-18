import type { RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path:'/home',
        component:()=>import('@/views/Home.vue'),
        children:[
            {
                // path: '/home/message', // 全写
                path:'message',// 简写
                component:()=>import('@/views/Message.vue'),
                children:[
                    {
                        name:'MsgDetail',
                        path:'msgdetail/:msgId?',
                        component:()=>import('@/views/MsgDetail.vue'),
                        // props可以把路由参数映射到组件中
                        // 1. 布尔值 - 只能映射params参数
                        // props: true
                        // 2. 对象写法 - 映射额外的参数
                        // props: {
                        //   text: '我爱你'
                        // }
                        // 3. 函数写法 - 既可以映射参数,也可以携带额外参数
                        props(route){
                            return{
                                msgId:route.params.msgId,
                                content:route.query.content,
                                text:'沙僧'
                            }
                        }
                    }
                ]
            },
            {
                path:'news',
                component:()=>import('@/views/News.vue'),
                children:[
                    {
                        name:'NewsDetail',
                        path:'newsdetail/:newsId?',
                        component:()=>import('@/views/NewsDetail.vue')
                    }
                ]
            },
            {
                path:'',
                redirect:'/home/message'// 二级路由的redirect不支持简写
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