<template>
    <div class="bg">
        <span class="Maintitle text-bold">帳密設定</span>
          <div class="card col shadow-5">
            <q-item class="row btn" unelevated align="left" :ripple="{ early: true, center: true, color: 'secondary' }">
                <span class="secondtitle_1">電子郵件</span>
                <q-input class="input" :value="email" borderless v-model="text" input-class="text-right"/>
            </q-item>
            <span class="secondtitle">修改密碼</span>
            <q-separator inset class="sep"/>
            <q-item class="row btnn" unelevated align="left" :ripple="{ early: true, center: true, color: 'secondary' }">
                <span class="secondtitle_1">密碼</span>
                <q-input class="inputs" borderless v-model="text2" input-class="text-right"/>
            </q-item>
            <q-item class="row btnn" unelevated align="left" :ripple="{ early: true, center: true, color: 'secondary' }">
                <span class="secondtitle_1">確認密碼</span>
                <q-input class="input" borderless v-model="text3" input-class="text-right"/>
            </q-item>
          </div>
    </div>
</template>

<script>
export default {
  name: 'setaccount',
  data () {
    return {
      model: 'one',
      text: '',
      text2: '',
      text3: ''
    }
  }
}
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
.input{
  width: 200px;
  margin-left: 30px;
}
.inputs{
  width: 200px;
  margin-left: 65px;
}
.card{
    background-color: white;
    margin-top: 25px;
    padding-bottom: 23px;
    padding-left: 3px;
}
.btn{
    background-color: white;
    margin-top: 10px;
}
.btnn{
    padding-top: 0px;
    padding-bottom: 0px;
}
.secondtitle{
    color: rgb(63, 121, 204);
    font-size: 18px;
    padding-top: 6px;
    padding-left: 16px;
    font-weight: 500;
}
.secondtitle_1{
    color: rgb(63, 121, 204);
    font-size: 18px;
    padding-top: 15px;
    font-weight: 500;
}
.toggle{
  border: 1px solid #027be3;
  border-radius: 10px;
  margin-left: 80px;
}
.icon{
    color: rgb(117, 117, 117);
    padding-left: 230px;
}
.name{
    color: rgb(117, 117, 117);
    padding-left: 240px;
    font-size: 18px;
}
.sep{
    margin-top: 7px;
    margin-bottom: 7px;
}
</style>
