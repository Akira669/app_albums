import {createStore, combineReducers} from 'redux';

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

let rootReducer = combineReducers({
    token : tokenAction
});

export default  createStore(rootReducer);
