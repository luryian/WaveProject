import { useEffect, useState } from "react"
import { getTrilha } from "../../components/ilhasFilter/ilhasFilter"
import { Project } from "../home";
import './audiovisual.css'
import logo_expedition from '../../assets/logo_expedition.svg'
import ilha_Sistemas from '../../assets/ilha sistemas.png'
import DropdownFilter from '../../components/DropdownFilter/DropdownFilter';
import Search from "../../components/Search/Search";
import { Slider } from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";


export function Sistemas(){ 

    const [trilhaPage] = useState<Project[]>([])
    const [search, setSearch] = useState("");
    const [trilhaSelecionada, setTrilhaSelecionada] = useState<string | null>(null);

    useEffect (() => {
        getTrilha('design',trilhaPage)
        console.log('é pra exucuutar uma vez')
        
    })

   

    console.log(trilhaPage)
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
            <img src={ilha_Sistemas} alt="ilha_audivisual" className="asset-ilhaAudivisual" />
           </div>

           <main>
            <div>
                <h1 className="title-audivisual"> Projetos de Pesquisa</h1>
                <div className="navbar-container">
                    <Search search={search} setSearch={setSearch}/>
                </div> 
            </div>
           </main>
           <Footer/>
        </div>
        
        

       
    )

}