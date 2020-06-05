<template id="app">
  <div class="text-center">
    <div class="top">
    <span class="text-bold">陳穎生日夜唱!</span>
    </div>
    <div class="bg">
        <img src="~assets/build.png" alt="bg">
    </div>
    <div class="friend">
    <span>分享給你的朋友!</span>
    </div>
    <template id="t">
      <div class="container">
<q-input type="text" standout disable dense label="網址"/>
       <q-btn class="btn" outline label="複製" type="button" @click="doCopy"></q-btn>
      </div>
    </template>
    <br>
    <div>
      <q-btn class="btn1" unelevated label="前往活動" to="activity" />
    </div>
  </div>
</template>
<style lang="scss">
.bg {
position: relative;
position: absolute;
top: 110pt;
left: 50%;
margin-left: -85px;
}
.top{
  font-size: 21px;
  color: rgb(63, 121, 204);
  margin-top: 40px;
}
.friend{
  font-size: 18px;
  color: rgb(100, 100, 100);
  margin-top: 225px;
}
.container{
  position: relative;
  position: absolute;
  top: 65%;
  left: 50%;
  margin-left: -91px;
}
.btn{
  margin-top: 23px;
  width: 168px;
  color: rgb(63, 121, 204);
  border-radius: 10pt;
  background-color: white;
}
.btn1{
  position: relative;
  position: absolute;
  top: 90%;
  left: 50%;
  margin-left: -84px;
  width: 168px;
  background-color: rgb(63, 121, 204);
  color: white;
  border-radius: 10pt;
  text-decoration: none;
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
