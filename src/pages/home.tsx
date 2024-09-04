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
                        <h3> {elem.nome} </h3>
                        <p> {elem.descricao} </p>
                    </div>
                ))}
            </div>
        </div>
        
    )
}