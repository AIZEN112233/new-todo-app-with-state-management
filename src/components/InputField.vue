<template>
    <form class="form-input">
        <input placeholder="I WILL DO ..." v-model="item" type="text">
        <Icon @click.prevent="handelSubmit" class="icon" icon="material-symbols:bookmark-add-outline" color="#000" />
    </form>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useTodoList } from '@/stores/todoList';
import { ref } from 'vue'
const item = ref('')
const { addTodo } = useTodoList()
function handelSubmit() {
    if (item.value.length !== 0){
        addTodo({
            title: item.value,
            fav:false,
        })
        item.value = ''
    }
        
    }
</script>

<style>
.form-input {
    display: flex;
    justify-content: right;
    align-items: center;
    background-color: #d7d7d7;
    border: 1px solid black;
    width: 100%;
    margin: 0 auto;
    border-radius: 7px;
}

.form-input input {
    border: none;
    background-color: transparent;
    padding: 15px;
    width: 100%;
    font-family: sans-serif;
    font-size: 1em;
}

.form-input input:focus {
    border: none;
    outline: none;
}

.form-input .icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
</style>