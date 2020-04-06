<template>
<div>
  <div class="btngroup q-pa-lg q-px-lg">
    <q-btn color="blue-10" unelevated style="width:180px" class="btn q-ma-md">
      <q-icon class="fab fa-facebook-f q-pa-md q-pr-lg" size="sm"/>
      <label class="q-px-sm">Facebook</label>
    </q-btn>
    <br>
    <q-btn color="red-8" unelevated style="width:180px" class="btn q-ma-md">
      <q-icon class="fab fa-google q-pa-md q-pr-lg" size="sm"/>
      <label class="q-px-sm">Google</label>
    </q-btn>
    <q-separator inset class="q-ma-md"/>
<<<<<<< HEAD
    <q-btn color="blue-8" unelevated style="width:180px" class="btn q-ma-md">
=======
    <q-btn to="email" color="blue-8" unelevated style="width:180px" class="btn q-ma-md">
>>>>>>> origin/ting
      <q-icon class="q-pa-md q-pr-lg far fa-envelope" size="sm"/>
      <label class="q-px-sm">Email</label>
    </q-btn>
    <br><br>
    <h7 class="text">還沒有帳號嗎？</h7><router-link to="signin"><h7>註冊</h7></router-link>
  </div>
</div>
</template>

<style>
.btngroup {
margin-top: 280px
}
.btn {
margin-left: 23%;
}
.text{
margin-left: 30%
}
</style>

<script>
export default {
  name: 'login'
}
</script>
