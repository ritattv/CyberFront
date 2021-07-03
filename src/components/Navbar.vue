<template>
  <div>
    <div id="grad">
      <p id="sas">
        {{ $t('header') }}
      </p>
      <a href="#" style="cursor: pointer">
        <select id="TopMenu1" v-on:change="changeLanguage($event)">
          <option id="option" value="ua">Українська</option>
          <option id="option" value="en">English</option>
        </select>
      </a>
      <div><img id="langicon" src="@/assets/ukraine.png" /></div>
      <template v-if="isAdmin()">
        <button id="TopMenu2" @click="backup()">{{ $t('db_backup') }}</button>
      </template>
      <nav class="menu">
        <ul id="headlist" class="nav">
          <li id="home">
            <b-nav-item :to="{ name: 'Home' }">
              <span class="Button"> {{ $t('home') }} </span></b-nav-item
            >
          </li>
          <li id="PlayerList" v-if="isAdmin()">
            <b-nav-item :to="{ name: 'PlayerList' }"
              ><span class="Button"> {{ $t('users') }} </span></b-nav-item
            >
          </li>
          <template v-if="user.loggedIn">
            <li id="TeamList">
              <b-nav-item :to="{ name: 'TeamList' }"
                ><span class="Button"> {{ $t('teams') }} </span></b-nav-item
              >
            </li>
            <li id="SignOut">
              <b-nav-item class="nav-link" @click.prevent="signOut">
                <span class="Button">{{ $t('signout') }}</span></b-nav-item
              >
            </li>
          </template>
          <template v-else>
            <li id="Login">
              <b-nav-item :to="{ name: 'Login' }">
                <span class="Button">{{ $t('signin') }} </span>
              </b-nav-item>
            </li>
            <li id="Register">
              <b-nav-item :to="{ name: 'Register' }">
                <span class="Button">{{ $t('signup') }} </span>
              </b-nav-item>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
import { i18n } from '../main'

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    backup() {
      window.open('http://localhost:50235/api/download')
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: 'Home'
          })
        })
    },
    changeLanguage(event) {
      i18n.locale = event.target.value
      var icon = document.getElementById('langicon')
      if (event.target.value == 'en') icon.src = require('@/assets/united-states.png')
      else icon.src = require('@/assets/ukraine.png')
    },
    isAdmin() {
      var user = firebase.auth().currentUser
      if (user != null) {
        if (user.uid == 'Yv4vtJkQ6GZlyzQhvKy7EUcLqis1') return true
      }
      return false
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
* {
  font-family: 'Raleway', sans-serif;
}
.menu {
  display: inline;
  color: whitesmoke;
  transition: all 0.6s ease;
  font-size: 24px;
  line-height: 28px;
  height: 125px;
  width: 800px;
  margin-left: 240px;
}
#headlist {
  display: flex !important;
  justify-content: center;
  margin-left: 2%;
  flex-basis: auto;
  float: none;
  text-align: center;
  vertical-align: top;
  margin-top: 10%;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  color: white;
}
.Button {
  color: white;
  text-transform: uppercase;
}
.Button:hover {
  color: rgb(39, 39, 39);
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  transition: all 0.5s;
  z-index: -1;
}
#grad {
  position: relative;
  width: 100%;
  height: 210px;
  background: rgb(29, 178, 181);
  background: linear-gradient(45deg, rgba(29, 178, 181, 1) 0%, rgba(172, 37, 213, 1) 50%, rgba(212, 12, 150, 1) 100%);
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
#sas {
  position: relative;
  top: 30px;
  height: 0px;
  font-style: bold;
  font-weight: 250;
  font-size: 36px;
  line-height: 65px;
  align-items: center;
  text-align: center;
  color: whitesmoke;
}
li {
  height: auto;
  width: auto;
  float: left;
}

#TopMenu1 {
  position: absolute;
  margin-left: 90%;
  margin-top: -15px;
  background: transparent;
  border: none;
  color: white;
  text-align: center;
}
#TopMenu1:focus {
  border: none;
  outline: 0;
}
#TopMenu1:hover {
  color: black;
}
#option {
  color: white;
}
#TopMenu2 {
  position: absolute;
  margin-top: -15px;
  background: rgb(135, 29, 167);
  color: white;
  text-align: center;
  overflow: hidden;
  transition: all 0.3s;
  border: none;
  z-index: 1;
}
#TopMenu2:hover {
  background: rgb(115, 9, 147);
  transition: all 0.5s;
}
#TopMenu2:hover:after {
  transform: translateY(-100%);
  transition: transform 0.3s;
}
#option {
  background: rgb(18, 18, 18);
  text-align: center;
}
#SignOut {
  margin-top: -8px;
  margin-left: -16px;
  height: 52px;
}

#langicon {
  position: absolute;
  margin-left: 87%;
  margin-top: -18px;
  width: auto;
  height: auto;
}
</style>
