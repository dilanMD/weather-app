import {
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_REQUEST,
  FETCHING_DATA_FAILURE
} from '../actions/types';

const initialState = {
  isFetching: false,
  errorMessage: "",
  apiData: [],
  cities: [
    { key: "1", label: 'Colombo', temperature: "28", rightLabel: 'Delete' },
    { key: "2", label: 'Jaffna', temperature: "27", rightLabel: 'Delete' },
    { key: "3", label: 'Chennai', temperature: "29", rightLabel: 'Delete' },
    { key: "4", label: 'Bangalore', temperature: "30", rightLabel: 'Delete' },
    { key: "5", label: 'Hyderabad', temperature: "27", rightLabel: 'Delete' },
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA_REQUEST:
      // console.log("REQUEST", action)
      return { ...state, isFetching: true };
    case FETCHING_DATA_FAILURE:
      // console.log("FAILURE", action)
      return { ...state, isFetching: false, errorMessage: action.payload };
    case FETCHING_DATA_SUCCESS:
      // console.log("SUCCESS", action)
      return { ...state, isFetching: false, apiData: action.payload };
    default:
      // console.log("DEFAULT", action)
      return state;
  }
}

export default reducer;