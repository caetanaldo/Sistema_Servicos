export default function CardServico({ servico }){

    return(
        <div className="card">
            <h3> {servico.nome} </h3>
            <p>{servico.desc}</p>
            <strong>RS ${servico.preco}</strong>
        </div>
    )
}