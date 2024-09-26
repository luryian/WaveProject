/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../components/Cards/cards";
import "./editarProjeto.css"
import { Project } from "./home";
import { db } from "../services/firebase";
import { doc, updateDoc } from "firebase/firestore";
import logo_expedition from '../assets/logo_expedition.svg';



export function EditarProjeto(){
    const { projectId } = useParams()

    const [project, setProject] = useState<Project>()    
    
    
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
        let finalizadoValue = (document.getElementById('finalizado') as HTMLInputElement).checked
        let vagasValue = (document.getElementById('vagas') as HTMLInputElement).value
        let vagasAreaValue = (document.getElementById('vagasArea') as HTMLInputElement).value



        const Ref = doc(db, "projetos", projectId);

        await updateDoc(Ref, {
            descricao: descricaoValue,
            links: linksValue,
            trilha: trilhaValue,
            aplicação: aplicacaoValue,
            finalizado: finalizadoValue,
            vagas: vagasValue,
            vagasArea: vagasAreaValue,
        });

        alert("Projeto editado com sucesso")

    }
    
    return(
    
    <div className="bodyEdit">
        <div className="headerEdit">
          <a href="/"><img src={logo_expedition} alt="logo" className="logoEdit" /></a>
      </div>

     
        <main className="mainEdit">

            <h1 className="editarProjeto">Adicione ou edite as informações adicionais desse Projeto</h1>

        <div className="text">
            <h2 className="title">{project?.nome}</h2>

            <div className="checkdiv">
                <label className="labelText"> Projeto finalizado?</label>
                <input type="checkbox" id="finalizado" ></input>
            </div>

            <label className="labelText"> Links importantes: </label>
            <input className="textInput" id="links" value={project?.links}></input>

            <label className="labelText"> Trilha: </label>
            <input className="textInput" id="trilha" value={project?.trilha}></input>

            <label className="labelText"> Aplicação: </label>
            <input className="textInput" id="aplicacao" value={project?.aplicacao}></input>

            <label className="labelText"> Se possui vagas disponiveis, quantas? </label>
            <input type="number" className="textInput" id="vagas" value={project?.vagas}></input>

            <label className="labelText"> As vagas disponiveis são para qual aréa? </label>
            <input className="textInput" id="vagasArea" value={project?.vagasArea}></input>

            <label className="labelText"> Links importantes: </label>
            <input className="textInput" id="links" value={project?.links}></input>

            <label className="labelText"> descrição: </label>
            <textarea className="textInput" id="descricao" value={project?.descricao}></textarea>

            <button id="salvar" onClick={salvar}> Salvar </button>
        </div>
        </main>
        </div>
            
)
}

//<label> Vagas Disponiveis </label>
//<input id="descricao" value={false}></input>