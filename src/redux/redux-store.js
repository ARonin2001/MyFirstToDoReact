import { createStoreHook } from "react-redux";
import { combineReducers, createStore } from "redux";
import taskReducer from "./taskReducer";


let reducers = combineReducers({
    taskPage: taskReducer
});

let store = createStore(reducers);

window.store = store;

export default store;