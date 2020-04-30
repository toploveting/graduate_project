<template>
  <div>
    <h5>System List</h5>
    <ul>
      <li :key="item.key" v-for="item in testCollection">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
// import firebase from 'firebase'
import { db } from '../boot/firebase.js'

Vue.use(firestorePlugin)

export default {
  data () {
    return {
      testCollection: []
    }
  },
  firestore () {
    return {
      testCollection: db.collection('date').orderBy('name')
    }
  }
//   mounted () {
//     db
//       .collection('test')
//       .get()
//       .then(snap => {
//         const testCollection = []
//         snap.forEach(doc => {
//           testCollection.push({ [doc.id]: doc.data() })
//         })
//         this.testCollection = testCollection
//       })
//   }
}
</script>
