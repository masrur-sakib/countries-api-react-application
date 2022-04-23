import './App.css';
import Header from './components/Header/Header';
import CountriesInformation from './components/CountriesInformation/CountriesInformation';
import AllCountriesInformation from './components/AllCountriesInformation/AllCountriesInformation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  // Global Variable
  let countriesData;
  // Function to GET data from REST API
  const fetchCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((json) => {
        countriesData = json;
        showCountriesData(countriesData);
      });
  };

  // Function to load Countries REST API data in dropdown
  let showCountriesData = (countries) => {
    let dropdownOptions = '';
    for (let i = 0; i < countries.length; i++) {
      dropdownOptions += `<option value="${countries[i].name.common}">${countries[i].name.common}</option>`;
    }
    document.getElementById('country-name').innerHTML = dropdownOptions;
    showCountryInformation('Uruguay');
  };

  // Function to show information according to country selected in dropdown
  let showCountryInformation = (selectedCountry) => {
    let selectedCountryData = countriesData.find(
      (country) => country.name.common === selectedCountry
    );

    document.getElementById('country-img').src = selectedCountryData.flags.png;
    document.getElementById('country-capital').innerHTML =
      selectedCountryData.capital ? selectedCountryData.capital[0] : '';
    document.getElementById('country-language').innerHTML =
      selectedCountryData.languages
        ? Object.values(selectedCountryData.languages)[0]
        : '';
    document.getElementById('country-region').innerHTML =
      selectedCountryData.region;
    document.getElementById('country-sub-region').innerHTML =
      selectedCountryData.subregion;
    document.getElementById('country-population').innerHTML =
      selectedCountryData.population;
  };

  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <CountriesInformation
              fetchCountries={fetchCountries}
              showCountryInformation={showCountryInformation}
            ></CountriesInformation>
          </Route>
          <Route exact path='/all-countries-info'>
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
