import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import "./AllCountriesInformation.css";

const AllCountriesInformation = () => {
  const [countriesInfo, setCountriesInfo] = useState([]);
  const [loadingVisibility, setloadingVisibility] = useState("block");
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((json) => {
        setCountriesInfo(json);
        setloadingVisibility("none");
      });
  }, []);
  return (
    <div className="container">
      <div className="countries-container">
        <Loading visibility={loadingVisibility} />
        {countriesInfo.map((country) => (
          <div key={country.numericCode} className="country-info-card">
            <img
              className="mb-4 country-flag"
              src={country.flag}
              alt={country.name + "flag"}
            />
            <p className="country-name">
              Country Name: <span className="text-info">{country.name}</span>
            </p>
            <p>
              Capital: <span className="text-info">{country.capital}</span>
            </p>
            <p>
              Language:{" "}
              <span className="text-info">{country.languages[0].name}</span>
            </p>
            <p>
              Region: <span className="text-info">{country.region}</span>
            </p>
            <p>
              Sub-region: <span className="text-info">{country.subregion}</span>
            </p>
            <p>
              Population:{" "}
              <span className="text-info">
                {country.population.toLocaleString()}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCountriesInformation;
