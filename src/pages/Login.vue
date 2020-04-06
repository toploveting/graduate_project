<template>
<div>
  <div class="btngroup q-pa-lg q-px-lg">

    <section id="firebaseui-auth-container"><q-btn @click="auth('facebook')" color="blue-10" unelevated style="width:180px" class="btn q-ma-md">
      <q-icon class="fab fa-facebook-f q-pa-md q-pr-lg" size="sm"/>
      <label class="q-px-sm">Facebook</label>
    </q-btn></section>

    <br>

    <q-btn color="red-8" unelevated style="width:180px" class="btn q-ma-md" type="submit">
      <q-icon class="fab fa-google q-pa-md q-pr-lg" size="sm"/>
      <label class="q-px-sm">Google</label>
    </q-btn>

    <div id="google-signin-button" data-onsuccess="onSignIn" data-theme="dark"></div>

    <button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button>

    <q-separator inset class="q-ma-md"/>
    <q-btn to="email" color="blue-8" unelevated style="width:180px" class="btn q-ma-md">
      <q-icon class="q-pa-md q-pr-lg far fa-envelope" size="sm"/>
      <label class="q-px-sm">Email</label>
    </q-btn>
    <br><br>
    <h7 class="text">還沒有帳號嗎？</h7><router-link to="signin"><h7>註冊</h7></router-link>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default {
  name: 'Login',

  data: () => ({
    clientId: '338672226076-tjr6fm6mfr4npilcr64qv42sr0plpovr.apps.googleusercontent.com'
  }),
  mounted () {
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    var uiConfig = {
      signInFlow: 'popup',
      signInSuccessUrl: '/profile',
      signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID]
    }
    ui.start('#firebaseui-auth-container', uiConfig)
  },
  // mounted () {
  //   gapi.signin2.render('google-signin-button', {
  //     onsuccess: this.onSignIn
  //   })
  // },
  methods: {
    OnGoogleAuthSuccess (idToken) {
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  }
  // methods: {
  //   onSignIn (googleUser) {
  //     // Useful data for your client-side scripts:
  //     var profile = googleUser.getBasicProfile()
  //     console.log('ID: ' + profile.getId()) // Don't send this directly to your server!
  //     console.log('Full Name: ' + profile.getName())
  //     console.log('Given Name: ' + profile.getGivenName())
  //     console.log('Family Name: ' + profile.getFamilyName())
  //     console.log('Image URL: ' + profile.getImageUrl())
  //     console.log('Email: ' + profile.getEmail())

  //     // The ID token you need to pass to your backend:
  //     // var id_token = googleUser.getAuthResponse().id_token
  //     // console.log('ID Token: ' + id_token)
  //   }
  // }
}
// methods: {
//   SignUp: function () {
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(this.email, this.password)
//       .then(data => {
//         data.user
//           .updateProfile({
//             displayName: this.name
//           })
//           .then(() => {})
//       })
//       .catch(err => {
//         this.error = err.message
//       })
//   },

//   loginWithEmailPassword: function () {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(this.email, this.password)
//       .then(data => {
//         if (data.user) {
//           this.$router.replace({ path: '/' })
//         }
//       })
//       .catch(err => {
//         this.error = err.message
//       })
//   },

//   signInWithGoogle: function () {
//     var provider = new firebaseAuth.GoogleAuthProvider()

//     firebase.auth().signInWithPopup(provider).then(function (result) {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       // var token = result.credential.accessToken
//       // The signed-in user info.
//       var user = result.user
//       console.log(user)
//       this.$router.replace('/')
//       // ...
//     })
//   },

//   async loginWithGoogle () {
//     // loading set to true
//     // this.loading = true
//     // clear old errors
//     this.errors = []
//     try {
//       const response = await firebase
//         .auth()
//         .signInWithPopup(new firebase.auth.GoogleAuthProvider())
//       this.user = response.user
//       // this.loading = false
//       router.push('/')
//     } catch (error) {
//       this.errors.push(error.message)
//       // set loading to false
//       // this.loading = false
//     }
//   },
//   async loginWithFacebook () {
//     // loading set to true
//     this.loading = true
//     // clear old errors
//     this.errors = []
//     try {
//       const response = await firebase
//         .auth()
//         .signInWithPopup(new firebase.auth.FacebookAuthProvider())
//       this.user = response.user
//       this.loading = false
//       router.push('/')
//     } catch (error) {
//       this.errors.push(error.message)
//       // set loading to false
//       this.loading = false
//     }
//   }
//     async loginWithFacebook() {
//   // loading set to true
//   this.loading = true;
//   // clear old errors
//   this.errors = [];
//   try {
//     let response = await firebase
//       .auth()
//       .signInWithPopup(new firebase.auth.FacebookAuthProvider());
//     this.user = response.user;
//     this.loading = false;
//     router.push("/");
//   } catch (error) {
//     this.errors.push(error.message);
//     // set loading to false
//     this.loading = false;
//   }
// }
//   }
// }
</script>

<style>
.btngroup {
margin-top: 280px
}
.btn {
margin-left: 23%;
}
.text{
margin-left: 30%
}
</style>

<script>
export default {
  name: 'login'
}
</script>
