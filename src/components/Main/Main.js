import React from 'react';
import { animals } from '../../data';
import './Main.css';
import Animal from '../Animal/Animal';
import background from '../../background.png';



export default function Main() {
  return <main style={{ backgroundImage: `url(${background})` }}>
    {animals.map((animal) => (
      <Animal key={animal.name} animal={animal} />   
    ))}

    




  </main>;
}
