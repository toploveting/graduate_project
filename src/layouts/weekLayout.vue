<template>
  <q-layout view="hHh lpr fFf">
    <q-header>
      <q-toolbar class="toolbar bg-secondary">
        <q-btn flat dense round label="上一步" to="week"/>
        <q-space/>
        <q-toolbar-title class="title">週曆</q-toolbar-title>
        <q-space/>

        <q-btn  flat dense class="q-mr-xs">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
          <title>ionicons-v5-f</title>
          <path
            d="M336,192h40a40,40,0,0,1,40,40V424a40,40,0,0,1-40,40H136a40,40,0,0,1-40-40V232a40,40,0,0,1,40-40h40"
            style="fill:none;stroke:#FFF;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
          ></path>
          <polyline
            points="336 128 256 48 176 128"
            style="fill:none;stroke:#FFF;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
          ></polyline>
          <line
            x1="256"
            y1="321"
            x2="256"
            y2="48"
            style="fill:none;stroke:#FFF;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
          ></line>
        </svg>
        分享
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'blueLayout',

  components: {},

  data () {
    return {}
  }
}
</script>

<style lang="scss">
.title {
  text-align: center;
}
</style>
