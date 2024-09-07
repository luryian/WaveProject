/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./home.css";
import { getProjetos } from "../services/firebase";
import Search from "../components/Search/Search";
import logo from '../assets/logo.png';
import trilhas from '../assets/trilhas.png';
import DropdownFilter from '../components/DropdownFilter/DropdownFilter';
// import Carousel from "../components/Carousel/Carousel"


export function Home() {
    const [projetos, setProjetos] = useState<any[]>([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        getProjetos(setProjetos)
        
    }, [])
      

    const filteredProjetos = projetos.filter((elem) =>
        elem.nome.toLowerCase().includes(search.toLowerCase()) // Comparação em letras minúsculas para evitar case sensitivity
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
                    <div key={elem.documentId} className="card-body">
                        <h2 className="card-title">{elem.nome}</h2>
                        <p>{elem.Codernador}</p>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
        
    )
}