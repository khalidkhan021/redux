import {combineReducers} from 'redux';
import Increment from './reducer/Increment';
import Decrement from './reducer/Decrement';

export default combineReducers({
    Increment,
    Decrement
})