<template>
  <div class="q-pa-md" style="height:100%">
    <div style="height : 50px" class="btnNav">
      <q-btn v-on:click="retry" round unelevated size="sm" class="q-mx-sm">
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
   <div >
    <div class="row day0">
      <div class="date0 col-3"><h6 class="text-center q-my-xs bg-secondary" style="color:white">{{Month+'月'}}</h6 ><p class="text-center">{{Mon+'日-'+Sun+'日'}}</p></div>
      <div class="morning0 col-3 text-center q-pt-md"><img class="q-pb-xs" src="~assets/morning.png"/><p>早上</p></div>
      <div class="noon0 col-3 text-center q-pt-md"><img class="q-pb-xs" src="~assets/noon.png"/><p>中午</p></div>
      <div class="night0 col-3 text-center q-pt-md"><img class="q-pb-sm" src="~assets/night.png"/><p>晚上</p></div>
    </div>

    <div class="row day1">
      <div class="date1 col-3"><h5 class="text-center q-my-xs">{{Mon}}</h5 ><p class="text-center mb">星期一</p></div>
      <q-item v-on:click="stamp('c11')" class="noon1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C11"/></div></q-item>
      <q-item v-on:click="stamp('c12')" class="noon1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C12"/></div></q-item>
      <q-item v-on:click="stamp('c13')" class="night1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C13"/></div></q-item>
    </div>

    <div class="row day2">
      <div class="date2 col-3"><h5 class="text-center q-my-xs">{{Tue}}</h5 ><p class="text-center mb">星期二</p></div>
      <q-item v-on:click="stamp('c21')" class="morning1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C21"/></div></q-item>
      <q-item v-on:click="stamp('c22')" class="noon1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C22"/></div></q-item>
      <q-item v-on:click="stamp('c23')" class="night1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C23"/></div></q-item>
    </div>

    <div class="row day3">
      <div class="date3 col-3"><h5 class="text-center q-my-xs">{{Wed}}</h5 ><p class="text-center mb">星期三</p></div>
      <q-item v-on:click="stamp('c31')" class="morning1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C31"/></div></q-item>
      <q-item v-on:click="stamp('c32')" class="noon1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C32"/></div></q-item>
      <q-item v-on:click="stamp('c33')" class="night1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C33"/></div></q-item>
    </div>

    <div class="row day4">
      <div class="date4 col-3"><h5 class="text-center q-my-xs">{{Thu}}</h5 ><p class="text-center mb">星期四</p></div>
      <q-item v-on:click="stamp('c41')" class="morning1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C41"/></div></q-item>
      <q-item v-on:click="stamp('c42')" class="noon1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C42"/></div></q-item>
      <q-item v-on:click="stamp('c43')" class="night1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C43"/></div></q-item>
    </div>

    <div class="row day5">
      <div class="date5 col-3"><h5 class="text-center q-my-xs">{{Fri}}</h5 ><p class="text-center mb">星期五</p></div>
      <q-item v-on:click="stamp('c51')" class="morning1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C51"/></div></q-item>
      <q-item v-on:click="stamp('c52')" class="noon1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C52"/></div></q-item>
      <q-item v-on:click="stamp('c53')" class="night1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C53"/></div></q-item>
    </div>

    <div class="row day6">
      <div class="date6 col-3"><h5 class="text-center q-my-xs" style="color:rgb(219,13,24)">{{Sat}}</h5 ><p class="text-center mb" style="color:rgb(219,13,24)">星期六</p></div>
      <q-item v-on:click="stamp('c61')" class="morning1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C61"/></div></q-item>
      <q-item v-on:click="stamp('c62')" class="noon1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C62"/></div></q-item>
      <q-item v-on:click="stamp('c63')" class="night1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C63"/></div></q-item>
    </div>

    <div class="row day7">
      <div class="date7 col-3"><h5 class="text-center q-my-xs" style="color:rgb(219,13,24)">{{Sun}}</h5 ><p class="text-center mb" style="color:rgb(219,13,24)">星期日</p></div>
      <q-item v-on:click="stamp('c71')" class="morning1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C71"/></div></q-item>
      <q-item v-on:click="stamp('c72')" class="noon1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C72"/></div></q-item>
      <q-item v-on:click="stamp('c73')" class="night1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple><div v-if="isShow"><img class="cell" :src="C73"/></div></q-item>
    </div>
  </div>
  </div>
