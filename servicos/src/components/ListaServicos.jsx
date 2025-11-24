import { useState } from "react";
import CardServico from "./CardServico"

export default function ListaServicos(){

    const [servicos, setServicos] = useState([

        {id: 1, nome: "Troca de Óleo", preco: 89, desc: "Troca completa"},
        {id: 2, nome: "Alinhamento", preco: 120, desc: "Carro alinhado"},
        {id: 3, nome: "Balanceamento", preco: 70, desc: "Segurança total"}
    ]);

    const [novoNome, setNovoNome] = useState("");
    const [novoPreco, setNovoPreco] = useState("");

    function adicionarServico(){

        if(novoNome.trim() === "" || novoPreco.trim() === ""){
            return alert("Preencha nome e preço")
        }

        const precoNumero = Number(novoPreco);

        if(isNaN(precoNumero)){
            return alert("Preço inválido. Digite apenas números.");
        }

        const novoServico = {
            id: servicos.length + 1,
            nome: novoNome,
            preco: precoNumero,
            desc: "Serviço extra adicionado manualmente."
        }

        setServicos([...servicos, novoServico]);

        setNovoNome("");
        setNovoPreco("");
    }

        const mensagem = servicos.length > 3 ? "Muitos serviços cadastrados!" : "Poucos serviços ainda...";
            

    return(

        <section className="lista">

            <h2>Lista de Serviços</h2>
            <p>{mensagem}</p>

            <input 
                type="text"
                value={novoNome}
                onChange={(e)=>setNovoNome(e.target.value)}
                placeholder="Nome do serviço"
            />

            <input 
                type="number"
                value={novoPreco}
                onChange={(e)=>setNovoPreco(e.target.value)}
                placeholder="Preço"
            />

            <button onClick={adicionarServico}>Adicionar</button>

            <div className="grade">

                {servicos.map((s)=>(
                    <CardServico key={s.id} servico={s} />
                ))}

            </div>
        </section>
    );
};