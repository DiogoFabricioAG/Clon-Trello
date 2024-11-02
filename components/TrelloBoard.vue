<script setup lang="ts">
import { nanoid } from 'nanoid';
import type { Column, Task } from '~/types';
import draggable from "vuedraggable";
const columns = ref<Column[]>([
    {
        id: nanoid(),
        title: "Backlog",
        tasks: [
            {
                id: nanoid(),
                title: "Create marketing landing page",
                createdAt: new Date()
            },
            {
                id: nanoid(),
                title: "Develop cool new feature",
                createdAt: new Date()
            },
            {
                id: nanoid(),
                title: "Fix page nav bug",
                createdAt: new Date()
            },
        ]
    },
    {id:nanoid(), title: "QA", tasks:[]},
    {id:nanoid(), title: "Selected for the Dev", tasks:[]},
    {id:nanoid(), title: "Complete", tasks:[]},
]);


</script>

<template>
    <div >
        <draggable
            v-model="columns"
            group="columns"
            :animation="200"
            handle=".drag-handle"
            item-key="id"
            class="flex gap-4 overflow-x-auto items-start"
        >
        <template #item="{element: column}: {element: Column}">
            <div
            class="column bg-gray-200 p-5 rounded min-w-[250px]"
        >
            <header class="font-bold mb-4">
                <DragHandle/>
                {{ column.title }}
            </header>
            <draggable
                v-model="column.tasks"
                group="tasks"
                :animation="200"
                item-key="id"
                handle=".drag-handle"
            >
            <template #item="{element: task}: {element:Task}">
                <TrelloBoardTask class="task" :task="task"/>
            </template>
        </draggable>
            <footer>
                <button class="text-gray-500">+ Add a Card</button>
            </footer>
        </div>
        </template>
    </draggable>
        
    </div>
</template>