<template>
  <div class="row items-start bg-secondary">
    <!--四月-->
    <q-card class="my-card" flat :fullscreen.sync="isFullscreen">
      <q-card-section class="title text-white">
        <div>
          <div class="text-h6">4月</div>
          <q-btn-dropdown stretch flat label="依照日期排列" class="absolute-right">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>依照日期排列</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>依照票數排列</q-item-label>
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
              <div class="row q-py-xs"><div class="schedule"></div><h8 class="q-px-sm">19:00吃飯</h8></div>
              <div class="row q-py-xs"><div class="schedule"></div><h8 class="q-px-sm">22:00釣蝦</h8></div>
            </div>
            <div class="q-mx-xs q-my-sm col">
              <div class="row">
                <div class="col text-center">
                    4
                <br/>
                <q-btn round unelevated class="q-mx-sm btn">
                    <img class="q-pb-xs" src="~assets/votecircle.png"/>
                </q-btn>
                </div>
                <div class="col text-center">
                    3
                <br/>
                <q-btn round unelevated class="q-mx-sm btn">
                    <img class="q-pb-xs" src="~assets/votetriangle.png"/>
                </q-btn>
                </div>
                <div class="col text-center">
                    0
                <br/>
                <q-btn round unelevated class="q-mx-sm btn">
                    <img class="q-pb-xs" src="~assets/votecross.png"/>
                </q-btn>
                </div>
              </div>
              <div class="row ps">
                  <q-checkbox size="xs" v-model="teal" label="備註" color="secondary" />
              </div>
            </div>
          </div>
          <q-separator dark/>
          <div class="row q-py-sm item">
            <div class="q-mx-xs q-my-sm col-2" align="center">
              <h8 class="dat">星期三</h8>
              <h4 class="date" style="margin-bottom:2pt">14</h4>
              <h8 class="time q-px-sm">早上</h8>
            </div>
            <div class="q-mx-xs q-my-sm col-5">
               <div class="row q-py-xs"><div class="schedule"></div><h8 class="q-px-sm">16:00看電影</h8></div>
            </div>
            <div class="q-mx-xs q-my-sm col">
              <div class="row">
                <div class="col text-center">
                    5
                <br/>
                <q-btn round unelevated class="q-mx-sm btn">
                    <img class="q-pb-xs" src="~assets/votecircle.png"/>
                </q-btn>
                </div>
                <div class="col text-center">
                    0
                <br/>
                <q-btn round unelevated class="q-mx-sm btn">
                    <img class="q-pb-xs" src="~assets/votetriangle.png"/>
                </q-btn>
                </div>
                <div class="col text-center">
                    2
                <br/>
                <q-btn round unelevated class="q-mx-sm btn">
                    <img class="q-pb-xs" src="~assets/votecross.png"/>
                </q-btn>
                </div>
              </div>
              <div class="row ps">
                  <q-checkbox size="xs" v-model="teal2" label="備註" color="secondary" />
              </div>
            </div>
          </div>
          <div class="row bottom">
          </div>
      </q-card>
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
              <div class="row q-py-xs"><div class="schedule"></div><h8 class="q-px-sm">12:00吃飯</h8></div>
              <div class="row q-py-xs"><div class="schedule"></div><h8 class="q-px-sm">18:00約會</h8></div>
              <div class="row q-py-xs"><div class="schedule"></div><h8 class="q-px-sm">23:00喝酒</h8></div>
            </div>
            <div class="q-mx-xs q-my-sm col">
              <div class="row">
                <div class="col text-center">
                    4
                <br/>
                <q-btn round unelevated class="q-mx-sm btn">
                    <img class="q-pb-xs" src="~assets/votecircle.png"/>
                </q-btn>
                </div>
                <div class="col text-center">
                    1
                <br/>
                <q-btn round unelevated class="q-mx-sm btn">
                    <img class="q-pb-xs" src="~assets/votetriangle.png"/>
                </q-btn>
                </div>
                <div class="col text-center">
                    2
                <br/>
                <q-btn round unelevated class="q-mx-sm btn">
                    <img class="q-pb-xs" src="~assets/votecross.png"/>
                </q-btn>
                </div>
              </div>
              <div class="row ps">
                  <q-checkbox size="xs" v-model="teal3" label="備註" color="secondary" />
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

            </div>
            <div class="q-mx-xs q-my-sm col">
              <div class="row">
                <div class="col text-center">
                    0
                <br/>
                <q-btn round unelevated class="q-mx-sm btn">
                    <img class="q-pb-xs" src="~assets/votecircle.png"/>
                </q-btn>
                </div>
                <div class="col text-center">
                    2
                <br/>
                <q-btn round unelevated class="q-mx-sm btn">
                    <img class="q-pb-xs" src="~assets/votetriangle.png"/>
                </q-btn>
                </div>
                <div class="col text-center">
                    5
                <br/>
                <q-btn round unelevated class="q-mx-sm btn">
                    <img class="q-pb-xs" src="~assets/votecross.png"/>
                </q-btn>
                </div>
              </div>
              <div class="row ps">
                  <q-checkbox size="xs" v-model="teal4" label="備註" color="secondary" />
              </div>
            </div>
          </div>
          <div class="row bottom">
          </div>
    </q-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-card{
  width: 100%;
  height: 100%;
  border-top-left-radius: 25pt;
  border-top-right-radius: 25pt;
  }
.my-card1{
  width: 100%;
  height: 100%;
  margin-top: -30pt;
  border-top-left-radius: 25pt;
  border-top-right-radius: 25pt;
  }
.inside-card{
  width: 100%;
  height: 100%;
  border-top-left-radius: 15pt;
  border-top-right-radius: 15pt;
  padding: 0pt;
  border: 0pt
}
.inside{
  background-color: rgb(44, 75, 120);
  width: 100%;
  height: 100%;
}
.title{
  background-color: rgb(44, 75, 120);
  padding-left: 10%;
  }
.item0{
  width: 100%;
}
.item{
  width: 100%;
  border-top: 1pt solid rgb(63, 121, 204)
}
.bottom{
  height: 30pt;
}
.schedule{
  height: 15pt;
  width: 0pt;
  border: 2pt solid rgb(250, 157, 157);
  border-radius: 5pt;
}
.btn{
  margin: 0px;
}
.day{
  color :rgb(112, 112, 112);
}
.date{
  color: rgb(63, 121, 204);
}
.time{
  color: rgb(44, 75, 120);
  border: 1px solid rgb(44, 75, 120);
  border-radius: 6pt;
}
</style>

<script>
export default {
  name: 'vote',
  data () {
    return {
      teal: false,
      teal2: false,
      teal3: false,
      teal4: false
    }
  },
  methods: {
    onItemClick () {
      // console.log('Clicked on an Item')
    }
  }
}
</script>
