import { useState } from "react";

export default function Navbar(){

    const [aberto, setAberto] = useState("");

    function toggleMenu(){
        setAberto(!aberto);
    }

    const menuClasse = aberto ? "menu ativo" : "menu";

    return(

        <nav className="nav">
            <h2 className="logo">Oficina Express</h2>

            <button className="btn-menu" onClick={toggleMenu}>
                &#9776;
            </button>

            <ul className={menuClasse}>
                <li>Home</li>
                <li>Serviços</li>
                <li>Sobre</li>
            </ul>

        </nav>

    );
}