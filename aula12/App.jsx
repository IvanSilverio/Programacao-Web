// mkdir aula12
// cd aula12/
// npm create vite@latest

// Buscapokemons
// React
// Javascript = SWC

// cd buscapkemon
// npm install
// npm run dev

// extensao 'react' Sjenider
// npm i axios

import './App.css'
import Pokemon from './Pokemon';
import axios from 'axios';

export default function App() {

  let cidade = 'Itajubá';

  const url = "https://pokeapi.co/api/v2/pokemon/1";

  
  const buscaPokemon = async() => {
    //aqui vamos buscar o pokemon
    const pokemon = await axios.get (url);
    const pokemonName = pokemon.data.name;

    console.log (pokemonName);
 
  }
  //prop name
  //prop sprites.front_default

  return(
    <>
    <Pokemon nome= "Bubasaur"/>
    <Pokemon nome= "Squirtle"/>
    <Pokemon nome= "Mew"/>
    <button onClick={buscaPokemon}>Clicar aqui</button>

    </>

  )

}

