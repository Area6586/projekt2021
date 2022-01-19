import { createRouter, createWebHistory } from 'vue-router'
//importing Home components from '../views/Home.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Footer from '@/components/Death.vue'
import Info from '@/components/Info.vue'



// gelernt von folgendem tutorial https://www.youtube.com/watch?v=juocv4AtrHo
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
    path: '/randomdeath',
    name: 'Death',
    //allwed parameters 
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
