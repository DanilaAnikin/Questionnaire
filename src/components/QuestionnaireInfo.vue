<script setup>
defineProps({
    questionnaire: Object
})
</script>

<template>
    <div class="mx-auto mt-20 h-60 w-full max-w-5xl flex flex-col bg-blue-600 rounded-3xl p-10 shadow-xl shadow-indigo-500">
    <h2 class="text-3xl text-slate-100 font-medium mb-2">{{ questionnaire.name }}</h2>
    <p class="text-lg mt-8 ml-4 text-sky-100 font-bold break-all">{{ questionnaire.description }}</p>
    </div>
</template>

<style scoped>

</style>