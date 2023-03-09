import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import WatchView from "@/views/WatchView.vue"
import AllAnime from "@/views/AllAnime.vue"
import Profill from "@/views/Profill.vue"
import adminChat from "@/views/adminChat.vue"
import News from "@/views/News.vue"
import Purchase from "@/views/Purchase.vue"
import PremimumOne from "@/views/PremimumOne.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Purchase', 
      name :'Purchase', 
      component: Purchase
    },
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
      path: '/WatchView/:id', 
      name :'WatchView', 
      component: WatchView
    },
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/premimum/:id',
      name: "PremimumOne",
      component: PremimumOne
    }
  ]
})

export default router
