import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from './config/firebase';

import {Provider} from 'react-redux';
import store from './config/store';

import * as action from './config/actions';

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(action.setUser(user));
    }else{
        store.dispatch(action.clearUser());
    }
});

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
