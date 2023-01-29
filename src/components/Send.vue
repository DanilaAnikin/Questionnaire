<script setup>
    const emit = defineEmits(['send-answers'])
</script>

<template>
    <div class="flex justify-center">
        <button @click="emit('send-answers')" class="hover:bg-gray-800 mb-10 mt-12 rounded-xl p-5 bg-transparent border-2 border-gray-800 text-2xl text-gray-800 hover:text-slate-200 max-w-xs w-full">Send answers</button>
    </div>
</template>