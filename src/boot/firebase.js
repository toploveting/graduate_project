import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: 'AIzaSyAZPO0EYZu3MmFUn-8qguyDi9ffcXiSRJ4',
  authDomain: 'joinme-16119.firebaseapp.com',
  databaseURL: 'https://joinme-16119.firebaseio.com',
  projectId: 'joinme-16119',
  storageBucket: 'joinme-16119.appspot.com',
  messagingSenderId: '338672226076',
  appId: '1:338672226076:web:035c9b170351d7c96034d9',
  measurementId: 'G-DPEBC4TH3Z'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()
const firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
