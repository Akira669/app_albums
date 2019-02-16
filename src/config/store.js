import {createStore, combineReducers} from 'redux';

function tokenAction(state='',action){
    switch (action.type){
        case 'SET_TOKEN':
            return action.token;
        default:
            return state;
    }
}

let rootReducer = combineReducers({
    token : tokenAction
});

export default  createStore(rootReducer);
