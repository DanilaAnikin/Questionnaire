<script setup>
defineProps({
    questionnaire: Object
})
</script>

<template>
    <div class="justify-center text-center mx-auto h-auto pt-20 pb-10 flex border-b border-b-gray-400 flex-col bg-transparent">
        <h2 class="text-2xl text-gray-900 max-w-3xl w-full mx-auto text-left">{{ questionnaire.name }}</h2>
        <p class="mt-4 text-gray-700 text-lg mx-auto break-all max-w-2xl w-full flex">{{ questionnaire.description }}</p>
    </div>
</template>
