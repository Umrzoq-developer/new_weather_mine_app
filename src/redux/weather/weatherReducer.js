
import { BEGIN_FETCH, FETCHED, ERROR_FETCH } from './weatherAction';

const initialState = {
    fetching: false,
    errorFetch: false,
    data: []
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case BEGIN_FETCH:
            return {
                ...state,
                fetching: true
            };
        case FETCHED:
            return {
                ...state,
                fetching: false,
                data: action.payload
            };
        case ERROR_FETCH:
            return {
                ...state,
                fetching: false,
                data: [],
                errorFetch: true
            };
        default:
            return state
    }
};