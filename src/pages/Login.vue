<template>
  <div>
    <div class="btngroup q-pa-lg q-px-lg">
      <q-btn
        @click="facebooklogin"
        color="blue-10"
        unelevated
        style="width:180px"
        class="btn q-ma-md"
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
        class="btn q-ma-md"
        type="submit"
      >
        <q-icon class="fab fa-google q-pa-md q-pr-lg" size="sm"/>
        <label class="q-px-sm">Google</label>
      </q-btn>

      <q-separator inset class="q-ma-md"/>
      <q-btn to="/email" color="blue-8" unelevated style="width:180px" class="btn q-ma-md">
        <q-icon class="q-pa-md q-pr-lg far fa-envelope" size="sm"/>
        <label class="q-px-sm">Email</label>
      </q-btn>
      <br>
      <br>
      <h7 class="text">還沒有帳號嗎？</h7>
      <router-link to="signin">
        <h7>註冊</h7>
      </router-link>
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
          this.$router.replace('/home')
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
    }
  }
}
</script>

<style>
.btngroup {
  margin-top: 280px;
}
.btn {
  margin-left: 23%;
}
.text {
  margin-left: 30%;
}
</style>
