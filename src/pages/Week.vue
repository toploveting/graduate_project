<template>
  <q-layout view="hHh lpr fFf">
    <q-header>
      <q-toolbar class="toolbar bg-secondary">
        <q-btn
          flat
          dense
          round
          icon="menu"
          to="list"/>
          <q-space />
        <q-toolbar-title class="title">週曆</q-toolbar-title>
        <q-space />
        <q-btn @click="print('hello')" flat round dense label="下一步" class="q-mr-xs" />
      </q-toolbar>
    </q-header>
    <q-page-container>

<template>
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

    <q-card
      ref="hello"
      v-touch-swipe.horizontal="handleSwipe"
      class="no-shadow relative-position flex-center"
    >
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

      <!-- <q-btn @click.native="print('hello')" label="Capture" class="btn btn-default"></q-btn> -->
      <!-- <p>{{info}}</p> -->

      <swipe ref="mySwipe" :options="swipeOptions" style="max-width:500px;margin:0 auto">
        <swipe-item>
          <div class="flex-col">
            <div class="aa">
              <q-item
                v-for="item in week0"
                :key="item"
                class="date"
                :class="{ NoBorderBottom: item.noBottom }"
              >
                <h5 class="dateNo" :class="{ dateNoRed: item.isRed }">{{item.date}}</h5>

                <div class="dateName" :class="{ dateNameRed: item.isRed }">{{item.name}}</div>
              </q-item>
            </div>

            <div class="flex-date">
              <q-item
                v-for="(item, id) in date0"
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
        </swipe-item>

        <swipe-item>
          <div class="flex-col">
            <div class="aa">
              <q-item
                v-for="item in week1"
                :key="item"
                class="date"
                :class="{ NoBorderBottom: item.noBottom }"
              >
                <h5 class="dateNo" :class="{ dateNoRed: item.isRed }">{{item.date}}</h5>

                <div class="dateName" :class="{ dateNameRed: item.isRed }">{{item.name}}</div>
              </q-item>
            </div>

            <div class="flex-date">
              <q-item
                v-for="(item, id) in date1"
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
        </swipe-item>

        <swipe-item>
          <div class="flex-col">
            <div class="aa">
              <q-item
                v-for="item in week2"
                :key="item"
                class="date"
                :class="{ NoBorderBottom: item.noBottom }"
              >
                <h5 class="dateNo" :class="{ dateNoRed: item.isRed }">{{item.date}}</h5>

                <div class="dateName" :class="{ dateNameRed: item.isRed }">{{item.name}}</div>
              </q-item>
            </div>

            <div class="flex-date">
              <q-item
                v-for="(item, id) in date2"
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
        </swipe-item>

        <swipe-item>
          <div class="flex-col">
            <div class="aa">
              <q-item
                v-for="item in week3"
                :key="item"
                class="date"
                :class="{ NoBorderBottom: item.noBottom }"
              >
                <h5 class="dateNo" :class="{ dateNoRed: item.isRed }">{{item.date}}</h5>

                <div class="dateName" :class="{ dateNameRed: item.isRed }">{{item.name}}</div>
              </q-item>
            </div>

            <div class="flex-date">
              <q-item
                v-for="(item, id) in date3"
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
        </swipe-item>

        <swipe-item>
          <div class="flex-col">
            <div class="aa">
              <q-item
                v-for="item in week4"
                :key="item"
                class="date"
                :class="{ NoBorderBottom: item.noBottom }"
              >
                <h5 class="dateNo" :class="{ dateNoRed: item.isRed }">{{item.date}}</h5>

                <div class="dateName" :class="{ dateNameRed: item.isRed }">{{item.name}}</div>
              </q-item>
            </div>

            <div class="flex-date">
              <q-item
                v-for="(item, id) in date4"
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
        </swipe-item>

        <swipe-item>
          <div class="flex-col">
            <div class="aa">
              <q-item
                v-for="item in week5"
                :key="item"
                class="date"
                :class="{ NoBorderBottom: item.noBottom }"
              >
                <h5 class="dateNo" :class="{ dateNoRed: item.isRed }">{{item.date}}</h5>

                <div class="dateName" :class="{ dateNameRed: item.isRed }">{{item.name}}</div>
              </q-item>
            </div>

            <div class="flex-date">
              <q-item
                v-for="(item, id) in date5"
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
        </swipe-item>

        <swipe-item>
          <div class="flex-col">
            <div class="aa">
              <q-item
                v-for="item in week6"
                :key="item"
                class="date"
                :class="{ NoBorderBottom: item.noBottom }"
              >
                <h5 class="dateNo" :class="{ dateNoRed: item.isRed }">{{item.date}}</h5>

                <div class="dateName" :class="{ dateNameRed: item.isRed }">{{item.name}}</div>
              </q-item>
            </div>

            <div class="flex-date">
              <q-item
                v-for="(item, id) in date6"
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
        </swipe-item>

        <swipe-item>
          <div class="flex-col">
            <div class="aa">
              <q-item
                v-for="item in week7"
                :key="item"
                class="date"
                :class="{ NoBorderBottom: item.noBottom }"
              >
                <h5 class="dateNo" :class="{ dateNoRed: item.isRed }">{{item.date}}</h5>

                <div class="dateName" :class="{ dateNameRed: item.isRed }">{{item.name}}</div>
              </q-item>
            </div>

            <div class="flex-date">
              <q-item
                v-for="(item, id) in date7"
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
        </swipe-item>

        <swipe-item>
          <div class="flex-col">
            <div class="aa">
              <q-item
                v-for="item in week8"
                :key="item"
                class="date"
                :class="{ NoBorderBottom: item.noBottom }"
              >
                <h5 class="dateNo" :class="{ dateNoRed: item.isRed }">{{item.date}}</h5>

                <div class="dateName" :class="{ dateNameRed: item.isRed }">{{item.name}}</div>
              </q-item>
            </div>

            <div class="flex-date">
              <q-item
                v-for="(item, id) in date8"
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
        </swipe-item>

        <swipe-item>
          <div class="flex-col">
            <div class="aa">
              <q-item
                v-for="item in week9"
                :key="item"
                class="date"
                :class="{ NoBorderBottom: item.noBottom }"
              >
                <h5 class="dateNo" :class="{ dateNoRed: item.isRed }">{{item.date}}</h5>

                <div class="dateName" :class="{ dateNameRed: item.isRed }">{{item.name}}</div>
              </q-item>
            </div>

            <div class="flex-date">
              <q-item
                v-for="(item, id) in date9"
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
        </swipe-item>

        <swipe-item>
          <div class="flex-col">
            <div class="aa">
              <q-item
                v-for="item in week10"
                :key="item"
                class="date"
                :class="{ NoBorderBottom: item.noBottom }"
              >
                <h5 class="dateNo" :class="{ dateNoRed: item.isRed }">{{item.date}}</h5>

                <div class="dateName" :class="{ dateNameRed: item.isRed }">{{item.name}}</div>
              </q-item>
            </div>

            <div class="flex-date">
              <q-item
                v-for="(item, id) in date10"
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
        </swipe-item>

        <swipe-item>
          <div class="flex-col">
            <div class="aa">
              <q-item
                v-for="item in lastweek3"
                :key="item"
                class="date"
                :class="{ NoBorderBottom: item.noBottom }"
              >
                <h5 class="dateNo" :class="{ dateNoRed: item.isRed }">{{item.date}}</h5>

                <div class="dateName" :class="{ dateNameRed: item.isRed }">{{item.name}}</div>
              </q-item>
            </div>

            <div class="flex-date">
              <q-item
                v-for="(item, id) in date11"
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
        </swipe-item>

        <swipe-item>
          <div class="flex-col">
            <div class="aa">
              <q-item
                v-for="item in lastweek2"
                :key="item"
                class="date"
                :class="{ NoBorderBottom: item.noBottom }"
              >
                <h5 class="dateNo" :class="{ dateNoRed: item.isRed }">{{item.date}}</h5>

                <div class="dateName" :class="{ dateNameRed: item.isRed }">{{item.name}}</div>
              </q-item>
            </div>

            <div class="flex-date">
              <q-item
                v-for="(item, id) in date12"
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
        </swipe-item>

        <swipe-item>
          <div class="flex-col">
            <div class="aa">
              <q-item
                v-for="item in lastweek1"
                :key="item"
                class="date"
                :class="{ NoBorderBottom: item.noBottom }"
              >
                <h5 class="dateNo" :class="{ dateNoRed: item.isRed }">{{item.date}}</h5>

                <div class="dateName" :class="{ dateNameRed: item.isRed }">{{item.name}}</div>
              </q-item>
            </div>

            <div class="flex-date">
              <q-item
                v-for="(item, id) in date13"
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
        </swipe-item>
      </swipe>
    </q-card>
