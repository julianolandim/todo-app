import React from "react";
import connect from "react-redux/lib/connect/connect";
import {toogleTodo} from "../actions";

const TodoList = ( {todos, toogleTodo} ) => {
    return (
        <ul className="collection">
            {todos.map((todo, index) => {
                return (
                    <li className="collection-item"  key={index}
                        onClick={e=>{toogleTodo(todo)}}
                        style={{textDecoration : todo.done ? 'line-through' : ''}}
                    >
                        {todo.text}
                    </li>
                )
            })}
        </ul>
    );
}

function mapStateToProps(state){
    return {
        todos : state.todos
    }
}

const mapDispatchToProps = { toogleTodo }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
