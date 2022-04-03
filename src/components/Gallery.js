import React from 'react';
import './Gallery.css';
import { useState, useEffect } from 'react';
import { Card } from './Card';


export const Gallery = (props) => {
    let [characters, setCharacters] = useState([]);
    
    useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => setCharacters(data.results))
    },[])

    return (
      <>
        <h1>Rick and Morty</h1>
        <div className='gallery-container'>
            {characters.map((elm, index) => (
              <Card
                key={index}
                name={elm.name}
                image={elm.image}
                gender={elm.gender}
                status={elm.status}
              ></Card>
            ))}
        </div>
      </>
    );
};