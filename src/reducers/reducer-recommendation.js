import * as types from '../actions/actionTypes';
import _ from 'lodash';

var initialState = {
    categories: [],
    shirts: [],
    pants: [],
    jackets: [],
    shoes: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_SURVEY_RESULTS:
            return Object.assign({}, state, {categories: action.payload})

        default:
            return state;
    }
}

// TODO: all recoomendation querying is done here, given the current state through the reducers