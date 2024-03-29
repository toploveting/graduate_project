/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/

import 'quasar/dist/quasar.ie.polyfills.js'



import '@quasar/extras/roboto-font/roboto-font.css'

import '@quasar/extras/material-icons/material-icons.css'

import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'

import '@quasar/extras/material-icons-round/material-icons-round.css'

import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'

import '@quasar/extras/mdi-v3/mdi-v3.css'

import '@quasar/extras/ionicons-v4/ionicons-v4.css'

import '@quasar/extras/eva-icons/eva-icons.css'

import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

import '@quasar/extras/themify/themify.css'

import '@quasar/extras/line-awesome/line-awesome.css'




// We load Quasar stylesheet file
import 'quasar/dist/quasar.sass'




import 'src/css/app.scss'


import Vue from 'vue'
import createApp from './app.js'




import qboot_Bootfirebase from 'boot/firebase'

import qboot_Bootcapacitor from 'boot/capacitor'

import qboot_Bootbus from 'boot/bus'







Vue.config.devtools = true
Vue.config.productionTip = false



console.info('[Quasar] Running SPA.')





async function start () {
  const { app, store, router } = await createApp()

  

  
  let routeUnchanged = true
  const redirect = url => {
    routeUnchanged = false
    window.location.href = url
  }

  const urlPath = window.location.href.replace(window.location.origin, '')
  const bootFiles = [qboot_Bootfirebase,qboot_Bootcapacitor,qboot_Bootbus]

  for (let i = 0; routeUnchanged === true && i < bootFiles.length; i++) {
    if (typeof bootFiles[i] !== 'function') {
      continue
    }

    try {
      await bootFiles[i]({
        app,
        router,
        store,
        Vue,
        ssrContext: null,
        redirect,
        urlPath
      })
    }
    catch (err) {
      if (err && err.url) {
        window.location.href = err.url
        return
      }

      console.error('[Quasar] boot error:', err)
      return
    }
  }

  if (routeUnchanged === false) {
    return
  }
  

  

    

    

    
      new Vue(app)
    

    

    

  

}

start()
