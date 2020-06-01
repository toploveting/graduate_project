<template>
  <q-page class="main flex flex-center">
   <div class="bg flex-center">
    <q-img
      alt="bg"
      src="~assets/bg2.png"
      height="667px"
      width="375px"
    />
   </div>
  <div class="btngroup">
    <q-btn class="q-pt-sm q-pb-sm q-my-md " color="white" to="class">
      <q-img
        alt="bg"
        src="~assets/class.png"
        height="111px"
        width="111px"
        class="q-mr-xl"/>
      <q-img
        alt="bg"
        src="~assets/classicon.png"
        height="25px"
        width="23px"
        class="q-mx-md"/>
      <h6 class="class q-pt-sm q-mr-lg">課表</h6>
    </q-btn>
    <br>
    <q-btn class="q-pt-sm q-pb-sm q-my-md" color="white" to="week">
      <q-img
        alt="bg"
        src="~assets/week.png"
        height="111px"
        width="111px"
        class="q-mr-xl"/>
      <q-img
        alt="bg"
        src="~assets/weekicon.png"
        height="25px"
        width="23px"
        class="q-mx-md"/>
      <h6 class="class q-pt-sm q-mr-lg">週曆</h6>
      </q-btn>
      <br>
      <q-btn class="q-pt-sm q-pb-sm q-my-md" color="white">
      <q-img
        alt="bg"
        src="~assets/month.png"
        height="111px"
        width="111px"
        class="q-mr-xl"/>
      <q-img
        alt="bg"
        src="~assets/monthicon.png"
        height="25px"
        width="23px"
        class="q-mx-md"/>
      <h6 class="class q-pt-sm q-mr-lg">月曆</h6>
    </q-btn>
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
  .class{
      color: #3f79cc;
  }
</style>

<script>
export default {
  name: 'list'
}
</script>
