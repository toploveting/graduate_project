<template>
  <div>
    <q-layout view="hHh lpr fFf">
      <q-header>
        <q-toolbar class="toolbar bg-secondary">
          <q-btn flat disable></q-btn>
          <q-space />
          <q-toolbar-title class="title">建立活動</q-toolbar-title>
          <q-space />
          <q-btn flat round dense icon="clear" class="q-mr-xs" to="activity"/>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-stepper v-model="step" ref="stepper" color="secondary" contracted animated flat>
          <q-step :name="1" title="建立活動" color="secondary" :done="step > 1" :bordered="step > 1">
            <p class="text text-bold q-pt-md q-pl-lg">主題名稱</p>
            <q-input
              class="q-mx-lg"
              filled
              v-model="title"
              label
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <p class="text text-bold q-pl-lg">說明</p>
            <q-input
              class="q-mx-lg"
              filled
              v-model="suscribe"
              label
              type="textarea"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-stepper-navigation class="text-center">
              <q-btn @click="() => { done1 = true; step = 2 }" color="secondary" label="下一步"/>
            </q-stepper-navigation>
          </q-step>
          <q-step
            :name="2"
            title="選擇日期"
            color="secondary"
            icon="create_new_folder"
            :done="step > 2"
            :bordered="step > 2"
            class="q-px-md"
          >
            <p class="text text-bold daterange">日期區間</p>
            <v-date-picker
              first-day-of-week="2"
              :masks="{ title: 'MMM YYYY' }"
              mode="multiple"
              :value="null"
              v-model="dates"
              color="blue"
            />

            <p class="text text-bold timing">時段</p>
            <q-checkbox color="secondary" v-model="selectall" val="all" label="全選"/>
            <q-separator/>
            <br>
            <q-checkbox
              v-model="third"
              checked-icon="check"
              color="secondary"
              unchecked-icon="clear"
              label="早上"
            />
            <br>
            <br>
            <q-checkbox v-model="third2" color="secondary" label="中午"/>
            <br>
            <br>
            <q-checkbox v-model="third3" color="secondary" label="下午"/>
            <br>
            <br>
            <q-checkbox v-model="third4" color="secondary" label="晚上"/>
            <br>
            <br>
            <q-input class="q-pr-md" color="secondary" v-model="text2" label="其他" :dense="dense" :disable="!selection">
              <template v-slot:before>
                <q-checkbox class color="secondary" v-model="selection" val="other"/>
              </template>
            </q-input>

            <q-stepper-navigation class="text-center">
              <q-btn @click="() => { done2 = true; step = 3 }" color="secondary" label="下一步"/>
            </q-stepper-navigation>
          </q-step>
          <q-step
            :name="3"
            title="結束時間"
            color="secondary"
            icon="add_comment"
            :done="step > 3"
            :bordered="step > 3"
          >
            <div class="q-gutter-sm">
              <q-toggle class="q-px-md" v-model="over" color="secondary" label="結束時間"/>
            </div>
            <div class="q-gutter-md q-pt-md q-ml-lg">
              <a-date-picker
                @change="onChange"
                :mode="mode1"
                :disabled="!over"
                showTime
                @openChange="handleOpenChange1"
                @panelChange="handlePanelChange1"
              />
            </div>

            <q-stepper-navigation class="text-center">
              <q-btn color="secondary" @click="buildActivity" label="建立" to="build"/>
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style lang="scss">
.drawer {
  color: white;
}
.text {
  font-size: 20px;
  color: rgb(63, 121, 204);
}
.daterange {
  margin-bottom: 10px;
}
.timing {
  margin-top: 35px;
  margin-bottom: 5px;
}
</style>

<script>
import { db, firebaseAuth } from '../boot/firebase.js'

export default {
  name: 'Form',
  data () {
    return {
      user: {},
      isAuth: false,
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
      dates: [],
      menu: false,
      selectall: false,
      selection: false,
      selectarr: ['morning', 'noon', 'afternoon', 'night'],
      teal: false,
      title: '',
      suscribe: '',
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
      fourth: true,
      over: false,
      overTime: null
    }
  },
  created () {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        this.user = user
        this.isAuth = true
      } else {
        this.user = {}
        this.isAuth = false
      }
    })
  },
  methods: {
    buildActivity: function () {
      db.collection('activity')
        .doc(this.title)
        .set({
          suscribe: this.suscribe,
          dates: this.dates,
          morning: this.third,
          noon: this.third2,
          afternoon: this.third3,
          night: this.third4,
          other: this.text2,
          over: this.overTime,
          createTime: this.getTime()
        })
        .then(function () {
          console.log('Document successfully written!')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    getTime () {
      const now = new Date()
      // const hours = now.getHours()
      // const minutes = now.getMinutes()
      // const format = hours >= 12 ? '下午' : '上午'
      // return `${format} ${hours}:${minutes}`
      return now
    },
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
      this.overTime = dateString
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
      if (
        date === '2019/02/01' ||
        date === '2019/02/05' ||
        date === '2019/02/06' ||
        date === '2019/02/09' ||
        date === '2019/02/23'
      ) {
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
        this.third = true
        this.third2 = true
        this.third3 = true
        this.third4 = true
      } else {
        this.third = false
        this.third2 = false
        this.third3 = false
        this.third4 = false
      }
    }
  }
}
</script>
