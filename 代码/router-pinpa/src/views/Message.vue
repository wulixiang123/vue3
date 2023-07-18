<template>
    <div role="tabpanel" class="tab-pane active" id="Message">
        <ul class="list-group">
            <li class="list-group-item"
            v-for="item in list"
            :key="item.id"
            >
            <!-- <router-link to="/home/message/msgdetail">{{ item.content }}</router-link> -->
            <!-- /home/message/msgdetail/10010?content=王宝强 -->

            <!-- <router-link :to="`/home/message/msgdetail/${ item.id }?content=${ item.content }`">{{ item.content }}</router-link> -->

            <router-link :to="{
                // path:'/home/message/msgdetail',
                name:'MsgDetail',
                params:{
                    msgId:item.id
                },
                query:{
                    content:item.content
                }
            }">{{ item.content }}</router-link>

                <!-- <a href="##">message01</a>
            </li>
            <li class="list-group-item">
                <a href="##">message02</a>
            </li>
            <li class="list-group-item">
                <a href="##">message03</a> -->
            </li>
        </ul>
        <div class="alert alert-success" role="alert">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const list = ref([
    {id:1,content:'悟空'},
    {id:2,content:'八戒'},
    {id:3,content:'唐僧'}
])
</script>

<style scoped></style>