</template>

    </q-page-container>
  </q-layout>
</template>

<script>
// import firebase from 'firebase'
import { db } from '../boot/firebase.js'
import Vue from 'vue'
import VSwipe from 'vswipe'
Vue.use(VSwipe)
import html2canvas from 'html2canvas'
import Bus from '../boot/bus.js'

// import { Swipe, SwipeItem } from 'vue-swipe'
// Vue.component('swipe', Swipe)
// Vue.component('swipe-item', SwipeItem)

import { date } from 'quasar'

// Photo url
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
var weekID = 150
var page = 0
var Month = 1
var Monday = new Array(300)
var Tuesday = new Array(300)
var Wednesday = new Array(300)
var Thursday = new Array(300)
var Friday = new Array(300)
var Saturday = new Array(300)
var Sunday = new Array(300)

let newDate = new Date()
// const timeStamp = Date.now()
// let formattedString = date.formatDate(timeStamp, 'YYYYMMDD')
// const Year = date.formatDate(timeStamp, 'Y')
// const Today = newDate
const day = date.getDayOfWeek(newDate)

// const Today = date.formatDate(newDate, 'D')

newDate = date.subtractFromDate(newDate, { days: day })

newDate = date.addToDate(newDate, { days: 1 })
Month = date.formatDate(newDate, 'M')
newDate = date.subtractFromDate(newDate, { days: 1050 })
let MondayF = newDate
for (let i = 0; i < 300; i++) {
  Monday[i] = date.formatDate(MondayF, 'D')
  MondayF = date.addToDate(MondayF, { days: 7 })
}
// const Monday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
let TuesdayF = newDate
for (let i = 0; i < 300; i++) {
  Tuesday[i] = date.formatDate(TuesdayF, 'D')
  TuesdayF = date.addToDate(TuesdayF, { days: 7 })
}
// const Tuesday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
let WednesdayF = newDate
for (let i = 0; i < 300; i++) {
  Wednesday[i] = date.formatDate(WednesdayF, 'D')
  WednesdayF = date.addToDate(WednesdayF, { days: 7 })
}
// const Wednesday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
let ThursdayF = newDate
for (let i = 0; i < 300; i++) {
  Thursday[i] = date.formatDate(ThursdayF, 'D')
  ThursdayF = date.addToDate(ThursdayF, { days: 7 })
}
// const Thursday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
let FridayF = newDate
for (let i = 0; i < 300; i++) {
  Friday[i] = date.formatDate(FridayF, 'D')
  FridayF = date.addToDate(FridayF, { days: 7 })
}
// const Friday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
let SaturdayF = newDate
for (let i = 0; i < 300; i++) {
  Saturday[i] = date.formatDate(SaturdayF, 'D')
  SaturdayF = date.addToDate(SaturdayF, { days: 7 })
}
// const Saturday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
let SundayF = newDate
for (let i = 0; i < 300; i++) {
  Sunday[i] = date.formatDate(SundayF, 'D')
  SundayF = date.addToDate(SundayF, { days: 7 })
}
// const Sunday = date.formatDate(newDate, 'D')