</template>

<script>
import { date } from 'quasar'
import HeartBtn from '../assets/heartBtn.png'
import CircleBtn from '../assets/circleBtn.png'
import TriangleBtn from '../assets/triangleBtn.png'
import CrossBtn from '../assets/crossBtn.png'
import EraserBtn from '../assets/eraser.png'
import RetryBtn from '../assets/retry.png'
import Heart from '../assets/heart.png'
import Circle from '../assets/circle.png'
import Triangle from '../assets/triangle.png'
import Cross from '../assets/cross.png'

let flag = 0
let C11, C12, C13, C21, C22, C23, C31, C32, C33, C41, C42, C43, C51, C52, C53, C61, C62, C63, C71, C72, C73
let newDate = new Date()
const timeStamp = Date.now()
const Month = date.formatDate(timeStamp, 'M')
// const Today = newDate
const day = date.getDayOfWeek(newDate)

newDate = date.subtractFromDate(newDate, { days: day })

newDate = date.addToDate(newDate, { days: 1 })
const Monday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
const Tuesday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
const Wednesday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
const Thursday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
const Friday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
const Saturday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
const Sunday = date.formatDate(newDate, 'D')

export default {
  data: function () {
    return {
      Month: Month,
      Mon: Monday,
      Tue: Tuesday,
      Wed: Wednesday,
      Thu: Thursday,
      Fri: Friday,
      Sat: Saturday,
      Sun: Sunday,
      HeartBtn: HeartBtn,
      CircleBtn: CircleBtn,
      TriangleBtn: TriangleBtn,
      CrossBtn: CrossBtn,
      EraserBtn: EraserBtn,
      RetryBtn: RetryBtn,
      Heart: Heart,
      Circle: Circle,
      Triangle: Triangle,
      Cross: Cross,
      isShow: false,
      C11: C11,
      C12: C12,
      C13: C13,
      C21: C21,
      C22: C22,
      C23: C23,
      C31: C31,
      C32: C32,
      C33: C33,
      C41: C41,
      C42: C42,
      C43: C43,
      C51: C51,
      C52: C52,
      C53: C53,
      C61: C61,
      C62: C62,
      C63: C63,
      C71: C71,
      C72: C72,
      C73: C73

      // week: [
      //   {
      //     id: 11,
      //     image: Heart,
      //     status: null,
      //     show: false
      //   }
      // ]
    }
  },
  methods: {
    take: function (shape) {
      if (shape === 'heart') {
        flag = 4
      } else if (shape === 'circle') {
        flag = 3
      } else if (shape === 'triangle') {
        flag = 2
      } else if (shape === 'cross') {
        flag = 1
      } else if (shape === 'eraser') {
        flag = 0
      }
    },
    // stamp2: function (position) {
    //   if (position === this.week.id) {
    //     if (flag === 4) {
    //       this.week.image = this.Heart
    //       this.isShow = true
    //     }
    //   }
    // },
    stamp: function (position) {
      if (position === 'c11') {
        if (flag === 4) {
          this.C11 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C11 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C11 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C11 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C11 = null
        }
      } else if (position === 'c12') {
        if (flag === 4) {
          this.C12 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C12 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C12 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C12 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C12 = null
        }
      } else if (position === 'c13') {
        if (flag === 4) {
          this.C13 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C13 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C13 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C13 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C13 = null
        }
      } else if (position === 'c21') {
        if (flag === 4) {
          this.C21 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C21 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C21 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C21 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C21 = null
        }
      } else if (position === 'c22') {
        if (flag === 4) {
          this.C22 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C22 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C22 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C22 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C22 = null
        }
      } else if (position === 'c23') {
        if (flag === 4) {
          this.C23 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C23 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C23 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C23 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C23 = null
        }
      } else if (position === 'c31') {
        if (flag === 4) {
          this.C31 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C31 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C31 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C31 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C31 = null
        }
      } else if (position === 'c32') {
        if (flag === 4) {
          this.C32 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C32 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C32 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C32 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C32 = null
        }
      } else if (position === 'c33') {
        if (flag === 4) {
          this.C33 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C33 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C33 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C33 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C33 = null
        }
      } else if (position === 'c41') {
        if (flag === 4) {
          this.C41 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C41 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C41 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C41 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C41 = null
        }
      } else if (position === 'c42') {
        if (flag === 4) {
          this.C42 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C42 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C42 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C42 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C42 = null
        }
      } else if (position === 'c43') {
        if (flag === 4) {
          this.C43 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C43 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C43 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C43 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C43 = null
        }
      } else if (position === 'c51') {
        if (flag === 4) {
          this.C51 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C51 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C51 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C51 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C51 = null
        }
      } else if (position === 'c52') {
        if (flag === 4) {
          this.C52 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C52 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C52 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C52 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C52 = null
        }
      } else if (position === 'c53') {
        if (flag === 4) {
          this.C53 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C53 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C53 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C53 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C53 = null
        }
      } else if (position === 'c61') {
        if (flag === 4) {
          this.C61 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C61 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C61 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C61 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C61 = null
        }
      } else if (position === 'c62') {
        if (flag === 4) {
          this.C62 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C62 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C62 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C62 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C62 = null
        }
      } else if (position === 'c63') {
        if (flag === 4) {
          this.C63 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C63 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C63 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C63 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C63 = null
        }
      } else if (position === 'c71') {
        if (flag === 4) {
          this.C71 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C71 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C71 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C71 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C71 = null
        }
      } else if (position === 'c72') {
        if (flag === 4) {
          this.C72 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C72 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C72 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C72 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C72 = null
        }
      } else if (position === 'c73') {
        if (flag === 4) {
          this.C73 = this.Heart
          this.isShow = true
        } else if (flag === 3) {
          this.C73 = this.Circle
          this.isShow = true
        } else if (flag === 2) {
          this.C73 = this.Triangle
          this.isShow = true
        } else if (flag === 1) {
          this.C73 = this.Cross
          this.isShow = true
        } else if (flag === 0) {
          this.C73 = null
        }
      }
    },
    retry: function () {
      this.C11 = null
      this.C12 = null
      this.C13 = null

      this.C21 = null
      this.C22 = null
      this.C23 = null

      this.C31 = null
      this.C32 = null
      this.C33 = null

      this.C41 = null
      this.C42 = null
      this.C43 = null

      this.C51 = null
      this.C52 = null
      this.C53 = null

      this.C61 = null
      this.C62 = null
      this.C63 = null

      this.C71 = null
      this.C72 = null
      this.C73 = null
    }
  }
}

</script>

<style lang="scss">
.btnNav{
  margin-left: 14%
}
.mb{
  margin-bottom: 4%;
}
.cell{
  width: 100%;
  height: auto;
  padding: 25%;
  margin: -3% 0%;
}
.from{
  height: 500px;
}
.day1{
  border-bottom: 1px solid rgb(216, 216, 216);
}
.day2{
  border-bottom: 1px solid rgb(216, 216, 216)
}
.day3{
  border-bottom: 1px solid rgb(216, 216, 216)
}
.day4{
  border-bottom: 1px solid rgb(216, 216, 216)
}
.day5{
  border-bottom: 1px solid rgb(216, 216, 216)
}
.day6{
  border-bottom: 1px solid rgb(216, 216, 216)
}

</style>
