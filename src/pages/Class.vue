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
      myName: '請選擇姓名',
      member: ['Adam', 'Jack', 'Candy', 'Louis', 'Lurry']
    }
  }
}
</script>
