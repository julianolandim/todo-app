import React from "react";
import connect from "react-redux/lib/connect/connect";
import {addTodo, setText} from "../actions";


const TodoForm = ({text, setText, addTodo}) => {
    return (
        <React.Fragment>

            <form className="row" onSubmit={ (e) => {
                e.preventDefault();
                addTodo(text)
            }}>
                <div className="input-field col s10">
                    <input id="todo-input" type="text" value={text} onChange={e => setText(e.target.value)}/>
                    <label htmlFor="todo-input" >Novo todo</label>
                </div>
                <div className="col s2 input-field">
                <button className="waves-effect waves-light btn" type="submmit">salvar</button>
                </div>
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
