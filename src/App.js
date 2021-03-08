import "./App.css";
import CountriesInformation from "./components/CountriesInformation/CountriesInformation";
import AllCountriesInformation from "./components/AllCountriesInformation/AllCountriesInformation";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext } from "react";

export const countriesContext = createContext();

function App() {
  return (
    <countriesContext.Provider value={{}}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <CountriesInformation></CountriesInformation>
          </Route>
          <Route exact path="/all-countries-info">
            <AllCountriesInformation></AllCountriesInformation>
          </Route>
        </Switch>
      </Router>
    </countriesContext.Provider>
  );
}

export default App;
