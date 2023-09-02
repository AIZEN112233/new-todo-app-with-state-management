<template>
    <div class="list">
        <div class="title">{{ todo.title }}</div>
        <div class="delete-liked">
            <Icon @click="deleteTodo(index)" class="icon" icon="iconamoon:trash-simple" />
            <Icon @click="toggleFav(index)" class="icon" icon="carbon:favorite-filled"
                :color="todo.fav ? '#ff007d' : '#333'" />
        </div>
    </div>
</template>

<script setup lang="ts">

import { Icon } from '@iconify/vue'
import { defineProps, Transition } from 'vue'
const { todo, index } = defineProps(['todo', 'index'])
import { useTodoList } from '@/stores/todoList';
const { toggleFav, deleteTodo } = useTodoList()
</script>

<style>
.list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 15px;
    background: #bbbbbb;
    margin-top: 10px;
    border: 1px solid rgba(0, 0, 0, 0.212);
    border-radius: 10px;
}

.list .icon {
    font-size: 20px;
    margin-left: 10px;
}

.list .title {
    font-size: 1.1rem;
}
</style>