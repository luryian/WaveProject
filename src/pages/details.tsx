
import { useEffect, useState } from "react";
import logo from '../assets/logo.png';
import Footer from "../components/Footer/Footer";
import Search from "../components/Search/Search";
import "./details.css";

import { useParams } from 'react-router-dom';
import { getProject } from "../components/Cards/cards";
import { Project } from "./home";

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
                <p className="status"> icon ativo</p> 
                <p className="status">icon design</p>
                <p className="status" >icon bolsista</p>

            </div>
        </div>
   
        <div className="text">
            <h1 className="title">{project?.nome}</h1>
            <p className="description">descricao: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur amet molestiae quo sequi perspiciatis nesciunt! Quam ratione totam dignissimos numquam, quibusdam laborum voluptatum saepe non, necessitatibus magni exercitationem cupiditate unde? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic temporibus eos corrupti, quidem rem error qui non, id, ad deserunt sequi quam. Quis sit vero distinctio eum sequi officia voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum itaque maiores quam tempora vitae cum laborum asperiores ad tempore, consequatur molestiae doloribus, explicabo ipsa! Vel minima fugit ad incidunt.</p>
        </div>
       </main>

        <Footer/>
    </div>
        
    )
}
