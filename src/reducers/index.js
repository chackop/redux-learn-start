import { combineReducers } from 'redux';
import countReducer from './countReducer';
import helloReducer from './helloReducer';

export default combineReducers({
    counter: countReducer,
    hello: helloReducer
});