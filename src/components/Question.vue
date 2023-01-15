<script setup>
    import {CheckCircleIcon} from '@heroicons/vue/24/outline';

    const props = defineProps({question: Object, answer: Object});
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
    <div class="mx-auto mt-28 w-full max-w-3xl bg-blue-500 rounded-3xl p-10 shadow-2xl mb-20">
        <h2 class="text-2xl text-purple-50 font-bold my-3">{{ question.title }}</h2>
        
        <div v-if="question.type == 'TEXT'" class="text-slate-100 text-lg"> 
            {{ question.description }}
            <textarea :value="answer.value" @input="textAnswer" class="mt-4 bg-blue-200 text-blue-900 border border-blue-300 rounded-lg w-full focus:text-blue-700 focus:ring-blue-500 focus:bg-blue-50 p-4 mb-8 placeholder-white focus:placeholder-blue-500" placeholder="Your answer..."></textarea>
        </div>
        <div v-else-if="question.type === 'SELECT' || question.type === 'MULTI_SELECT'" class="hover:cursor-pointer mt-6 text-lg text-slate-100 mb-8">
            {{ question.description }}
            <div v-for="option in question.options" :class="`h-12 m-auto mt-6 ${answer.options.includes(option.optionId) ? 'bg-blue-800': 'border-2 hover:bg-blue-100'} items-center rounded-lg p-2 text-center flex justify-between px-4`" @click="pushToActive(option.optionId)">
                {{ option.value }}
                <CheckCircleIcon v-if="answer.options.includes(option.optionId)" class="h-6 w-6"/>
            </div>
        </div>
    </div>
</template>
