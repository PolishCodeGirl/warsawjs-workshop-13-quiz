<template>
  <div>
    <div id="player"></div>
    <h4>I am ready to play</h4>
    <h2>{{ information }}</h2>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      information: "I want to win!!!"
    }
  }
}
</script>

<style scoped>
#player {
  width: 200px;
  height: 200px;
  background-color: lightblue;
  margin: 0 auto;
}
</style>
