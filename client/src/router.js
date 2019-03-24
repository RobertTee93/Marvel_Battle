import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CharacterSelection from './views/CharacterSelection.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
			props: true
    },
    {
      path: '/select-character',
      name: 'select-character',
      component: CharacterSelection,
			props: true
    }
    // {
    //   path: '/admin',
    //   name: 'admin-home',
    //   component: AdminHome,
    //   props: true
    // },
    // {
    //   path: '/admin/sweepstakes/new',
    //   name: 'admin-sweepstakes-new',
    //   component: AdminNewSweepstake,
    //   props: true
    // },
    // {
    //   path: '/admin/sweepstakes/:id/edit',
    //   name: 'admin-sweepstakes-edit',
    //   component: AdminEditSweepstake,
    //   props: true
    // }
  ]
})
