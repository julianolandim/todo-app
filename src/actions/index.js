
export const SET_TEXT = "SET_TEXT";

export const setText = text => ({
        type : SET_TEXT,
        text : text
    })


export const ADD_TODO = "ADD_TODO";

export const addTodo = todo =>({
    type: ADD_TODO,
    todo
});

