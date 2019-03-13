import * as types from '../actions/actionTypes';
import * as surveyConstants from '../constants/survey-constants';
import _ from 'lodash';

var initialState = {
    categories: [],
    shirts: [],
    pants: [],
    onePieces: [],
    outerwear: [],
    shoes: [],
    accessories: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_SHIRTS:
            return Object.assign({}, state,{shirts: action.payload});
        case types.GET_PANTS:
            return Object.assign({}, state,{pants: action.payload});
        case types.GET_ONE_PIECES:
            return Object.assign({}, state,{onePieces: action.payload});
        case types.GET_OUTERWEAR:
            return Object.assign({}, state,{outerwear: action.payload});
        case types.GET_SHOES:
            return Object.assign({}, state,{shoes: action.payload});
        case types.GET_ACCESSORIES:
            return Object.assign({}, state,{accessories: action.payload});
        /*
        case types.GET_CLOTHING_ITEM:
            switch (action.item) {
                case surveyConstants.shirt:
                    return Object.assign({}, state, {shirts: action.payload});
                case surveyConstants.pants:
                    return Object.assign({}, state, {pants: action.payload});
                case surveyConstants.one_piece:
                    return Object.assign({}, state, {onePieces: action.payload});
                case surveyConstants.outerwear:
                    return Object.assign({}, state, {outerwear: action.payload});
                case surveyConstants.shoes:
                    return Object.assign({}, state, {shoes: action.payload});
                case surveyConstants.accessory:
                    return Object.assign({}, state, {accessories: action.payload});
                default:
                    return state;
            }
        */
        default:
            return state;
    }
}

// TODO: all recoomendation querying is done here, given the current state through the reducers