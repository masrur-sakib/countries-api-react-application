import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const DATA_FETCHING = "DATA_FETCHING";
export const DATA_FETCHING_SUCCESS = "DATA_FETCHING_SUCCESS";
export const DATA_FETCHING_ERROR = "DATA_FETCHING_ERROR";
export const SHOW_COUNTRIES_DATA = "SHOW_COUNTRIES_DATA";

// Toast Notification Function
toast.configure();
const toastGetSuccessNotification = () => {
  toast.success("Data Fetched Successfully", { autoClose: 3000 });
};
const toastGetErrorNotification = (error) => {
  toast.error(error, { autoClose: 3000 });
};

// Global Variables
let countriesData;

// Function to GET data from REST API
export const fetchCountries = () => {
  return (dispatch) => {
    dispatch(dataFetching());

    axios
      .get("https://restcountries.eu/rest/v2/all")

      .then((response) => {
        countriesData = response.data;
        dispatch(dataFetchingSuccess(countriesData));
        toastGetSuccessNotification();
        dispatch(showCountriesData(countriesData));
      })

      .catch((error) => {
        const errorMessage = error.message;
        toastGetErrorNotification(errorMessage);
        dispatch(dataFetchingError(errorMessage));
      });
  };
};

// Assigning type & payload to the action
export const dataFetching = () => {
  return {
    type: DATA_FETCHING,
  };
};

export const dataFetchingSuccess = (countries) => {
  return {
    type: DATA_FETCHING_SUCCESS,
    payload: countries,
  };
};

export const dataFetchingError = (error) => {
  return {
    type: DATA_FETCHING_ERROR,
    payload: error,
  };
};

// Function to load Countries REST API data in dropdown
export const showCountriesData = (countries) => {
  let dropdownOptions = "";
  for (let i = 0; i < countries.length; i++) {
    dropdownOptions += `<option value="${countries[i].name}">${countries[i].name}</option>`;
  }
  document.getElementById("country-name").innerHTML = dropdownOptions;
  showCountryInformation("Afghanistan");
  return {
    type: SHOW_COUNTRIES_DATA,
    payload: countries,
  };
};

// Function to capture selected country name
export const selectedCountry = (e) => {
  showCountryInformation(e.target.value);
};

// Function to show language according to country selected in dropdown
export const showCountryInformation = (selectedCountry) => {
  const selectedCountryData = countriesData.find(
    (country) => country.name === selectedCountry
  );
  document.querySelector("img").src = selectedCountryData.flag;
  document.getElementById("country-capital").innerHTML =
    selectedCountryData.capital;
  document.getElementById("country-language").innerHTML =
    selectedCountryData.languages[0].name;
  document.getElementById("country-region").innerHTML =
    selectedCountryData.region;
  document.getElementById("country-sub-region").innerHTML =
    selectedCountryData.subregion;
  document.getElementById("country-population").innerHTML =
    selectedCountryData.population;
};
