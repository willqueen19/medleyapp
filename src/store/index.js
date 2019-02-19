import { createStore, compose, applyMiddleware} from "redux";
import allReducers from "../reducers/index";
import thunk from "redux-thunk";


const store = createStore(
    allReducers,
    compose(applyMiddleware(thunk)));

export default store;