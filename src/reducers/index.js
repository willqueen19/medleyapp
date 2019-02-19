import {combineReducers} from "redux";
import { routerReducer, routerMiddleware, ConnectedRouter } from "react-router-redux";
import SurveyReducer from './reducer-survey';
import RecommendReducer from './reducer-recommendation';
import OrderReducer from './reducer-order';

// TODO: Look into route reducer!

const allReducers = combineReducers({
    surveyReducer: SurveyReducer,
    recommendReducer: RecommendReducer,
    orderReducer: OrderReducer
});

export default allReducers;