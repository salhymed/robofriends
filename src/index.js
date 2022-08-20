import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { createLogger } from 'redux-logger';
//import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import 'tachyons';
import App from './Containers/App';
import { searchRobots, requestRobots } from './reducers';

const  logger = createLogger();
const routReducer = combineReducers({searchRobots, requestRobots});
//const store = configureStore(searchRobots);
const store = createStore(routReducer, applyMiddleware(thunkMiddleware,
                                                        logger));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
