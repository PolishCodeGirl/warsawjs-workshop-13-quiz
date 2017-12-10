<template>
  <div>
    <question :question="actualQuestion"/>
  </div>
</template>

<script>
import Question from './Question.vue'
export default {
  name: 'Quiz',
  components: {
    Question
  },
  data () {
    return {
      questionList: [{
       id: 1,
       title: "best car?",
       answers: [{
               id: 1,
               content: "ford",
               correct: false
           }, {
               id: 2,
               content: "fiat",
               correct: false
           }, {
               id: 3,
               content: "tesla",
               correct: false
           }, {
               id: 4,
               content: "GM",
               correct: true
           }
         ]
}]
    }
  },
  computed: {
    actualQuestion() {
      return this.questionList[this.$store.state.questionIndex]
    }
  },
  methods: {
    hello: function (event) {
      alert("Let's play")
    }
  }
}
</script>
