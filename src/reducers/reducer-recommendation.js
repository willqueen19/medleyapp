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
    accessories: [],
    currentOutfit: []
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
        case types.SET_CURRENT_OUTFIT:
            var newCurrentOutfit = state.currentOutfit;
            newCurrentOutfit[action.itemKey] = action.item;
            return Object.assign({}, state, {currentOutfit: newCurrentOutfit});
        default:
            return state;
    }
}
