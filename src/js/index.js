import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import reducers from '../reducers/index';
import ReduxPromise from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById('app_container')
);