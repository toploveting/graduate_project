<template>
    <div class="bg">
        <span class="Maintitle text-bold">個人資料</span>
        <br/>
        <div class="text-center">
        <q-avatar size="70px" class="img">
          <img src="~assets/ying.jpg"/>
        </q-avatar>
        <br><br>
        <router-link to="signin" class="link">
          <span>更換大頭貼</span>
        </router-link>
        </div>
          <div class="card col shadow-5">
            <q-item class="row btn" unelevated align="left" :ripple="{ early: true, center: true, color: 'secondary' }">
                <span class="secondtitle_1">姓名</span>
                <q-input class="input" borderless v-model="text" input-class="text-right">
                </q-input>
            </q-item>
            <q-btn class="row btn" unelevated align="left" :ripple="{ early: true, center: true, color: 'secondary' }" to="setaccount">
                <span class="secondtitle">帳密設定</span>
                <q-icon name="chevron_right" class="icon"/>
            </q-btn>
          </div>
    </div>
</template>

<script>
export default {
  name: 'setid',
  data () {
    return {
      model: 'one',
      text: ''
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
.img{
  padding-top: 11pt;
}
.input{
  width: 240px;
  margin-left: 30px;
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
.secondtitle{
    color: rgb(63, 121, 204);
    font-size: 18px;
    padding-top: 6px;
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
</style>
