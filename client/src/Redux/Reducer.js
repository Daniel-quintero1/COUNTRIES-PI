import {
    CLEAN_BDD,
  CREATE_ACTIVITIES,
  GET_ACTIVITY,
  GET_COUNTRIES,
  GET_COUNTRIES_BY_ID,
  GET_COUNTRIES_BY_NAME,
  ORDER_BY_CONTINENTS,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
  SET_CURRENT_PAGE,
} from "./types";

const initialState = {
  countries: [],
  countriesBdd: [],
  countriesDetail: {},
  activities: [],
  currentPage: 1,
  detailActivities: {}
};

const newLocal = "Ascendente Population";
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return { ...state, countries: payload };
    case GET_COUNTRIES_BY_NAME:
      return { ...state, countries : payload };
    case GET_COUNTRIES_BY_ID:
      return { ...state, countriesDetail: payload };
    case GET_ACTIVITY:
      return { ...state, activities: payload };
    case CREATE_ACTIVITIES:
      return { ...state, detailActivities: payload };
    case ORDER_BY_NAME:
      const copyCountriesName =
        state.countriesBdd.length > 0
          ? [...state.countriesBdd]
          : [...state.countries];

      const sortCountries = copyCountriesName.sort((a, b) => {
        if (a.name > b.name) {
          return payload === "Nombre Ascendente" ? 1 : -1;
        }
        if (a.nme < b.name) {
          return payload === "Nombre Ascendente" ? -1 : 1;
        }
        return 0
      });
      return { ...state, countries: sortCountries };
    case ORDER_BY_CONTINENTS:
      const copyContinents =
        state.countriesBdd.length > 0
          ? [...state.countriesBdd]
          : [...state.countries];
      const sortContinents = copyContinents.sort((a, b) => {
        if (a.continents > b.continents) {
          return payload === "Ascendente Continents" ? 1 : -1;
        }
        if (a.continents < b.continents) {
          return payload === "Ascendente Continents" ? -1 : 1;
        }
        return 0
      });
      return { ...state, countries: sortContinents };
    case ORDER_BY_POPULATION:
      const copyPopulation =
        state.countriesBdd.length > 0
          ? [...state.countriesBdd]
          : [...state.countries];
      const sortPopulation = copyPopulation.sort((a, b) => {
        if (a.population > b.population) {
          return payload === newLocal ? 1: -1;
        }
        if (a.population < b.population) {
          return payload === "Ascendente Population" ? -1 : 1;
        }
        return 0
      });
      return { ...state, countries: sortPopulation };
      case CLEAN_BDD:
        return {...state, countriesBdd: []}
      case SET_CURRENT_PAGE:
        return {...state, currentPage: payload}
    default:
      return { ...state };
  }
};

export default rootReducer;
