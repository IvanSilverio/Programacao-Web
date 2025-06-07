import { useState } from 'react';
import './App.css'
import Pokemon from './Pokemon'; //Importando o componente Pokemon
import axios from 'axios'; //A lib axios permite fazer requisições HTTP
import Pokemons from './Pokemons';

export default function App() {
  
  
  return (
   <>
    <Pokemons />
   </>
  )
}
