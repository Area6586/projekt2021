import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


import Info from '@/components/Info.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias : '/Home',

  },
  {
    path: '/info/:userId',
    name: 'Info',
    props: true,
    component: Info
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
