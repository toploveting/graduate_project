<template>
  <q-layout view="hHh lpr fFf">
    <q-header>
      <q-toolbar class="toolbar bg-secondary">
        <q-btn flat dense round icon="menu" to="list"/>
        <q-space/>
        <q-toolbar-title class="title">課表</q-toolbar-title>
        <q-space/>
        <q-btn @click="print('hello')" flat round dense label="下一步" class="q-mr-xs"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <template>
        <div id="app">
          <div style="height : 50px" class="btnNav">
            <q-btn v-on:click="retry" round unelevated size="sm" class="q-mx-sm retryBtn">
              <img class="q-pb-xs padding0" :src="RetryBtn">
            </q-btn>
            <q-btn v-on:click="take('eraser')" round unelevated size="sm" class="q-mx-sm">
              <img class="q-pb-xs padding0" :src="EraserBtn">
            </q-btn>
            <div class="Btn">
              <q-btn v-on:click="take('heart')" round unelevated size="sm" class="q-mx-sm">
                <img class="q-pb-xs padding0" :src="HeartBtn">
              </q-btn>
              <p class="btnText pink">偏好</p>
            </div>
            <div class="Btn">
              <q-btn v-on:click="take('circle')" round unelevated size="sm" class="q-mx-sm">
                <img class="q-pb-xs padding0" :src="CircleBtn">
              </q-btn>
              <p class="btnText blue">可以</p>
            </div>
            <div class="Btn">
              <q-btn v-on:click="take('triangle')" round unelevated size="sm" class="q-mx-sm">
                <img class="q-pb-xs padding0" :src="TriangleBtn">
              </q-btn>
              <p class="btnText yellow">不確定</p>
            </div>
            <div class="Btn">
              <q-btn v-on:click="take('cross')" round unelevated size="sm" class="q-mx-sm">
                <img class="q-pb-xs padding0" :src="CrossBtn">
              </q-btn>
              <p class="btnText red">不可以</p>
            </div>
          </div>

          <q-card ref="hello" class="no-shadow relative-position flex-center">
            <div class="flex-row">
              <q-item v-for="item in week" :key="item" class="week" style>{{item.name}}</q-item>
            </div>
            <div class="flex-col">
              <q-item
                v-for="item in classNo"
                :key="item"
                class="cellNo"
                :class="{ NoBorderBottom: item.noBottom }"
                style
              >{{item.id}}</q-item>
              <q-item
                v-for="(item, id) in classTable"
                :key="id"
                v-on:click="stamp(item)"
                class="cell"
                :class="{ NoBorderBottom: item.noBottom }"
                style
                clickable
                v-ripple
              >
                <img v-if="item.show" class="shape" :src="item.src">
              </q-item>
            </div>
          </q-card>
        </div>
      </template>
    </q-page-container>
  </q-layout>
</template>

