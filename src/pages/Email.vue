<template>
  <div>
    <div class="q-mt-xl q-ml-lg">
      <h6>登入您的帳號</h6>
      <br>
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
      <q-btn color="blue-8" unelevated style="width:180px" class="btn q-ma-md" label="登入" @click="confirm = true"/>
      <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">是否要匯入行事曆</span>
        </q-card-section>
        <q-card-actions align="right">
<<<<<<< HEAD
          <q-btn to="/" flat label="不允許" color="secondary" v-close-popup />
          <q-btn to="/" flat label="允許" color="secondary" v-close-popup />
=======
          <q-btn to="home" flat label="不允許" color="secondary" v-close-popup />
          <q-btn to="home" flat label="允許" color="secondary" v-close-popup />
>>>>>>> origin/ting
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
export default {
  name: 'email',
  data () {
    return {
      email: '',
      password: '',
      alert: false,
      confirm: false,
      prompt: false,

      address: ''
    }
  },
  methods: {
  }
}
</script>
