<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    />
    <p>主題名稱</p>
      <q-input
        filled
        v-model="text"
        label="title"
        hint="Title"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
    <p>說明</p>
      <q-input
        filled
        v-model="text"
        label="suscribe"
        hint="Suscribe"
        type="textarea"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"/>
        <div class="q-gutter-md">
    <p>日期區間</p>
      <q-date
        v-model="date"
        today-btn
        :events="events"
        :event-color="(date) => date[9] % 2 === 0 ? 'teal' : 'orange'"
    />
    <p>時段</p>
    </div>
      <q-radio v-model="shape" val="morning" label="早上" /><br>
      <q-radio v-model="shape" val="noon" label="中午" /><br>
      <q-radio v-model="shape" val="afternoon" label="下午" /><br>
      <q-radio v-model="shape" val="night" label="晚上" /><br>
      <q-radio v-model="shape" val="other" label="其他" />
    <div>
    <div class="q-gutter-sm">
      <q-checkbox v-model="teal" label="結束時間" />
    </div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
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
      teal: true,
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
      shape: 'line',
      text: '',
      date: '2019/02/01',
      events: ['2019/02/01', '2019/02/05', '2019/02/06', '2019/02/09', '2019/02/23']
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
    eventsFn (date) {
      if (date === '2019/02/01' ||
        date === '2019/02/05' ||
        date === '2019/02/06' ||
        date === '2019/02/09' ||
        date === '2019/02/23') {
        return true
      }
      return false
    }
  }
}
</script>
