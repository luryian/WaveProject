/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./home.css";

import Search from "../components/Search/Search";
import logo from '../assets/logo.png';
import trilhas from '../assets/trilhas.png';
import DropdownFilter from '../components/DropdownFilter/DropdownFilter';
import { getProjetos } from "../services/firebase";
import Footer from "../components/Footer/Footer"
import cards from"../components/Cards/cards"

// import Carousel from "../components/Carousel/Carousel"


export function Home() {
    const [projetos, setProjetos] = useState<any[]>([])
    const [search, setSearch] = useState("");
    const [trilhaSelecionada, setTrilhaSelecionada] = useState<string | null>(null);

    useEffect(() => {
        getProjetos(setProjetos)
    }, [])

    const filteredByTrilha = trilhaSelecionada
    ? projetos.filter((elem) => elem.trilha === trilhaSelecionada)
    : projetos;

    const filteredProjetos = filteredByTrilha.filter((elem) =>
        elem.nome.toLowerCase().includes(search.toLowerCase()) ||
        elem.Codernador.toLowerCase().includes(search.toLowerCase()) // Comparação sem case sensitivity
      );

      

    return(
        <div className="body">
            <div className="header">
                <img src={logo} alt="logo" className="logo" />
            </div>

            
            <div className="trilhas-container">
                <img src={trilhas} alt="trilha-design" />
                <img src={trilhas} alt="trilha-audiovisual" />
                <img src={trilhas} alt="trilha-programacao" />
                <img src={trilhas} alt="trilha-jogos" />
            </div>
            <div className="navbar-container">
                <Search search={search} setSearch={setSearch}/>
                <DropdownFilter setTrilhaSelecionada={setTrilhaSelecionada} trilhaSelecionada={trilhaSelecionada} />
            </div> 
            <div className="listaProjetos">
                {filteredProjetos.map((elem) => (
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <div className="Button_SM" onClick={""}> 
                            <a href="/details"><button className="Button_SM_details"> saiba mais</button></a>

                        </div>
                        <div key={elem.documentId} className="card-body card-text">
                            <h2 className="card-title">{elem.nome}</h2>
                        </div>
                        <div className="card-actions justify-between items-center">
                            <p>{elem.Codernador}</p>
                            <div className="badge badge-outline">{elem.trilha}</div>
                            
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )

    
}

// criar as variações com diferentes returns na home de acordo com cadda área 