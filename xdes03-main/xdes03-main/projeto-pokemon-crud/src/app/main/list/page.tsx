import Link from "next/link";

//Para ler arquivos com nextjs
import {promises as fs} from 'fs';
import path from "path";
import PokemonFav, { PokemonFavProps } from "@/app/ui/pokemon";

import '@/app/styles/ListPokemon.css';
import ConexaoBD from "@/app/lib/conexao-bd";

const arquivo = 'pokemon-db.json';

export default async function Listar() {

    const pokemonsDb = await ConexaoBD.retornaBD(arquivo);

    const pokemonsMapped = 
            pokemonsDb.map((pokemon: PokemonFavProps) => {
                return <PokemonFav {...pokemon}/>
            })
    return(
        <div className="list-container">
            <Link href={'/main/create'} className="add-pokemon">Adicionar</Link>
            <div className="list-pokemon-container">
                {pokemonsMapped}
            </div>
        </div>
        
    );
}

