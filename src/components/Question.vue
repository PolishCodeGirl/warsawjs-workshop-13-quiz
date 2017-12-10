<template>
  <div>
    <h1>{{ question.title }}</h1>
    <answer v-for="(answer, index) in question.answers" v-bind:answer="answer" :key="index" @handleAnswer="selectAnswer"/>
  </div>
</template>

<script>
import Answer from './Answer'
export default {
  name: 'Question',
  components: {
    Answer
  },
  props: [ 'question' ],
  methods: {
    selectAnswer( answerData ) {
      this.$store.dispatch('updateCurrentAnswer', {questionId: this.question.id, answerId: answerData.id})
    }
  }
}
</script>
