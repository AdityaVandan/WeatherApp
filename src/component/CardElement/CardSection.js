import React from 'react';
import classes from './CardSection.module.css';

export default function CardSection(props) {
  return (
    <div>
    <div className="card border">
      <div className="card-body grey lighten-4">
        <h1 className="card-title text-default border-bottom"> <img className="card-img-right border blue lighten-5 " src={props.city.image} alt="" /> <b>{props.city.name}</b></h1>
        <div className="card-text">
        <span className={classes.temperature}>{props.city.the_temp} &#8451;</span>
          <p className={classes.temperatureRange}><b><i className="fas fa-thermometer-half red-text"></i></b> {props.city.min_temp}  &#8451; - {props.city.max_temp} &#8451;</p>
          <p className={classes.temperatureRange}><b className="text-primary"><i className="fa fa-eye" aria-hidden="true"></i></b> {props.city.visibility}</p>
          <p className={classes.temperatureRange}><i className="fas fa-leaf green-text"></i> {props.city.wind_speed} km/hr</p>
          <p className={classes.temperatureRange}><b className="text-primary">Air Pr:</b> {props.city.air_pressure}</p>
          </div>
        <h4>It you are in {props.city.name}, then you going to experience a day which is {props.city.weather_state_name} </h4>
      </div>    
    </div>
    </div>
  );
}
