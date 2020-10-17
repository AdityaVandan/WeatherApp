import React from 'react';
import CardSection from './CardSection';
function CardList(props) {
  return (
    <div >
        {props.cities.map((element,index)=>{return (<CardSection key = {index} city={element}></CardSection>)})}
    </div>
  );
}

export default CardList;
