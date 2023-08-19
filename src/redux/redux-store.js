import { combineReducers, createStore } from "redux";
import taskReducer from "./taskReducer";


let reducers = combineReducers({
    taskPage: taskReducer
});

let store = createStore(reducers);

export default store;