import * as types from '../actions/actionTypes';
import _ from 'lodash';

var initialState = {
    survey: [],
    shirts: [],
    pants: [],
    jackets: [],
    shoes: []
};

export default function (state = initialState, action) {
    switch (action.type) {

    }
}

// TODO: all recoomendation querying is done here, given the current state through the reducers