<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    />
    <p class="text-h6 text-blue-8 q-pt-md q-pl-lg">主題名稱</p>
      <q-input
        class="q-px-lg"
        filled
        v-model="text"
        label="title"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
    <p class="text-h6 text-blue-8 q-pl-lg">說明</p>
      <q-input
        class="q-px-lg"
        filled
        v-model="text1"
        label="suscribe"
        type="textarea"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"/>
        <div class="q-gutter-md">
    <p class="text-h6 text-blue-8 q-pl-lg">日期區間</p>
    <!-- <div class="q-px-lg">
    <a-range-picker @change="onChange" />
    </div> -->
    <v-date-picker
      class="q-px-lg"
      first-day-of-week="2"
      :masks="{ title: 'MMM YYYY' }"
      mode="multiple"
      :value="null"
      v-model='dates'
      color="blue"
    />
    <p class="text-h6 text-blue-8 q-pl-lg">時段</p>
    </div>
      <q-checkbox class="q-px-lg" color="secondary" v-model="selectall" val="all" label="全選" />
      <q-separator inset />
      <br>
      <q-checkbox class="q-px-lg" color="secondary"  v-model="selection" val="morning" label="早上" />
      <br><br>
      <q-checkbox class="q-px-lg" color="secondary"  v-model="selection" val="noon" label="中午" />
      <br><br>
      <q-checkbox class="q-px-lg" color="secondary"  v-model="selection" val="afternoon" label="下午" />
      <br><br>
      <q-checkbox class="q-px-lg" color="secondary"  v-model="selection" val="night" label="晚上" />
      <br><br>
      <q-input class="q-pl-sm q-pr-md" color="secondary"  v-model="text2" label="其他" :dense="dense" >
        <template v-slot:before>
          <q-checkbox class="q-pl-md" color="secondary"  v-model="selection" val="other" />
        </template>
      </q-input>
      <br>
    <div>
    <q-separator inset />
    <div class="q-gutter-sm">
      <q-checkbox class="q-pt-md q-pl-md" color="secondary"  size="lg" v-model="teal" label="結束時間" />
    </div>
    <div class="q-gutter-md q-pt-md q-ml-lg ">
      <a-date-picker
      :mode="mode1"
      showTime
      @openChange="handleOpenChange1"
      @panelChange="handlePanelChange1"
    />
    </div>
        <q-btn
        to="/build"
        class="q-mt-lg q-ml-lg"
        label="建立"
        type="submit"
        color="secondary"/>
    </div>
 </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      group: 'op1',
      name: null,
      age: null,
      accept: false,
      options: [
        {
          label: 'Option 1',
          value: 'op1'
        },
        {
          label: 'Option 2',
          value: 'op2'
        },
        {
          label: 'Option 3',
          value: 'op3'
        }
      ],
      dates: [
        new Date()
      ],
      selectall: false,
      selection: [],
      selectarr: ['morning', 'noon', 'afternoon', 'night'],
      teal: false,
      text: '',
      text1: '',
      text2: '',
      ph: '',
      dense: false,
      mode1: 'time',
      value: []
    }
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },
    onChange (date, dateString) {
      console.log(date, dateString)
    },
    // checkall: function () {
    //   if (this.selectall) {
    //     this.selection = this.selectarr
    //   } else {
    //     this.selection = []
    //   }
    // },
    eventsFn (date) {
      if (date === '2019/02/01' ||
        date === '2019/02/05' ||
        date === '2019/02/06' ||
        date === '2019/02/09' ||
        date === '2019/02/23') {
        return true
      }
      return false
    },
    handleOpenChange1 (open) {
      if (open) {
        this.mode1 = 'time'
      }
    },
    handleChange (value) {
      this.value = value
    },
    handlePanelChange1 (value, mode) {
      this.mode1 = mode
    }
  },
  watch: {
    selection: function () {
      if (this.selection.length === this.selectarr.length) {
        this.selectall = true
      } else {
        this.selectall = false
      }
    },
    selectall: function () {
      if (this.selectall) {
        this.selection = this.selectarr
      } else {
        this.selection = []
      }
    }
  }
}
</script>
