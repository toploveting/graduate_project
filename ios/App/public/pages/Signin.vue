<template>
  <div>
    <div class="q-mt-xl q-ml-lg">
      <h6>創立新帳號</h6>
      <br>
      <q-form @submit="signUp">
      <div class="row">
      <q-input class="q-mb-md" v-model="first" label="姓氏" :dense="dense" />
      <q-input class="q-pl-sm q-mb-md" v-model="name" label="名字" :dense="dense" />
      </div>
      <q-input class="q-pr-lg q-mb-md" v-model="email" type="email" label="電子信箱" :dense="dense" />
      <q-input class="q-pr-lg q-mb-md" v-model="password" :type="isPwd ? 'password' : 'text'" label="密碼">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-input class="q-pr-lg q-mb-md" v-model="passwordc" :type="isPwdc ? 'password' : 'text'" label="確認密碼">
        <template v-slot:append>
          <q-icon
            :name="isPwdc ? 'visibility_off' : 'visibility'"
            class="cursor-pointer1"
            @click="isPwdc = !isPwdc"
          />
        </template>
      </q-input>
      <q-btn color="blue-8" unelevated style="width:180px" class="btn q-ma-md" label="註冊" type="submit">
    </q-btn>
    </q-form>
    </div>
  </div>
</template>

<style lang="scss">
.btn{
  margin-left: 20%;
  margin-top: 15%
}
</style>

<script>

import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '../router'

Vue.use(Vuex)

export default {
  name: 'Signin',
  data () {
    return {
      password: '',
      passwordc: '',
      isPwd: true,
      isPwdc: true,
      email: '',
      first: '',
      name: '',
      text: ''
    }
  },

  methods: {
    hi () {
      alert(this.password)
    },
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('success')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    },
    SignUp () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.name
            })
            .then(() => {})
        })
        .catch(err => {
          this.error = err.message
        })
    },

    loginWithEmailPassword: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          if (data.user) {
            this.$router.replace({ path: '/' })
          }
        })
        .catch(err => {
          this.error = err.message
        })
    },

    async loginWithGoogle () {
      // loading set to true
      this.loading = true
      // clear old errors
      this.errors = []
      try {
        const response = await firebase
          .auth()
          .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        this.user = response.user
        this.loading = false
        router.push('/')
      } catch (error) {
        this.errors.push(error.message)
        // set loading to false
        this.loading = false
      }
    },
    async loginWithFacebook () {
      // loading set to true
      this.loading = true
      // clear old errors
      this.errors = []
      try {
        const response = await firebase
          .auth()
          .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        this.user = response.user
        this.loading = false
        router.push('/')
      } catch (error) {
        this.errors.push(error.message)
        // set loading to false
        this.loading = false
      }
    }
  }
}

</script>
