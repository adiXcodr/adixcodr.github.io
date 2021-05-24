import { createStore, combineReducers } from 'redux'
import users from "./userDataReducer";

const reducer = combineReducers({
    users
});

const store = createStore(reducer);

export default store;