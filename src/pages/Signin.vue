<template>
  <div>
    <div class="q-mt-xl q-ml-lg">
      <h6>創立新帳號</h6>
      <br>
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
      <q-input class="q-pr-lg q-mb-md" v-model="passwordc" :type="isPwd ? 'password' : 'text'" label="確認密碼">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer1"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn to="success" color="blue-8" unelevated style="width:180px" class="btn q-ma-md" label="註冊">
    </q-btn>
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
export default {
  name: 'signin',
  data () {
    return {
      password: '',
      passwordc: '',
      isPwd: true,
      email: '',
      first: '',
      name: '',
      text: ''
    }
  }
}
</script>
