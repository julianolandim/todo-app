import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


const TodoApp = () => {

    return (
        <div className="container">
            <h3>Todo App</h3>
            <TodoForm />
            <TodoList />
        </div>
    );
}

export default TodoApp
