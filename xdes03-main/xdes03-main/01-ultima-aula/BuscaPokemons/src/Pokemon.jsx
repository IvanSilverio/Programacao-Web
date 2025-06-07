
//O componente React é uma função JavaScript. Por isso temos "function Pokemon". O nome do componente é o mesmo nome do arquivo
//O componente Pokemon recebe dois parâmetros: nome e imgURL.
//Os parâmetros recebidos por um componente React é um Objeto JavaSCript (JSON), e por isso podemos usar o operador "Desestruturar" buscando apenas os valores que nos interessam: {nome, imgURL}
//Quem chamar o componente precisa fornecer esses parâmetros.
export default function Pokemon({nome, imgURL}){


    //O componente é uma função que retorna a forma como se apresenta
    //O componente Pokemon se apresenta como um div, agrupando um paragrafo e uma imagem
    //Para parametrizar os valores dentro do HTML precisamos usar chaves { } para informar que naquele ponto temos na JavaScript que ira, em tempo de execução, subsituir os valores.
    return(
        <div>
            <p>{nome}</p>
            <img src={imgURL} alt="Uma imagem de um pokémon" />
        </div>
    )
    

}