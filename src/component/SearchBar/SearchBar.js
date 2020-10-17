import React, {useState} from 'react';
import axios from 'axios';

function SearchBar(props) {
  const [timeoutValue,setTimeoutValue]=useState(null);
  const [currentCity,setCurrentCity]=useState(null);
  const getCity = ()=>{
    let cityString = document.getElementById('cityInput').value;
    if(currentCity===cityString) return;
    let queryResult = props.checkQuery(cityString); 
    if(queryResult !== null){
      props.setCities([queryResult]);
      setCurrentCity(cityString);
      return;
    }
    axios.get('http://api.weatherstack.com/current?access_key=ad43f61d3018d50a5afc71bafc407acb&query='+cityString).then((response) => {
    if(response.data.success===false){
      alert('place doesn\'t exist');
    }
    else{
    let cityWeather = {
      "name": cityString,
      "weather_state_name": response.data.current.weather_descriptions[0],
      "weather_state_abbr": "lr",
      "min_temp": response.data.current.temperature-2,
      "max_temp": response.data.current.temperature+3,
      "the_temp": response.data.current.temperature,
      "image": response.data.current.weather_icons[0],
      "wind_speed": response.data.current.wind_speed,
      "air_pressure": response.data.current.pressure,
      "humidity": response.data.current.humidity,
      "visibility": response.data.current.visibility,
      }
      props.setCities([cityWeather]);
      props.addToQueryCache(cityWeather);
      setCurrentCity(cityString);
    }

  })
    .catch(function (error) {
    console.log(error);
    })

  }
  const changeName = (event) => {
    if(timeoutValue!=null) clearTimeout(timeoutValue);
    let timeout = setTimeout(()=>{
      getCity();
    },1000);
    setTimeoutValue(timeout);
    
}
  return (
    <div className="input-group mb-3">
    <input id="cityInput" type="text" className="form-control" placeholder="Name of Place" aria-label="Name of Place"
        aria-describedby="button-addon2"
        onChange={changeName} />
    <div className="input-group-append">
        <button className="btn btn-md btn-outline-default m-0 px-3 py-2 z-depth-0 waves-effect" type="button" id="button-addon2" onClick={getCity}>Search</button>
    </div>
    <br></br>

    </div>
  );
}

export default SearchBar;
