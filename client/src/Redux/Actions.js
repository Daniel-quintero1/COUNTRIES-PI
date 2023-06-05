import axios from "axios";
import {
    CREATE_ACTIVITIES,
  GET_ACTIVITY,
  GET_COUNTRIES,
  GET_COUNTRIES_BY_ID,
  GET_COUNTRIES_BY_NAME,
} from "./types";
export const getCountries = () => {
  return async function (dispatch) {
    const countries = await axios.get(`http://localhost:3001/countries`);
    const allCountries = countries.data;
    dispatch({ type: GET_COUNTRIES, payload: allCountries });
  };
};

export const getCountriesByName = (name) => {
  return async function (dispatch) {
    const countriesByName = await axios.get(
      `http://localhost:3001/countries?name=${name}`
    );
    const countriesName = countriesByName.data;
    dispatch({ type: GET_COUNTRIES_BY_NAME, payload: countriesName });
  };
};

export const getCountriesId = (id) => {
  return async function (dispatch) {
    const countries = await axios.get(`http://localhost:3001/countries/${id}`);
    const countriesId = countries.data;
    dispatch({ type: GET_COUNTRIES_BY_ID, payload: countriesId });
  };
};

export function createActivities (){
    return async function (dispatch){
        const activities = await axios.post(`http://localhost:3001/activity`)
        const create = activities.data
        dispatch({type: CREATE_ACTIVITIES, payload: create})
    }
}
export const getActivities = ()=> {
    return async function (dispatch) {
        const activities = await axios.get(`http://localhost:3001/activity`)
        const allActivties = activities.data
        dispatch({type: GET_ACTIVITY, payload: allActivties})
    }
}
