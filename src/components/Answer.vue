<template>
  <div @click="highlighted">
    {{ answer.content}}
  </div>
</template>

<script>
export default {
  name: 'Answer',
  props: [ 'answer' ],
  data () {
    return {
    }
  },
  methods: {
    highlighted(e) {
      this.$emit('handleAnswer', { id: this.answer.id })
    }
  }
}
</script>
