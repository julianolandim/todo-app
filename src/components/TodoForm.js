import React from "react";
import connect from "react-redux/lib/connect/connect";
import {addTodo, setText} from "../actions";


const TodoForm = ({text, setText, addTodo}) => {
    return (
        <React.Fragment>
            <form onSubmit={ (e) => {
                e.preventDefault();
                addTodo(text)
            }}>
                <input type="text" value={text} onChange={e => setText(e.target.value)}/>
                <button className="btn" type="submmit">salvar</button>
            </form>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        text: state.text
    }
}

const mapDispatchToProps = {setText, addTodo}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
