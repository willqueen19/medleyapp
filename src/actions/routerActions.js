import * as types from './actionTypes';

export function setPreviousRoute(route) {
    return function(dispatch) {
        return dispatch({type: 'SET_PREVIOUS_ROUTE', payload: route})
    }
}