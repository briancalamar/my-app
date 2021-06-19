import { ADD_TODO, DELETE_TODO } from './actionsNames'
let id = 0
export function addTodo(payload){
    return {
        type: ADD_TODO,
        payload : {
            ...payload,
            id: ++id,
            status: "todo",
        }
    }
}
export function deleteTodo(payload){
    return {
        type: DELETE_TODO,
        payload,
    }
}