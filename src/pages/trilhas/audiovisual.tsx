import { useEffect, useState } from "react"
import { getTrilha } from "../../components/ilhasFilter/ilhasFilter"
import { Project } from "../home";

export function Audiovisual(){ 

    const [trilhaPage] = useState<Project[]>([])
    useEffect (() => {
        getTrilha('design',trilhaPage)
        console.log('é pra exucuutar uma vez')
        
    })

    console.log(trilhaPage)
    return(
        <div className="listaProjetos">
            
                  {
                      trilhaPage.map((elem) => (
                    <div className="card bg-base-100 w-96 shadow-xl" key={elem.documentId}>
                    <div className="Button_SM">   
                        <a href={`/details/${elem.documentId}`}><button className="Button_SM_details"> saiba mais</button></a>
                        <a className="button_Editar" href={`/editarProjeto/${elem.documentId}`}>
                        <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.3684 10.5176C40.2105 9.67622 40.2105 8.4141 39.3684 7.57269L34.5263 2.73458C33.6842 1.89317 32.4211 1.89317 31.5789 2.73458L27.7895 6.52093L35.7895 14.5143M2.10526 31.9736V39.967H10.1053L33.2632 16.6178L25.4737 8.62445L2.10526 31.9736ZM10.5263 0V6.31058H16.8421V10.5176H10.5263V16.8282H6.31579V10.5176H0V6.31058H6.31579V0H10.5263Z" fill="#787878"/>
                        </svg>
                    </a>

                    </div>
                    <div key={elem.documentId} className="card-body card-text">
                        <h2 className="card-title">{elem.nome}</h2>
                    </div>
                    <div className="card-actions justify-between items-center">
                        <p>{elem.Codernador}</p>
                        <div className="badge badge-outline">{elem.trilha}</div>
                        
                    </div>
                </div>      
                ))
                  } 
                
          


              
        </div>
         
        

       
    )

}