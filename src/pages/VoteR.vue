<template>
<q-layout view="hHh lpr fFf" class="rounded-borders">
    <q-header class="bg-secondary">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/>
        <q-btn to="vote" flat dense round icon="event_note"/>
        <q-toolbar-title class="main_title text-center">活動名稱</q-toolbar-title>
        <q-btn flat dense round icon="share"/>
        <q-btn flat dense @click="choose" v-if="!choosed" label="選擇"/>
        <q-btn flat dense @click="choose" v-if="choosed" label="完成"/>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" :width="216" :breakpoint="500" content-class="bg-secondary" class="drawer">
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable v-ripple to="home">
            <q-item-section class="q-py-sm">
              <q-avatar size="56px">
                <img src="~assets/ying.jpg"/>
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
              <q-item-section>
                課表
              </q-item-section>
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
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star"></q-icon>
              </q-item-section>
              <q-item-section>活動</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-separator color="white"/>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send"></q-icon>
            </q-item-section>
            <q-item-section>登出</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
  <div class="start q-pt-xl">
    <q-card square class="q-mb-lg">
      <q-card-section class="top"></q-card-section>
      <div class="content">
        <div class="row ">
          <div class="col-5 month q-px-sm q-pt-md text-center text-weight-medium"><p>10月</p></div>
          <div class="col-7 q-py-md q-pl-lg q-pr-md">
            <div class="time q-py-xs">
              <img class="q-pl-md q-pr-sm" src="~assets/Wmorning.png"/>早上</div>
            </div>
          </div>
          <div class="row line q-px-xl"><img src="~assets/line.png"></div>
          <div class="row text-center">
            <div class="col">
              <p class="date text-weight-medium">2 9</p>
              <br/>
              <p class="day text-weight-medium">星期二</p>
            </div>
          </div>
          <div class="row q-px-xl q-py-sm bottom">
            <div class="schedule q-ml-lg q-mt-xs"></div>
            <P class="q-pl-md">19:00吃晚餐</P>
          </div>
        </div>
    </q-card>
    <div class="row">
      <div class="col-4 text-center">
        <div v-if="!choosed">{{x}}</div><br/>
        <q-btn v-on:click="take('circle')" :ripple="false" round unelevated class="q-mx-sm btn">
          <img class="q-pb-xs" :src="Votecircle"/>
        </q-btn>
      </div>
      <div class="col-4 text-center">
        <div v-if="!choosed">{{y}}</div><br/>
        <q-btn v-on:click="take('triangle')" :ripple="false" round unelevated class="q-mx-sm btn">
          <img class="q-pb-xs" :src="Votetriangle"/>
        </q-btn>
      </div>
      <div class="col-4 text-center">
        <div v-if="!choosed">{{z}}</div><br/>
        <q-btn v-on:click="take('cross')" :ripple="false" round unelevated class="q-mx-sm btn">
          <img class="q-pb-xs" :src="Votecross"/>
        </q-btn>
      </div>
    </div>
    <div class="row q-pt-md">
        <div class="col-3">
          <q-btn unelevated @click="open('bottom')"><img src="~assets/detail.png" class="detail"/></q-btn>
          <q-dialog v-model="dialog" :position="position">
            <q-card class="dialog" style="width: 350px">
              <q-toolbar class="q-pt-sm">
                <q-toolbar-title class="title text-bold text-center">活動名稱</q-toolbar-title>
                <q-btn flat round dense icon="close" v-close-popup class="q-mr-xs"/>
              </q-toolbar>
              <q-card-section class="row items-center no-wrap">
                <div>
                  <div class="card_month text-center shadow-5">10月</div>
                  <div class="result1 row q-mt-md shadow-5">
                    <div class="col-5 q-pt-md q-pl-md ">
                      <span class="text-bold re_week">星期二</span>
                      <br>
                      <span class="re_month">29</span>
                      <span class="re_time q-pl-md q-mb-sm">早上</span>
                    </div>
                    <div class="row q-pt-md q-pl-md">
                      <div class="col q-ml-lg q-mr-md text-center">4<br/>
                        <img class="q-mt-lg q-pb-xs" src="~assets/votecircle.png"/>
                      </div>
                      <div class="col q-mx-lg text-center">1<br/>
                        <img class="q-mt-lg q-pb-xs" src="~assets/votetriangle.png"/>
                      </div>
                      <div class="col q-mx-md text-center">2<br/>
                        <img class="q-mt-lg q-pb-xs" src="~assets/votecross.png"/>
                      </div>
                    </div>
                  </div>
                  <div class="result2 row q-mt-md shadow-5">
                    <div class="col-5 q-pt-md q-pl-md">
                      <span class="text-bold re_week">星期二</span>
                      <br>
                      <span class="re_month">29</span>
                      <span class="re_time q-pl-md q-mb-sm">中午</span>
                    </div>
                    <div class="row q-pt-md q-pl-md">
                      <div class="col q-ml-lg q-mr-md text-center">4<br/>
                        <img class="q-mt-lg q-pb-xs" src="~assets/votecircle.png"/>
                      </div>
                      <div class="col q-mx-lg text-center">1<br/>
                        <img class="q-mt-lg q-pb-xs" src="~assets/votetriangle.png"/>
                      </div>
                      <div class="col q-mx-md text-center">2<br/>
                        <img class="q-mt-lg q-pb-xs" src="~assets/votecross.png"/>
                      </div>
                    </div>
                  </div>
                  <div class="result3 row q-mt-md shadow-5">
                    <div class="col-5 q-pt-md q-pl-md">
                      <span class="text-bold re_week">星期三</span>
                      <br>
                      <span class="re_month">30</span>
                      <span class="re_time q-pl-md q-mb-sm">中午</span>
                    </div>
                    <div class="row q-pt-md q-pl-md">
                      <div class="col q-ml-lg q-mr-md text-center">4<br/>
                        <img class="q-mt-lg q-pb-xs" src="~assets/votecircle.png"/>
                      </div>
                      <div class="col q-mx-lg text-center">1<br/>
                        <img class="q-mt-lg q-pb-xs" src="~assets/votetriangle.png"/>
                      </div>
                      <div class="col q-mx-md text-center">2<br/>
                        <img class="q-mt-lg q-pb-xs" src="~assets/votecross.png"/>
                      </div>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
        <div class="col-9">
          <q-linear-progress rounded size="25px" :value="progress1" track-color="white" class="shadow-2 q-mt-xs progress">
            <div class="absolute-right flex">
              <q-badge color="primary" text-color="accent" :label="progressLabel1" />
            </div>
          </q-linear-progress>
        </div>
    </div>
  </div>
  </q-layout>
