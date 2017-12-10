<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ user }}</h1>
    <user-input/>
  </div>
</template>

<script>
import UserInput from '@/components/UserInput'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome in MILIONERACH'
    }
  },
  components: { UserInput }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