<script>
import { db } from '../boot/firebase.js'
import html2canvas from 'html2canvas'

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
      week: [
        { name: '週一' },
        { name: '週二' },
        { name: '週三' },
        { name: '週四' },
        { name: '週五' }
      ],
      classNo: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        },
        {
          id: 7
        },
        {
          id: 8
        },
        {
          id: 9,
          noBottom: true
        }
      ],
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
        },
        {
          id: 18,
          src: null,
          status: null,
          show: false
        },
        {
          id: 19,
          src: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 21,
          src: null,
          status: null,
          show: false
        },
        {
          id: 22,
          src: null,
          status: null,
          show: false
        },
        {
          id: 23,
          src: null,
          status: null,
          show: false
        },
        {
          id: 24,
          src: null,
          status: null,
          show: false
        },
        {
          id: 25,
          src: null,
          status: null,
          show: false
        },
        {
          id: 26,
          src: null,
          status: null,
          show: false
        },
        {
          id: 27,
          src: null,
          status: null,
          show: false
        },
        {
          id: 28,
          src: null,
          status: null,
          show: false
        },
        {
          id: 29,
          src: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 31,
          src: null,
          status: null,
          show: false
        },
        {
          id: 32,
          src: null,
          status: null,
          show: false
        },
        {
          id: 33,
          src: null,
          status: null,
          show: false
        },
        {
          id: 34,
          src: null,
          status: null,
          show: false
        },
        {
          id: 35,
          src: null,
          status: null,
          show: false
        },
        {
          id: 36,
          src: null,
          status: null,
          show: false
        },
        {
          id: 37,
          src: null,
          status: null,
          show: false
        },
        {
          id: 38,
          src: null,
          status: null,
          show: false
        },
        {
          id: 39,
          src: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 41,
          src: null,
          status: null,
          show: false
        },
        {
          id: 42,
          src: null,
          status: null,
          show: false
        },
        {
          id: 43,
          src: null,
          status: null,
          show: false
        },
        {
          id: 44,
          src: null,
          status: null,
          show: false
        },
        {
          id: 45,
          src: null,
          status: null,
          show: false
        },
        {
          id: 46,
          src: null,
          status: null,
          show: false
        },
        {
          id: 47,
          src: null,
          status: null,
          show: false
        },
        {
          id: 48,
          src: null,
          status: null,
          show: false
        },
        {
          id: 49,
          src: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 51,
          src: null,
          status: null,
          show: false
        },
        {
          id: 52,
          src: null,
          status: null,
          show: false
        },
        {
          id: 53,
          src: null,
          status: null,
          show: false
        },
        {
          id: 54,
          src: null,
          status: null,
          show: false
        },
        {
          id: 55,
          src: null,
          status: null,
          show: false
        },
        {
          id: 56,
          src: null,
          status: null,
          show: false
        },
        {
          id: 57,
          src: null,
          status: null,
          show: false
        },
        {
          id: 58,
          src: null,
          status: null,
          show: false
        },
        {
          id: 59,
          src: null,
          status: null,
          show: false,
          noBottom: true
        }
      ]
    }
  },
  methods: {
    async print (name) {
      const el = this.$refs[name].$el
      const screenshot = (await html2canvas(el)).toDataURL()
      this.output = (await html2canvas(el)).toDataURL()
      db.collection('screenshot')
        .doc('class')
        .set({
          url: screenshot
        })
        .then(function () {
          console.log('Document successfully written!')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
      this.$router.push({ path: '/chooseClass' })
    },

    retry: function () {
      for (var i = 0; i < this.classTable.length; i++) {
        // 循環所有checkbox,添加選中狀態
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
.btnNav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 3% 0;
  padding: 0 3%;
}
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  //   padding-right: 2%;
}
.flex-col {
  display: flex;
  flex-direction: column;
  height: 495px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  //   padding-right: 2%;
}
.retryBtn {
  margin-right: 15%;
  padding: 0;
}
.Btn {
  align-items: center;
}
.btnText {
  text-align: center;
  margin: 5% 0 0 0;
  font-size: 9pt;
  font-weight: bold;
}
.week {
  width: 17.5%;
  padding: 0 4%;
  margin: 0;
  align-items: center;
  font-size: 13pt;
  font-weight: bold;
  //   border-left: 1px solid #e7e7e7;
}
.cellNo {
  width: 10%;
  height: 11.1%;
  margin: 0 0 0 2%;
  padding: 0 3%;
  color: #4b71a7;
  font-size: 13pt;
  //   font-weight: bold;
  text-align: center;
  align-items: center;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
}
.cell {
  width: 17.5%;
  height: 11.1%;
  padding: 3.6% 5%;
  margin: 0% 0 0 0;
  align-items: center;
  border-bottom: 1px solid #e7e7e7;
  border-left: 1px solid #e7e7e7;
}
.shape {
  width: 100%;
  height: 100%;
}
.NoBorderBottom {
  border-bottom: 0px solid transparent;
}
.padding0 {
  padding: 0;
}
.pink {
  color: #d35584;
}
.blue {
  color: #5979c6;
}
.yellow {
  color: #eec22c;
}
.red {
  color: #ce0014;
}
</style>