</template>

<style lang="scss">
.drawer{
  color:white
}
.start{
    padding-left: 15%;
    padding-right: 15%;
    background-color: rgb(249, 250, 252);
}
.top{
    background-color: rgb(32, 65, 128);
}
.content{
    background-color: rgb(253, 250, 247);
    height: 280pt;
}
.month{
    color: rgb(89, 89, 89);
    font-size: 25pt;
    margin-bottom: 1%;
}
.time{
    background-color: rgb(109, 138, 193);
    color: white;
    font-size: 17pt;
    font-family: 'PingFang';
    border-radius: 7pt;
}
.line{
    margin-top: -15%;
    margin-left: 10%
}
.date{
    font-size: 80pt;
    font-family: 'HeadOH1';
    margin-bottom: 0%;
    margin-top: -10%;
    color: rgb(63, 121, 204)
}
.day{
    font-size: 30pt;
    margin-bottom: 0%;
    margin-top: -15%;
    font-family: 'PingFang';
    color: rgb(63, 121, 204)
}
.schedule{
  height: 13pt;
  width: 0pt;
  border: 1.5pt solid rgb(250, 157, 157);
  border-radius: 5pt;}
.bottom{
  height: 75pt;
}
.detail{
  margin-left: -30%;
  margin-top: -10%;
}
.progress{
  border-radius: 20pt;
  color: rgb(0, 124, 227);
}
.bottomSheet{
  background-color: rgb(239, 242, 246);
}
.msg{
  background-color: white;
}
.dialog{
  background-color: rgb(238, 241, 246);
}
.card_month{
  width: 72pt;
  height: 42pt;
  font-size: 18pt;
  color: rgb(63, 121, 204);
  background-color: white;
  border-radius: 10pt;
  padding-top: 8pt;
}
.result1{
  width: 260pt;
  height: 80pt;
  background-color: white;
  border-radius: 10pt;
  border-left: 8pt solid rgba(238, 194, 44, 0.5);
}
.result2{
  width: 260pt;
  height: 80pt;
  background-color: white;
  border-radius: 10pt;
  border-left: 8pt solid rgba(0, 70, 195, 0.5);
}
.result3{
  width: 260pt;
  height: 80pt;
  background-color: white;
  border-radius: 10pt;
  border-left: 8pt solid rgba(208, 14, 32, 0.5);
}
.re_week{
  font-size: 12pt;
}
.re_month{
  font-size: 30pt;
  color: rgb(44, 75, 120);
}
.re_time{
  font-size: 14pt;
  color: rgb(153, 153, 153);
  margin-top: -10pt;
}
</style>

