<script setup>
    const emit = defineEmits(['send-answers'])
</script>

<template>
    <div class="flex justify-center">
        <button @click="emit('send-answers')" class="hover:bg-blue-700 mb-20 mt-8 rounded-xl h-20 bg-blue-500 text-2xl text-slate-100 max-w-xs w-full">Send answers</button>
    </div>
</template>