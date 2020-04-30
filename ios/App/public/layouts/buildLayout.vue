<template>
  <q-layout view="hHh lpr fFf">
    <q-header>
      <q-toolbar class="toolbar bg-secondary">
        <q-btn
          flat
          dense
          round
          icon="navigate_beforet"
          to="home"/>
        <q-toolbar-title class="title">建立活動</q-toolbar-title>
        <q-btn to="home" flat round dense icon="clear" class="q-mr-xs" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'blueLayout',

  components: {
  },

  data () {
    return {
    }
  }
}
</script>
