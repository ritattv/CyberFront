<template>
  <b-container id="app">
    <b-row>
      <b-col>
        <navbar />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-view />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap');
* {
  font-family: Raleway, sans-serif;
  font-size: 14;
}
</style>


