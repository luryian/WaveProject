/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./home.css";
import { getProjetos } from "../services/firebase";
import Search from "../components/Search/Search";
import logo from '../assets/logo.png';
import trilhas from '../assets/trilhas.png';
import DropdownFilter from '../components/DropdownFilter/DropdownFilter';
import Carousel from "../components/Carousel/Carousel"


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
                <Search search={search} setSearch={setSearch}/>
            </div>

            <Carousel />
            
            <div className="trilhas-container">
                <img src={trilhas} alt="trilha-design" />
                <img src={trilhas} alt="trilha-audiovisual" />
                <img src={trilhas} alt="trilha-programacao" />
                <img src={trilhas} alt="trilha-jogos" />
            </div>
            <div className="navbar-container">
                <span className="flex items-center">
                    <span className="pr-6">Lorem, ipsum dolor</span>
                    <span className="h-px flex-1 bg-black"></span>
                </span>
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