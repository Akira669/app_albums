import {createStore, combineReducers,compose} from 'redux';
import persistState from 'redux-localstorage';

function tokenAction(state='',action){
    switch (action.type){
        case 'SET_TOKEN':
            return action.token;
        case 'CLEAR_TOKEN':
            return '';
        default:
            return state;
    }
}

function userReducer(state=null,action){
    switch (action.type){
        case 'LOGGED_IN':
            return action.user;
        case 'SIGN_OUT':
            return null;
        default:
            return state;
    }
}

let rootReducer = combineReducers({
    token : tokenAction,
    user: userReducer
});

let rootEnhancer = compose(
    persistState('token')
);

export default  createStore(rootReducer,{},rootEnhancer);
