import * as types from './actionTypes';

export function selectGender(gender) {
    return function(dispatch) {
        console.log('gender selected from actions', gender);
        return dispatch({type: 'SELECT_GENDER', payload: gender})
    }
}