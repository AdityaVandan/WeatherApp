import React from 'react';
import CardList from './CardList';

function CardElement(props) {
  return (
    <div>
        <CardList cities={props.cities}></CardList>
    </div>
  );
}

export default CardElement;
