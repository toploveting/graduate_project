<template>
  <q-layout view="hHh lpr fFf" class="rounded-borders">
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
        <q-btn to="vote_r" flat dense round icon="event_note"/>
        <q-toolbar-title class="main_title text-center">活動名稱</q-toolbar-title>
        <q-btn flat dense round icon="share"/>
        <q-btn flat dense @click="choose" v-if="!choosed" label="選擇"/>
        <q-btn flat dense @click="choose" v-if="choosed" label="完成"/>
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
    <div class="row items-start bg-secondary">
      <!--四月-->
      <q-card class="my-card" flat :fullscreen.sync="isFullscreen">
        <q-card-section class="title text-white">
          <div>
            <div class="text-h6">4月</div>
            <q-btn-dropdown stretch flat class="absolute-right" :label="array">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label @click="array_date">依照日期排列</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label @click="array_vote">依照票數排列</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </q-card-section>
      </q-card>
      <div class="inside">
        <q-card class="inside-card" flat :fullscreen.sync="isFullscreen">
          <div class="row q-py-sm item0">
            <div class="q-mx-xs q-my-sm col-2 text-center">
              <h8 class="dat">星期二</h8>
              <h4 class="date" style="margin-bottom:2pt">13</h4>
              <h8 class="time q-px-sm">早上</h8>
            </div>
            <div class="q-mx-xs q-my-sm col-5">
              <div class="row q-py-xs">
                <div class="schedule"></div>
                <h8 class="q-px-sm">19:00吃飯</h8>
              </div>
              <div class="row q-py-xs">
                <div class="schedule"></div>
                <h8 class="q-px-sm">22:00釣蝦</h8>
              </div>
            </div>
            <div class="q-mx-xs q-my-sm col">
              <q-item class="row vote_item" :clickable="!choosed" @click="open('bottom')">
                <div class="col text-center">
                  <div v-if="!choosed">{{x}}</div>
                  <q-btn
                    v-on:click="take('circle')"
                    :ripple="false"
                    round
                    unelevated
                    class="btn"
                    :disable="!choosed"
                    v-model="btnc"
                  >
                    <img class="q-pb-xs q-px-sm" :src="Votecircle">
                  </q-btn>
                </div>
                <div class="col text-center">
                  <div v-if="!choosed">{{y}}</div>
                  <q-btn
                    v-on:click="take('triangle')"
                    :ripple="false"
                    round
                    unelevated
                    class="btn"
                    :disable="!choosed"
                    v-model="btnc"
                  >
                    <img class="q-pb-xs q-px-sm" :src="Votetriangle">
                  </q-btn>
                </div>
                <div class="col text-center">
                  <div v-if="!choosed">{{z}}</div>
                  <q-btn
                    v-on:click="take('cross')"
                    :ripple="false"
                    round
                    unelevated
                    class="btn"
                    :disable="!choosed"
                    v-model="btnc"
                  >
                    <img class="q-pb-xs q-px-sm" :src="Votecross">
                  </q-btn>
                </div>
                <q-dialog v-model="dialog" :position="position">
                  <q-card class="dialog" style="width: 350px">
                    <q-toolbar class="q-pt-sm dialog_title">
                      <q-toolbar-title class="text-bold text-center">活動名稱</q-toolbar-title>
                      <q-btn flat round dense icon="close" v-close-popup class="q-mr-xs"/>
                    </q-toolbar>
                    <q-card-section class="row items-center no-wrap">
                      <div>
                        <div class="card_month text-center shadow-5">4/13-星期二</div>
                        <div class="can">
                          <img class="q-pb-xs pic" src="~assets/votecircle.png">
                          <span class="second_title">可以</span>
                        </div>
                        <div class="result1 q-mt-md q-px-md q-py-sm shadow-5">
                          <img class="head_pic" src="~assets/face.png">
                          <span class="re_people">李昀庭</span>
                          <span class="re_ps">備註：但18:00有事</span>
                          <q-separator class="q-my-sm"/>
                          <img class="head_pic" src="~assets/face2.png">
                          <span class="re_people">陳穎</span>
                        </div>
                        <div class="notsure">
                          <q-img class="q-pb-xs pic" src="~assets/votetriangle.png"/>
                          <span class="second_title">不確定</span>
                        </div>
                        <div class="cannot">
                          <q-img class="q-pb-xs pic" src="~assets/votecross.png"/>
                          <span class="second_title">不可以</span>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </q-dialog>
              </q-item>
              <div class="row ps">
                <!-- <q-checkbox size="xs" v-model="teal" label="備註" color="secondary" /> -->

                <q-input
                  class="q-pr-xs note"
                  color="secondary"
                  v-model="text2"
                  label="備註"
                  dense
                  :disable="!teal"
                >
                  <template v-slot:before>
                    <q-checkbox size="xs" class color="secondary" v-model="teal" val="other"/>
                  </template>
                </q-input>
              </div>
            </div>
          </div>
          <div class="row q-py-sm item">
            <div class="q-mx-xs q-my-sm col-2" align="center">
              <h8 class="dat">星期三</h8>
              <h4 class="date" style="margin-bottom:2pt">14</h4>
              <h8 class="time q-px-sm">早上</h8>
            </div>
            <div class="q-mx-xs q-my-sm col-5">
              <div class="row q-py-xs">
                <div class="schedule"></div>
                <h8 class="q-px-sm">16:00看電影</h8>
              </div>
            </div>
            <div class="q-mx-xs q-my-sm col">
              <q-item class="row vote_item" :clickable="!choosed" @click="open('bottom')">
                <div class="col text-center">
                  <div v-if="!choosed">{{x_1}}</div>
                  <q-btn
                    v-on:click="take_1('circle')"
                    :ripple="false"
                    round
                    unelevated
                    class="btn"
                    :disable="!choosed"
                    v-model="btnc"
                  >
                    <img class="q-pb-xs q-px-sm" :src="Votecircle_1">
                  </q-btn>
                </div>
                <div class="col text-center">
                  <div v-if="!choosed">{{y_1}}</div>
                  <q-btn
                    v-on:click="take_1('triangle')"
                    :ripple="false"
                    round
                    unelevated
                    class="btn"
                    :disable="!choosed"
                    v-model="btnc"
                  >
                    <img class="q-pb-xs q-px-sm" :src="Votetriangle_1">
                  </q-btn>
                </div>
                <div class="col text-center">
                  <div v-if="!choosed">{{z_1}}</div>
                  <q-btn
                    v-on:click="take_1('cross')"
                    :ripple="false"
                    round
                    unelevated
                    class="btn"
                    :disable="!choosed"
                    v-model="btnc"
                  >
                    <img class="q-pb-xs q-px-sm" :src="Votecross_1">
                  </q-btn>
                </div>
                <q-dialog v-model="dialog" :position="position">
                  <q-card class="dialog" style="width: 350px">
                    <q-toolbar class="q-pt-sm dialog_title">
                      <q-toolbar-title class="text-bold text-center">活動名稱</q-toolbar-title>
                      <q-btn flat round dense icon="close" v-close-popup class="q-mr-xs"/>
                    </q-toolbar>
                    <q-card-section class="row items-center no-wrap">
                      <div>
                        <div class="card_month text-center shadow-5">4/14-星期三</div>
                        <div class="can">
                          <img class="q-pb-xs pic" src="~assets/votecircle.png">
                          <span class="second_title">可以</span>
                        </div>
                        <div class="result1 q-mt-md q-px-md q-py-sm shadow-5">
                          <q-img class="head_pic" src="~assets/face.png"/>
                          <span class="re_people">李昀庭</span>
                          <span class="re_ps">備註：但18:00有事</span>
                          <q-separator class="q-my-sm"/>
                          <q-img class="head_pic" src="~assets/face2.png"/>
                          <span class="re_people">陳穎</span>
                        </div>
                        <div class="notsure">
                          <img class="q-pb-xs pic" src="~assets/votetriangle.png">
                          <span class="second_title">不確定</span>
                        </div>
                        <div class="cannot">
                          <img class="q-pb-xs pic" src="~assets/votecross.png">
                          <span class="second_title">不可以</span>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </q-dialog>
              </q-item>
              <div class="row ps">
                <q-input
                  class="q-pr-xs note"
                  color="secondary"
                  v-model="text2"
                  label="備註"
                  dense
                  :disable="!teal2"
                >
                  <template v-slot:before>
                    <q-checkbox size="xs" class color="secondary" v-model="teal2" val="other"/>
                  </template>
                </q-input>
              </div>
            </div>
          </div>
          <div class="row bottom"></div>
        </q-card>
      </div>
    </div>
    <!--五月-->
    <q-card class="my-card1 shadow-up-3" :fullscreen.sync="isFullscreen">
      <q-card-section class="title text-white">
        <div class="text-h6">5月</div>
      </q-card-section>
    </q-card>
    <div class="inside">
      <q-card class="inside-card" flat :fullscreen.sync="isFullscreen">
        <div class="row q-py-sm item0">
          <div class="q-mx-xs q-my-sm col-2" align="center">
            <h8 class="dat">星期二</h8>
            <h4 class="date" style="margin-bottom:2pt">13</h4>
            <h8 class="time q-px-sm">早上</h8>
          </div>
          <div class="q-mx-xs q-my-sm col-5">
            <div class="row q-py-xs">
              <div class="schedule"></div>
              <h8 class="q-px-sm">12:00吃飯</h8>
            </div>
            <div class="row q-py-xs">
              <div class="schedule"></div>
              <h8 class="q-px-sm">18:00約會</h8>
            </div>
            <div class="row q-py-xs">
              <div class="schedule"></div>
              <h8 class="q-px-sm">23:00喝酒</h8>
            </div>
          </div>
          <div class="q-mx-xs q-my-sm col">
            <div class="row">
              <div class="col text-center">
                <div v-if="!choosed">{{x_2}}</div>
                <q-btn
                  v-on:click="take_2('circle')"
                  :ripple="false"
                  round
                  unelevated
                  class="btn"
                  :disable="!choosed"
                  v-model="btnc"
                >
                  <img class="q-pb-xs q-px-sm" :src="Votecircle_2">
                </q-btn>
              </div>
              <div class="col text-center">
                <div v-if="!choosed">{{y_2}}</div>
                <q-btn
                  v-on:click="take_2('triangle')"
                  :ripple="false"
                  round
                  unelevated
                  class="btn"
                  :disable="!choosed"
                  v-model="btnc"
                >
                  <img class="q-pb-xs q-px-sm" :src="Votetriangle_2">
                </q-btn>
              </div>
              <div class="col text-center">
                <div v-if="!choosed">{{z_2}}</div>
                <q-btn
                  v-on:click="take_2('cross')"
                  :ripple="false"
                  round
                  unelevated
                  class="btn"
                  :disable="!choosed"
                  v-model="btnc"
                >
                  <img class="q-pb-xs q-px-sm" :src="Votecross_2">
                </q-btn>
              </div>
            </div>
            <div class="row ps">
              <q-input
                class="q-pr-xs note"
                color="secondary"
                v-model="text2"
                label="備註"
                dense
                :disable="!teal3"
              >
                <template v-slot:before>
                  <q-checkbox size="xs" class color="secondary" v-model="teal3" val="other"/>
                </template>
              </q-input>
            </div>
          </div>
        </div>
        <div class="row q-py-sm item">
          <div class="q-mx-xs q-my-sm col-2" align="center">
            <h8 class="dat">星期三</h8>
            <h4 class="date" style="margin-bottom:2pt">14</h4>
            <h8 class="time q-px-sm">早上</h8>
          </div>
          <div class="q-mx-xs q-my-sm col-5"></div>
          <div class="q-mx-xs q-my-sm col">
            <div class="row">
              <div class="col text-center">
                <div v-if="!choosed">{{x_3}}</div>
                <q-btn
                  v-on:click="take_3('circle')"
                  :ripple="false"
                  round
                  unelevated
                  class="btn"
                  :disable="!choosed"
                  v-model="btnc"
                >
                  <img class="q-pb-xs q-px-sm" :src="Votecircle_3">
                </q-btn>
              </div>
              <div class="col text-center">
                <div v-if="!choosed">{{y_3}}</div>
                <q-btn
                  v-on:click="take_3('triangle')"
                  :ripple="false"
                  round
                  unelevated
                  class="btn"
                  :disable="!choosed"
                  v-model="btnc"
                >
                  <img class="q-pb-xs q-px-sm" :src="Votetriangle_3">
                </q-btn>
              </div>
              <div class="col text-center">
                <div v-if="!choosed">{{z_3}}</div>
                <q-btn
                  v-on:click="take_3('cross')"
                  :ripple="false"
                  round
                  unelevated
                  class="btn"
                  :disable="!choosed"
                  v-model="btnc"
                >
                  <img class="q-pb-xs q-px-sm" :src="Votecross_3">
                </q-btn>
              </div>
            </div>
            <div class="row ps">
              <q-input
                class="q-pr-xs note"
                color="secondary"
                v-model="text2"
                label="備註"
                dense
                :disable="!teal4"
              >
                <template v-slot:before>
                  <q-checkbox size="xs" class color="secondary" v-model="teal4" val="other"/>
                </template>
              </q-input>
            </div>
          </div>
        </div>
        <div class="row bottom"></div>
      </q-card>
    </div>
  </q-layout>
