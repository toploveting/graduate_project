<template>
  <q-layout view="hHh lpr fFf">
    <q-header>
      <q-toolbar class="toolbar text-secondary">
        <q-btn
          flat
          dense
          round
          icon="navigate_beforet"
          aria-label="Menu"
          to="home"
        />
        <q-toolbar-title class="title">JOINME</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.title{
  padding-left: 30%
}
.drawer{
  color:white
}
</style>

<script>
export default {
  name: 'secondLayout',

  components: {
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
