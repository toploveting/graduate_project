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
      :content-style="{ backgroundColor: '#2c4b78' }"
      class="drawer"
    >
      <q-scroll-area style="height: calc(100% - 100px)">
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section class="q-py-sm">
              <q-avatar size="56px">
                <img src="~assets/ying.jpg">
              </q-avatar>
            </q-item-section>
            <q-item-section>陳穎</q-item-section>
          </q-item>
          <q-separator color="white"/>
          <q-expansion-item label="分享時間" expand-icon-class="text-white">
            <q-item clickable v-ripple to="class">
              <q-item-section avatar>
                <q-img src="~assets/classminiicon.png" style="width:20px" class="q-ml-xs"></q-img>
              </q-item-section>
              <q-item-section>課表</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="week">
              <q-item-section avatar>
                <q-img src="~assets/weekminiicon.png" style="width:20px" class="q-ml-xs"></q-img>
              </q-item-section>
              <q-item-section>週曆</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="month">
              <q-item-section avatar>
                <q-img src="~assets/monthminiicon.png" style="width:20px" class="q-ml-xs"></q-img>
              </q-item-section>
              <q-item-section>月曆</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item label="建立活動" expand-icon-class="text-white">
            <q-item clickable v-ripple to="activity">
              <q-item-section avatar>
                <q-img src="~assets/star.png" style="width:20px" class="q-ml-xs"/>
              </q-item-section>
              <q-item-section>活動</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-separator color="white"/>

          <q-item clickable v-ripple @click="leftDrawerOpen = !leftDrawerOpen">
            <q-item-section avatar>
              <q-img src="~assets/set.png" style="width:20px" class="q-ml-xs"/>
            </q-item-section>
            <q-item-section>設定</q-item-section>
          </q-item>
          <q-separator color="white"/>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-img src="~assets/logout.png" style="width:20px" class="q-ml-xs"/>
            </q-item-section>
            <q-item-section>登出</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.title {
  padding-left: 30%;
}
.drawer {
  color: white;
}
.drawerBtn {
}
</style>

<script>
export default {
  name: 'MainLayout',

  components: {},

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
