<template>
<q-layout>
  <q-header>
    <q-toolbar class="toolbar bg-privary">
      <q-btn
      flat
      dense
      label="揪Me"
      color="secondary"/>
    <q-toolbar-title/>
    <q-btn v-if="step < 3" @click="$refs.stepper.goTo(3)" flat dense label="Skip" class="q-mr-xs skip" icon-right="chevron_right"/>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <div>
      <q-stepper
      v-model="step"
      ref="stepper"
      contracted
      color="primary"
      animated
      flat
      class="step">
        <q-step
        :name="1"
        :done="step > 1">
          <q-img src="~assets/teach1.png" class="teach" height="667px" width="375px"/>
          <div class="font text-center">
        <span class="main">一對一分享時間</span><br><br>
        <span class="sec">回覆不需要逐字的打<br>可以用圖片輕鬆地傳達</span>
          </div>
        <q-stepper-navigation>
          <q-btn v-if="step < 3" @click="$refs.stepper.next()" fab color="secondary" icon="arrow_right_alt" class="next" />
        </q-stepper-navigation>
        </q-step>
        <q-step
        :name="2"
        :done="step > 2">
          <q-img src="~assets/teach2.png" class="teach" height="667px" width="375px"/>
          <div class="font text-center">
        <span class="main">多人建立活動投票</span><br><br>
        <span class="sec">輕鬆彙整多人時間，可同時分享在<br>不同聊天軟體</span>
          </div>
          <q-stepper-navigation>
          <q-btn v-if="step < 3" @click="$refs.stepper.next()" fab color="secondary" icon="arrow_right_alt" class="next"/>
          </q-stepper-navigation>
        </q-step>
        <q-step
        :name="3">
          <q-img src="~assets/teach3.png" class="teach"/>
          <div class="font2 text-center">
        <span class="main">選擇需要使用哪項功能</span><br><br>
        <span class="sec">Let's start!</span>
          </div>
          <q-stepper-navigation>
          <q-btn v-if="step===3" color="secondary" label="分享時間" to="list" class="sharetime" outline/>
          <q-btn v-if="step===3" color="secondary" label="建立活動" to="form" class="act" unelevated/>
          </q-stepper-navigation>
        </q-step>

    </q-stepper>
  </div>
    </q-page-container>
</q-layout>
</template>

<style lang="scss">
.skip{
  color: rgb(91, 91, 91);
}
.font{
    position: relative;
    margin-top: 380px;
}
.font2{
    position: relative;
    margin-top: 300px;
}
.main{
    font-size: 18px;
    color: rgb(64, 69, 140);
}
.sec{

    font-size: 16px;
    color: rgb(141, 141, 141);
}
.q-stepper--contracted .q-stepper__header {
    min-height: 0px;
}
.q-stepper--contracted .q-stepper__header .q-stepper__tab {
    padding: 24px 0;

    position: absolute;
    float: left;
}
.q-stepper--horizontal .q-stepper__step-inner {
  padding: 0px;
  float: left;
}
.q-stepper__dot {
  margin-right: 0px;
  font-size: 0px;
  width: 0px;
  min-width: 0px;
  height: 0px;
  border-radius: 0%;
}
.q-stepper--horizontal .q-stepper__dot:before {
    content: '';
    right: 0%;
    margin-right: 0px;
    float: left;
}
.q-stepper--horizontal .q-stepper__line:after {
    /* position: absolute; */
    top: 0%;
    height: 1px;
    width: 100vw;
    background: rgba(0, 0, 0, 0.12);
    float: left;
}
.teach{
    height: 667px;
    width: 375px;
    position: absolute;
}
.next{
    position: relative;
    margin-top: 20px;
    margin-bottom: 50px;
    margin-left: 300px;
}
.sharetime{
    position: relative;
    margin-top: 30px;
    width: 168px;
    height: 37px;
    margin-left: 110px;
    border-radius:8pt;
}
.act{
    position: relative;
    margin-top: 53px;
    margin-bottom: 110px;
    width: 168px;
    height: 37px;
    margin-left: 110px;
    border-radius:8pt;
}
</style>

<script>
export default {
  data () {
    return {
      step: 1
    }
  }
}
</script>
