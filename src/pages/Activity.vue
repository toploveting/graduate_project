<template>
  <div class="q-pa-md q-px-lg row items-start q-gutter-md">
    <div class="q-pa-md my-card" style="max-width: 350px">
      <q-slide-item @left="onLeft" @right="onRight" class="shadow-4">
        <template v-slot:right>
          <q-icon name="delete" />
        </template>
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">揪起來</div>
            <br><br>
            <div class="text-subtitle2 q-pr-md q-pb-sm absolute-bottom-right">-2020/3/16</div>
          </q-card-section>
        </q-card>
      </q-slide-item>
      <br>
      <q-slide-item @left="onLeft" @right="onRight" class="shadow-4">
        <template v-slot:right>
          <q-icon name="delete" />
        </template>
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">讀書會</div>
            <br><br>
            <div class="text-subtitle2 q-pr-md q-pb-sm absolute-bottom-right">-2019/11/10</div>
          </q-card-section>
        </q-card>
      </q-slide-item>
      <br>
      <q-slide-item @left="onLeft" @right="onRight" class="shadow-4">
        <template v-slot:right>
          <q-icon name="delete" />
        </template>
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">阿里山</div>
            <br><br>
            <div class="text-subtitle2 q-pr-md q-pb-sm absolute-bottom-right">-2019/3/29</div>
          </q-card-section>
        </q-card>
      </q-slide-item>
      <br>
      <q-slide-item @left="onLeft" @right="onRight" class="shadow-4">
        <template v-slot:right>
          <q-icon name="delete" />
        </template>
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">下午茶</div>
            <br><br>
            <div class="text-subtitle2 q-pr-md q-pb-sm absolute-bottom-right">-2019/1/23</div>
          </q-card-section>
        </q-card>
      </q-slide-item>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
  hight: 100%
</style>
<script>
export default {
  data () {
    return {
      lorem: '讀書會',
      dates: '2020/03/16'
    }
  },
  methods: {
    onLeft ({ reset }) {
      this.$q.notify('Left action triggered. Resetting in 1 second.')
      this.finalize(reset)
    },
    onRight ({ reset }) {
      this.$q.notify('Right action triggered. Resetting in 1 second.')
      this.finalize(reset)
    },
    finalize (reset) {
      this.timer = setTimeout(() => {
        reset()
      }, 1000)
    },
    beforeDestroy () {
      clearTimeout(this.timer)
    }
  }
}
</script>