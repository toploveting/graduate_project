<template>
  <div>
    <div class="q-pa-xl">
    <img src="~assets/group29.png" class="bg">
    <div class="q-pa-xl">
      <h6 class="text">註冊成功！</h6>
      <h8 class="text1">您的帳號正在被保護</h8>
    </div>
    <q-btn to="email" color="blue-8" unelevated style="width:180px" class="btn q-ma-xl" label="立即登入"/>
    </div>
  </div>
</template>

<style lang="scss">
.bg {
  margin-left: 15%;
  margin-top: 20%
}
.text {
  margin-left: 25%;
  color: #3f79cc
}
.text1{
  margin-left: 15%;
  color: #8c8c8c
}
.btn{
  margin-left: 18%
}
</style>

<script>
export default {
  name: 'success'
}
</script>
