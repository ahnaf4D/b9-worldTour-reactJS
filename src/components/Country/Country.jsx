import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry }) => {
  console.log(country);
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  }
  function passWithParams() {
    handleVisitedCountry(country);
  }
  console.log(handleVisited);
  return (
    <div className={`country ${visited ? `visited` : 'non-visited'}`}>
      <img src={flags.png} alt={flags.alt} />
      <h3 style={{ color: visited ? 'purple' : 'black' }}>Name : {name.common}</h3>
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>Code : {cca3}</p>
      <button onClick={passWithParams}>Mark Visited</button>
      <br />
      <button onClick={handleVisited}>Visited</button>
      {
        visited ? 'I have visited this country' : 'I want to visited'
      }
    </div>
  );
};

export default Country;