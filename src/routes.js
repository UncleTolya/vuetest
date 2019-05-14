import VueRouter from 'vue-router'
import ErrorComp from './pages/Error'
import Users from './pages/Users'
import User from './pages/User'
import UserFull from './pages/UserFull'
import UserTL from './pages/UserTL'



export default new VueRouter ({
  routes: [
    {
      path:'/users', //localhost:8080/cars
      component: Users,
    },
    {
      path:'/user/:id',
      component: User,
      children: [
        {
          path: 'full',
          component: UserFull,
          name: 'userFull',
        },
        {
          path: 'tl',
          component: UserTL,
          name: 'userTL',
        }
      ]
    },
    {
      path: '/',
      component: Users
    },
    {
      path: '*',
      component: ErrorComp
    }
  ],
  mode: 'history',
  scrollBehavior(to, from, savePosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return {
      x: 0,
      y: 500
    }
  }
})
