import Vue from 'vue';
import App from './components/App.vue';
import VueRouter from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import Signin from './components/Signin.vue';
import { firebaseApp } from './firebaseApp';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/signin', component: Signin },
  ]
})

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    router.push('/dashboard')
  } else {
    router.replace('/signin')
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
