import React from "react";
import connect from "react-redux/lib/connect/connect";
import {setText, addTodo} from "../actions";


const TodoForm = ({payload, setText, addTodo}) => {
    return (
        <React.Fragment>
            <h1>Todo App</h1>
            <input type="text" value={ payload } onChange={e=> setText(e.target.value) } />
            <button onClick={() => addTodo(payload) } >salvar</button>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        text : state.payload
    }
}

const mapDispatchToProps = { setText , addTodo}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
