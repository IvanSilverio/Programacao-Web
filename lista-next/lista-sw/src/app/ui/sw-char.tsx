import { Prosto_One } from "next/font/google";
import Image from "next/image";

//definindo um tipo
export interface ISwCharProp {
    name:string,
    description:string,
    image:string
}

export default function SwChar(props: ISwCharProp){

    return (
        <section>
            <h2>{props.name}</h2>
            <Image
                src={props.image}
                alt='Personagem de Star Wars'
                width={1920}
                height={1080}
            />
            <p>{props.description}</p>
        </section>
    )
}