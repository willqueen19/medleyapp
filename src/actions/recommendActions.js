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
        // TODO fix
        collectionString = queryConstants.concepts + 'h' + queryConstants.concepts + collection;
    } else if (collection === surveyConstants.basics) {
        collectionString = queryConstants.concepts + collection;
    }
    //womens only collections
    if (collection === surveyConstants.party) {
        collectionString = queryConstants.contexts + collection;
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
<<<<<<< HEAD
                return dispatch({type: actionType, payload: result.body.results});
=======
                /*
                //console.log('result', result.body.results);
                var results = result.body.results;
                // premium quality needs to be filtered, will move to own function after
                if (collection === surveyConstants.premium_quality) {
                    var i;
                    var premQualItems = [];
                    for (i = 0; i < results.length; i++) {
                        if (results[i].markers.text === surveyConstants.premium_quality) {
                            premQualItems.push(results[i]);
                        }
                    }
                    results = premQualItems;
                }
                */
                return dispatch({type: actionType, itemType: item, payload: result.body.results});
>>>>>>> master
            });


    }
}

export function setCurrentOutfit(item, itemKey) {
    return function (dispatch) {
        return dispatch({type: actionTypes.SET_CURRENT_OUTFIT, item: item, itemKey: itemKey});
    }
}
