import { ADDED, DELETE, TOGGLE } from "./actionTypes"

export const addedTodo = (todo) =>{
    return {
        type:ADDED,
        payload:todo
    }
}

export const toggle = (todoId)=>{
    return {
        type:TOGGLE,
        payload:todoId
    }
}

export const deleteTodo = (todoId)=>{
    return {
        type:DELETE,
        payload:todoId
    }
}