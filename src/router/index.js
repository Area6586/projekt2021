import { createRouter, createWebHistory } from 'vue-router'
//importing Home components from '../views/Home.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Footer from '@/components/Footer.vue'
import Info from '@/components/Info.vue'

//create route instance of array
const routes = [
  //different objects
  {
    //home url path
    path: '/',
    // name is identifire 
    name: 'Home',
    //which compoinent is show in url
    component: Home,

  },
  {
    path: '/info/:userId',
    name: 'Info',
    //allwed parameters 
    props: true,
    component: Info
  },
    {
    path: '/footer/:name',
    name: 'Footer',
    //allwed parameters 
    props: route => ({ query: route.query }),
    component: Footer
  },
  //catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component : NotFound
  }
]

 //create router  instance and import creatRouter & createWebHistory from line 1 
const router = createRouter({

  //use history instance for back and forward by browser history
  history: createWebHistory(process.env.BASE_URL),
  // using routes 
  routes
})

//exporting router, is being used in main.js
export default router
