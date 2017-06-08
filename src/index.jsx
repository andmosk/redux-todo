/**
 * Created by andriy.moskaliuk on 02.06.2017.
 */
import css from './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx'
import todoReducers from './reducers/todoReducers';
import {createStore} from 'redux';
import { Provider } from 'react-redux';


const store = createStore(todoReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);