<template>
  <div>
    <q-layout view="hHh lpr fFf">
      <q-header>
        <q-toolbar class="toolbar bg-secondary">
          <q-btn flat dense round icon="navigate_beforet" @click="$refs.stepper.previous()"/>
          <q-toolbar-title class="title">建立活動</q-toolbar-title>
          <q-btn flat round dense icon="clear" class="q-mr-xs" to="home"/>
        </q-toolbar>
      </q-header>
    <q-page-container>
      <q-stepper v-model="step" ref="stepper" color="secondary" contracted animated flat>
        <q-step
          :name="1"
          title="建立活動"
          color="secondary"
          :done="step > 1"
          :bordered="step > 1"
        >
          <p class="text-h6 text-blue-8 q-pt-md q-pl-lg">主題名稱</p>
          <q-input
            class="q-mx-lg"
            filled
            v-model="text"
            label="title"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"/>
          <p class="text-h6 text-blue-8 q-pl-lg">說明</p>
          <q-input
            class="q-mx-lg"
            filled
            v-model="text1"
            label="suscribe"
            type="textarea"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"/>
          <q-stepper-navigation class="q-ml-xl">
            <q-btn @click="() => { done1 = true; step = 2 }" color="secondary" label="下一步" class="q-ml-xl"/>
          </q-stepper-navigation>
        </q-step>
        <q-step
          :name="2"
          title="選擇日期"
          color="secondary"
          icon="create_new_folder"
          :done="step > 2"
          :bordered="step > 2">
          <p class="text-h6 text-blue-8 q-pl-lg">日期區間</p>
          <v-date-picker
            class="q-px-lg"
            first-day-of-week="2"
            :masks="{ title: 'MMM YYYY' }"
            mode="multiple"
            :value="null"
            v-model='dates'
            color="blue"/>
          <p class="text-h6 text-blue-8 q-pl-lg">時段</p>
          <q-checkbox class="q-px-lg" color="secondary" v-model="selectall" val="all" label="全選" />
          <q-separator inset />
          <br>
          <q-toggle
            class="q-px-lg"
            v-model="third"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="早上"/>
          <br><br>
          <q-toggle
            class="q-px-lg"
            v-model="third2"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="中午"/>
          <br><br>
          <q-toggle
            class="q-px-lg"
            v-model="third3"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="下午"/>
          <br><br>
          <q-toggle
            class="q-px-lg"
            v-model="third4"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="晚上"/>
          <br><br>
          <q-input class="q-pl-sm q-pr-md" color="secondary"  v-model="text2" label="其他" :dense="dense" >
            <template v-slot:before>
              <q-checkbox class="q-pl-md" color="secondary"  v-model="selection" val="other" />
            </template>
          </q-input>
          <q-stepper-navigation class="q-ml-xl">
            <q-btn @click="() => { done2 = true; step = 3 }" color="secondary" label="下一步" class="q-ml-xl"/>
          </q-stepper-navigation>
        </q-step>
        <q-step
          :name="3"
          title="結束時間"
          color="secondary"
          icon="add_comment"
          :done="step > 3"
          :bordered="step > 3">
          <div class="q-gutter-sm">
            <q-toggle
              class="q-px-md"
              v-model="over"
              checked-icon="check"
              color="green"
              unchecked-icon="clear"
              label="結束時間"/>
          </div>
          <div class="q-gutter-md q-pt-md q-ml-lg ">
            <a-date-picker
              :mode="mode1"
              showTime
              @openChange="handleOpenChange1"
              @panelChange="handlePanelChange1"/>
          </div>
          <q-stepper-navigation class="q-ml-xl">
            <q-btn color="secondary" @click="done3 = true" label="建立" to="build" class="q-ml-xl"/>
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </q-page-container>
    </q-layout>
  </div>
</template>

<style lang="scss">
.title{
  padding-left: 30%
}
.drawer{
  color:white
}
</style>

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
      value: [],
      step: 1,
      first: true,
      second: true,
      third: false,
      third2: false,
      third3: false,
      third4: false,
      over: false,
      fourth: true
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
