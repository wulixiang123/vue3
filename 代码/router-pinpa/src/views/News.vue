<template>
    <div role="tabpanel" class="tab-panel" id="News">
        <ul class="list-group">
            <li class="list-group-item" v-for="item in list" :key="item.id">
                {{ item.content }}
                <button 
                type="button" 
                class="btn btn-primary" 
                data-toggle="button" 
                aria-pressed="false" 
                autocomplete="off"
                @click="toDetail(item)"
                >{{ item.id }}</button>
            </li>
        </ul>
        <div class="alert alert-success" role="alert">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()// 拿到路由器

interface Model{
    id:number,
    content:string
}

const list = ref<Model[]>([
    {id:1,content:'jack'},
    {id:2,content:'rose'},
    {id:3,content:'tom'},
])

const toDetail = (item:Model) => {
    router.push({
        name:'NewsDetail',
        params:{
            newsId:item.id
        },
        query:{
            content:item.content
        }
    })
}
</script>

<style scoped></style>