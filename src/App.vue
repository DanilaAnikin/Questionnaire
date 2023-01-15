<script setup>

  import QuestionnaireInfo from './components/QuestionnaireInfo.vue';
  import Question from './components/Question.vue';
  import Login from './components/Login.vue'

  import { onMounted, ref } from 'vue'

  const quest = ref([]);
  const questions = ref([]);
  const passwordProtected = ref(false);

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
        }
      }))
    }
  }

  const setAnswer = (data, index) => {
    questions.value[index].answer = {...questions.value[index].answer, ...data};
  }

  const logAnswers = () => console.log(questions.value.map(({answer}) => answer));

  onMounted(getQuestionnaire);

</script>

<template>
  <div v-if="passwordProtected">
    <Login @get-questionnaire="getQuestionnaire" />
  </div>
  <div v-else>
    <QuestionnaireInfo :questionnaire="quest"/>
    <Question v-for="(question, index) in questions" :key="question.id" :question="question.question" :answer="question.answer" @set-answer="setAnswer($event, index)"/>
  </div>

</template>
