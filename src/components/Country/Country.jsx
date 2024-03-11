import './Country.css'
const Country = ({ country }) => {
  console.log(country);
  const { name, flags } = country;
  return (
    <div className='country'>
      <img src={flags.png} alt={flags.alt} />
      <h3>Name : {name.common}</h3>
    </div>
  );
};

export default Country;