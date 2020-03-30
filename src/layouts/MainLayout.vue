<template>
  <q-layout view="hHh lpr fFf">
    <q-header>
      <q-toolbar class="toolbar text-secondary">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title class="title">JOINME</q-toolbar-title>
      </q-toolbar>
    </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        overlay
        :width="216"
        :breakpoint="500"
        content-class="bg-secondary"
        class="drawer"
      >
        <q-scroll-area style="height: calc(100% - 100px); margin-top: 100px; border-top: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple>
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
        <div class="absolute-top id" style="height: 100px">
          <div class="absolute-bottom">
            <q-avatar size="56px" class="q-mb-md q-mx-md">
              <img src="~assets/ying.jpg">
            </q-avatar>
            陳穎
          </div>
          <q-separator/>
        </div>
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
  name: 'MainLayout',

  components: {
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
