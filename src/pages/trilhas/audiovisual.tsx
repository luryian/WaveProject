import { useEffect, useState } from "react"
import { Project } from "../home";
import './audiovisual.css'
import logo_expedition from '../../assets/logo_expedition.svg'
import ilha_udiovisual from '../../assets/trilha audivisual.png'
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";
import { getProjetos, logout } from "../../services/firebase";
import { getProject } from "../../components/Cards/cards";
import DropdownFilter from '../../components/DropdownFilter/DropdownFilter';
import { Slider } from "../../components/Slider/Slider";
import FilterFeedback from "../../components/FilterFeedback/FilterFeedback";

export function Audiovisual(){  
    
    const [search, setSearch] = useState("");
    const [projetos, setProjetos] = useState<Project[]>([]) 
    var trilhaCerta = 'design'
    const projetoosss: any[] = []
    const [trilhaSelecionada, setTrilhaSelecionada] = useState<string | null>(null);
    const [aplicacaoSelecionada, setAplicacaoSelecionada] = useState<string | null>(null);
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

                        
                                
                                    <h1 className="title-audivisual"> Projetos de Pesquisa</h1>


                                    <div className="body">
                    
                    <div className="body-container">
                        <div className="projetos-container">
                            <div className="projetos-title">
                            </div>
                            <div className="navbar-container">
                                <Search search={search} setSearch={setSearch}/>
                            </div>
                            <div className="filter-feedback">
                                <FilterFeedback trilhaSelecionada={trilhaSelecionada} aplicacaoSelecionada={aplicacaoSelecionada}/>
                            </div>
                            <div className="filter-projetos">
                                <div className="left-filter">
                                    <h3>Filtros</h3>
                                    <DropdownFilter setTrilhaSelecionada={setTrilhaSelecionada} trilhaSelecionada={trilhaSelecionada} />
                                    <Slider/>
                                </div>
                                <div className="listaProjetos">
                                    {projetos.map((elem) => (
                                        <a href={`/details/${elem.documentId}`}>
                                            <div className="card bg-base-100 w-96 shadow-xl" key={elem.documentId}>
                                                <div className="Button_SM" onClick={() => getProject(elem.documentId)}> 
                                                </div>
                                                <div key={elem.documentId} className="card-body card-text">
                                                    <h2 className="card-title">{elem.nome}</h2>
                                                </div>
                                                <div className="card-actions justify-between items-center">
                                                    <p>{elem.Codernador}</p>
                                                    <div className="badge badge-outline">{elem.trilha}</div>
                                                    
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                    </div>
        </div>
        
        

       
    )

}