import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class TodoApp extends React.Component{

    state = {
        todos : ["lavar a louça", "estudar react", "ir a supermercado"]
    }

    onSaveTodo = (newTodo) => {
        this.setState({
            todos : [...this.state.todos, newTodo],
        })
    }

    render() {
        let {todos} = this.state;
        return(
            <div>
            <TodoForm onSaveTodo={ newTodo => this.onSaveTodo(newTodo) }  />
            <TodoList todos={todos} />
            </div>
        );
    }
}

export default TodoApp
