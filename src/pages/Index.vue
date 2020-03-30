<template>
  <q-page class="main flex flex-center">
   <div class="bg flex-center">
    <q-img
      alt="bg"
      src="~assets/background.png"
      height="667px"
      width="375px"
    />
   </div>
    <div class="btngroup q-pa-md q-gutter-sm">
      <div class="q-ma-lg blue">
      <q-btn to="list" size="40px" color="white" >
      <q-img src="~assets/oval1.png" height="70px" width="70px"/>
      </q-btn>
      <p class="text-h6 q-pl-sm q-pt-md">分享時間</p>
      </div>
      <br>
      <div class="q-ma-lg pink">
      <q-btn to="form" size="40px" color="white">
      <q-img src="~assets/oval2.png" height="70px" width="70px"/>
      </q-btn>
      <p class="text-h6 q-pl-sm q-pt-md">建立活動</p>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
  .bg{
    position: absolute;
  }
  .btngroup{
    position: relative;
  }
  .blue{
    color: rgb(63,121,204)
  }
  .pink{
    color: rgb(213,102,102)
  }
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
