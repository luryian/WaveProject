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
        <>
        <nav>
            
        </nav>

        <div>
            {projetos.map((elem) => (
                <div key={elem.documentId}> 
                    <h3> {elem.nome} </h3>
                </div>
            ))}
        </div>
        </>
        
    )
}