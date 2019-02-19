import * as types from '../actions/actionTypes';
import _ from 'lodash';

var initialState = {
    gender: null,
    collection: 'party',
    color: null,
    shirtType: null,
    pantsType: null,
    womenType: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SELECT_MENS_COLLECTION:
            return Object.assign({}, state, {collection: action.payload})
        default:
            return state;
    }
}