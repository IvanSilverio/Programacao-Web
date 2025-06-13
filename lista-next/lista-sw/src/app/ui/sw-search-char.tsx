'use client'
import axios from 'axios'
import SwChar, { ISwCharProp } from './sw-char';
import { useState } from 'react';

export default function SWSearch(){

    const url = 'https://starwars-databank-server.vercel.app/api/v1/characters/name/';

    const [CanDisplay, setCanDisplay] = useState(false);

    const [SwCharState, setSwCharState] = useState( <SwChar name= '' description = '' image = ''/>);

    const buscaPersonagem = async (FormData: FormData) => {

        const nome = FormData.get('sw-name') || 'aa';

        const {data} = await axios.get(`${url}${nome}`)

        let newSwChar: ISwCharProp;

        if (data.length === 0){
            
            newSwChar = {
                name: 'Luke Cry Walker',
                description: 'Achou nada!',
                image: 'https://i.ytimg.com/vi/6E8qiKXNl3U/maxresdefault.jpg'
            }
        }

        else{
            newSwChar = {
                name: data[0].name,
                description: data[0].description,
                image: data[0].image
            }
        }
        setSwCharState(<SwChar {... newSwChar}/>)
        setCanDisplay(true);
    }

    return(
        <section>
            <form action={buscaPersonagem}>
                <input type="text" name="sw-name" id="sw-name" />
                <label htmlFor="sw-name" aria-hidden = 'true' hidden> Nome do Personagem </label>
                <button>Buscar</button>
            </form>

            {CanDisplay && SwCharState}
        </section>
    )
}