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
      <q-btn class="q-ma-xl" unelevated to="list" size="25px" round color="deep-orange" >
      <q-icon name="access_time" style= "color:#fff ; font-size: 2.3em;" />
      </q-btn>
      <br>
      <q-btn class="q-ma-xl" unelevated to="form" size="25px" round color="deep-orange" >
      <q-icon name="calendar_today" style= "color:#fff ; font-size: 2em;" />
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
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
