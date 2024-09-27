
import { useEffect, useState } from "react";
import logo from '../assets/logo.png';
import Footer from "../components/Footer/Footer";
import Search from "../components/Search/Search";
import "./details.css";
import logo_expedition from '../assets/logo_expedition.svg';
import albaProjeto from '../assets/albaProjeto.png'
import MoedaAlll from '../assets/moedas/MoedaAlll.svg'
import sistemas from '../assets/moedas/moedaSistema.svg'
import moedaAudiviusal from'../assets/moedas/moedaAudiovIsual.svg'
import moedaDesign from '../assets/moedas/moedaDesign.svg'
import moedaJogos from '../assets/moedas/MoedaJogos.svg'
import iconExteno from '../assets/icon/Externallink.svg'
import iconInsta from '../assets/icon/InstagramIcon.svg'
import iconEmail from '../assets/icon/iconEmail.svg'
import iconAtivo from '../assets/icon/iconAtivo.svg'
import iconBolsaInd from '../assets/icon/iconBolsaInd.svg'

import { selectMoedas } from "../components/moedas/moedasSelect";
import { Await, json, useParams } from 'react-router-dom';
import { getProject } from "../components/Cards/cards";
import { Project } from "./home";
import { Sistemas } from "./trilhas/sistemas";

import jogos_icon from '../assets/jogos_icon.svg'
import design_icon from '../assets/design_icon.svg'
import audiovisual_icon from '../assets/audiovisual_icon.svg'
import sistemas_icon from '../assets/sistemas_icon.svg'
import notrilha_icon from "../assets/notrilha_icon.svg"
import comVagas_icon from "../assets/comVagas.svg"
import semVagas_icon from "../assets/semVagas.svg"
import inativo_icon from "../assets/inativo.svg"
import ativo_icon from "../assets/ativo.svg"

export function Details() {
    const { projectId } = useParams()

const [project, setProject] = useState<Project>()    
const [search, setSearch] = useState("");



async function handleProject() {
    setProject(await getProject(projectId as string) as Project)
}

useEffect(() => {
    handleProject()
}, [projectId])




    if (document.readyState == "complete") {
        console.log(project?.trilha)
        
        return(
            

            <div className="body-details">
             
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
          
      <main className="maindetails">
       <div className="info_top-details">
           <div className="mascote-details">
               <img src={albaProjeto} alt="" />
           </div>
           <div className="filter">
           <span> <div>
                    {project?.trilha === "jogos" && (
                        <span className="tags-details"><img src={jogos_icon} alt="Jogos" className="icone-trilha" /> {project?.trilha} </span>
                    )}
                    {project?.trilha === "design" && (
                        <span className="tags-details"><img src={design_icon} alt="Design" className="icone-trilha" /> {project?.trilha} </span>
                    )}
                    {project?.trilha === "sistemas" && (
                        <span className="tags-details"><img src={sistemas_icon} alt="Sistemas" className="icone-trilha" /> {project?.trilha} </span>
                    )}
                    {project?.trilha === "audiovisual" && (
                        <span className="tags-details"><img src={audiovisual_icon} alt="Audiovisual" className="icone-trilha" /> {project?.trilha} </span>
                    )}
                    {project?.trilha === "" && (
                        <span className="tags-details"><img src={notrilha_icon} alt="Sem trilha" className="icone-trilha" /> Sem trilha definida </span>
                    )}
                    </div>
           </span>
           <span> <div>
                {parseInt(project?.vagas) >= 1 && (
                    <span className="tags-details"> <img src={comVagas_icon} className="icone-trilha"/> Vagas abertas: {project?.vagas} </span>
                )}
                {parseInt(project?.vagas) < 1 && (
                    <span className="tags-details"> <img src={semVagas_icon} alt="Jogos" className="icone-trilha" /> Não possui vagas abertas </span>
                )}
                </div></span>

           <span> <div>
                {Boolean(project?.finalizado) === true && (
                    <span className="tags-details"><img src={inativo_icon} className="icone-trilha" /> Projeto Inativo</span>
                )}
                {Boolean(project?.finalizado) === false && (
                    <span className="tags-details"><img src={ativo_icon} alt="Jogos" className="icone-trilha" /> Projeto Ativo</span>
                )}
                </div></span>

           </div>
       </div>
  
       <div className="text-details">
           <h1 className="title-details">{project?.nome}</h1>
           <p className="description">{project?.descricao}</p>

           <div className="moreInfo">
           <h2 className="moreInfo-h2">Mais informações</h2>
           <span className="iconF-details"><img src={iconExteno} alt="linkExterno-details" /> <p>linkesterno@gmail.com</p></span>
           <span className="iconF-details"><img src={iconInsta} alt="instagram-details" /> <p>@intagramteste</p></span>
           <span className="iconF-details"><img src={iconEmail} alt="email-details" /> <p>emailteste.123@ufc.br</p></span>
       </div>

       </div>

     
      </main>

   </div>
    )



    }
   
    
}
