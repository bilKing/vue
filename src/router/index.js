import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'
import login from '@/components/login'
import register from '@/components/register'
import mainview from '@/components/mainview'
import main0 from'@/components/main0'
import main1 from'@/components/main1'
import main2 from'@/components/main2'
import main3 from'@/components/main3'
import main4 from'@/components/main4'
import main5 from'@/components/main5'
import main31 from '@/components/main31'
import main32 from '@/components/main32'
import main33 from '@/components/main33'
import main34 from '@/components/main34'
import main40 from'@/components/main40'
import main41 from'@/components/main41'
import main42 from'@/components/main42'
import main43 from'@/components/main43'
import main44 from'@/components/main44'
import main45 from'@/components/main45'
import main46 from'@/components/main46'
import main51 from'@/components/main51'
import main52 from'@/components/main52'
import main53 from'@/components/main53'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        { path: '/', redirect: '/login' },
        { path: 'login', component: login },
        { path: 'register', component: register }
    ],
    },
    {
      path: '/mainview',
      component: mainview,
      children: [
        { path: 'main0', component: main0 },
        { path: 'main1', component: main1 },
        { path: 'main2', component: main2 },
        { path: 'main3', component: main3 },
        { path: 'main31', component: main31 },
        { path: 'main32', component: main32 },
        { path: 'main33', component: main33 },
        { path: 'main34', component: main34 },
        { path: 'main40', component: main40 },
        { path: 'main4', component: main4 },
        { path: 'main41', component: main41 },
        { path: 'main42', component: main42 },
        { path: 'main43', component: main43 },
        { path: 'main44', component: main44 },
        { path: 'main45', component: main45 },
        { path: 'main46', component: main46 },
        { path: 'main5', component: main5 },
        { path: 'main51', component: main51 },
        { path: 'main52', component: main52 },
        { path: 'main53', component: main53 },
    ]
  }
  ]
})
