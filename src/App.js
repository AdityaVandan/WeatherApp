import React, {useState} from 'react';
import './App.css';
import Hero from './component/Hero/Hero';
import CardElement from './component/CardElement/CardElement';
import SearchBar from './component/SearchBar/SearchBar';

function App() {
  const[cities,setCities] = useState([]);
  const[queryCache,setQueryCache] = useState({});
  const checkQuery = (cityName) =>{
    if(queryCache[cityName]===undefined) return null;
    else return queryCache[cityName]
  };
  const addToQueryCache = (cityObject)=>{
    let name = cityObject.name;
    setQueryCache({...queryCache,
      name:cityObject
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        <Hero></Hero>
        <SearchBar cities ={cities}  setCities={setCities} addToQueryCache={addToQueryCache} checkQuery={checkQuery}></SearchBar>
        <CardElement cities ={cities}></CardElement>
        </div>
        </header>
    </div>
  );
}

export default App;
