import { ref, watch } from 'vue'
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

   

    if(localStorage.getItem('todos')){
        allTodo.value = JSON.parse(localStorage.getItem('todos'))
    }
    watch(allTodo.value, (value) =>{
        localStorage.setItem('todos', JSON.stringify(value))
    },{deep: true})

    return { allTodo, deleteTodo, toggleFav, addTodo}
})
