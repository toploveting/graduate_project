<template>
    <div class="text-center bg">
        <q-btn
         class="btn"
         align="right"
         :ripple="{ early: true, center: true, color: 'secondary' }"
         to="setid"
         >
            <img src="~assets/idhead.png" class="img">
            <span class="label">個人資料</span>
            <q-icon name="chevron_right" class="icon"/>
        </q-btn>
        <q-btn
         class="btn"
         align="right"
         :ripple="{ early: true, center: true, color: 'secondary' }"
         to="setclass"
         >
            <img src="~assets/classicon.png" class="img">
            <span class="label">課表設定</span>
            <q-icon name="chevron_right" class="icon"/>
        </q-btn>
        <q-btn
         class="btn"
         align="right"
         :ripple="{ early: true, center: true, color: 'secondary' }"
         to="setmonth"
         >
            <img src="~assets/monthicon.png" class="img">
            <span class="label">月曆設定</span>
            <q-icon name="chevron_right" class="icon"/>
        </q-btn>
    </div>
</template>
<script>
export default {
  name: 'setting'
}
</script>
<style lang="scss">
.bg{
    background-color: rgb(249, 250, 252);
    height: 617px;
}
.btn{
    background-color: white;
    width: 335px;
    height: 50px;
    margin-top: 23px;
    font-size: 18px;
}
.img{
    padding-right: 17px;
}
.label{
    color: rgb(63, 121, 204);
    padding-right: 156px;
}
.icon{
    color: rgb(117, 117, 117);
}
</style>
