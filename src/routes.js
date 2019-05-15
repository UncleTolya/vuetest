import VueRouter from 'vue-router'
import ErrorComp from './components/Error'
import Users from './pages/Users'
import User from './pages/User'
import UserTimeLine from './components/user-timeline/UserTimeLine'



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
          path: 'tl',
          component: UserTimeLine,
          name: 'userTimeLine',
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
