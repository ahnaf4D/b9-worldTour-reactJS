import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
  console.log(country);
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(true);
  }
  return (
    <div className='country'>
      <img src={flags.png} alt={flags.alt} />
      <h3>Name : {name.common}</h3>
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>Code : {cca3}</p>
      <button onClick={handleVisited}>Visited</button>
      {
        visited ? 'I have visited this country' : 'I want to visited'
      }
    </div>
  );
};

export default Country;