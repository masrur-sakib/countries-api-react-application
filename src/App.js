import "./App.css";
import Header from "./components/Header/Header";
import CountriesInformation from "./components/CountriesInformation/CountriesInformation";
import AllCountriesInformation from "./components/AllCountriesInformation/AllCountriesInformation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // Global Variable
  let countriesData;
  // Function to GET data from REST API
  const fetchCountries = () => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((json) => {
        countriesData = json;
        showCountriesData(countriesData);
      });
  };

  // Function to load Countries REST API data in dropdown
  let showCountriesData = (countries) => {
    let dropdownOptions = "";
    for (let i = 0; i < countries.length; i++) {
      dropdownOptions += `<option value="${countries[i].name}">${countries[i].name}</option>`;
    }
    document.getElementById("country-name").innerHTML = dropdownOptions;
    showCountryInformation("Afghanistan");
  };

  // Function to show information according to country selected in dropdown
  let showCountryInformation = (selectedCountry) => {
    let selectedCountryData = countriesData.find(
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

  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <CountriesInformation
              fetchCountries={fetchCountries}
              showCountryInformation={showCountryInformation}
            ></CountriesInformation>
          </Route>
          <Route exact path="/all-countries-info">
            <AllCountriesInformation
              countriesData={countriesData}
            ></AllCountriesInformation>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
