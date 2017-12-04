import Vue from 'vue';
import App from './components/App.vue';
import VueRouter from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import Signing from './components/Signing.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/signing', component: Signing },
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
