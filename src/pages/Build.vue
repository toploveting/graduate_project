<template id="app">
  <div>
    <div class="bg">
        <img src="~assets/build.png" alt="bg">
    </div>
    <div>
        <p class="q-mt-lg text-h6">分享給你的朋友!</p>
    </div>
    <template id="t">
      <div class="container">
        <q-input type="text" v-model="message"/>
        <q-btn class="btn" outline color="secondary" label="複製" type="button" @click="doCopy"></q-btn>
      </div>
    </template>
    <br>
    <div>
      <q-btn to="/activity" class="btn1 q-mt-lg" unelevated color="secondary" label="開始賓果" />
    </div>
  </div>
</template>
<style lang="stylus" scoped>
img {
margin-left: 27%
margin-top: 35%
}
p {
margin-left: 30%
}
.btn {
margin-left: 40%
}
.btn1 {
margin-left: 36%
}
</style>
<script>
export default {
  el: '#app',
  template: '#t',
  name: 'Build',
  data () {
    return {
      message: 'Copy These Text'
    }
  },
  methods: {
    doCopy () {
      this.$copyText(this.message).then(function (e) {
        alert('Copied')
        console.log(e)
      }, function (e) {
        alert('Can not copy')
        console.log(e)
      })
    }
  }
}
