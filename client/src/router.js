import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CharacterSelection from './views/CharacterSelection.vue'
import BattleScreen from './views/BattleScreen.vue'
import CharacterManager from './views/CharacterManager.vue'

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
    },
    {
      path: '/battle/:character',
      name: 'battle-screen',
      component: BattleScreen,
      props: true
    },
    {
      path: '/character-edit',
      name: 'character-edit',
      component: CharacterManager,
      props: true
    }
  ]
})
