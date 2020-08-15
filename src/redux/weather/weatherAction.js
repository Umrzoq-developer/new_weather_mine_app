import axios from 'axios';

//types
export const BEGIN_FETCH = 'BEGIN_FETCH';
export const FETCHED = 'FETCHED';
export const ERROR_FETCH = 'ERROR_FETCH';

export const getData = (city) => async dispatch => {
    dispatch({ type: BEGIN_FETCH });
    try {
        const res = await axios.get(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=330216f9e3042b8a57a7865c3de67865`,
            {
                "Access-Control-Allow-Origin": "*",
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        );
        dispatch({ type: FETCHED, payload: res });
    } catch (e) {
        dispatch({ type: ERROR_FETCH });
    }
};