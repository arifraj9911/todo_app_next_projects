import { ADDED, DELETE } from "./actionTypes"

export const handleAdded = (todo) =>{
    return {
        type:ADDED,
        payload:todo
    }
}

export const handleDelete = (todoId)=>{
    return {
        type:DELETE,
        payload:todoId
    }
}