<template>
  <div>
    <div class="q-mt-xl q-ml-lg">
      <h6>登入您的帳號</h6>
      <br>
      <q-form @submit="loginWithEmailPassword">
      <q-input class="q-pr-lg q-mb-md" v-model.trim="email" type="email" label="電子信箱" :dense="dense" />
      <q-input class="q-pr-lg q-mb-md" v-model.trim="password" :type="isPwde ? 'password' : 'text'" label="密碼">
        <template v-slot:append>
          <q-icon
            :name="isPwde ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwde = !isPwde"
          />
        </template>
      </q-input>
      <q-btn color="blue-8" unelevated style="width:180px" class="btn q-ma-md" label="登入" type="submit"/>
      </q-form>
      <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">是否要匯入行事曆</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn to="home" flat label="不允許" color="secondary" v-close-popup />
          <q-btn to="home" flat label="允許" color="secondary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </div>
  </div>
</template>

<style lang="scss">
.btn{
  margin-left: 20%;
  margin-top: 60%
}
</style>

<script>
import firebase from 'firebase/app'
// import router from '../router'
// import { mapActions } from 'vuex'

export default {
  name: 'Email',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      isPwde: true,
      errors: [],
      loading: false,
      user: '',
      alert: false,
      confirm: false,
      prompt: false,

      address: ''
    }
  },
  methods: {
    SignUp: function () {
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
            this.$router.replace('/home')
          }
        })
        .catch(err => {
          this.error = err.message
        })
    }
  }
}
</script>
