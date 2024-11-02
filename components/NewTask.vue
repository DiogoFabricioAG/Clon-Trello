<script setup lang="ts">
import { nanoid } from 'nanoid';
import type { Task } from '~/types';

const emit = defineEmits<{
    (e: "add", payload: Task) : void;
}>();


const focused = ref(false);
const title = ref("");

function createTask(e:Event){
    if (title.value.trim()){
        e.preventDefault();
        emit("add", {
            title:title.value.trim(),
            createdAt: new Date(),
            id: nanoid(),
        } as Task);
    }
    title.value = ""
}
</script>

<template>
    <div>
        <textarea 
            v-model="title"
            @keydown.tab="createTask"
            @keyup.enter="createTask"
            class="focus:bg-white bg-transparent  focus:shadow resize-none rounded w-full overflow-y-hidden border-neutral-200 p-1"
            :class="{
                'h-7 cursor-pointer': !focused,
                'h-20 cursor-text': focused
            }"
            style="outline: none !important;"
            @focus="focused = true"
            @blur="focused = false"
            :placeholder="!focused ? '+ Add a Card' : 'Enter a title for this card'"
        />
    </div>
</template>