<template>
  <q-layout view="hHh lpr fFf">
    <q-header>
      <q-toolbar class="toolbar bg-secondary">
        <q-btn
          flat
          dense
          round
          icon="navigate_beforet"
          to="setting"/>
        <q-toolbar-title class="title">設定</q-toolbar-title>
        <q-btn to="setting" flat dense class="q-mr-xs" label="完成"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'settingLayout',

  components: {
  },

  data () {
    return {
    }
  }
}
</script>
