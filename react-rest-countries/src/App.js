import './App.css';
import {useEffect, useState} from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries(){
  const [countries, setCountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=>setCountries(data))
  },[])

  return(
    <div>
      <h1>Visiting Every country of the World !!!</h1>
      <h1>Available Countries : {countries.length}</h1>
      {
        countries.map(country=><Country name={country.name.common} population={country.population}></Country>)
      }
    
    </div>
  )
}

function Country(props){
  return(
    <div>
      <h2>{props.name}</h2>
      <h4>{props.population}</h4>
    </div>
  )
}
export default App;
