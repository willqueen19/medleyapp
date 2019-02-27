import * as types from './actionTypes';
import * as unirest from 'unirest';

// TODO: need to add get actions for this to clean up survey page

// TODO: add color, shirtType, pantType to all query functions

// TODO: Premium Quality and Conscious are qualities, not concepts, this needs to be reflected in an if statment in each api call

// TODO: Abstract item request down to single action, passing in itemType and include an 'if' statement for dispatching to correct array in reducer

// export const GET_SAMPLE_ARRAY = 'GET_SAMPLE_ARRAY';
export function getSampleArray() {
    return function(dispatch) {
        unirest.get("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men&productTypes=shirt&country=us&lang=en&currentpage=0&pagesize=1000")
            .header("X-RapidAPI-Key", "H1EjxmtnnJmshcrwhMvaXLNguCFYp11De1rjsn8q5dMzFa5IFV")
            .end(function (result) {
                //console.log('array size: ', result.body.results.length);
                return dispatch({type: 'GET_SAMPLE_ARRAY', payload: result.body.results});
            });
    }
}

// export const GET_SURVEY_RESULTS = 'GET_SURVEY_RESULTS';
export function getSurveyResults(surveyResults) {
    return function(dispatch) {
        unirest.get("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men&productTypes=shirt&country=us&lang=en&currentpage=0&pagesize=1000")
            .header("X-RapidAPI-Key", "H1EjxmtnnJmshcrwhMvaXLNguCFYp11De1rjsn8q5dMzFa5IFV")
            .end(function (result) {
                //console.log('array size: ', result.body.results.length);
                return dispatch({type: 'GET_SAMPLE_ARRAY', payload: result.body.results});
            });
    }
}
// export const GET_SHIRTS         = 'GET_SHIRTS';
export function getShirts(gender, collection) {
    // console.log(typeof collection);
    //
    // console.log('gender', gender);
    // console.log('collection', collection);
    var requestString = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories="+gender+"&concepts="+collection+"&productTypes=shirt&country=us&lang=en&currentpage=0&pagesize=1000";
    //console.log('shirts query string', requestString);
    return function(dispatch) {
        unirest.get(requestString)
            .header("X-RapidAPI-Key", "H1EjxmtnnJmshcrwhMvaXLNguCFYp11De1rjsn8q5dMzFa5IFV")
            .end(function (result) {
                console.log('array size: ', result.body.results);
                return dispatch({type: 'GET_SHIRTS', payload: result.body.results});
            });
    }
}
// export const GET_PANTS          = 'GET_PANTS';
export function getPants(gender, collection) {
    var requestString = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories="+gender+"&concepts="+collection+"&productTypes=pants&country=us&lang=en&currentpage=0&pagesize=1000";
    return function(dispatch) {
        unirest.get(requestString)
            .header("X-RapidAPI-Key", "H1EjxmtnnJmshcrwhMvaXLNguCFYp11De1rjsn8q5dMzFa5IFV")
            .end(function (result) {
                console.log('array size: ', result.body.results);
                return dispatch({type: 'GET_PANTS', payload: result.body.results});
            });
    }
}

export function getSweaters(gender, collection) {
    var requestString = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories="+gender+"&concepts="+collection+"&productTypes=jumper&country=us&lang=en&currentpage=0&pagesize=1000";
    return function(dispatch) {
        unirest.get(requestString)
            .header("X-RapidAPI-Key", "H1EjxmtnnJmshcrwhMvaXLNguCFYp11De1rjsn8q5dMzFa5IFV")
            .end(function (result) {
                console.log('array size: ', result.body.results);
                return dispatch({type: 'GET_SWEATERS', payload: result.body.results});
            });
    }
}


// export const GET_JACKETS        = 'GET_JACKETS';
export function getJackets(gender, collection) {
    var requestString = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories="+gender+"&concepts="+collection+"&productTypes=blazer&country=us&lang=en&currentpage=0&pagesize=1000";
    return function(dispatch) {
        unirest.get(requestString)
            .header("X-RapidAPI-Key", "H1EjxmtnnJmshcrwhMvaXLNguCFYp11De1rjsn8q5dMzFa5IFV")
            .end(function (result) {
                console.log('array size: ', result.body.results);
                return dispatch({type: 'GET_JACKETS', payload: result.body.results});
            });
    }
}

// export const GET_DRESSES        = 'GET_DRESSES';
export function getDresses(collection) {
    return function(dispatch) {
        unirest.get("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men&productTypes=shirt&country=us&lang=en&currentpage=0&pagesize=1000")
            .header("X-RapidAPI-Key", "H1EjxmtnnJmshcrwhMvaXLNguCFYp11De1rjsn8q5dMzFa5IFV")
            .end(function (result) {
                //console.log('array size: ', result.body.results.length);
                return dispatch({type: 'GET_DRESSES', payload: result.body.results});
            });

    }
}

// export const SHOES              = 'SHOES';
export function shoes(shoes) {
    return function(dispatch) {
        //console.log('shoes selected from actions', shoes);
        //return dispatch({type: 'SHOES', payload: shoes})
    }
}
