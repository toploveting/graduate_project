<template>
  <q-layout view="hHh lpr fFf">
    <q-header>
      <q-toolbar class="toolbar bg-secondary">
        <q-btn flat dense label="上一步" to="week"/>
        <q-space/>
        <q-toolbar-title class="title">課表</q-toolbar-title>
        <q-space/>

        <q-btn @click="print('capture')" flat dense class="q-mr-xs">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
            <title>ionicons-v5-f</title>
            <path
              d="M336,192h40a40,40,0,0,1,40,40V424a40,40,0,0,1-40,40H136a40,40,0,0,1-40-40V232a40,40,0,0,1,40-40h40"
              style="fill:none;stroke:#FFF;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
            ></path>
            <polyline
              points="336 128 256 48 176 128"
              style="fill:none;stroke:#FFF;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
            ></polyline>
            <line
              x1="256"
              y1="321"
              x2="256"
              y2="48"
              style="fill:none;stroke:#FFF;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
            ></line>
          </svg>
          分享
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <template>
        <div>
          <q-dialog v-model="sharePopup" medium full-width>
            <q-card class="column full-height" style="width: 300px">
              <q-card-section class="row items-center">
                <q-space/>
                <div class="text-h6">分享</div>
                <q-space/>
                <q-btn icon="close" flat round dense v-close-popup/>
              </q-card-section>

              <q-card-section class="col q-pt-none">
                <img :src="frameCapture" class="final">
                <div class="longPress">長按圖片分享</div>
                <!-- <div class="longPress">or</div> -->
              </q-card-section>

              <q-card-actions align="center" class="bg-white text-teal">
                <a :href="frameCapture" download="WeekShare">
                  <q-btn flat label="下載圖片"/>
                </a>
              </q-card-actions>
            </q-card>
          </q-dialog>

          <!-- <q-btn @click="print('capture')">capture</q-btn> -->

          <delay :wait="4000">
            <div slot="loading">loading</div>

            <q-card class="screenshot" ref="capture">
              <img v-if="isLoaded" class="output" :src="url">
              <img v-if="isLoaded" class="frame" :src="frame">
            </q-card>

            <q-footer>
              <q-scroll-area horizontal style="height: 194px; width: 100%;" class="scrollview">
                <div class="space-between row no-wrap">
                  <!-- <div v-for="n in 10" :key="n" style="width: 150px" class="q-pa-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga quae veritatis blanditiis sequi id expedita amet esse aspernatur! Iure, doloribus!
                  </div>-->
                  <div class="frames">
                    <div class="mask0" :class="{mask1:isMovie}">MOVIE</div>
                    <img @click="chooseFrame('movie')" v-if="isLoaded" class="image" :src="Movie">
                  </div>

                  <div class="frames">
                    <div class="mask0" :class="{mask1:isFood}">FOOD</div>
                    <img @click="chooseFrame('food')" v-if="isLoaded" class="image" :src="Food">
                  </div>

                  <div class="frames">
                    <div class="mask0" :class="{mask1:isMeeting}">MEETING</div>
                    <img
                      @click="chooseFrame('meeting')"
                      v-if="isLoaded"
                      class="image"
                      :src="Meeting"
                    >
                  </div>

                  <div class="frames">
                    <div class="mask0" :class="{mask1:isBar}">BAR</div>
                    <img @click="chooseFrame('bar')" v-if="isLoaded" class="image" :src="Bar">
                  </div>

                  <div class="frames">
                    <div class="mask0" :class="{mask1:isAftea}">AFTERNOON TEA</div>
                    <img
                      @click="chooseFrame('afternoonTea')"
                      v-if="isLoaded"
                      class="image"
                      :src="Aftea"
                    >
                  </div>

                  <div class="frames">
                    <div class="mask0" :class="{mask1:isDate}">DATE</div>
                    <img @click="chooseFrame('date')" v-if="isLoaded" class="image" :src="date">
                  </div>

                  <div class="frames">
                    <div class="mask0" :class="{mask1:isPlay}">PLAY</div>
                    <img @click="chooseFrame('play')" v-if="isLoaded" class="image" :src="Play">
                  </div>
                </div>
              </q-scroll-area>
            </q-footer>
          </delay>
        </div>
      </template>
    </q-page-container>
  </q-layout>
</template>

<script>
import Vue from 'vue'
import Delay from 'vue-delay'
Vue.use(Delay)
// import { Plugins } from '@capacitor/core'
// const { Share } = Plugins
import { db } from '../boot/firebase.js'
import html2canvas from 'html2canvas'

import Aftea from '../assets/Aftea.png'
import Bar from '../assets/Bar.png'
import date from '../assets/Date.png'
import Food from '../assets/Food.png'
import Meeting from '../assets/Meeting.png'
import Movie from '../assets/Movie.png'
import Play from '../assets/Play.png'

let imageURL

