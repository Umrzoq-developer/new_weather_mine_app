
import {BEGIN_FETCH, FETCHED, ERROR_FETCH, DELETE_ITEM, CHOOSE_COUNTRY} from './weatherAction';

const initialState = {
    fetching: false,
    errorFetch: false,
    data: [],
    cityWeather: []
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
                errorFetch: false,
                data: [...state.data, action.payload],
                cityWeather: action.payload
            };
        case ERROR_FETCH:
            return {
                ...state,
                fetching: false,
                errorFetch: true,
                cityWeather: []
            };
        case DELETE_ITEM:
            return {
                ...state,
                data: state.data.filter(data => data.id !== action.payload)
            };
        case CHOOSE_COUNTRY:
            return {
                ...state
            };
        default:
            return state
    }
};