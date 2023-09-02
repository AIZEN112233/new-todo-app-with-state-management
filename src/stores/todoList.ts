import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoList = defineStore('counter', () => {
    const allTodo = ref([])

    function addTodo(item){
        allTodo.value.push(item)
    }

    function deleteTodo(id:number){
        allTodo.value.splice(id,1)    
    }

    function toggleFav(id:number){
        allTodo.value[id].fav = !allTodo.value[id].fav
    }
    
    

    return { allTodo, deleteTodo, toggleFav, addTodo}
})