export default {
  data: function () {
    return {
      output: null,
      swipeOptions: {
        startSlide: 0,
        // continuous: false,
        disableScroll: false,
        callback: function (index, slide) {
          console.log(index)
        }
      },
      info: null,
      weekID: weekID,
      Month: Month,
      Mon: Monday[weekID],
      Sun: Sunday[weekID],
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

      lastweek3: [
        {
          id: 1,
          name: '星期一',
          momth: Month,
          date: Monday[147]
        },
        {
          id: 2,
          name: '星期二',
          momth: Month,
          date: Tuesday[147]
        },
        {
          id: 3,
          name: '星期三',
          momth: Month,
          date: Wednesday[147]
        },
        {
          id: 4,
          name: '星期四',
          momth: Month,
          date: Thursday[147]
        },
        {
          id: 5,
          name: '星期五',
          momth: Month,
          date: Friday[147]
        },
        {
          id: 6,
          name: '星期六',
          momth: Month,
          date: Saturday[147],
          isRed: true
        },
        {
          id: 7,
          name: '星期日',
          momth: Month,
          date: Sunday[147],
          isRed: true,
          noBottom: true
        }
      ],
      lastweek2: [
        {
          id: 1,
          name: '星期一',
          momth: Month,
          date: Monday[148]
        },
        {
          id: 2,
          name: '星期二',
          momth: Month,
          date: Tuesday[148]
        },
        {
          id: 3,
          name: '星期三',
          momth: Month,
          date: Wednesday[148]
        },
        {
          id: 4,
          name: '星期四',
          momth: Month,
          date: Thursday[148]
        },
        {
          id: 5,
          name: '星期五',
          momth: Month,
          date: Friday[148]
        },
        {
          id: 6,
          name: '星期六',
          momth: Month,
          date: Saturday[148],
          isRed: true
        },
        {
          id: 7,
          name: '星期日',
          momth: Month,
          date: Sunday[148],
          isRed: true,
          noBottom: true
        }
      ],

      lastweek1: [
        {
          id: 1,
          name: '星期一',
          momth: Month,
          date: Monday[149]
        },
        {
          id: 2,
          name: '星期二',
          momth: Month,
          date: Tuesday[149]
        },
        {
          id: 3,
          name: '星期三',
          momth: Month,
          date: Wednesday[149]
        },
        {
          id: 4,
          name: '星期四',
          momth: Month,
          date: Thursday[149]
        },
        {
          id: 5,
          name: '星期五',
          momth: Month,
          date: Friday[149]
        },
        {
          id: 6,
          name: '星期六',
          momth: Month,
          date: Saturday[149],
          isRed: true
        },
        {
          id: 7,
          name: '星期日',
          momth: Month,
          date: Sunday[149],
          isRed: true,
          noBottom: true
        }
      ],

      week0: [
        {
          id: 1,
          name: '星期一',
          momth: Month,
          date: Monday[150]
        },
        {
          id: 2,
          name: '星期二',
          momth: Month,
          date: Tuesday[150]
        },
        {
          id: 3,
          name: '星期三',
          momth: Month,
          date: Wednesday[150]
        },
        {
          id: 4,
          name: '星期四',
          momth: Month,
          date: Thursday[150]
        },
        {
          id: 5,
          name: '星期五',
          momth: Month,
          date: Friday[150]
        },
        {
          id: 6,
          name: '星期六',
          momth: Month,
          date: Saturday[150],
          isRed: true
        },
        {
          id: 7,
          name: '星期日',
          momth: Month,
          date: Sunday[150],
          isRed: true,
          noBottom: true
        }
      ],

      week1: [
        {
          id: 1,
          name: '星期一',
          momth: Month,
          date: Monday[151]
        },
        {
          id: 2,
          name: '星期二',
          momth: Month,
          date: Tuesday[151]
        },
        {
          id: 3,
          name: '星期三',
          momth: Month,
          date: Wednesday[151]
        },
        {
          id: 4,
          name: '星期四',
          momth: Month,
          date: Thursday[151]
        },
        {
          id: 5,
          name: '星期五',
          momth: Month,
          date: Friday[151]
        },
        {
          id: 6,
          name: '星期六',
          momth: Month,
          date: Saturday[151],
          isRed: true
        },
        {
          id: 7,
          name: '星期日',
          momth: Month,
          date: Sunday[151],
          isRed: true,
          noBottom: true
        }
      ],
      week2: [
        {
          id: 1,
          name: '星期一',
          momth: Month,
          date: Monday[152]
        },
        {
          id: 2,
          name: '星期二',
          momth: Month,
          date: Tuesday[152]
        },
        {
          id: 3,
          name: '星期三',
          momth: Month,
          date: Wednesday[152]
        },
        {
          id: 4,
          name: '星期四',
          momth: Month,
          date: Thursday[152]
        },
        {
          id: 5,
          name: '星期五',
          momth: Month,
          date: Friday[152]
        },
        {
          id: 6,
          name: '星期六',
          momth: Month,
          date: Saturday[152],
          isRed: true
        },
        {
          id: 7,
          name: '星期日',
          momth: Month,
          date: Sunday[152],
          isRed: true,
          noBottom: true
        }
      ],
      week3: [
        {
          id: 1,
          name: '星期一',
          momth: Month,
          date: Monday[153]
        },
        {
          id: 2,
          name: '星期二',
          momth: Month,
          date: Tuesday[153]
        },
        {
          id: 3,
          name: '星期三',
          momth: Month,
          date: Wednesday[153]
        },
        {
          id: 4,
          name: '星期四',
          momth: Month,
          date: Thursday[153]
        },
        {
          id: 5,
          name: '星期五',
          momth: Month,
          date: Friday[153]
        },
        {
          id: 6,
          name: '星期六',
          momth: Month,
          date: Saturday[153],
          isRed: true
        },
        {
          id: 7,
          name: '星期日',
          momth: Month,
          date: Sunday[153],
          isRed: true,
          noBottom: true
        }
      ],
      week4: [
        {
          id: 1,
          name: '星期一',
          momth: Month,
          date: Monday[154]
        },
        {
          id: 2,
          name: '星期二',
          momth: Month,
          date: Tuesday[154]
        },
        {
          id: 3,
          name: '星期三',
          momth: Month,
          date: Wednesday[154]
        },
        {
          id: 4,
          name: '星期四',
          momth: Month,
          date: Thursday[154]
        },
        {
          id: 5,
          name: '星期五',
          momth: Month,
          date: Friday[154]
        },
        {
          id: 6,
          name: '星期六',
          momth: Month,
          date: Saturday[154],
          isRed: true
        },
        {
          id: 7,
          name: '星期日',
          momth: Month,
          date: Sunday[154],
          isRed: true,
          noBottom: true
        }
      ],
      week5: [
        {
          id: 1,
          name: '星期一',
          momth: Month,
          date: Monday[155]
        },
        {
          id: 2,
          name: '星期二',
          momth: Month,
          date: Tuesday[155]
        },
        {
          id: 3,
          name: '星期三',
          momth: Month,
          date: Wednesday[155]
        },
        {
          id: 4,
          name: '星期四',
          momth: Month,
          date: Thursday[155]
        },
        {
          id: 5,
          name: '星期五',
          momth: Month,
          date: Friday[155]
        },
        {
          id: 6,
          name: '星期六',
          momth: Month,
          date: Saturday[155],
          isRed: true
        },
        {
          id: 7,
          name: '星期日',
          momth: Month,
          date: Sunday[155],
          isRed: true,
          noBottom: true
        }
      ],
      week6: [
        {
          id: 1,
          name: '星期一',
          momth: Month,
          date: Monday[156]
        },
        {
          id: 2,
          name: '星期二',
          momth: Month,
          date: Tuesday[156]
        },
        {
          id: 3,
          name: '星期三',
          momth: Month,
          date: Wednesday[156]
        },
        {
          id: 4,
          name: '星期四',
          momth: Month,
          date: Thursday[156]
        },
        {
          id: 5,
          name: '星期五',
          momth: Month,
          date: Friday[156]
        },
        {
          id: 6,
          name: '星期六',
          momth: Month,
          date: Saturday[156],
          isRed: true
        },
        {
          id: 7,
          name: '星期日',
          momth: Month,
          date: Sunday[156],
          isRed: true,
          noBottom: true
        }
      ],
      week7: [
        {
          id: 1,
          name: '星期一',
          momth: Month,
          date: Monday[157]
        },
        {
          id: 2,
          name: '星期二',
          momth: Month,
          date: Tuesday[157]
        },
        {
          id: 3,
          name: '星期三',
          momth: Month,
          date: Wednesday[157]
        },
        {
          id: 4,
          name: '星期四',
          momth: Month,
          date: Thursday[157]
        },
        {
          id: 5,
          name: '星期五',
          momth: Month,
          date: Friday[157]
        },
        {
          id: 6,
          name: '星期六',
          momth: Month,
          date: Saturday[157],
          isRed: true
        },
        {
          id: 7,
          name: '星期日',
          momth: Month,
          date: Sunday[157],
          isRed: true,
          noBottom: true
        }
      ],
      week8: [
        {
          id: 1,
          name: '星期一',
          momth: Month,
          date: Monday[158]
        },
        {
          id: 2,
          name: '星期二',
          momth: Month,
          date: Tuesday[158]
        },
        {
          id: 3,
          name: '星期三',
          momth: Month,
          date: Wednesday[158]
        },
        {
          id: 4,
          name: '星期四',
          momth: Month,
          date: Thursday[158]
        },
        {
          id: 5,
          name: '星期五',
          momth: Month,
          date: Friday[158]
        },
        {
          id: 6,
          name: '星期六',
          momth: Month,
          date: Saturday[158],
          isRed: true
        },
        {
          id: 7,
          name: '星期日',
          momth: Month,
          date: Sunday[158],
          isRed: true,
          noBottom: true
        }
      ],
      week9: [
        {
          id: 1,
          name: '星期一',
          momth: Month,
          date: Monday[159]
        },
        {
          id: 2,
          name: '星期二',
          momth: Month,
          date: Tuesday[159]
        },
        {
          id: 3,
          name: '星期三',
          momth: Month,
          date: Wednesday[159]
        },
        {
          id: 4,
          name: '星期四',
          momth: Month,
          date: Thursday[159]
        },
        {
          id: 5,
          name: '星期五',
          momth: Month,
          date: Friday[159]
        },
        {
          id: 6,
          name: '星期六',
          momth: Month,
          date: Saturday[159],
          isRed: true
        },
        {
          id: 7,
          name: '星期日',
          momth: Month,
          date: Sunday[159],
          isRed: true,
          noBottom: true
        }
      ],
      week10: [
        {
          id: 1,
          name: '星期一',
          momth: Month,
          date: Monday[160]
        },
        {
          id: 2,
          name: '星期二',
          momth: Month,
          date: Tuesday[160]
        },
        {
          id: 3,
          name: '星期三',
          momth: Month,
          date: Wednesday[160]
        },
        {
          id: 4,
          name: '星期四',
          momth: Month,
          date: Thursday[160]
        },
        {
          id: 5,
          name: '星期五',
          momth: Month,
          date: Friday[160]
        },
        {
          id: 6,
          name: '星期六',
          momth: Month,
          date: Saturday[160],
          isRed: true
        },
        {
          id: 7,
          name: '星期日',
          momth: Month,
          date: Sunday[160],
          isRed: true,
          noBottom: true
        }
      ],

      date0: [
        {
          id: 11,
          name: 'Morning',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 12,
          name: 'Noon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 13,
          name: 'Afternoon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 14,
          name: 'Night',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },

        {
          id: 21,
          name: 'Morning',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 22,
          name: 'Noon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 23,
          name: 'Afternoon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 24,
          name: 'Night',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 31,
          name: 'Morning',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 32,
          name: 'Noon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 33,
          name: 'Afternoon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 34,
          name: 'Night',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 41,
          name: 'Morning',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 42,
          name: 'Noon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 43,
          name: 'Afternoon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 44,
          name: 'Night',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 51,
          ame: 'Morning',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 52,
          name: 'Noon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 53,
          name: 'Afternoon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 54,
          name: 'Night',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 61,
          name: 'Morning',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 62,
          name: 'Noon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 63,
          name: 'Afternoon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 64,
          name: 'Night',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 71,
          name: 'Morning',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 72,
          name: 'Noon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 73,
          name: 'Afternoon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 74,
          name: 'Night',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        }
      ],
      date1: [
        {
          id: 11,
          name: 'Morning',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 12,
          name: 'Noon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 13,
          name: 'Afternoon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 14,
          name: 'Night',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },

        {
          id: 21,
          name: 'Morning',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 22,
          name: 'Noon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 23,
          name: 'Afternoon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 24,
          name: 'Night',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 31,
          name: 'Morning',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 32,
          name: 'Noon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 33,
          name: 'Afternoon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 34,
          name: 'Night',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 41,
          name: 'Morning',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 42,
          name: 'Noon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 43,
          name: 'Afternoon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 44,
          name: 'Night',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 51,
          ame: 'Morning',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 52,
          name: 'Noon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 53,
          name: 'Afternoon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 54,
          name: 'Night',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 61,
          name: 'Morning',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 62,
          name: 'Noon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 63,
          name: 'Afternoon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 64,
          name: 'Night',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 71,
          name: 'Morning',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 72,
          name: 'Noon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 73,
          name: 'Afternoon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 74,
          name: 'Night',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        }
      ],

      date2: [
        {
          id: 11,
          name: 'Morning',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 12,
          name: 'Noon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 13,
          name: 'Afternoon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 14,
          name: 'Night',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },

        {
          id: 21,
          name: 'Morning',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 22,
          name: 'Noon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 23,
          name: 'Afternoon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 24,
          name: 'Night',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 31,
          name: 'Morning',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 32,
          name: 'Noon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 33,
          name: 'Afternoon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 34,
          name: 'Night',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 41,
          name: 'Morning',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 42,
          name: 'Noon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 43,
          name: 'Afternoon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 44,
          name: 'Night',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 51,
          ame: 'Morning',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 52,
          name: 'Noon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 53,
          name: 'Afternoon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 54,
          name: 'Night',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 61,
          name: 'Morning',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 62,
          name: 'Noon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 63,
          name: 'Afternoon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 64,
          name: 'Night',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 71,
          name: 'Morning',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 72,
          name: 'Noon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 73,
          name: 'Afternoon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 74,
          name: 'Night',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        }
      ],

      date3: [
        {
          id: 11,
          name: 'Morning',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 12,
          name: 'Noon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 13,
          name: 'Afternoon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 14,
          name: 'Night',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },

        {
          id: 21,
          name: 'Morning',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 22,
          name: 'Noon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 23,
          name: 'Afternoon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 24,
          name: 'Night',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 31,
          name: 'Morning',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 32,
          name: 'Noon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 33,
          name: 'Afternoon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 34,
          name: 'Night',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 41,
          name: 'Morning',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 42,
          name: 'Noon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 43,
          name: 'Afternoon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 44,
          name: 'Night',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 51,
          ame: 'Morning',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 52,
          name: 'Noon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 53,
          name: 'Afternoon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 54,
          name: 'Night',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 61,
          name: 'Morning',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 62,
          name: 'Noon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 63,
          name: 'Afternoon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 64,
          name: 'Night',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 71,
          name: 'Morning',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 72,
          name: 'Noon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 73,
          name: 'Afternoon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 74,
          name: 'Night',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        }
      ],

      date4: [
        {
          id: 11,
          name: 'Morning',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 12,
          name: 'Noon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 13,
          name: 'Afternoon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 14,
          name: 'Night',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },

        {
          id: 21,
          name: 'Morning',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 22,
          name: 'Noon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 23,
          name: 'Afternoon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 24,
          name: 'Night',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 31,
          name: 'Morning',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 32,
          name: 'Noon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 33,
          name: 'Afternoon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 34,
          name: 'Night',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 41,
          name: 'Morning',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 42,
          name: 'Noon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 43,
          name: 'Afternoon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 44,
          name: 'Night',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 51,
          ame: 'Morning',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 52,
          name: 'Noon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 53,
          name: 'Afternoon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 54,
          name: 'Night',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 61,
          name: 'Morning',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 62,
          name: 'Noon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 63,
          name: 'Afternoon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 64,
          name: 'Night',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 71,
          name: 'Morning',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 72,
          name: 'Noon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 73,
          name: 'Afternoon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 74,
          name: 'Night',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        }
      ],

      date5: [
        {
          id: 11,
          name: 'Morning',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 12,
          name: 'Noon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 13,
          name: 'Afternoon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 14,
          name: 'Night',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },

        {
          id: 21,
          name: 'Morning',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 22,
          name: 'Noon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 23,
          name: 'Afternoon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 24,
          name: 'Night',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 31,
          name: 'Morning',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 32,
          name: 'Noon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 33,
          name: 'Afternoon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 34,
          name: 'Night',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 41,
          name: 'Morning',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 42,
          name: 'Noon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 43,
          name: 'Afternoon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 44,
          name: 'Night',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 51,
          ame: 'Morning',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 52,
          name: 'Noon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 53,
          name: 'Afternoon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 54,
          name: 'Night',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 61,
          name: 'Morning',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 62,
          name: 'Noon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 63,
          name: 'Afternoon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 64,
          name: 'Night',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 71,
          name: 'Morning',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 72,
          name: 'Noon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 73,
          name: 'Afternoon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 74,
          name: 'Night',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        }
      ],

      date6: [
        {
          id: 11,
          name: 'Morning',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 12,
          name: 'Noon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 13,
          name: 'Afternoon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 14,
          name: 'Night',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },

        {
          id: 21,
          name: 'Morning',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 22,
          name: 'Noon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 23,
          name: 'Afternoon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 24,
          name: 'Night',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 31,
          name: 'Morning',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 32,
          name: 'Noon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 33,
          name: 'Afternoon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 34,
          name: 'Night',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 41,
          name: 'Morning',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 42,
          name: 'Noon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 43,
          name: 'Afternoon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 44,
          name: 'Night',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 51,
          ame: 'Morning',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 52,
          name: 'Noon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 53,
          name: 'Afternoon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 54,
          name: 'Night',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 61,
          name: 'Morning',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 62,
          name: 'Noon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 63,
          name: 'Afternoon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 64,
          name: 'Night',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 71,
          name: 'Morning',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 72,
          name: 'Noon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 73,
          name: 'Afternoon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 74,
          name: 'Night',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        }
      ],
      date7: [
        {
          id: 11,
          name: 'Morning',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 12,
          name: 'Noon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 13,
          name: 'Afternoon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 14,
          name: 'Night',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },

        {
          id: 21,
          name: 'Morning',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 22,
          name: 'Noon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 23,
          name: 'Afternoon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 24,
          name: 'Night',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 31,
          name: 'Morning',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 32,
          name: 'Noon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 33,
          name: 'Afternoon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 34,
          name: 'Night',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 41,
          name: 'Morning',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 42,
          name: 'Noon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 43,
          name: 'Afternoon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 44,
          name: 'Night',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 51,
          ame: 'Morning',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 52,
          name: 'Noon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 53,
          name: 'Afternoon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 54,
          name: 'Night',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 61,
          name: 'Morning',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 62,
          name: 'Noon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 63,
          name: 'Afternoon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 64,
          name: 'Night',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 71,
          name: 'Morning',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 72,
          name: 'Noon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 73,
          name: 'Afternoon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 74,
          name: 'Night',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        }
      ],
      date8: [
        {
          id: 11,
          name: 'Morning',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 12,
          name: 'Noon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 13,
          name: 'Afternoon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 14,
          name: 'Night',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },

        {
          id: 21,
          name: 'Morning',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 22,
          name: 'Noon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 23,
          name: 'Afternoon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 24,
          name: 'Night',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 31,
          name: 'Morning',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 32,
          name: 'Noon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 33,
          name: 'Afternoon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 34,
          name: 'Night',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 41,
          name: 'Morning',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 42,
          name: 'Noon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 43,
          name: 'Afternoon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 44,
          name: 'Night',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 51,
          ame: 'Morning',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 52,
          name: 'Noon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 53,
          name: 'Afternoon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 54,
          name: 'Night',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 61,
          name: 'Morning',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 62,
          name: 'Noon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 63,
          name: 'Afternoon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 64,
          name: 'Night',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 71,
          name: 'Morning',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 72,
          name: 'Noon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 73,
          name: 'Afternoon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 74,
          name: 'Night',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        }
      ],
      date9: [
        {
          id: 11,
          name: 'Morning',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 12,
          name: 'Noon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 13,
          name: 'Afternoon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 14,
          name: 'Night',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },

        {
          id: 21,
          name: 'Morning',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 22,
          name: 'Noon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 23,
          name: 'Afternoon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 24,
          name: 'Night',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 31,
          name: 'Morning',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 32,
          name: 'Noon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 33,
          name: 'Afternoon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 34,
          name: 'Night',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 41,
          name: 'Morning',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 42,
          name: 'Noon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 43,
          name: 'Afternoon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 44,
          name: 'Night',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 51,
          ame: 'Morning',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 52,
          name: 'Noon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 53,
          name: 'Afternoon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 54,
          name: 'Night',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 61,
          name: 'Morning',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 62,
          name: 'Noon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 63,
          name: 'Afternoon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 64,
          name: 'Night',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 71,
          name: 'Morning',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 72,
          name: 'Noon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 73,
          name: 'Afternoon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 74,
          name: 'Night',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        }
      ],
      date10: [
        {
          id: 11,
          name: 'Morning',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 12,
          name: 'Noon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 13,
          name: 'Afternoon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 14,
          name: 'Night',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },

        {
          id: 21,
          name: 'Morning',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 22,
          name: 'Noon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 23,
          name: 'Afternoon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 24,
          name: 'Night',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 31,
          name: 'Morning',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 32,
          name: 'Noon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 33,
          name: 'Afternoon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 34,
          name: 'Night',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 41,
          name: 'Morning',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 42,
          name: 'Noon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 43,
          name: 'Afternoon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 44,
          name: 'Night',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 51,
          ame: 'Morning',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 52,
          name: 'Noon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 53,
          name: 'Afternoon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 54,
          name: 'Night',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 61,
          name: 'Morning',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 62,
          name: 'Noon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 63,
          name: 'Afternoon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 64,
          name: 'Night',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 71,
          name: 'Morning',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 72,
          name: 'Noon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 73,
          name: 'Afternoon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 74,
          name: 'Night',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        }
      ],
      date11: [
        {
          id: 11,
          name: 'Morning',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 12,
          name: 'Noon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 13,
          name: 'Afternoon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 14,
          name: 'Night',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },

        {
          id: 21,
          name: 'Morning',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 22,
          name: 'Noon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 23,
          name: 'Afternoon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 24,
          name: 'Night',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 31,
          name: 'Morning',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 32,
          name: 'Noon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 33,
          name: 'Afternoon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 34,
          name: 'Night',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 41,
          name: 'Morning',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 42,
          name: 'Noon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 43,
          name: 'Afternoon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 44,
          name: 'Night',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 51,
          ame: 'Morning',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 52,
          name: 'Noon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 53,
          name: 'Afternoon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 54,
          name: 'Night',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 61,
          name: 'Morning',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 62,
          name: 'Noon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 63,
          name: 'Afternoon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 64,
          name: 'Night',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 71,
          name: 'Morning',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 72,
          name: 'Noon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 73,
          name: 'Afternoon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 74,
          name: 'Night',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        }
      ],
      date12: [
        {
          id: 11,
          name: 'Morning',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 12,
          name: 'Noon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 13,
          name: 'Afternoon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 14,
          name: 'Night',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },

        {
          id: 21,
          name: 'Morning',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 22,
          name: 'Noon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 23,
          name: 'Afternoon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 24,
          name: 'Night',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 31,
          name: 'Morning',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 32,
          name: 'Noon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 33,
          name: 'Afternoon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 34,
          name: 'Night',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 41,
          name: 'Morning',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 42,
          name: 'Noon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 43,
          name: 'Afternoon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 44,
          name: 'Night',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 51,
          ame: 'Morning',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 52,
          name: 'Noon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 53,
          name: 'Afternoon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 54,
          name: 'Night',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 61,
          name: 'Morning',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 62,
          name: 'Noon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 63,
          name: 'Afternoon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 64,
          name: 'Night',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 71,
          name: 'Morning',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 72,
          name: 'Noon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 73,
          name: 'Afternoon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 74,
          name: 'Night',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        }
      ],
      date13: [
        {
          id: 11,
          name: 'Morning',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 12,
          name: 'Noon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 13,
          name: 'Afternoon',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },
        {
          id: 14,
          name: 'Night',
          momth: Month,
          date: Monday[0],
          image: null,
          status: null,
          show: false
        },

        {
          id: 21,
          name: 'Morning',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 22,
          name: 'Noon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 23,
          name: 'Afternoon',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 24,
          name: 'Night',
          momth: Month,
          date: Tuesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 31,
          name: 'Morning',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 32,
          name: 'Noon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 33,
          name: 'Afternoon',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 34,
          name: 'Night',
          momth: Month,
          date: Wednesday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 41,
          name: 'Morning',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 42,
          name: 'Noon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 43,
          name: 'Afternoon',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 44,
          name: 'Night',
          momth: Month,
          date: Thursday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 51,
          ame: 'Morning',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 52,
          name: 'Noon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 53,
          name: 'Afternoon',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 54,
          name: 'Night',
          momth: Month,
          date: Friday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 61,
          name: 'Morning',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 62,
          name: 'Noon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 63,
          name: 'Afternoon',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 64,
          name: 'Night',
          momth: Month,
          date: Saturday,
          image: null,
          status: null,
          show: false
        },
        {
          id: 71,
          name: 'Morning',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 72,
          name: 'Noon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 73,
          name: 'Afternoon',
          momth: Month,
          date: Sunday,
          image: null,
          status: null,
          show: false,
          noBottom: true
        },
        {
          id: 74,
          name: 'Night',
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
    async print (name) {
      const el = this.$refs[name].$el
      const screenshot = (await html2canvas(el)).toDataURL()
      this.output = (await html2canvas(el)).toDataURL()
      db.collection('screenshot')
        .doc('week')
        .set({
          url: screenshot
        })
        .then(function () {
          console.log('Document successfully written!')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
      Bus.$emit('url', (await html2canvas(el)).toDataURL())
      this.$router.push({ path: '/chooseWeek' })
    },
    handleSwipe ({ direction }) {
      this.info = direction
      if (direction === 'left') {
        page += 1
        weekID += 1
        this.$refs.mySwipe.next()
        this.Mon = Monday[weekID]
        this.Sun = Sunday[weekID]
        if (Monday[weekID] < 8) {
          if (this.Month === 12) {
            Month = 1
          } else {
            Month = Month * 1 + 1
            this.Month = Month
          }
        }
        console.log(weekID)
      } else if (direction === 'right') {
        page -= 1
        weekID -= 1
        this.Mon = Monday[weekID]
        this.Sun = Sunday[weekID]
        if (Sunday[weekID] < 6) {
          if (this.Month === 1) {
            Month = 12
          } else {
            Month = Month * 1 - 1
            this.Month = Month
          }
        }
        this.$refs.mySwipe.prev()
        console.log(page)
      }

      // native Javascript event
      // console.log(evt)
    },
    retry: function () {
      if (page === 0) {
        for (let i = 0; i < this.date0.length; i++) {
          // 循環所有checkbox,添加選中狀態
          const checkedData = this.date0[i]
          checkedData.src = null
          checkedData.show = false
        }
      } else if (page === 1) {
        for (let i = 0; i < this.date1.length; i++) {
          // 循環所有checkbox,添加選中狀態
          const checkedData = this.date1[i]
          checkedData.src = null
          checkedData.show = false
        }
      } else if (page === 2) {
        for (let i = 0; i < this.date2.length; i++) {
          // 循環所有checkbox,添加選中狀態
          const checkedData = this.date2[i]
          checkedData.src = null
          checkedData.show = false
        }
      } else if (page === 3) {
        for (let i = 0; i < this.date3.length; i++) {
          // 循環所有checkbox,添加選中狀態
          const checkedData = this.date3[i]
          checkedData.src = null
          checkedData.show = false
        }
      } else if (page === 4) {
        for (let i = 0; i < this.date4.length; i++) {
          // 循環所有checkbox,添加選中狀態
          const checkedData = this.date4[i]
          checkedData.src = null
          checkedData.show = false
        }
      } else if (page === 5) {
        for (let i = 0; i < this.date5.length; i++) {
          // 循環所有checkbox,添加選中狀態
          const checkedData = this.date5[i]
          checkedData.src = null
          checkedData.show = false
        }
      } else if (page === 6) {
        for (let i = 0; i < this.date6.length; i++) {
          // 循環所有checkbox,添加選中狀態
          const checkedData = this.date6[i]
          checkedData.src = null
          checkedData.show = false
        }
      } else if (page === 7) {
        for (let i = 0; i < this.date7.length; i++) {
          // 循環所有checkbox,添加選中狀態
          const checkedData = this.date7[i]
          checkedData.src = null
          checkedData.show = false
        }
      } else if (page === 8) {
        for (let i = 0; i < this.date8.length; i++) {
          // 循環所有checkbox,添加選中狀態
          const checkedData = this.date8[i]
          checkedData.src = null
          checkedData.show = false
        }
      } else if (page === 9) {
        for (let i = 0; i < this.date9.length; i++) {
          // 循環所有checkbox,添加選中狀態
          const checkedData = this.date9[i]
          checkedData.src = null
          checkedData.show = false
        }
      } else if (page === 10) {
        for (let i = 0; i < this.date10.length; i++) {
          // 循環所有checkbox,添加選中狀態
          const checkedData = this.date10[i]
          checkedData.src = null
          checkedData.show = false
        }
      } else if (page === -3) {
        for (let i = 0; i < this.date11.length; i++) {
          // 循環所有checkbox,添加選中狀態
          const checkedData = this.date11[i]
          checkedData.src = null
          checkedData.show = false
        }
      } else if (page === -2) {
        for (let i = 0; i < this.date12.length; i++) {
          // 循環所有checkbox,添加選中狀態
          const checkedData = this.date12[i]
          checkedData.src = null
          checkedData.show = false
        }
      } else if (page === -1) {
        for (let i = 0; i < this.date13.length; i++) {
          // 循環所有checkbox,添加選中狀態
          const checkedData = this.date13[i]
          checkedData.src = null
          checkedData.show = false
        }
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
  // updated: function () {
  //   console.log('1==我会先执行')

  //   this.$nextTick(function () {
  //     // 在下次 DOM 更新循环结束之后执行这个回调。在修改数据之后立即使用这个方法，获取更新后的DOM.
  //     this.print('hello')
  //     console.log('3==我只能等页面渲染完了才会立即执行')
  //   })

  //   console.log('2==我虽然在最后但会比$nextTick先执行')
  // }
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
.calendar {
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

  height: 465px;
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
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.aa {
  width: 23%;
  height: 14.3%;
}
.bb {
  width: 100%;
  height: 100%;
}
.date {
  width: 100%;
  height: 100%;
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
  padding: 7% 7.5%;
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
.margin0 {
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
.output {
  width: 375px;
  height: auto;
}
.title{
  text-align: center
}
</style>
