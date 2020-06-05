<template>
  <div class="row items-start q-py-lg">
    <div>
      <!-- <q-card v-for="item in activity" :key="item">
        {{item.suscribe}}
      </q-card> -->
      <q-item class="item" to="vote">
        <q-slide-item @left="onLeft" @right="onRight" class="shadow-4 slide">
          <template v-slot:right>
            <q-icon name="delete"/>
          </template>
          <div class="my-card">
            <div class="text-title text-bold">揪起來</div>
            <br>
            <br>
            <div class="text-subtitle2 q-pr-md q-pb-sm absolute-bottom-right">-2020/3/16</div>
          </div>
        </q-slide-item>
      </q-item>
      <br>
      <q-item class="item2">
        <q-slide-item @left="onLeft" class="shadow-4 slide">
          <div class="my-card">
            <div class="text-title text-bold">讀書會</div>
            <br>
            <br>
            <div class="text-subtitle2 q-pr-md q-pb-sm absolute-bottom-right">-2019/11/10</div>
          </div>
        </q-slide-item>
      </q-item>
      <br>
      <q-item class="item3">
        <q-slide-item @left="onLeft" @right="onRight" class="shadow-4 slide">
          <template v-slot:right>
            <q-icon name="delete"/>
          </template>
          <div class="my-card">
            <div class="text-title text-bold">阿里山</div>
            <br>
            <br>
            <div class="text-subtitle2 q-pr-md q-pb-sm absolute-bottom-right">-2019/3/29</div>
          </div>
        </q-slide-item>
      </q-item>
      <br>
      <q-item class="item4">
        <q-slide-item @left="onLeft" @right="onRight" class="shadow-4 slide">
          <template v-slot:right>
            <q-icon name="delete"/>
          </template>
          <div class="my-card">
            <div class="text-title text-bold">下午茶</div>
            <br>
            <br>
            <div class="text-subtitle2 q-pr-md q-pb-sm absolute-bottom-right">-2019/1/23</div>
          </div>
        </q-slide-item>
      </q-item>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.my-card {
  width: 319px;
  height: 116px;
  border-radius: 10pt;
  border-left: 15px solid rgb(38, 81, 143);
}
.slide {
  border-radius: 10pt;
}
.item {
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -159.5px;
  margin-top: 3%;
  padding-left: 0pt;
  padding-top: 0pt;
}
.item2 {
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -159.5px;
  margin-top: 35%;
  padding-left: 0pt;
  padding-top: 0pt;
}
.item3 {
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -159.5px;
  margin-top: 67%;
  padding-left: 0pt;
  padding-top: 0pt;
}
.item4 {
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -159.5px;
  margin-top: 99%;
  padding-left: 0pt;
  padding-top: 0pt;
}
.text-title {
  font-size: 18px;
  color: rgb(83, 83, 83);
  padding-top: 12px;
  padding-left: 15px;
}
.text-subtitle2 {
  font-size: 14px;
  color: rgb(114, 145, 187);
}
</style>
<script>
// import { db } from '../boot/firebase.js'

export default {
  data () {
    return {
      lorem: '讀書會',
      dates: '2020/03/16'
      // activity: []
    }
  },
  // firestore () {
  //   return {
  //     activity: db.collection('activity').orderBy('createTime')
  //   }
  // },
  methods: {
    // getActivity () {
    //   return db.collection('activity').orderBy('createTime').get()
    // },
    onLeft ({ reset }) {
      this.$q.notify('Left action triggered. Resetting in 1 second.')
      this.finalize(reset)
    },
    onRight ({ reset }) {
      this.$q.notify('Right action triggered. Resetting in 1 second.')
      this.finalize(reset)
    },
    finalize (reset) {
      this.timer = setTimeout(() => {
        reset()
      }, 1000)
    },
    beforeDestroy () {
      clearTimeout(this.timer)
    }
  }
}
</script>