<script>
import Votecircle0 from '../assets/votecircle.png'
import Votecircle1 from '../assets/votecircle1.png'
import Votetriangle0 from '../assets/votetriangle.png'
import Votetriangle1 from '../assets/votetriangle1.png'
import Votecross0 from '../assets/votecross.png'
import Votecross1 from '../assets/votecross1.png'
var flag = 0
let pick = 0
export default {
  name: 'voteR',
  data () {
    return {
      progress1: 0.6,
      dialog: false,
      position: 'top',
      choosed: flag,
      Votecircle: Votecircle0,
      Votetriangle: Votetriangle0,
      Votecross: Votecross0,
      x: 0,
      y: 0,
      z: 0
    }
  },
  methods: {
    open (position) {
      this.position = position
      this.dialog = true
    },
    choose () {
      flag = !flag
      this.choosed = flag
    },
    take: function (shape) {
      if (shape === 'circle') {
        if (pick !== 3) {
          this.Votecircle = Votecircle1
          this.Votetriangle = Votetriangle0
          this.Votecross = Votecross0
          this.x = this.x + 1
          if (pick === 2) {
            this.y = this.y - 1
          } else if (pick === 1) {
            this.z = this.z - 1
          }
          pick = 3
        } else {
          this.Votecircle = Votecircle0
          pick = 0
        }
      } else if (shape === 'triangle') {
        if (pick !== 2) {
          this.Votecircle = Votecircle0
          this.Votetriangle = Votetriangle1
          this.Votecross = Votecross0
          this.y = this.y + 1
          if (pick === 3) {
            this.x = this.x - 1
          } else if (pick === 1) {
            this.z = this.z - 1
          }
          pick = 2
        } else {
          this.Votetriangle = Votetriangle0
          pick = 0
        }
      } else if (shape === 'cross') {
        if (pick !== 1) {
          this.Votecircle = Votecircle0
          this.Votetriangle = Votetriangle0
          this.Votecross = Votecross1
          this.z = this.z + 1
          if (pick === 3) {
            this.x = this.x - 1
          } else if (pick === 2) {
            this.y = this.y - 1
          }
          pick = 1
        } else {
          this.Votecross = Votecross0
          pick = 0
        }
      }
    }
  },
  computed: {
    progressLabel1 () {
      return (this.progress1 * 100).toFixed(0) + '%'
    }
  }
}
</script>
