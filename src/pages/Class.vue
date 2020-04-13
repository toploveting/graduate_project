<template>
  <div id="app">
    <select v-model="myName">
        <option v-for="(item, index) in member" :key="index">{{ item }}</option>
    </select>
    <p>我的名子叫：{{ myName }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      myName: '請選擇姓名0',
      member: [
        {
          name: 'Adam',
          mail: 'adam@xxx.com'
        },
        {
          name: 'Jack',
          mail: 'jack@xxx.com'
        },
        {
          name: 'Candy',
          mail: 'candy@xxx.com'
        },
        {
          name: 'Louis',
          mail: 'loui@xxx.com'
        },
        {
          name: 'Lurry',
          mail: 'lurry@xxx.com'
        }
      ]
    }
  }
}
</script>
