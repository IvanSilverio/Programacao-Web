import { useState } from "react";
import Pokemon from "./Pokemon";
import axios from 'axios';
import './styles/Pokemons.css';

export default function Pokemons(){
    
        const url = 'https://pokeapi.co/api/v2/pokemon/';

        const [pokemons, setPokemons] = useState([]);

    
        const buscaPokemon = async () => {
        
            const pokemonId = Math.trunc((Math.random()*400))+1;

            const pokemon = await axios.get(`${url}${pokemonId}`); //faz a requisição na API do Pokemon 
            
            return pokemon;
        }

        const adicionaPokemon = async () => {

            const vetorTemp = [];
            
            for(let i = 0; i < 5; i++)
            {
                const pokemon = await buscaPokemon();

                vetorTemp.push(<Pokemon nome={pokemon.data.name} imgURL={pokemon.data.sprites.front_default}/>);    
            }

            setPokemons(vetorTemp);          


        }


        return (
            <>
                <button onClick={adicionaPokemon}>Gerar Pokemons</button>
                <div className="cards">
                    {pokemons}
                </div>
                
            </>
        )
}