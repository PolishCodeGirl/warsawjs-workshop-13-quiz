<template>
  <div>
    <input type="text" v-bind:placeholder="placeholder" v-model="user"/>
    <p>Player: {{ user }}</p>
    <button v-on:click="hello">START</button>
  </div>
</template>

<script>
export default {
  name: 'UserInput',
  data () {
    return {
      placeholder: 'User name',
      user: ''
    }
  },
  methods: {
    hello: function (event) {
      alert("Let's play")
    }
  }
}
</script>
