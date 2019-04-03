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
            console.log('SHIRTS', action.payload);
            return Object.assign({}, state,{shirts: action.payload});
        case types.GET_PANTS:
            console.log('PANTS', action.payload);
            return Object.assign({}, state,{pants: action.payload});
        case types.GET_ONE_PIECES:
            console.log('ONE_PIECES', action.payload);
            return Object.assign({}, state,{onePieces: action.payload});
        case types.GET_OUTERWEAR:
            console.log('OUTERWEAR', action.payload);
            return Object.assign({}, state,{outerwear: action.payload});
        case types.GET_SHOES:
            console.log('SHOES', action.payload);
            return Object.assign({}, state,{shoes: action.payload});
        case types.GET_ACCESSORIES:
            console.log('ACCESSORIES', action.payload);
            return Object.assign({}, state,{accessories: action.payload});
        case types.SET_CURRENT_OUTFIT:
            var newCurrentOutfit = state.currentOutfit;
            newCurrentOutfit[action.itemKey] = action.item;
            return Object.assign({}, state, {currentOutfit: newCurrentOutfit});
        default:
            return state;
    }
}
