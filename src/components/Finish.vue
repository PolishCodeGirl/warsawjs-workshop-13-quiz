<template>
  <div>
    FINISH
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
  computed: {
    newmessage() {
      return `${this.user} START`
    }
  },
  methods: {
    hello: function (event) {
      alert("Let's play")
    }
  }
}
</script>
