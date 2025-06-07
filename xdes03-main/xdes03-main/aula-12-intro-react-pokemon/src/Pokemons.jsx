import axios from "axios";
import Pokemon from "./Pokemon";
import { useEffect, useState } from "react";

import './styles/Pokemons.css';

export default function Pokemons(){

    const [pokemons, setPokemons] = useState([]);


    const buscaNovoPokemon = async () => {
        const pokemonId = Math.trunc((Math.random()*250)+1);
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

        return pokemon;
    }

    const buscaNovosPokemons = async () => {

        let tempArray = [];
        for(let i = 0; i < 3; i++)
        {
            let pokemon = await buscaNovoPokemon();
            tempArray.push(<Pokemon nome={pokemon.data.forms[0].name} 
                img={pokemon.data.sprites.front_default}/>);
        }
        
        
        setPokemons(tempArray);
        
    }

    useEffect(() => {

        buscaNovosPokemons();
      },[]);

    return(
        <>
            <section>
                <button onClick={buscaNovosPokemons}>Gerar Novos Pokémons</button>
            </section>
            <section className="cards">
                {pokemons}
            </section>
            
            
        </>
    );


}