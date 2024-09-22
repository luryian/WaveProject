/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../components/Cards/cards";
import "./editarProjeto.css"
import { Project } from "./home";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search/Search";
import logo from '../assets/logo.png';
import { db } from "../services/firebase";
import { doc, updateDoc } from "firebase/firestore";

export function EditarProjeto(){
    const { projectId } = useParams()

    const [project, setProject] = useState<Project>()    
    const [search, setSearch] = useState("");
    
    async function handleProject() {
        setProject(await getProject(projectId) as Project)
    }
    
    useEffect(() => {
        handleProject()
    }, [projectId])

    async function salvar(){
        let descricaoValue = (document.getElementById('descricao') as HTMLInputElement).value
        let linksValue = (document.getElementById('links') as HTMLInputElement).value
        let trilhaValue = (document.getElementById('trilha') as HTMLInputElement).value
        let aplicacaoValue = (document.getElementById('aplicacao') as HTMLInputElement).value
        const Ref = doc(db, "projetos", projectId);

        await updateDoc(Ref, {
            descricao: descricaoValue,
            links: linksValue,
            trilha: trilhaValue,
            aplicação: aplicacaoValue
        });

        console.log('atualizou')

    }
    
    return(
    
    <div className="body">
        <div className="header">
          <a href="/"><img src={logo} alt="logo" className="logo" /></a>
          <Search search={search} setSearch={setSearch}/>
      </div>

     
        <main>
        <div className="info_top">
            <div className="slider">
                <img src="src\assets\imgDetails_fake.svg" alt="slider" width={800} className="img"/>
                <p className="footer_img"></p>
            </div>
            <div className="filter">
                <p className="status"> iccon ativo</p> 
                <p className="status">iccon design</p>
                <p className="status" >iccon bolsista</p>

            </div>
        </div>

        <div className="text">
            <h1 className="title">{project?.nome}</h1>

            <label> descrição: </label>
            <input className="textInput" id="descricao" value={project?.descricao}></input>

            <label> Links importantes: </label>
            <input className="textInput" id="links" value={project?.links}></input>

            <label> Trilha: </label>
            <input className="textInput" id="trilha" value={project?.trilha}></input>

            <label> Aplicação: </label>
            <input className="textInput" id="aplicacao" value={project?.aplicacao}></input>

            <button id="salvar" onClick={salvar}> Salvar </button>
        </div>
        </main>

        <Footer/>
        </div>
            
)
}

//<label> Vagas Disponiveis </label>
//<input id="descricao" value={false}></input>