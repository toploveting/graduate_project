<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">
      <q-btn unelevated to="/list" size="25px" round color="deep-orange" >
      <q-icon name="access_time" style= "color:#fff ; font-size: 2.3em;" />
      </q-btn>
      <br>
      <q-btn unelevated to="/form" size="25px" round color="deep-orange" >
      <q-icon name="calendar_today" style= "color:#fff ; font-size: 2em;" />
      </q-btn>
    </div>
    <img
      alt="bg"
      src="~assets/background.png"
    />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
