import * as types from './actionTypes';

// TODO: need to add get actions for this to clean up survey page

// export const GET_SURVEY_RESULTS = 'GET_SURVEY_RESULTS';
export function getSurveyResults(surveyResults) {
    return function(dispatch) {
        //console.log('results selected from actions', results);
        return dispatch({type: 'GET_SURVEY_RESULTS', payload: surveyResults})
    }
}
// export const GET_SHIRTS         = 'GET_SHIRTS';
export function getShirts(shirts) {
    return function(dispatch) {
        //console.log('shirts selected from actions', shirts);
        return dispatch({type: 'GET_SHIRTS', payload: shirts})
    }
}
// export const GET_PANTS          = 'GET_PANTS';
export function getPants(pants) {
    return function(dispatch) {
        //console.log('pants selected from actions', pants);
        return dispatch({type: 'GET_PANTS', payload: pants})
    }
}
// export const GET_JACKETS        = 'GET_JACKETS';
export function getJackets(jackets) {
    return function(dispatch) {
        //console.log('jackets selected from actions', jackets);
        return dispatch({type: 'GET_JACKETS', payload: jackets})
    }
}
// export const SHOES              = 'SHOES';
export function shoes(shoes) {
    return function(dispatch) {
        //console.log('shoes selected from actions', shoes);
        return dispatch({type: 'SHOES', payload: shoes})
    }
}
