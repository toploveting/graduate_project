<template>
  <div class="q-pa-md padding0" style="height:100%">
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

    <div class="row day0">
      <div class="calendar">
        <h6 class="text-center q-my-xs bg-secondary month" style="color:white">{{Month+'月'}}</h6>
        <p class="text-center margin0">{{Mon+'日-'+Sun+'日'}}</p>
      </div>
      <div class="flex-timeline">
        <div class="text-center q-pt-md">
          <img class="q-pb-xs" src="~assets/morning.png">
          <p>早上</p>
        </div>
        <div class="text-center q-pt-md">
          <img class="q-pb-xs" src="~assets/noon.png">
          <p>中午</p>
        </div>
        <div class="text-center q-pt-md">
          <img class="q-pb-xs" src="~assets/afternoon.png">
          <p>下午</p>
        </div>
        <div class="text-center q-pt-md">
          <img class="q-pb-sm" src="~assets/night.png">
          <p>晚上</p>
        </div>
      </div>
    </div>

    <div class="flex-col">
      <q-item
        v-for="item in week"
        :key="item"
        class="date"
        :class="{ NoBorderBottom: item.noBottom }"
      >
        <h5 class="dateNo" :class="{ dateNoRed: item.isRed }">{{item.date}}</h5>

        <div class="dateName" :class="{ dateNameRed: item.isRed }">{{item.name}}</div>
      </q-item>
      <div class="flex-date">
        <q-item
          v-for="(item, id) in date"
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
    </div>
  </div>
</template>

<script>
import { date } from 'quasar'
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
import Heart from '../assets/heart.png'
import Circle from '../assets/circle.png'
import Triangle from '../assets/triangle.png'
import Cross from '../assets/cross.png'

let flag = 0
let C11,
  C12,
  C13,
  C21,
  C22,
  C23,
  C31,
  C32,
  C33,
  C41,
  C42,
  C43,
  C51,
  C52,
  C53,
  C61,
  C62,
  C63,
  C71,
  C72,
  C73
let newDate = new Date()
const timeStamp = Date.now()
const Month = date.formatDate(timeStamp, 'M')
// const Today = newDate
const day = date.getDayOfWeek(newDate)

// const Today = date.formatDate(newDate, 'D')

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
      HeartBtn: HeartBtn0,
      CircleBtn: CircleBtn0,
      TriangleBtn: TriangleBtn0,
      CrossBtn: CrossBtn0,
      EraserBtn: EraserBtn0,
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
      C73: C73,

      week: [
        {
          id: 1,
          name: '星期一',
          momth: Month,
          date: Monday
        },
        {
          id: 2,
          name: '星期二',
          momth: Month,
          date: Tuesday
        },
        {
          id: 3,
          name: '星期三',
          momth: Month,
          date: Wednesday
        },
        {
          id: 4,
          name: '星期四',
          momth: Month,
          date: Thursday
        },
        {
          id: 5,
          name: '星期五',
          momth: Month,
          date: Friday
        },
        {
          id: 6,
          name: '星期六',
          momth: Month,
          date: Saturday,
          isRed: true
        },
        {
          id: 7,
          name: '星期日',
          momth: Month,
          date: Sunday,
          isRed: true,
          noBottom: true
        }
      ],
      date: [
        {
          id: 11,
          momth: Month,
          date: Monday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 12,
          momth: Month,
          date: Monday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 13,
          momth: Month,
          date: Monday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 14,
          momth: Month,
          date: Monday,
          image: null,
          status: null,
          show: false
        },

        {
          id: 21,
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 22,
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 23,
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 24,
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 31,
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 32,
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 33,
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 34,
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 41,
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 42,
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 43,
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 44,
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 51,
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 52,
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 53,
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 54,
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 61,
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 62,
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 63,
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 64,
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 71,
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 72,
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 73,
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 74,
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        }
      ]
    }
  },
  methods: {
    retry: function () {
      for (var i = 0; i < this.date.length; i++) {
        // 循環所有checkbox,添加選中狀態
        var checkedData = this.date[i]
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
.float-left {
  margin-right: 18%;
}
.mb {
  margin-bottom: 4%;
}
.btnNav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 3% 0;
  padding: 0 3%;
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
.calendar{
  width: 24%;
  padding: 2% 0;
}
.flex-timeline {
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}
.month {
  width: 80%;
  border-radius: 5pt;
  align-items: center;
  margin-left: 10%;
}
.flex-col {
  display: flex;
  flex-direction: column;

  height: 466px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  //   padding-right: 2%;
}
.flex-date {
  display: flex;
  flex-direction: row;
  width: 285px;
  height: 465px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.date {
  width: 22%;
  height: 14.26%;
  margin: 0 0 0 2%;
  padding: 0 3%;
  align-items: center;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.dateNo {
  width: 100%;
  color: #363636;
  font-size: 20pt;
  // font-weight: bold;
  text-align: center;
  margin: 0;
}
.dateNoRed {
  width: 100%;
  color: #db0d18;
  font-size: 20pt;
  // font-weight: bold;
  text-align: center;
  margin: 0;
}
.dateName {
  width: 100%;
  color: #707070;
  font-size: 10pt;
  // font-weight: bold;
  text-align: center;
}
.dateNameRed {
  width: 100%;
  color: #db0d18;
  font-size: 10pt;
  // font-weight: bold;
  text-align: center;
}
.cell {
  width: 25%;
  height: 14.3%;
  padding: 5% 5.4%;
  margin: 0% 0 0 0;
  align-items: center;
  border-bottom: 1px solid #e7e7e7;
  border-left: 1px solid #e7e7e7;
}
.shape {
  width: 100%;
  height: 100%;
}
// .cell {
//   width: 100%;
//   height: auto;
//   padding: 25%;
//   margin: -3% 0%;
// }
.from {
  height: 500px;
}
.day1 {
  border-bottom: 1px solid rgb(216, 216, 216);
}
.day2 {
  border-bottom: 1px solid rgb(216, 216, 216);
}
.day3 {
  border-bottom: 1px solid rgb(216, 216, 216);
}
.day4 {
  border-bottom: 1px solid rgb(216, 216, 216);
}
.day5 {
  border-bottom: 1px solid rgb(216, 216, 216);
}
.day6 {
  border-bottom: 1px solid rgb(216, 216, 216);
}
.padding0 {
  padding: 0;
}
.margin0{
  margin: 0;
}
.NoBorderBottom {
  border-bottom: 0px solid transparent;
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
