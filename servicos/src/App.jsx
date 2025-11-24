import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Servicos from "./pages/Servicos"
import Sobre from "./pages/Sobre"

export default function App(){

    return(

        <div className="container-app">
            
            <Navbar />

                <main className="conteudo">
                    <Home />
                    <Servicos />
                    <Sobre />
                </main>

            <Footer />

        </div>

    );
}