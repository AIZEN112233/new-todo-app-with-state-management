<template>
    <div class="container">
        <Header />
        <InputField />
        <div class="info">
            <div class="todos-toggle">
                <button class="btn" :class="active === 'fav' && 'active'" @click="active = 'fav'">Favorite</button>
                <button class="btn" :class="active === 'all' && 'active'" @click="active = 'all'">All Todos</button>
            </div>
            <div class="indicator" v-if="allTodo.length > 0">you have {{ allTodo.length }} left to do</div>
            <div class="indicator" v-else>No Todos</div>
        </div>
        <div v-if="active === 'fav'">
            <div v-for="(todo, index) in allTodo" :key="index">
                <List v-if="todo.fav" :index="index" :todo="todo" />
            </div>
        </div>
        <div v-else>
            <div v-for="(todo, index) in allTodo" :key="index">
                <List :index="index" :todo="todo" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue';
import InputField from './components/InputField.vue'
import List from './components/List.vue'
import { useTodoList } from './stores/todoList';
const { allTodo } = useTodoList()
const active = ref('fav')

</script>

<style>
.indicator {
    padding: 10px 0;
    text-align: center;
    font-size: 18px;
}

.todos-toggle {
    float: right;
}

.todos-toggle .btn {
    padding: 7px;
    border: 1px solid gray;
    background: transparent;
    margin: 5px;
    border-radius: 4px;
    font-size: 1em;
}

.todos-toggle .btn.active {
    background: #ff007d;
    color: white;
    border: 1px solid transparent;
}

.info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>