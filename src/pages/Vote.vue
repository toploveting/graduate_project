<template>
  <div class="q-pa-md row items-start" style="max-width: 375px">
    <q-card class="my-card" flat>
      <q-card-section class="bg-secondary text-white">
        <div class="text-h6">10月</div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical align="center">
          <div class="row item">
            <div class="q-mx-sm q-mb-sm col-2" align="center">
              <h8 class="dat">星期二</h8>
              <h4 class="date" style="margin-bottom:2pt">13</h4>
              <h8 class="time q-px-sm">早上</h8>
            </div>
            <div class="col-6"></div>
            <div class="col-4">
            </div>
          </div>
        <q-item >Action 2</q-item>
      </q-card-actions>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
.my-card{
  width: 100%;
  max-width: 375px;
  height: 100%}
.item{
  width: 100%;
  max-width: 375px;
  border-bottom: 1px solid rgb(216, 216, 216);
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
  border-radius: 6pt
}
</style>

<script>
export default {
  name: 'vote'
}
</script>
