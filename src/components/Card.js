import React from 'react';
import './Card.css';

export const Card = (props) => {
  const { name, image, gender, status } = props;
  const estilo = {
    width: '14rem'
  }
  return (
    <div className='card m-3' style={estilo}>
      <img className='card-img-top' src={image} alt={name} />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p>Gender: {gender}</p>
        <p>Status: {status}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};