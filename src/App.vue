<script setup>

  import QuestionnaireInfo from './components/QuestionnaireInfo.vue';
  import Question from './components/Question.vue';
  import Login from './components/Login.vue'

  import { onMounted, ref } from 'vue'

  const quest = ref([]);
  const passwordProtected = ref(false);

  const getQuestionnaire = async (password="") => {
    const response = await fetch("https://database.nubestech.cz:4443/answer/3", {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({password})});

    const data = await response.json();

    passwordProtected.value = typeof data === 'boolean';

    if(typeof data !== 'boolean'){
      quest.value = data
    }
  }

  onMounted(getQuestionnaire);

  const active = ref(false)

</script>

<template>
  <div v-if="passwordProtected">
    <Login @get-questionnaire="getQuestionnaire" />
  </div>
  <div v-else>
    <QuestionnaireInfo :questionnaire="quest"/>
    <Question v-for="question in quest.questions" :key="question.id" :question="question"/>
  </div>

</template>

