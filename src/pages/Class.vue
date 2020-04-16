<template>
  <div id="app">

    <div style="height : 50px" class="btnNav">
      <q-btn v-on:click="retry" round unelevated size="sm" class="q-mx-sm float-left">
          <img class="q-pb-xs" :src="RetryBtn"/>
      </q-btn>
      <q-btn v-on:click="take('eraser')" round unelevated size="sm" class="q-mx-sm">
          <img class="q-pb-xs" :src="EraserBtn"/>
      </q-btn>
      <q-btn v-on:click="take('heart')"  round unelevated size="sm" class="q-mx-sm">
          <img class="q-pb-xs" :src="HeartBtn"/>
      </q-btn>
      <q-btn v-on:click="take('circle')" round unelevated size="sm" class="q-mx-sm">
          <img class="q-pb-xs" :src="CircleBtn"/>
      </q-btn>
      <q-btn v-on:click="take('triangle')" round unelevated size="sm" class="q-mx-sm">
          <img class="q-pb-xs" :src="TriangleBtn"/>
      </q-btn>
      <q-btn v-on:click="take('cross')" round unelevated size="sm" class="q-mx-sm">
          <img class="q-pb-xs" :src="CrossBtn"/>
      </q-btn>
    </div>

    <q-item v-for="(item, id) in classTable" :key="id" v-on:click="stamp(item)" class="cell" style="" clickable v-ripple><img v-if="item.show" class="shape" :src="item.src"/></q-item>
  </div>
</template>

<script>
import Heart from '../assets/heart.png'
import Circle from '../assets/circle.png'
import Triangle from '../assets/triangle.png'
import Cross from '../assets/cross.png'
import HeartBtn0 from '../assets/heartTag.png'
import HeartBtn1 from '../assets/heartBtn.png'
import CircleBtn0 from '../assets/circleTag.png'
import CircleBtn1 from '../assets/circleBtn.png'
import TriangleBtn0 from '../assets/triangleTag.png'
import TriangleBtn1 from '../assets/triangleBtn.png'
import CrossBtn0 from '../assets/crossTag.png'
import CrossBtn1 from '../assets/crossBtn.png'
import EraserBtn0 from '../assets/eraserTag.png'
import EraserBtn1 from '../assets/eraserBtn.png'
import RetryBtn from '../assets/retry.png'

let flag = 0

export default {
  name: 'app',
  data () {
    return {
      myName: '請選擇姓名0',
      HeartBtn: HeartBtn0,
      CircleBtn: CircleBtn0,
      TriangleBtn: TriangleBtn0,
      CrossBtn: CrossBtn0,
      EraserBtn: EraserBtn0,
      RetryBtn: RetryBtn,

      //   Btn: [
      //     {
      //       name: 'eraserBtn',
      //       id: 5,
      //       src: EraserBtn,
      //       selected: 0
      //     },
      //     {
      //       name: 'heartBtn',
      //       id: 4,
      //       src: HeartBtn,
      //       selected: 0
      //     },
      //     {
      //       name: 'circleBtn',
      //       id: 3,
      //       src: CircleBtn,
      //       selected: 0
      //     }, {
      //       name: 'triangleBtn',
      //       id: 2,
      //       src: TriangleBtn,
      //       selected: 0
      //     },
      //     {
      //       name: 'crossBtn',
      //       id: 1,
      //       src: CrossBtn,
      //       selected: 0
      //     }

      //   ],
      classTable: [
        {
          id: 11,
          //   momth: null,
          //   date: null,
          src: null,
          status: null,
          show: false
        },
        {
          id: 12,
          src: null,
          status: null,
          show: false
        },
        {
          id: 13,
          src: null,
          status: null,
          show: false
        },
        {
          id: 14,
          src: null,
          status: null,
          show: false
        },
        {
          id: 15,
          src: null,
          status: null,
          show: false
        },
        {
          id: 16,
          src: null,
          status: null,
          show: false
        },
        {
          id: 17,
          src: null,
          status: null,
          show: false
        }
      ]
    }
  },
  methods: {
    retry: function () {
      for (var i = 0; i < this.classTable.length; i++) { // 循環所有checkbox,添加選中狀態
        var checkedData = this.classTable[i]
        checkedData.src = null
        checkedData.show = false
      }
    },

    take: function (shape) {
      if (shape === 'heart') {
        if (flag !== 4) {
          flag = 4
          this.HeartBtn = HeartBtn1
          this.CircleBtn = CircleBtn0
          this.TriangleBtn = TriangleBtn0
          this.CrossBtn = CrossBtn0
          this.EraserBtn = EraserBtn0
        } else {
          this.HeartBtn = HeartBtn0
          flag = 0
        }
      } else if (shape === 'circle') {
        if (flag !== 3) {
          flag = 3
          this.HeartBtn = HeartBtn0
          this.CircleBtn = CircleBtn1
          this.TriangleBtn = TriangleBtn0
          this.CrossBtn = CrossBtn0
          this.EraserBtn = EraserBtn0
        } else {
          this.CircleBtn = CircleBtn0
          flag = 0
        }
      } else if (shape === 'triangle') {
        if (flag !== 2) {
          flag = 2
          this.HeartBtn = HeartBtn0
          this.CircleBtn = CircleBtn0
          this.TriangleBtn = TriangleBtn1
          this.CrossBtn = CrossBtn0
          this.EraserBtn = EraserBtn0
        } else {
          this.TriangleBtn = TriangleBtn0
          flag = 0
        }
      } else if (shape === 'cross') {
        if (flag !== 1) {
          flag = 1
          this.HeartBtn = HeartBtn0
          this.CircleBtn = CircleBtn0
          this.TriangleBtn = TriangleBtn0
          this.CrossBtn = CrossBtn1
          this.EraserBtn = EraserBtn0
        } else {
          this.CrossBtn = CrossBtn0
          flag = 0
        }
      } else if (shape === 'eraser') {
        if (flag !== 5) {
          flag = 5
          this.HeartBtn = HeartBtn0
          this.CircleBtn = CircleBtn0
          this.TriangleBtn = TriangleBtn0
          this.CrossBtn = CrossBtn0
          this.EraserBtn = EraserBtn1
        } else {
          this.EraserBtn = EraserBtn0
          flag = 0
        }
      }
    },

    stamp: function (item) {
      if (flag === 4) {
        item.src = Heart
        item.status = 4
        item.show = true
      } else if (flag === 3) {
        item.src = Circle
        item.status = 3
        item.show = true
      } else if (flag === 2) {
        item.src = Triangle
        item.status = 2
        item.show = true
      } else if (flag === 1) {
        item.src = Cross
        item.status = 1
        item.show = true
      } else if (flag === 5) {
        item.src = null
        item.status = 5
        item.show = false
      }
    }

  }
}
</script>
<style lang="scss">
.cell{
  width: 17.5%;
  height: 15%;
  padding: 2% 5%;
  margin: 0% 0%;
  align-items: center;
  border: 1px solid #e7e7e7
}
.shape{
  width: 100%;
  height: 100%;
}
</style>
