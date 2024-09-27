
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
          
      <main>
       <div className="info_top-details">
           <div className="mascote-details">
               <img src={albaProjeto} alt="" />
           </div>
           <div className="filter">
           <span><img src= {sistemas} alt="moedaAll" className="moedas-details" /><p className="tags-details">{project?.trilha}</p> </span>
           <span> <img src={iconAtivo} alt="iconAtivo" className="moedas-details" /> <p className="tags-details">{project?.Status}</p></span>
           <span> <img src={iconBolsaInd} alt="icon-bolsal-indisponivel" /><p className="tags-details" >{project?.vaga}</p></span>

           </div>
       </div>
  
       <div className="text-details">
           <h1 className="title-details">{project?.nome}</h1>
           <p className="description">descricao: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dolores similique suscipit velit esse fuga nemo soluta repellat nihil nostrum explicabo ad, asperiores facere alias, dolore illum? Blanditiis, ipsa rem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur amet molestiae quo sequi perspiciatis nesciunt! Quam ratione totam dignissimos numquam, quibusdam laborum voluptatum saepe non, necessitatibus magni exercitationem cupiditate unde? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic temporibus eos corrupti, quidem rem error qui non, id, ad deserunt sequi quam. Quis sit vero distinctio eum sequi officia voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum itaque maiores quam tempora vitae cum laborum asperiores ad tempore, consequatur molestiae doloribus, explicabo ipsa! Vel minima fugit ad incidunt.</p>

           <div className="moreInfo">
           <h2 className="moreInfo-h2">Mais informações</h2>
           <span className="iconF-details"><img src={iconExteno} alt="linkExterno-details" /> <p>linkesterno@gmail.com</p></span>
           <span className="iconF-details"><img src={iconInsta} alt="instagram-details" /> <p>@intagramteste</p></span>
           <span className="iconF-details"><img src={iconEmail} alt="email-details" /> <p>emailteste.123@ufc.br</p></span>
       </div>

       </div>

     
      </main>

       <Footer/>
   </div>
    )



    }
   
    
}
