import * as types from '../actions/actionTypes';
import _ from 'lodash';

var initialState = {
    array: [],
    categories: [],
    shirts: [],
    pants: [],
    sweaters: [],
    jackets: [],
    shoes: [],
    dresses: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_SURVEY_RESULTS:
            return Object.assign({}, state, {categories: action.payload});
        case types.GET_SAMPLE_ARRAY:
            return Object.assign({}, state, {array: action.payload});
        case types.GET_SHIRTS:
            return Object.assign({}, state, {shirts: action.payload});
        case types.GET_PANTS:
            return Object.assign({}, state, {pants: action.payload});
        case types.GET_SWEATERS:
            return Object.assign({}, state, {sweaters: action.payload});
        case types.GET_JACKETS:
            return Object.assign({}, state, {jackets: action.payload});
        case types.GET_DRESSES:
            return Object.assign({}, state, {dresses: action.payload});
        case types.GET_SHOES:
            return Object.assign({}, state, {shoes: action.payload});
        default:
            return state;
    }
}

// TODO: all recoomendation querying is done here, given the current state through the reducers