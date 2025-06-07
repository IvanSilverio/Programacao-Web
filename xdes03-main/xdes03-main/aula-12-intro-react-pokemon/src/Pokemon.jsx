import "./styles/Pokemon.css"

export default function Pokemon({nome, img}){

    return(
        <>
            <div className="card">
                <h2>{nome}</h2>
                <img src={img} />
            </div>
            
        </>
    );
}