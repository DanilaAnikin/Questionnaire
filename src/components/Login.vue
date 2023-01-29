<script setup>
import { ref } from 'vue';

const emit = defineEmits(['get-questionnaire'])
const password = ref("");

</script>

<template>
    <div class="mx-auto mt-32 bg-gray-900 max-w-2xl rounded-2xl p-16">
        <span class="text-3xl text-slate-100 font-bold">Login</span>
        <label for="password" class="flex text-slate-100 mt-10">Your password</label>
        <input v-model="password" type="password" id="password" class="w-full mt-1 p-3 border text-white focus:text-black border-slate-300 rounded-lg focus:ring-slate-200 focus:bg-slate-300 focus:placeholder-other-100 bg-transparent placeholder-slate-300" placeholder="Password"/>
        <div class="w-full text-right">
            <button class="mt-12 text-slate-200 bg-transparent border-2 border-slate-300 w-32 h-12 rounded-lg hover:text-gray-900 hover:bg-slate-200 font-bold text-lg" @click="emit('get-questionnaire', password)">Login</button>
        </div>
    </div>
</template>
