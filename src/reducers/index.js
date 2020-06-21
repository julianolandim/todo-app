import {combineReducers} from "redux";



function todosReducer(state = [], action) {

}

function textReducer(state = "", action) {

}

combineReducers({
    todos : todosReducer,
    text : textReducer
})



const INITIAL_STATE = {
    todos : [],
    text : ""
}

function rootReducer(state = INITIAL_STATE, action) {
    return state;
}

export default rootReducer()
