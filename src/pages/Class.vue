<template>
  <div class="q-pa-md">
    <div style="height : 50px">
      <q-btn round unelevated size="sm" color="grey-5" class="q-mx-sm">
          <q-icon name="replay" color="accent"/>
      </q-btn>
      <q-btn round unelevated size="sm" color="grey-5" class="q-mx-sm">
          <q-icon name="replay" color="accent"/>
      </q-btn>
      <q-btn round unelevated size="sm" color="pink-2" class="q-mx-sm">
          <q-icon name="favorite_border" color="pink-5"/>
      </q-btn>
      <q-btn round unelevated size="sm" color="blue-11" class="q-mx-sm">
          <q-icon name="radio_button_unchecked" color="blue-13"/>
      </q-btn>
      <q-btn round unelevated size="sm" color="yellow-4" class="q-mx-sm">
          <q-icon name="change_history" color="yellow-8"/>
      </q-btn>
      <q-btn round unelevated size="sm" color="red-3" class="q-mx-sm">
          <q-icon name="clear" color="red-10"/>
      </q-btn>
    </div>
    <div>
    <div class="row day0">
      <div class="date0 col-3"><h6 class="text-center q-my-xs bg-secondary" style="color:white">12月</h6 ><p class="text-center">9日-15日</p></div>
      <div class="morning0 col-3 text-center q-pt-md"><img class="q-pb-xs" src="~assets/morning.png"/><p>早上</p></div>
      <div class="noon0 col-3 text-center q-pt-md"><img class="q-pb-xs" src="~assets/noon.png"/><p>中午</p></div>
      <div class="night0 col-3 text-center q-pt-md"><img class="q-pb-sm" src="~assets/night.png"/><p>晚上</p></div>
    </div>
    <div class="row day1">
      <div class="date1 col-3"><h5 class="text-center q-my-xs">9</h5 ><p class="text-center">星期一</p></div>
      <q-item class="morning1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>9-1</q-item>
      <q-item class="noon1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>9-2</q-item>
      <q-item class="night1 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>9-3</q-item>
    </div>
    <div class="row day2">
      <div class="date2 col-3"><h5 class="text-center q-my-xs">10</h5 ><p class="text-center">星期二</p></div>
      <q-item class="morning2 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>10-1</q-item>
      <q-item class="noon2 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>10-2</q-item>
      <q-item class="night2 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>10-3</q-item>
    </div>
    <div class="row day3">
      <div class="date3 col-3"><h5 class="text-center q-my-xs">11</h5 ><p class="text-center">星期三</p></div>
      <q-item class="morning3 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>11-1</q-item>
      <q-item class="noon3 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>11-2</q-item>
      <q-item class="night3 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>11-3</q-item>
    </div>
    <div class="row day4">
      <div class="date4 col-3"><h5 class="text-center q-my-xs">12</h5 ><p class="text-center">星期四</p></div>
      <q-item class="morning4 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>12-1</q-item>
      <q-item class="noon4 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>12-2</q-item>
      <q-item class="night4 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>12-3</q-item>
    </div>
    <div class="row day5">
      <div class="date5 col-3"><h5 class="text-center q-my-xs">13</h5 ><p class="text-center">星期五</p></div>
      <q-item class="morning5 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>13-1</q-item>
      <q-item class="noon5 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>13-2</q-item>
      <q-item class="night5 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>13-3</q-item>
    </div>
    <div class="row day6">
      <div class="date6 col-3"><h5 class="text-center q-my-xs" style="color:rgb(219,13,24)">14</h5 ><p class="text-center" style="color:rgb(219,13,24)">星期六</p></div>
      <q-item class="morning6 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>14-1</q-item>
      <q-item class="noon6 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>14-2</q-item>
      <q-item class="night6 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>14-3</q-item>
    </div>
    <div class="row day7">
      <div class="date7 col-3"><h5 class="text-center q-my-xs" style="color:rgb(219,13,24)">15</h5 ><p class="text-center" style="color:rgb(219,13,24)">星期日</p></div>
      <q-item class="morning7 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>15-1</q-item>
      <q-item class="noon7 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>15-2</q-item>
      <q-item class="night7 col-3" style="border-left: 1px solid rgb(216,216,216)" clickable v-ripple>15-3</q-item>
    </div>
    </div>
  </div>
</template>

<style lang="scss">
.day1{
  border-bottom: 1px solid rgb(216, 216, 216);
}
.day2{
  border-bottom: 1px solid rgb(216, 216, 216)
}
.day3{
  border-bottom: 1px solid rgb(216, 216, 216)
}
.day4{
  border-bottom: 1px solid rgb(216, 216, 216)
}
.day5{
  border-bottom: 1px solid rgb(216, 216, 216)
}
.day6{
  border-bottom: 1px solid rgb(216, 216, 216)
}

</style>
