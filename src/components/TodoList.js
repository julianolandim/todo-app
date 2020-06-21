import React from "react";
import connect from "react-redux/lib/connect/connect";

const TodoList = ( {todos} ) => {
    return (
        <ul>
            {todos.map((todo, index) => {
                return <li key={index}>{todo}</li>
            })}
        </ul>
    );
}

function mapStateToProps(state){
    return {
        todos : state.todos
    }
}

export default connect(mapStateToProps)(TodoList)
