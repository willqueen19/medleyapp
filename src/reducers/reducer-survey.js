import * as types from '../actions/actionTypes';
import _ from 'lodash';

var initialState = {
    gender: null,
    collection: null,
    color: null,
    shirtType: null,
    pantsType: null,
    womenClothingType: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SELECT_GENDER:
            return Object.assign({}, state, {gender: action.payload})
        case types.SELECT_MENS_COLLECTION:
            return Object.assign({}, state, {collection: action.payload})
        default:
            return state;
    }
}