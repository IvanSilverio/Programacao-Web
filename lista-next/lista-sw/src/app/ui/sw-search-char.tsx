'use client'
import axios from 'axios'
import SwChar, { ISwCharProp } from './sw-char';
import { useState } from 'react';
import styles from './sw-search-char.module.css';


export default function SWSearch(){

    const url = 'https://starwars-databank-server.vercel.app/api/v1/characters/name/';

    const [CanDisplay, setCanDisplay] = useState(false);

    const [SwCharState, setSwCharState] = useState( <SwChar name= '' description = '' image = ''/>);

    const buscaPersonagem = async (FormData: FormData) => {

        const nome = FormData.get('sw-name');

        let newSwChar: ISwCharProp;

        if (!nome) {  // checa se está vazio ou null
            newSwChar = {
                name: 'O nome não pode ser vazio! :(',
                description: 'Escreva algum personagem para buscar',
                image: 'https://i.ytimg.com/vi/6E8qiKXNl3U/maxresdefault.jpg'
            };
            setSwCharState(<SwChar {...newSwChar} />);
            setCanDisplay(true);
            return;
        }

        const {data} = await axios.get(`${url}${nome}`)

        if (data.length === 0){
            
            newSwChar = {
                name: 'Não conheço esse personagem! :(',
                description: 'Verifique se escreveu corretamente',
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
        <section className={styles.busca}>
            <form action={buscaPersonagem}>
                    <input type="text" name="sw-name" id="sw-name" className={styles.inputBusca}/>
                    <label htmlFor="sw-name" aria-hidden = 'true' hidden> Nome do Personagem </label>
                    <button className={styles.botao}> Buscar</button>
            </form>

            {CanDisplay && SwCharState}
        </section>
    )
}