</template>

<style lang="scss" scoped>
.drawer {
  color: white;
}
.my-card {
  width: 100%;
  height: 100%;
  border-top-left-radius: 25pt;
  border-top-right-radius: 25pt;
}
.title {
  background-color: rgb(44, 75, 120);
  padding-left: 10%;
}
.inside {
  background-color: rgb(44, 75, 120);
  width: 100%;
  height: 100%;
}
.inside-card {
  width: 100%;
  height: 100%;
  border-top-left-radius: 15pt;
  border-top-right-radius: 15pt;
  padding: 0pt;
  border: 0pt;
}
.item0 {
  width: 100%;
}
.item {
  width: 100%;
  border-top: 1pt solid rgb(63, 121, 204);
}
.bottom {
  height: 30pt;
}
.my-card1 {
  width: 100%;
  height: 100%;
  margin-top: -30pt;
  border-top-left-radius: 25pt;
  border-top-right-radius: 25pt;
}
.day {
  color: rgb(112, 112, 112);
}
.date {
  color: rgb(63, 121, 204);
}
.time {
  color: rgb(44, 75, 120);
  border: 1px solid rgb(44, 75, 120);
  border-radius: 6pt;
}
.schedule {
  height: 15pt;
  width: 0pt;
  border: 2pt solid rgb(250, 157, 157);
  border-radius: 5pt;
}
.btn {
  margin: 0px;
}
.vote_item {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
}
.dialog {
  background-color: rgb(238, 241, 246);
  height: 551px;
}
.dialog_title {
  background-color: white;
}
.card_month {
  width: 150px;
  height: 44px;
  font-size: 21px;
  color: rgb(63, 121, 204);
  background-color: white;
  border-radius: 10pt;
  padding-top: 6pt;
}
.can {
  height: 32px;
  font-size: 21px;
  color: rgb(68, 68, 68);
  border-left: 10px solid rgb(63, 121, 204);
  margin-top: 35px;
  margin-left: -16px;
}
.notsure {
  height: 32px;
  font-size: 21px;
  color: rgb(68, 68, 68);
  border-left: 10px solid rgb(238, 194, 44);
  margin-top: 35px;
  margin-left: -16px;
}
.cannot {
  height: 32px;
  font-size: 21px;
  color: rgb(68, 68, 68);
  border-left: 10px solid rgb(208, 15, 33);
  margin-top: 35px;
  margin-left: -16px;
}

