import {
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_REQUEST,
  FETCHING_DATA_FAILURE
} from './types';
import {
  API_KEY,
  BASE_URL
} from '../assets/configs/weatherApi';

export const fetchingDataRequest = () => ({ type: FETCHING_DATA_REQUEST });

export const fetchingDataSuccess = json => ({
  type: FETCHING_DATA_SUCCESS,
  payload: json
});

export const fetchingDataFailure = error => ({
  type: FETCHING_DATA_FAILURE,
  payload: error
})

export const fetchData = (cityId = "1264527") => {
  return async dispatch => {
    try {
      const response = await fetch(`${BASE_URL}`);
      dispatch(fetchingDataRequest());
      const weatherData = await response.json();
      console.log('Weather Data-----------', weatherData);
      dispatch(fetchingDataSuccess(weatherData))
    } catch (error) {
      console.log('Getting Weather Error---------', error);
      dispatch(fetchingDataFailure(error))
    }
  }
}