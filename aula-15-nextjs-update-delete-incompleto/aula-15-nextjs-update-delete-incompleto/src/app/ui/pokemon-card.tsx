import Image from "next/image";
import "@/app/styles/pokemon-card.css";
import Link from "next/link";
import ConexaoBD from "../libs/conexao-bd";
import { redirect } from "next/navigation";

const bd : string = 'pokemon-db.json';

export interface PokemonProps{
    id: string,
    nome: string,
    img: string,
    descricao: string,
}

export default function Pokemon(props: PokemonProps)
{
    const deletarPokemon = async() => {
        'use server';

        //acessar o arquivo
       const listaPokemon = await ConexaoBD.retornaBD(bd);

       const idPokemon = listaPokemon.findIndex((p) => p.id === props.id);

       listaPokemon.splice(idPokemon, 1);

       await ConexaoBD.armazenaBD(bd, listaPokemon);

       redirect('/dashboard');
    }


    return(
        <div className="pokemonCard">
            <h2>{props.nome}</h2>
            <Image
                src={props.img}
                width={200}
                height={200}
                alt={`Imagem do pokémon ${props.nome}`}
            />
            <p>{props.descricao}</p>

            <div className='pokemon-button-container'>
                <link href= {'/dashboard/edit'} id="btn-edit"> Atualizar </link>

                <form action={deletarPokemon}>
                    <button id="button-delete"> Deletar </button>
                </form>
                
            </div>
            
        </div>
    )

}