.pic {
  margin-left: 26px;
}
.second_title {
  margin-left: 11px;
}
.result1 {
  background-color: white;
  border-radius: 10pt;
  width: 323px;
  margin-left: 10px;
}
.head_pic {
  height: 36px;
  width: 36px;
}
.re_people {
  font-size: 18px;
  margin-left: 9px;
}
.re_ps {
  font-size: 14px;
  margin-left: 53px;
  color: rgb(149, 149, 149);
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
let pick1 = 0
let pick2 = 0
let pick3 = 0
export default {
  name: 'vote',
  // props: {
  //   choosed: false
  // },
  data () {
    return {
      leftDrawerOpen: false,
      teal: false,
      teal2: false,
      teal3: false,
      teal4: false,
      content: [],
      dialog: false,
      position: 'top',
      choosed: flag,
      btnc: false,
      Votecircle: Votecircle0,
      Votetriangle: Votetriangle0,
      Votecross: Votecross0,
      Votecircle_1: Votecircle0,
      Votetriangle_1: Votetriangle0,
      Votecross_1: Votecross0,
      Votecircle_2: Votecircle0,
      Votetriangle_2: Votetriangle0,
      Votecross_2: Votecross0,
      Votecircle_3: Votecircle0,
      Votetriangle_3: Votetriangle0,
      Votecross_3: Votecross0,
      array: '依照日期排列',
      x: 0,
      y: 0,
      z: 0,
      x_1: 0,
      y_1: 0,
      z_1: 0,
      x_2: 0,
      y_2: 0,
      z_2: 0,
      x_3: 0,
      y_3: 0,
      z_3: 0
    }
  },
  methods: {
    choose () {
      flag = !flag
      this.choosed = flag
    },
    array_date () {
      this.array = '依照日期排列'
    },
    array_vote () {
      this.array = '依照票數排列'
    },
    open (position) {
      this.position = position
      this.dialog = true
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
          this.x = this.x - 1
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
          this.y = this.y - 1
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
          this.z = this.z - 1
          pick = 0
        }
      }
    },
    take_1: function (shape) {
      if (shape === 'circle') {
        if (pick1 !== 3) {
          this.Votecircle_1 = Votecircle1
          this.Votetriangle_1 = Votetriangle0
          this.Votecross_1 = Votecross0
          this.x_1 = this.x_1 + 1
          if (pick1 === 2) {
            this.y_1 = this.y_1 - 1
          } else if (pick1 === 1) {
            this.z_1 = this.z_1 - 1
          }
          pick1 = 3
        } else if (pick1 === 3) {
          this.Votecircle_1 = Votecircle0
          this.x_1 = this.x_1 - 1
          pick1 = 0
        }
      } else if (shape === 'triangle') {
        if (pick1 !== 2) {
          this.Votecircle_1 = Votecircle0
          this.Votetriangle_1 = Votetriangle1
          this.Votecross_1 = Votecross0
          this.y_1 = this.y_1 + 1
          if (pick1 === 3) {
            this.x_1 = this.x_1 - 1
          } else if (pick1 === 1) {
            this.z_1 = this.z_1 - 1
          }
          pick1 = 2
        } else {
          this.Votetriangle_1 = Votetriangle0
          this.y_1 = this.y_1 - 1
          pick1 = 0
        }
      } else if (shape === 'cross') {
        if (pick1 !== 1) {
          this.Votecircle_1 = Votecircle0
          this.Votetriangle_1 = Votetriangle0
          this.Votecross_1 = Votecross1
          this.z_1 = this.z_1 + 1
          if (pick1 === 3) {
            this.x_1 = this.x_1 - 1
          } else if (pick1 === 2) {
            this.y_1 = this.y_1 - 1
          }
          pick1 = 1
        } else {
          this.Votecross_1 = Votecross0
          this.z_1 = this.z_1 - 1
          pick1 = 0
        }
      }
    },
    take_2: function (shape) {
      if (shape === 'circle') {
        if (pick2 !== 3) {
          this.Votecircle_2 = Votecircle1
          this.Votetriangle_2 = Votetriangle0
          this.Votecross_2 = Votecross0
          this.x_2 = this.x_2 + 1
          if (pick2 === 2) {
            this.y_2 = this.y_2 - 1
          } else if (pick2 === 1) {
            this.z_2 = this.z_2 - 1
          }
          pick2 = 3
        } else {
          this.Votecircle_2 = Votecircle0
          this.x_2 = this.x_2 - 1
          pick2 = 0
        }
      } else if (shape === 'triangle') {
        if (pick2 !== 2) {
          this.Votecircle_2 = Votecircle0
          this.Votetriangle_2 = Votetriangle1
          this.Votecross_2 = Votecross0
          this.y_2 = this.y_2 + 1
          if (pick2 === 3) {
            this.x_2 = this.x_2 - 1
          } else if (pick2 === 1) {
            this.z_2 = this.z_2 - 1
          }
          pick2 = 2
        } else {
          this.Votetriangle_2 = Votetriangle0
          this.y_2 = this.y_2 - 1
          pick2 = 0
        }
      } else if (shape === 'cross') {
        if (pick2 !== 1) {
          this.Votecircle_2 = Votecircle0
          this.Votetriangle_2 = Votetriangle0
          this.Votecross_2 = Votecross1
          this.z_2 = this.z_2 + 1
          if (pick2 === 3) {
            this.x_2 = this.x_2 - 1
          } else if (pick2 === 2) {
            this.y_2 = this.y_2 - 1
          }
          pick2 = 1
        } else {
          this.Votecross_2 = Votecross0
          this.z_2 = this.z_2 - 1
          pick2 = 0
        }
      }
    },
    take_3: function (shape) {
      if (shape === 'circle') {
        if (pick3 !== 3) {
          this.Votecircle_3 = Votecircle1
          this.Votetriangle_3 = Votetriangle0
          this.Votecross_3 = Votecross0
          this.x_3 = this.x_3 + 1
          if (pick3 === 2) {
            this.y_3 = this.y_3 - 1
          } else if (pick3 === 1) {
            this.z_3 = this.z_3 - 1
          }
          pick3 = 3
        } else {
          this.Votecircle_3 = Votecircle0
          this.x_3 = this.x_3 - 1
          pick3 = 0
        }
      } else if (shape === 'triangle') {
        if (pick3 !== 2) {
          this.Votecircle_3 = Votecircle0
          this.Votetriangle_3 = Votetriangle1
          this.Votecross_3 = Votecross0
          this.y_3 = this.y_3 + 1
          if (pick3 === 3) {
            this.x_3 = this.x_3 - 1
          } else if (pick3 === 1) {
            this.z_3 = this.z_3 - 1
          }
          pick3 = 2
        } else {
          this.Votetriangle_3 = Votetriangle0
          this.y_3 = this.y_3 - 1
          pick3 = 0
        }
      } else if (shape === 'cross') {
        if (pick3 !== 1) {
          this.Votecircle_3 = Votecircle0
          this.Votetriangle_3 = Votetriangle0
          this.Votecross_3 = Votecross1
          this.z_3 = this.z_3 + 1
          if (pick3 === 3) {
            this.x_3 = this.x_3 - 1
          } else if (pick3 === 2) {
            this.y_3 = this.y_3 - 1
          }
          pick3 = 1
        } else {
          this.Votecross_3 = Votecross0
          this.z_3 = this.z_3 - 1
          pick3 = 0
        }
      }
    }
  }
}
</script>
