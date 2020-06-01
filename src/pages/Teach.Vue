<template>
    <div class="bg">
        <q-img src="~assets/logo.png" style="width:86px" class="logo" leave-active-class="fade-leave-active"/>
        <q-img src="~assets/logo_title.png" style="width:135px" class="logot"/>
    </div>
</template>
<style lang="scss">
.bg{
    width: 100%;
    height: 100%;
    background-color: rgb(247, 248, 255);
    position: relative;
    position: absolute;
}
.logo{
    left: 50%;
    margin-left: -43px;
    position: relative;
    position: absolute;
    top: 25%;
}
.fade-leave-active {
  animation: back 4s;
}
@keyframes back {
  from { background: #999; }
  to { background: #fff; }
}
.logot{
    left: 50%;
    margin-left: -67.5px;
    position: relative;
    position: absolute;
    top: 45%;
}
</style>
<script>
export default {
  name: 'teach'
}
</script>
