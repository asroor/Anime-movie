import { createRouter, createWebHistory } from 'vue-router'
import Example from "@/views/Example.vue"
import Example2 from "@/views/Example2.vue"
import HomeView from "@/views/HomeView.vue"
import WatchView from "@/views/WatchView.vue"
import AllAnime from "@/views/AllAnime.vue"
import Profill from "@/views/Profill.vue"
import adminChat from "@/views/adminChat.vue"
import News from "@/views/News.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/News', 
      name :'News', 
      component: News
    },
    {
      path: '/adminChat', 
      name :'adminChat', 
      component: adminChat
    },
    {
      path: '/Profill', 
      name :'Profill', 
      component: Profill
    },
    {
      path: '/AllAnime', 
      name :'AllAnime', 
      component: AllAnime
    },
    {
      path: '/WatchView', 
      name :'WatchView', 
      component: WatchView
    },
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/example',
      name: "example",
      component: Example
    },
    {
      path: '/example2',
      name: "example2",
      component: Example2
    }
  ]
})

export default router
