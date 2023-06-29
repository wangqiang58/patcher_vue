import Login from '../components/user/Login.vue'
import PatcherInfos from '../components/patchers/PatcherInfos.vue'
import AddPatcher from '../components/patchers/AddPatcher.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/list/patcher', name: 'patcherInfos', component: PatcherInfos },
  { path: '/add/patcher', name: 'add/patcher', component: AddPatcher },
]

const router = new VueRouter({
     mode: 'hash',
     base: process.env.BASE_URL,
    routes
  })
  
  export default router

