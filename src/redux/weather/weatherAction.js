import axios from 'axios';

//types
export const BEGIN_FETCH = 'BEGIN_FETCH';
export const FETCHED = 'FETCHED';
export const ERROR_FETCH = 'ERROR_FETCH';

export const DELETE_ITEM = 'DELETE_ITEM';

export const CHOOSE_COUNTRY = 'CHOOSE_COUNTRY';

export const getData = (city) => async dispatch => {
    dispatch({ type: BEGIN_FETCH });
    try {
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=330216f9e3042b8a57a7865c3de67865`,
            {
                "Access-Control-Allow-Origin": "*",
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        );
        dispatch({ type: FETCHED, payload: res.data });
    } catch (e) {
        dispatch({ type: ERROR_FETCH });
    }
};

export const deleteItem = (id) => {
    return{
        type: DELETE_ITEM,
        payload: id
    }
};

export const chooseCountry = (id) => {
  return{
      type: CHOOSE_COUNTRY,
      payload: id
  }
};