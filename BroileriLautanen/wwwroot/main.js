import scss from './stylesheets/app.scss'

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import ApiExample from './components/ApiExample.vue'
import Inputs from './components/Inputs.vue'

// Install plugins
Vue.use(Router)
Vue.use(Resource)

// route config
let routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
      path: '/apiexample',
      name: 'apiexample',
      component: ApiExample
  },
  {
      path: '/inputs',
      name: 'inputs',
      component: Inputs
  },
  { path: '*', redirect: '/home' }
]

// Set up a new router
let router = new Router({
  routes: routes
})

// Start up our app
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
