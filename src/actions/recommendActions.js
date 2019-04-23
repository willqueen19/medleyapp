import * as types from './actionTypes';
import * as actionTypes from '../actions/actionTypes';
import * as surveyConstants from '../constants/survey-constants';
import * as queryConstants from '../constants/query-constants';
import * as unirest from 'unirest';


// export const GET_CLOTHING_ITEM  = 'GET_CLOTHING_ITEM
export function getClothingItem(item, gender, collection) {
    var beginString = queryConstants.productsURL + 'categories=' + gender;
    var collectionString;
    var itemString;
    var actionType;

    //both genders
    if (collection === surveyConstants.modern_classic) {
        collectionString = queryConstants.concepts + collection;
    } else if (collection === surveyConstants.conscious) {
        collectionString = queryConstants.qualities + collection;
    } else if (collection === surveyConstants.premium_quality) {
        collectionString = queryConstants.qualities + surveyConstants.premium_quality;
    } else if (collection === surveyConstants.trend) {
        collectionString = queryConstants.concepts + collection;
    } else if (collection === surveyConstants.divided) {
        collectionString = queryConstants.concepts + collection;
    } else if (collection === surveyConstants.logg) {
        collectionString = queryConstants.concepts + collection;
    }
    //mens only collections
    if (collection === surveyConstants.hm_men) {
        // TODO for all intents and purposes removed
        collectionString = queryConstants.concepts + collection;
    } else if (collection === surveyConstants.basics) {
        collectionString = queryConstants.concepts + collection;
    }
    //womens only collections
    if (collection === surveyConstants.party) {
        collectionString = queryConstants.contexts + collection;
    }

    if (item === surveyConstants.shirt) {
        itemString = queryConstants.shirtQueryString;
        actionType = actionTypes.GET_SHIRTS;
    } else if (item === surveyConstants.pants) {
        itemString = queryConstants.pantsQueryString;
        actionType = actionTypes.GET_PANTS;
    } else if (item === surveyConstants.one_piece) {
        itemString = queryConstants.onePieceQueryString;
        actionType = actionTypes.GET_ONE_PIECES;
    } else if (item === surveyConstants.outerwear) {
        itemString = queryConstants.outerwearQueryString;
        actionType = actionTypes.GET_OUTERWEAR;
    } else if (item === surveyConstants.shoes) {
        itemString = queryConstants.shoesQueryString;
        actionType = actionTypes.GET_SHOES;
    } else if (item === surveyConstants.accessory) {
        itemString = queryConstants.accessoryQueryString;
        actionType = actionTypes.GET_ACCESSORIES;
    }

    var requestString = beginString + collectionString + itemString + queryConstants.productsConstants;
    return function (dispatch) {
        unirest.get(requestString)
            .header("X-RapidAPI-Key", queryConstants.xRapidAPIKey)
            .end(function (result) {
                return dispatch({type: actionType, payload: result.body.results});
            });


    }
}

export function setCurrentOutfit(item, itemKey) {
    return function (dispatch) {
        return dispatch({type: actionTypes.SET_CURRENT_OUTFIT, item: item, itemKey: itemKey});
    }
}

export function resetRecommendation() {
    return function (dispatch) {
        return dispatch({type: actionTypes.RESET_RECOMMENDATION});
    }
}

