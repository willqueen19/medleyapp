import * as types from '../actions/actionTypes'

var initialState = {
    previousRoute: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SET_PREVIOUS_ROUTE:
            return Object.assign({}, state, {previousRoute: action.payload});
        default:
            return state;
    }
}