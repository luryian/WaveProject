/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useEffect, useState } from "react";
import "./home.css";
import { getProjetos } from "../services/firebase";

export function Home() {
    const [projetos, setProjetos] = useState<any[]>([])
    const [search, setSearch] = React.useState("");


    useEffect(() => {
        getProjetos(setProjetos)
    }, [])
    

    const filteredProjetos = projetos.filter((elem) =>
        elem.nome.toLowerCase().includes(search.toLowerCase()) // Comparação em letras minúsculas para evitar case sensitivity
    );

    console.log(search);

    return(
        <div className="body">
            <input type="text" placeholder="Buscar projetos!" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <div className="projetosList">
                {filteredProjetos.map((elem) => (
                    <div key={elem.documentId} className="projetoCard"> 
                        <h3> {elem.nome} </h3>
                        <p> {elem.descricao} </p>
                    </div>
                ))}
            </div>
        </div>
        
    )
}