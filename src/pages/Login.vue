<template>
  <div>
    <div class="logo">
      <img class="img" src="~assets/logo.png"/>
    </div>
    <div class="btngroup q-pa-lg">
      <q-btn
        @click="facebooklogin"
        unelevated
        style="width:180px"
        class="fb btn q-ma-md"
      >
        <q-icon class="fab fa-facebook-f q-pa-md q-pr-lg" size="sm"/>
        <label class="q-px-sm">Facebook</label>
      </q-btn>

      <br>

      <q-btn
        @click="googlelogin"
        color="red-8"
        unelevated
        style="width:180px"
        class="g btn q-ma-md"
        type="submit"
      >
        <q-icon class="fab fa-google q-pa-md q-pr-lg" size="sm"/>
        <label class="q-px-sm">Google</label>
      </q-btn>

      <q-separator inset class="q-ma-md"/>
      <q-btn
        to="/email"
        color="blue-8"
        unelevated
        style="width:180px"
        class="em btn q-ma-md"
      >
        <q-icon class="q-pa-md q-pr-lg far fa-envelope" size="sm"/>
        <label class="q-px-sm">Email</label>
      </q-btn>
      <br>
      <br>
      <div class="text">
        <span class="signin">還沒有帳號嗎？</span>
        <router-link to="signin">
          <span>註冊</span>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { firebaseAuth } from '../boot/firebase'

export default {
  name: 'Login',

  data () {
    return {
      user: {},
      isAuth: false
    }
  },

  created () {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        this.user = user
        this.isAuth = true
      } else {
        this.user = {}
        this.isAuth = false
      }
    })
  },
  methods: {
    googlelogin () {
      const authProvider = new firebase.auth.GoogleAuthProvider()
      firebaseAuth
        .signInWithPopup(authProvider)
        .then(result => {
          this.user = result.user
          this.isAuth = true
          this.$router.replace('/form')
        })
        .catch(err => console.error(err))
    },
    facebooklogin () {
      const authProvider = new firebase.auth.FacebookAuthProvider()
      firebaseAuth
        .signInWithPopup(authProvider)
        .then(result => {
          this.user = result.user
          this.isAuth = true
          this.$router.replace('/home')
        })
        .catch(err => console.error(err))
    },
    logout () {
      firebaseAuth.signOut()
        .then(() => {
          this.user = {}
          this.isAuth = false
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
.logo{
  width: 100%;
  position: relative;
  position: absolute;
  top: 13%;
}
.img{
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -56px;
}
.btngroup{
  width: 100%;
  position: relative;
  position: absolute;
  top: 38%;
}
.btn {
  left: 50%;
  margin-left: -90px;
}
.text {
  width: 100%;
  position: relative;
  position: absolute;
  top: 95%;
  left: 50%;
  margin-left: -83.5px;
  font-size: 14pt;
  color: rgb(140, 140,140);
}
.fb{
  background-color: rgb(59, 89, 152);
  color: white;
  border-radius: 10pt;
}
.g{
  background-color: rgb(221, 75, 57);
  color: white;
  border-radius: 10pt;
}
.em{
  background-color: rgb(63, 121, 204);
  color: white;
  border-radius: 10pt;
}
</style>