export default {
  data () {
    return {
      name: 0,
      url: imageURL,
      frame: Movie,
      isLoaded: false,
      Aftea: Aftea,
      Bar: Bar,
      date: date,
      Food: Food,
      Meeting: Meeting,
      Movie: Movie,
      Play: Play,
      isAftea: false,
      isBar: false,
      isDate: false,
      isFood: false,
      isMeeting: false,
      isMovie: true,
      isPlay: false,
      sharePopup: false,
      frameCapture: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    print: function (name) {
      var that = this
      var opts = {
        useCORS: true, // 允许跨域
        logging: true,
        backgroundColor: 'rgba(0,0,0,.0)', // 或者null，都代表透明
        scale: window.devicePixelRatio // 提高清晰度
      }
      const el = this.$refs[name].$el
      html2canvas(el, opts).then(function (canvas) {
        that.frameCapture = canvas.toDataURL() // 將canvas轉為base64圖片(eg. data:image/png;base64,ijskjlkj)
        var screenshot = canvas.toDataURL() // 將canvas轉為base64圖片(eg. data:image/png;base64,ijskjlkj)
        db.collection('screenshot')
          .doc('classFrame')
          .set({
            url: screenshot
          })
          .then(function () {
            console.log('Document successfully written!')
          })
          .catch(function (error) {
            console.error('Error writing document: ', error)
          })
      })
      this.sharePopup = true
    },
    chooseFrame: function (frame) {
      if (frame === 'movie') {
        this.frame = Movie
        this.isMovie = true
        this.isAftea = false
        this.isBar = false
        this.isDate = false
        this.isFood = false
        this.isMeeting = false
        this.isPlay = false
      } else if (frame === 'afternoonTea') {
        this.frame = Aftea
        this.isMovie = false
        this.isAftea = true
        this.isBar = false
        this.isDate = false
        this.isFood = false
        this.isMeeting = false
        this.isPlay = false
      } else if (frame === 'bar') {
        this.frame = Bar
        this.isMovie = false
        this.isAftea = false
        this.isBar = true
        this.isDate = false
        this.isFood = false
        this.isMeeting = false
        this.isPlay = false
      } else if (frame === 'date') {
        this.frame = date
        this.isMovie = false
        this.isAftea = false
        this.isBar = false
        this.isDate = true
        this.isFood = false
        this.isMeeting = false
        this.isPlay = false
      } else if (frame === 'food') {
        this.frame = Food
        this.isMovie = false
        this.isAftea = false
        this.isBar = false
        this.isDate = false
        this.isFood = true
        this.isMeeting = false
        this.isPlay = false
      } else if (frame === 'meeting') {
        this.frame = Meeting
        this.isMovie = false
        this.isAftea = false
        this.isBar = false
        this.isDate = false
        this.isFood = false
        this.isMeeting = true
        this.isPlay = false
      } else if (frame === 'play') {
        this.frame = Play
        this.isMovie = false
        this.isAftea = false
        this.isBar = false
        this.isDate = false
        this.isFood = false
        this.isMeeting = false
        this.isPlay = true
      }
    },
    getData () {
      var docRef = db.collection('screenshot').doc('class')

      docRef
        .get()
        .then(
          function (doc) {
            if (doc.exists) {
              console.log('Document data:', doc.data().url)
              imageURL = doc.data().url
              this.url = imageURL
              this.isLoaded = true
            } else {
              // doc.data() will be undefined in this case
              console.log('No such document!')
            }
          }.bind(this)
        )

        .catch(function (error) {
          console.log('Error getting document:', error)
        })
    }
  }
}
</script>

<style lang="scss">
.longPress {
  margin: 7px 0 0 0;
  text-align: center;
  font-size: 12pt;
}
.final {
  width: 80%;
  height: auto;
  margin: 0 10%;
}
.output {
  width: 80% !important;
  height: auto;
  float: left;
  position: absolute;
  margin: 25% 10%;
}
.frame {
  width: 100%;
  height: auto;
  position: absolute;
  box-shadow: 0px 0px 3px #555;
}
.scrollview {
  background-color: #e6ecf3;
}
.frames {
  width: 85px;
  height: 140px;
  margin: 5% 2%;
  background-color: #fff;
}
.mask0 {
  width: 0px;
  height: 0px;
}
.mask1 {
  width: 85px;
  height: 140px;
  background-color: #000;
  opacity: 40%;
  position: absolute;
  font-size: 8pt;
  // font-weight: bold;
  text-align: center;
  padding: 10% 0%;
}
.image {
  width: 85px;
  height: 140px;
}
.screenshot {
  width: 62%;
  padding-bottom: 102.5%;
  // height: 57.6%;
  margin: 5% 19%;
  position: absolute;
  background-color: #fff;
}
.flex {
  display: flex;
}
.space-between {
  justify-content: space-between;
}
.flex-end {
  align-items: flex-end;
}
.shapes {
  padding: 0 0%;
  margin: 5% 7%;
}
.shape {
  width: 27%;
  height: 90%;
  margin-right: 0%;
}
.shapeCross {
  width: 30%;
  height: 80%;
}
.btnText {
  text-align: center;
  margin: 0% -100% 0 7%;
  font-size: 9pt;
  font-weight: bold;
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
.margin0 {
  margin: 0;
}

.center-center {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
}
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 8px 30px;
  color: #777;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 2px;
  text-transform: capitalize;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 4px;
  border: 1px solid #ddd;
  cursor: pointer;
  background-color: white;
}

button:hover {
  border-color: #cdd;
}

.fa-share-alt {
  padding-left: 5px;
}
</style>
