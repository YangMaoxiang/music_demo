import Vue from 'vue'
import Router from 'vue-router'
import Recommond from '../components/recommond/recommond.vue'
import Singer from '../components/singer/singer.vue'
import Search from '../components/search/search.vue'
// import Tab from '../components/tab/tab.vue'
import Rank from '../components/rank/rank.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommond
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})
