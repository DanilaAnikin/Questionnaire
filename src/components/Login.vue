<script setup>
import { ref } from 'vue';

const emit = defineEmits(['get-questionnaire'])
const password = ref("");

</script>

<template>
    <div class="mx-auto my-20 bg-blue-500 max-w-2xl rounded-2xl p-16">
        <span class="text-3xl text-slate-100 font-bold">Login</span>
        <label for="password" class="flex text-slate-100 mt-10">Your password</label>
        <input v-model="password" type="password" id="password" class="w-full mt-1 p-3 border border-white rounded-lg focus:ring-blue-500 focus:bg-blue-50 focus:placeholder-blue-600 bg-transparent placeholder-slate-100" placeholder="Password"/>
        <button class="mt-10 ml-96 text-blue-500 bg-white w-32 h-12 rounded-lg font-bold text-lg" @click="emit('get-questionnaire', password)">Login</button>
    </div>
</template>
