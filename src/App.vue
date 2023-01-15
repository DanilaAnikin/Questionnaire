<script setup>

  import QuestionnaireInfo from './components/QuestionnaireInfo.vue';
  import Question from './components/Question.vue';
  import Login from './components/Login.vue';
  import Send from './components/Send.vue';
  import ThanksFor from './components/ThanksFor.vue';

  import { onMounted, ref } from 'vue'

  const quest = ref([]);
  const questions = ref([]);
  const passwordProtected = ref(false);

  const send = (bol=false) => {
    questions.value.sent = true
  }

  const getQuestionnaire = async (password="") => {
    const response = await fetch("https://database.nubestech.cz:4443/answer/3", {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({password})});

    const data = await response.json();

    passwordProtected.value = typeof data === 'boolean';

    if(typeof data !== 'boolean'){
      quest.value = data
      questions.value = data.questions.map((question) => ({
        question,
        answer: {
          value: "",
          options: []
        },
        sent: false
      }))
    }
  }

  const setAnswer = (data, index) => {
    questions.value[index].answer = {...questions.value[index].answer, ...data};
  }

  onMounted(getQuestionnaire);

</script>

<template>
  <div v-if="passwordProtected">
    <Login @get-questionnaire="getQuestionnaire" />
  </div>
  <div v-else>
    <QuestionnaireInfo :questionnaire="quest"/>
    <Question v-for="(question, index) in questions" :key="question.id" :question="question.question" :answer="question.answer" @set-answer="setAnswer($event, index)"/>
    <Send :send-answers="send(true)"/>
  </div>
  <!-- <div v-if="questions.sent">
    <ThanksFor />
  </div> -->

</template>
