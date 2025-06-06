import React, { useState } from 'react';
import './App.css';
import Pokemon from './Pokemon'; // Esse é o componente de visualização

export default function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemons, setPokemons] = useState([]);
  const [nome, setNome] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const buscaPokemon = async () => {
    const pokemonId = Math.floor(Math.random() * 400) + 1;
    const response = await axios.get(`${url}${pokemonId}`);
    return response.data;
  };

  const addPokemon = async () => {
    const vetorTemp = [];

    for (let i = 0; i < 3; i++) {
      const data = await buscaPokemon();
      vetorTemp.push(
        <Pokemon key={data.id} nome={data.name} imgUrl={data.sprites.front_default} />
      );
    }

    setPokemons(vetorTemp);
  };

  return (
    <div className="App">
      <h1>Pokémons Aleatórios</h1>
      <button onClick={addPokemon}>Buscar 3 Pokémons</button>
      <div className="pokemon-container">
        {pokemons}
      </div>
    </div>
  );
}
