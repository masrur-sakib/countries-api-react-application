import React, { useEffect } from "react";
import "./CountriesInformation.css";
import { connect } from "react-redux";
import {
  fetchCountries,
  selectedCountry,
} from "../../redux/actions/countriesActions";

const CountriesInformation = ({ countriesInfo, fetchCountries }) => {
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="container">
      <div className="countries-info">
        <p className="app-title">Countries API</p>
        <div className="flag-container">
          <img src="" alt="" />
        </div>
        <div className="dropdown-container">
          <select id="country-name" onChange={selectedCountry}></select>
        </div>
        <div className="info-container">
          <p>
            Capital: &nbsp;
            <strong>
              <span id="country-capital"></span>
            </strong>
          </p>
          <p>
            Language: &nbsp;
            <strong>
              <span id="country-language"></span>
            </strong>
          </p>
          <p>
            Region: &nbsp;
            <strong>
              <span id="country-region"></span>
            </strong>
          </p>
          <p>
            Sub-region: &nbsp;
            <strong>
              <span id="country-sub-region"></span>
            </strong>
          </p>
          <p>
            Population: &nbsp;
            <strong>
              <span id="country-population"></span>
            </strong>
          </p>

          <p id="data-post-status" className="text-success mt-3"></p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countriesInfo: state.countries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountries: () => dispatch(fetchCountries()),
    selectedCountry: () => dispatch(selectedCountry()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesInformation);
