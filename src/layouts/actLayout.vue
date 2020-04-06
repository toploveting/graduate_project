<template>
  <q-layout view="hHh lpr fFf" style="height:300px" class="rounded-borders">
    <q-header elevated class="bg-secondary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title class="title">JOINME</q-toolbar-title>
        <q-btn
          to="home"
          flat
          dense
          round
          icon="clear"/>
      </q-toolbar>
    </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        :width="216"
        :breakpoint="500"
        content-class="bg-secondary"
        class="drawer"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item clickable v-ripple to="home">
              <q-item-section class="q-py-sm">
                <q-avatar size="56px">
                  <img src="~assets/ying.jpg"/>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                陳穎
              </q-item-section>
            </q-item>
            <q-separator color="white"/>
            <q-item clickable v-ripple to="list">
              <q-item-section>
                分享時間
              </q-item-section>
            </q-item>
            <q-expansion-item
              label="建立活動" expand-icon-class="text-white">
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="star"></q-icon>
                </q-item-section>
                <q-item-section>
                  活動
                </q-item-section>
              </q-item>
            </q-expansion-item>
            <q-separator color="white"/>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send"></q-icon>
              </q-item-section>
              <q-item-section>
                登出
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
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
  name: 'actLayout',

  components: {
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
