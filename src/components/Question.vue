<script setup>
    import {CheckCircleIcon} from '@heroicons/vue/24/outline';
    import {ref} from 'vue'

    const props = defineProps({question: Object});

    const activeOptions = ref([])

    const active = ref(false)

    const pushToActive = (id) => {
        if(props.question.type == 'MULTI_SELECT'){    
            if(activeOptions.value.includes(id)){
                activeOptions.value.splice(activeOptions.value.indexOf(id), 1)
            } else{
                activeOptions.value.push(id)
            }
        } else{
            activeOptions.value = [id];
        }
    }

</script>
<template>
    <div class="mx-auto mt-20 w-full max-w-3xl bg-blue-500 rounded-3xl p-10 shadow-2xl">
        <h2 class="text-2xl text-purple-50 font-bold my-3">{{ question.title }}</h2>
        
        <div v-if="question.type == 'TEXT'" class="text-lg text-slate-700"> 
            <textarea class="mt-4 bg-blue-200 text-blue-900 border border-blue-300 rounded-lg w-full focus:text-blue-700 focus:ring-blue-500 focus:bg-blue-50 p-4 mb-8 placeholder-white focus:placeholder-blue-500" placeholder="Your answer..."></textarea>
        </div>
        <div v-else-if="question.type === 'SELECT' || question.type === 'MULTI_SELECT'" class="mt-6 text-lg text-slate-100 mb-8">
            <div v-for="option in question.options" :class="`h-10 m-auto mt-2 ${activeOptions.includes(option.optionId) ? 'bg-blue-700': 'border-2 hover:bg-blue-100'} items-center rounded-lg p-2 text-center flex justify-between px-4`" @click="pushToActive(option.optionId)">
                {{ option.value }}
                <CheckCircleIcon v-if="activeOptions.includes(option.optionId)" class="h-6 w-6"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
