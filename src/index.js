import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/rootReducer'
import App from './App';
import checkAuth from './utils/checkAuth'

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware),
  ));

checkAuth()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root')
);
