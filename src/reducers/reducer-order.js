import * as types from '../actions/actionTypes';
import _ from 'lodash';

var initialState = {
    orderSubmitted: false,
    orderItems: [],
    orderNumber: null
};

export default function (state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}