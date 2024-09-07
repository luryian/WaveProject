/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./home.css";
import { getProjetos } from "../services/firebase";
import Search from "../components/Search/Search";
import logo from '../assets/logo.png';
import trilhas from '../assets/trilhas.png';
import DropdownFilter from '../components/DropdownFilter/DropdownFilter';
import Footer from "../components/Footer/Footer"
// import Carousel from "../components/Carousel/Carousel"


export function Home() {
    const [projetos, setProjetos] = useState<any[]>([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        getProjetos(setProjetos)
        
    }, [])
      

    const filteredProjetos = projetos.filter((elem) =>
        elem.nome.toLowerCase().includes(search.toLowerCase()) ||
    elem.Codernador.toLowerCase().includes(search.toLowerCase()) // Comparação em letras minúsculas para evitar case sensitivity
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
                <DropdownFilter/>
            </div>
            <div className="listaProjetos">
                {filteredProjetos.map((elem) => (
                    <div className="card bg-base-100 w-96 shadow-xl">
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