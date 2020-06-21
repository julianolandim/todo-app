import React from "react";

class TodoForm extends React.Component{

    state = {
        inputValue : ""
    }

    onChangeInput = (e) => {
        let {value} = e.target;
        this.setState({
            inputValue : value,
        })
    }

    onClick = (e) => {
        this.props.onSaveTodo(this.state.inputValue);
        this.setState({
            inputValue: ""
        })

    }

    render() {
        let {inputValue} = this.state;
        return (
            <React.Fragment>
                <h1>Todo App</h1>
                <input type="text" value={ inputValue } onChange={ this.onChangeInput } />
                <button onClick={this.onClick} >salvar</button>
            </React.Fragment>
        );
    }
}

export default TodoForm
