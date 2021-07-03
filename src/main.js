import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Axios from 'axios'
import { messages } from './locales/locale'
import VueI18n from 'vue-i18n'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import store from './store'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'ua',
  messages
})
Vue.config.productionTip = false
const configOptions = {
  apiKey: 'AIzaSyBshAAIBJCaZP4czglTpzc-HuJ32y5L5W8',
  authDomain: 'cyber-fd846.firebaseapp.com',
  databaseURL: 'https://cyber-fd846.firebaseio.com',
  projectId: 'cyber-fd846',
  storageBucket: 'cyber-fd846.appspot.com',
  messagingSenderId: '142711346955',
  appId: '1:142711346955:web:f2d07a786c6093ca5eb40e'
}

firebase.initializeApp(configOptions)
/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})
Vue.use(BootstrapVue)

Axios.defaults.baseURL = process.env.API_ENDPOINT
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
