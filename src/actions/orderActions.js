import * as types from './actionTypes';

// export const GET_ORDER_NUMBER  = 'GET_ORDER_NUMBER';
export function getOrderNumber(orderNumber) {
    return function(dispatch) {
        console.log('order number selected from actions', orderNumber);
        return dispatch({type: 'GET_ORDER_NUMBER', payload: orderNumber})
    }
}
// export const SEND_ORDER        = 'SEND_ORDER';
export function sendOrder(sendOrder) {
    return function(dispatch) {
        console.log('send order selected from actions', sendOrder);
        return dispatch({type: 'SEND_ORDER', payload: sendOrder})
    }
}
// export const ADD_EMAIL_ADDRESS = 'ADD_EMAIL_ADDRESS';
export function addEmailAddress(addEmail) {
    return function(dispatch) {
        console.log('add email selected from actions', addEmail);
        return dispatch({type: 'ADD_EMAIL_ADDRESS', payload: addEmail})
    }
}
