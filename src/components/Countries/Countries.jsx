import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountry = country => {
    console.log('add this to your country');
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries)
  }
  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  }
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then(res => res.json())
      .then(data => setCountries(data));
  }, [])
  console.log(visitedFlags);
  return (
    <>
      <h3>{countries.length} Countries Data Loaded</h3>
      {/* Visited Countries */}
      <div>
        <h5>Visited Countries {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)}
        </ul>
      </div>
      <div className="flag-container">
        {
          visitedFlags.map(flag => <img src={flag.flags.png} />)
        }
      </div>
      {/* Display Countries */}
      <div className="country-container">

        {
          countries.map(country => <Country handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags} country={country} key={country.cca3}></Country>)
        }
      </div>
    </>
  );
};

export default Countries;