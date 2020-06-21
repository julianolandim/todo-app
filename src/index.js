import React from 'react';
import ReactDOM from 'react-dom';
import Provider from "react-redux/lib/components/Provider";
import {createStore} from "redux";

import rootReducer from './reducers';
import TodoApp from "./TodoApp";


const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('root'));

