<template>
    <div class="bg">
        <span class="Maintitle text-bold">課表</span>
          <div class="card col shadow-5">
            <q-btn class="row btn" unelevated align="left" @click="show">
                <span class="secondtitle">星期</span>
                <span class="choose">{{a}}</span>
                <q-icon name="chevron_right" class="icon"/>
            </q-btn>
            <q-btn class="row btn" unelevated clickable align="left">
                <span class="secondtitle">節次</span>
                <span class="chooses"> 1-8</span>
                <q-icon name="chevron_right" class="icon"/>
            </q-btn>
            <q-btn class="row btn" unelevated align="left" :ripple="false">
                <span class="secondtitle">使用午休</span>
                <q-toggle v-model="value" color="secondary" keep-color class="toggle"/>
            </q-btn>
          </div>
          <VuePicker
      :data="pickData"
      :layer="2"
      :showToolbar="true"
      confirmText="確認"
      :defaultIndex="defaultIndex"
      @cancel="cancel"
      @confirm="confirm"
      :maskClick="true"
      :visible.sync="pickerVisible"
            />

    </div>
</template>

<script>
import VuePicker from 'vue-pickers'
export default {
  name: 'setclass',
  components: { VuePicker },
  data () {
    return {
      value: false,
      showToolbar: true,
      pickerVisible: false,
      defaultIndex: [0],
      pickData: tdata,
      result: '',
      a: ''
    }
  },
  methods: {
    show () {
      this.pickerVisible = true
    },
    cancel () {
      console.log('cancel')
    },
    confirm (res) {
      this.a = JSON.parse(JSON.stringify(res))
    }
  }
}
var tdata = [
  {
    label: '星期一 - 星期日'
  },
  {
    label: '星期二 - 星期一',
    value: 'Tue'
  },
  {
    label: '星期三 - 星期二',
    value: 'Wen'
  },
  {
    label: '星期四 - 星期三',
    value: 'Thu'
  },
  {
    label: '星期五 - 星期四',
    value: 'Fri'
  },
  {
    label: '星期六 - 星期五',
    value: 'Sat'
  },
  {
    label: '星期天 - 星期六',
    value: 'Sun'
  }
]
</script>
<style lang="scss">
.Maintitle{
    font-size: 21px;
    color: rgb(63, 121, 204);
    padding-left: 8px;
}
.bg{
    padding-top: 28px;
    padding-left: 12px;
    padding-right: 12px;
    background-color: rgb(249, 250, 252);
    height: 617px;
}
.card{
    background-color: white;
    margin-top: 16px;
    padding-top: 23px;
    padding-bottom: 5px;
    padding-left: 3px;
}
.secondtitle{
    color: rgb(63, 121, 204);
    font-size: 18px;
}
.choose{
    color: rgb(42, 81, 137);
    padding-left: 94pt;
    font-size: 18px;
}
.chooses{
    color: rgb(117, 117, 117);
    padding-left: 219px;
    font-size: 18px;
}
.btn{
    width: 351px;
    margin-bottom: 15px;
}
.icon{
    padding-left: 24px;
    color: rgb(117, 117, 117);
}
.toggle{
    margin-left: 190px;
}
</style>
