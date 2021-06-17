import {ADD_TODO, DELETE_TODO} from "./actionsNames"

const initialState = []

const reducer = function(state = initialState, action){
    switch (action.type){
        case ADD_TODO:  return state = [...state, action.payload]
        // return state.concat(action.payload)
        case DELETE_TODO: return state.filter( e => e.id !== action.payload)

        default: return state
    }
}

export default reducer;