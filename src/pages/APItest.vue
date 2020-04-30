<template>
  <div>
    <q-btn color="primary" label="Get Picture" @click="shareSome" />

   {{imageSrc}}
  </div>
</template>

<script>
import { Plugins } from '@capacitor/core'
const { Share } = Plugins

export default {
  data () {
    return {
      imageSrc: ''
    }
  },
  methods: {
    shareSome: async function () {
      await Share.share({
        title: 'See cool stuff',
        text: 'Really awesome thing you need to see right meow',
        url: 'http://ionicframework.com/',
        dialogTitle: 'Share with buddies'
      })
    }
  }
}
</script>
