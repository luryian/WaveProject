/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./home.css";
import { getProjetos } from "../services/firebase";

export function Home() {
    const [projetos, setProjetos] = useState<any[]>([])

    useEffect(() => {
        getProjetos(setProjetos)
    }, [])

    return(
        <div className="body">
            <div className="projetosList">
                {projetos.map((elem) => (
                    <div key={elem.documentId} className="projetoCard">  
                        <a href="/detalhesPojeto" >
                            <h3> {elem.nome} </h3>
                            <p> {elem.descricao} </p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

// criar as variações com diferentes returns na home de acordo com cadda área 