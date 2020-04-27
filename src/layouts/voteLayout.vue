<template>
  <q-layout view="hHh lpr fFf" style="height:300px" class="rounded-borders" f>
    <q-header class="bg-secondary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-btn
          to="vote_r"
          flat
          dense
          round
          icon="event_note"
        />
        <q-toolbar-title class="title text-center">活動名稱</q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="share"
        />
        <q-btn
          flat
          dense
          round
          label="選擇"/>
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
            <q-expansion-item
              label="分享時間" expand-icon-class="text-white">
              <q-item clickable v-ripple to="class">
                <q-item-section avatar>
                  <q-img src="~assets/classminiicon.png" style="width:20px" class="q-ml-xs"></q-img>
                </q-item-section>
                <q-item-section>
                  課表
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple to="week">
                <q-item-section avatar>
                  <q-img src="~assets/weekminiicon.png" style="width:20px" class="q-ml-xs"></q-img>
                </q-item-section>
                <q-item-section>
                  週曆
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple to="month">
                <q-item-section avatar>
                  <q-img src="~assets/monthminiicon.png" style="width:20px" class="q-ml-xs"></q-img>
                </q-item-section>
                <q-item-section>
                  月曆
                </q-item-section>
              </q-item>
            </q-expansion-item>
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
.drawer{
  color:white
}
</style>

<script>
export default {
  name: 'voteLayout',

  components: {
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
