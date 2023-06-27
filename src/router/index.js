import Login from '../components/user/Login.vue'
import PatcherInfos from '../components/patchers/PatcherInfos.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/patcherInfos', name: 'patcherInfos', component: PatcherInfos }
]

const router = new VueRouter({
     mode: 'hash',
     base: process.env.BASE_URL,
    routes
  })
  
  export default router

