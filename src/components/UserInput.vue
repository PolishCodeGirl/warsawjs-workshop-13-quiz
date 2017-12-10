<template>
  <div>
    <input type="text" v-bind:placeholder="placeholder" v-model="userName"/>
    <p>Player: {{ userName }}</p>
    <button v-on:click="launch" type="submit">{{ newmessage }}</button>
  </div>
</template>

<script>
export default {
  name: 'UserInput',
  data () {
    return {
      placeholder: 'User name',
      userName: ''
    }
  },
  computed: {
    newmessage() {
      return `${this.userName} START`
    }
  },
  methods: {
    launch (e) {
      this.$store.dispatch('updateUserName', {userName: this.userName})
      this.$router.push('/quiz')
      
    }
  }
}
</script>
