import { firebaseAuth, firebaseDb } from 'boot/firebase'

const state = {

}
const mutations = {

}
const actions = {
  registerUser (email, password) {
    firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response)
        const userId = firebaseAuth.currentUser.uid
        firebaseDb.ref('users/' + userId).set({
          name: name,
          email: email,
          online: true
        })
      })
      .catch(error => {
        console.log(error.message)
      })
  },
  loginUser (email, password) {
    firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error.message)
      })
  }
}
const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
