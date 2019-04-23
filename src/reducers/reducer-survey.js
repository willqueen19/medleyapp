import * as types from '../actions/actionTypes';
import * as surveyConstants from '../constants/survey-constants';
import _ from 'lodash';

var initialState = {
    gender: null,
    mensCollection: null,
    womensCollection: null,
    color: null,
    shirtType: null,
    pantsType: surveyConstants.pants,
    womenClothingType: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SELECT_GENDER:
            return Object.assign({}, state, {gender: action.payload});
        case types.SELECT_MENS_COLLECTION:
            return Object.assign({}, state, {mensCollection: action.payload});
        case types.SELECT_WOMENS_COLLECTION:
            return Object.assign({}, state, {womensCollection: action.payload});
        case types.SELECT_COLOR:
            return Object.assign({}, state, {color: action.payload});
        case types.SELECT_SHIRT_TYPE:
            return Object.assign({}, state, {shirtType: action.payload});
        case types.SELECT_PANTS_TYPE:
            return Object.assign({}, state, {pantsType: action.payload});
        case types.SELECT_WOMEN_CLOTHING_TYPE:
            return Object.assign({}, state, {womenClothingType: action.payload});
        case types.RESET_SURVEY:
            return initialState;
        case types.RESET_GENDER:
            return Object.assign({}, state, {gender: null});
        case types.RESET_COLLECTION:
            return Object.assign({}, state, {mensCollection: null,
                                                            womensCollection: null});
        default:
            return state;
    }
}