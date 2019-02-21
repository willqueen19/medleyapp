import * as types from './actionTypes';

// TODO: need to add get actions for this to clean up survey page

// export const SELECT_GENDER              = 'SELECT_GENDER';
export function selectGender(gender) {
    return function(dispatch) {
        //console.log('gender selected from actions', gender);
        return dispatch({type: 'SELECT_GENDER', payload: gender});
    }
}
// export const SELECT_MENS_COLLECTION     = 'SELECT_MENS_COLLECTION';
export function selectMensCollection(mCollection) {
    return function(dispatch) {
        //console.log('mens collection selected from actions', mCollection);
        return dispatch({type: 'SELECT_MENS_COLLECTION', payload: mCollection});
    }
}
// export const SELECT_WOMENS_COLLECTION   = 'SELECT_WOMENS_COLLECTION';
export function selectWomensCollection(wCollection) {
    return function(dispatch) {
        //console.log('womens collection selected from actions', wCollection);
        return dispatch({type: 'SELECT_WOMENS_COLLECTION', payload: wCollection})
    }
}
// export const SELECT_COLOR               = 'SELECT_COLOR';
export function selectColor(color) {
    return function(dispatch) {
        //console.log('color selected from actions', color);
        return dispatch({type: 'SELECT_COLOR', payload: color})
    }
}
// export const SELECT_SHIRT_TYPE          = 'SELECT_SHIRT_TYPE';
export function selectShirtType(shirt) {
    return function(dispatch) {
        //console.log('shirt selected from actions', shirt);
        return dispatch({type: 'SELECT_SHIRT_TYPE', payload: shirt})
    }
}
// export const SELECT_PANTS_TYPE          = 'SELECT_PANTS_TYPE';
export function selectPantsType(pants) {
    return function(dispatch) {
        //console.log('pants selected from actions', pants);
        return dispatch({type: 'SELECT_PANTS_TYPE', payload: pants})
    }
}
// export const SELECT_WOMEN_CLOTHING_TYPE = 'SELECT_WOMEN_CLOTHING_TYPE';
export function selectWomenClothingType(wType) {
    return function(dispatch) {
        //console.log('women clothing type selected from actions', wType);
        return dispatch({type: 'SELECT_WOMEN_CLOTHING_TYPE', payload: wType})
    }
}
