import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from "./TodoApp";
import Provider from "react-redux/lib/components/Provider";
import {createStore} from "redux";


const store = createStore(()=>[])

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('root'));

