import { Prosto_One } from "next/font/google";
import Image from "next/image";
import styles from './sw-char.module.css';

//definindo um tipo
export interface ISwCharProp {
    name:string,
    description:string,
    image:string
}

export default function SwChar(props: ISwCharProp){

    return (
        <section className={styles.card}>
            <h2>{props.name}</h2>
            <Image className= {styles.imagem}
                src={props.image}
                alt='Personagem de Star Wars'
                width={1920}
                height={1080}
            />
            <p className={styles.descricao}>{props.description}</p>
        </section>
    )
}