<template>
  <div>
    <q-layout view="hHh lpr fFf">
      <q-header>
        <q-toolbar class="toolbar bg-secondary">
        <q-btn
          flat
          dense
          round
          icon="navigate_beforet"
          to="list"/>
        <q-toolbar-title class="title">週曆</q-toolbar-title>
        <q-btn flat round dense label="完成" to="home"/>
        </q-toolbar>
      </q-header>
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
      <v-date-picker
        class="calender"
        v-model="dates"
        mode="multiple"
        is-inline/>
    </q-layout>
  </div>
</template>
<style lang="scss">
.calender{
border: 0pt;
left: 50%;
margin-left: -170.5px;
margin-top: 35px;
--day-content-width: 35px;
--day-content-height: 35px;
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
</style>
<script>
import HeartBtn0 from '../assets/heartTag.png'
// import HeartBtn1 from '../assets/heartBtn.png'
import CircleBtn0 from '../assets/circleTag.png'
// import CircleBtn1 from '../assets/circleBtn.png'
import TriangleBtn0 from '../assets/triangleTag.png'
// import TriangleBtn1 from '../assets/triangleBtn.png'
import CrossBtn0 from '../assets/crossTag.png'
// import CrossBtn1 from '../assets/crossBtn.png'
import EraserBtn0 from '../assets/eraserTag.png'
// import EraserBtn1 from '../assets/eraserBtn.png'
import RetryBtn from '../assets/retry.png'
export default {
  name: 'Month',
  data () {
    return {
      dates: [new Date(2020, 5, 9)],
      HeartBtn: HeartBtn0,
      CircleBtn: CircleBtn0,
      TriangleBtn: TriangleBtn0,
      CrossBtn: CrossBtn0,
      EraserBtn: EraserBtn0,
      RetryBtn: RetryBtn
    }
  }
}
</script>
