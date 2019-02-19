import { createStore, compose, applyMiddleware} from "redux";
import allReducers from "../reducers/index";


const store = createStore(allReducers);

export default store;