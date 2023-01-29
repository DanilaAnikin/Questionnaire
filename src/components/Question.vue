<script setup>
    import {CheckCircleIcon} from '@heroicons/vue/24/outline';

    const props = defineProps({question: Object, answer: Object, index: Number});
    const emit = defineEmits(['set-answer']);


    const pushToActive = (id) => {
        if(props.question.type == 'MULTI_SELECT'){    
            if(props.answer.options.includes(id)){
                emit('set-answer', {options: props.answer.options.filter((optionId) => optionId !== id)});
            } else{
                emit('set-answer', {options: [...props.answer.options, id]});
            }
        } else{
            emit('set-answer', {options: [id]});
        }
    }

    const textAnswer = (e) => {
        emit('set-answer', {value: e.target.value})
    }


</script>
<template>
    <div class="mx-auto mt-12 w-full max-w-2xl bg-transparent p-4">
        <h2 class="text-2xl text-gray-700 font-bold my-2">
            {{ index }}.
            {{ question.title }}
        </h2>
        
        <div v-if="question.type == 'TEXT'" class="text-slate-500 text-lg break-all"> 
            {{ question.description }}
            <textarea :value="answer.value" @input="textAnswer" class="mt-4 bg-transparent border-0 ring-1 ring-gray-800 text-gray-700 placeholder-gray-700 rounded-lg w-full focus:placeholder-gray-900 focus:text-gray-700 focus:ring-1 focus:ring-gray-800 focus:bg-zinc-300 p-4 mb-8" placeholder="Your answer..."></textarea>
        </div>
        <div v-else-if="question.type === 'SELECT' || question.type === 'MULTI_SELECT'" class="hover:cursor-pointer mt-4 text-lg text-slate-500 break-all">
            {{ question.description }}
            <div v-for="option in question.options" :class="`h-12 m-auto mt-6 ${answer.options.includes(option.optionId) ? 'bg-gray-700 text-gray-300': 'text-gray-900 hover:bg-gray-300 hover:text-gray-500'} ring-1 ring-gray-700 items-center rounded-lg p-2 text-center flex justify-between px-4`" @click="pushToActive(option.optionId)">
                {{ option.value }}
                <CheckCircleIcon v-if="answer.options.includes(option.optionId)" class="h-6 w-6"/>
            </div>
        </div>
    </div>
</template>

