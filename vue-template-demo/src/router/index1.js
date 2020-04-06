import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routePath = [
  {
    path: '/',
    name: 'home',
    redirect: '/home/hello',
    component: () => import('@/views/home/home'),
    children: [
      {
        path: '/home/hello',
        name: 'Hello',
        component: () => import('@/components/HelloWorld')
      },
      {
        path: 'world',
        name: 'world',
        component: () => import('@/components/world')
      }
    ]
  }
]
const router = new Router({
  scrollBehavior: () => ({y: 0}),
  routes: routePath
})
router.beforeEach((to, from, next) => {
  console.log('to---', to)
  console.log('from---', from)
  next()
})
export default router
