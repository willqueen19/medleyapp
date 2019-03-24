import * as types from './actionTypes';
import * as actionTypes from '../actions/actionTypes';
import * as surveyConstants from '../constants/survey-constants';
import * as unirest from 'unirest';

// TODO: need to add get actions for this to clean up survey page

// TODO: add color, shirtType, pantType to all query functions

// TODO: Premium Quality and Conscious are qualities, not concepts, this needs to be reflected in an if statement in each api call

// TODO: Abstract item request down to single action, passing in itemType and include an 'if' statement for dispatching to correct array in reducer

// TODO: Need to figure out consistent way to deal with changing number of variables
// export const GET_CLOTHING_ITEM  = 'GET_CLOTHING_ITEM
export function getClothingItem(item, gender, collection) {
    //console.log(actionTypes.GET_CLOTHING_ITEM);
    var beginString = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=' + gender;
    var constants = '&country=us&lang=en&currentpage=0&pagesize=10000';

    var collectionString;
    if (collection == surveyConstants.conscious || collection == surveyConstants.premium_quality) {
        collectionString = '&qualities=' + collection;
    } else if (collection == surveyConstants.party) {
        collectionString = '&contexts=' + collection;
    } else {
        collectionString = '&concepts=' + collection;
    }

    var itemString;
    var actionType;
    if (item === surveyConstants.shirt) {
        //console.log('shirt');
        itemString = '&productTypes=blouse' +
            '&productTypes=shirt' +
            '&productTypes=t-shirt' +
            '&productTypes=top' +
            '&productTypes=jumper';
        actionType = actionTypes.GET_SHIRTS;
    } else if (item === surveyConstants.pants) {
        //console.log('pants');
        itemString = '&productTypes=pants' +
            '&productTypes=skirt' +
            '&productTypes=shorts' +
            '&productTypes=leggings';
        actionType = actionTypes.GET_PANTS;
    } else if (item === surveyConstants.one_piece) {
        //console.log('one-piece');
        itemString = '&productTypes=jumpsuit' +
            '&productTypes=dress';
        actionType = actionTypes.GET_ONE_PIECES;
    } else if (item === surveyConstants.outerwear) {
        //console.log('outerwear');
        itemString = '&productTypes=vest' +
            '&productTypes=jacket' +
            '&productTypes=coat' +
            '&productTypes=cardigan' +
            '&productTypes=blazer';
        actionType = actionTypes.GET_OUTERWEAR;
    } else if (item === surveyConstants.shoes) {
        //console.log('shoes');
        itemString = '&productTypes=shoes';
        actionType = actionTypes.GET_SHOES;
    } else if (item === surveyConstants.accessory) {
        //console.log('accessory');
        itemString = '&productTypes=hat' +
            '&productTypes=scarf';
        actionType = actionTypes.GET_ACCESSORIES;
    }

    var requestString = beginString + collectionString + itemString + constants;

    return function (dispatch) {
        unirest.get(requestString)
            .header("X-RapidAPI-Key", "bbafb18096msh2f3baf47756622fp1b2754jsnba6562e650c7")
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
