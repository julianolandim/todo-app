import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


const TodoApp = () => {

    return (
        <div>
            <TodoForm />
            <TodoList />
        </div>
    );
}

export default TodoApp
