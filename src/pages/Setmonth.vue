<template>
    <div class="bg">
        <span class="Maintitle text-bold">月曆</span>
          <div class="card col shadow-5">
            <q-item class="row btn" unelevated align="left">
                <span class="secondtitle">一週的開始</span>
                <q-btn-toggle
                v-model="model"
                class="toggle"
                size="sm"
                no-caps
                unelevated
                toggle-color="secondary"
                color="white"
                text-color="secondary"
                :options="[
                {label: '星期一', value: 'mon'},
                {label: '星期日', value: 'sun'}
                ]"
                />
            </q-item>
          </div>
    </div>
</template>

<script>
export default {
  name: 'setmonth',
  data () {
    return {
      model: 'one'
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
.card{
    background-color: white;
    margin-top: 16px;
    padding-top: 15px;
    padding-bottom: 17px;
    padding-left: 3px;
}
.secondtitle{
    color: rgb(97, 97, 97);
    font-size: 18px;
    padding-top: 3px;
}
.choose{
    color: rgb(42, 81, 137);
    padding-left: 94pt;
    font-size: 18px;
}
.toggle{
  border: 1px solid #027be3;
  border-radius: 10px;
  margin-left: 80px;
}
</style>
