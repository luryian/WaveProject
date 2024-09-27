import { useEffect, useState } from "react"
import { Project } from "../home";
import './audiovisual.css'
import logo_expedition from '../../assets/logo_expedition.svg'
import ilha_udiovisual from '../../assets/trilha audivisual.png'
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";
import { getProjetos, logout } from "../../services/firebase";
import { getProject } from "../../components/Cards/cards";

export function Audiovisual(){  
    
    const [search, setSearch] = useState("");
    const [projetos, setProjetos] = useState<Project[]>([]) 
    var trilhaCerta = 'design'
    const projetoosss: any[] = []
    const projetosFiltered = projetos.filter( (value: Project) => value.trilha.includes('design'))
    useEffect (() => {
        if (projetos.length === 0) {
            getProjetos(setProjetos)
            console.log('é pra exucuutar uma vez')
          
        }
        
    })

    
    return(
        <div className="body-audiovisual">
         
         <div className="header">
               <a href="/"><img src={logo_expedition} alt="logo" className="logo" /></a>
               <div className="header-trilhas">
                   <a href="">Sistemas</a>
                   <a href="">Design</a>
                   <a href="">Audiovisual</a>
                   <a href="">Jogos</a>
                   <a href="">Aplicações</a>
               </div>
           </div>
           <div className="ilha-audivisual">
            <img src={ilha_udiovisual} alt="ilha_audivisual" className="asset-ilhaAudivisual" />
           </div>

           <main>
            <div>
                <h1 className="title-audivisual"> Projetos de Pesquisa</h1>
                <div className="navbar-container">
                    <Search search={search} setSearch={setSearch}/>
                </div> 
            </div>

            <div className="listaProjetos">

                    {
                    projetosFiltered.map((elem) => (
                        <div className="card bg-base-100 w-96 shadow-xl" key={elem.documentId}>
                            <div className="Button_SM" onClick={() => getProject(elem.documentId)}> 
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
                    ))}
                </div>


           </main>
           <Footer/>
        </div>
        
        

       
    )

}