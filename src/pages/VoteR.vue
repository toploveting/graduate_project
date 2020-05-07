<template>
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
      <div class="col-4 text-center">4<br/>
        <q-btn round unelevated class="q-mx-sm btn">
          <img class="q-pb-xs" src="~assets/votecircle.png"/>
        </q-btn>
      </div>
      <div class="col-4 text-center">1<br/>
        <q-btn round unelevated class="q-mx-sm btn">
          <img class="q-pb-xs" src="~assets/votetriangle.png"/>
        </q-btn>
      </div>
      <div class="col-4 text-center">2<br/>
        <q-btn round unelevated class="q-mx-sm btn">
          <img class="q-pb-xs" src="~assets/votecross.png"/>
        </q-btn>
      </div>
    </div>
    <div class="row q-pt-md">
        <div class="col-3">
          <q-btn unelevated @click="open('bottom')"><img src="~assets/detail.png" class="detail"/></q-btn>
          <q-dialog v-model="dialog" :position="position">
            <q-card class="dialog" style="width: 350px">
              <q-toolbar class="q-pt-sm">
                <q-toolbar-title class="title text-center">活動名稱</q-toolbar-title>
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
                      <div class="col text-center">4<br/>
                        <img class="q-mx-md q-mt-lg q-pb-xs" src="~assets/votecircle.png"/>
                      </div>
                      <div class="col text-center">1<br/>
                        <img class="q-mx-lg q-mt-lg q-pb-xs" src="~assets/votetriangle.png"/>
                      </div>
                      <div class="col text-center">2<br/>
                        <img class="q-mx-lg q-mt-lg q-pb-xs" src="~assets/votecross.png"/>
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
                      <div class="col text-center">4<br/>
                        <img class="q-mx-md q-mt-lg q-pb-xs" src="~assets/votecircle.png"/>
                      </div>
                      <div class="col text-center">1<br/>
                        <img class="q-mx-lg q-mt-lg q-pb-xs" src="~assets/votetriangle.png"/>
                      </div>
                      <div class="col text-center">2<br/>
                        <img class="q-mx-lg q-mt-lg q-pb-xs" src="~assets/votecross.png"/>
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
                      <div class="col text-center">4<br/>
                        <img class="q-mx-md q-mt-lg q-pb-xs" src="~assets/votecircle.png"/>
                      </div>
                      <div class="col text-center">1<br/>
                        <img class="q-mx-lg q-mt-lg q-pb-xs" src="~assets/votetriangle.png"/>
                      </div>
                      <div class="col text-center">2<br/>
                        <img class="q-mx-lg q-mt-lg q-pb-xs" src="~assets/votecross.png"/>
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
</template>

<style lang="scss">
.start{
    padding-left: 15%;
    padding-right: 15%;
    height: 667pt;
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
export default {
  name: 'voteR',
  data () {
    return {
      progress1: 0.6,
      dialog: false,
      position: 'top'
    }
  },
  methods: {
    open (position) {
      this.position = position
      this.dialog = true
    }
  },
  computed: {
    progressLabel1 () {
      return (this.progress1 * 100).toFixed(0) + '%'
    }
  }
}
</script>
