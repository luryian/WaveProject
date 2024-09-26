/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./home.css";

import FilterFeedback from "../components/FilterFeedback/FilterFeedback";
import { useNavigate} from 'react-router-dom';
import personagem_falando from '../assets/personagem_falando.svg'
import logo_expedition from '../assets/logo_expedition.svg';
import audiovisualapp from '../assets/audiouvisualpp.svg'
import sistemas_mini from '../assets/sistemas_mini.svg'
import jogos_mini from '../assets/jogos_mini.svg'
import design_mini from '../assets/design_mini.svg';
import { getProject } from "../components/Cards/cards";
import DropdownFilter from '../components/DropdownFilter/DropdownFilter';
import DropdownAplicacao from '../components/Dropdown_Aplicacoes/Dropdown_Aplicacoes';
import Search from "../components/Search/Search";
import { getProjetos, logout } from "../services/firebase";
import Footer from "../components/Footer/Footer"
import { getAuth } from "firebase/auth"; 
import Carousel from "../components/Carousel/Carousel"
import { Slider } from "../components/Slider/Slider";
import ondaSemFundo from "../assets/onda_semfundo.svg"
import edit from "../assets/Edit.svg"

export interface Project {
    [x: string]: string;
    Carga: string
    Codernador: string
    Empresa: string
    ID: string
    Inicio: string
    Remuneração: string
    Status: string
    documentId: string
    nome: string
    trilha: string
    descricao: string
    links: string
    aplicacao: string
    vagas: number
}


export function Home() {
    const navigate = useNavigate();
    const [projetos, setProjetos] = useState<Project[]>([])
    const [search, setSearch] = useState("");
    const [trilhaSelecionada, setTrilhaSelecionada] = useState<string | null>(null);
    const [aplicacaoSelecionada, setAplicacaoSelecionada] = useState<string | null>(null);


    useEffect(() => {
        getProjetos(setProjetos)
    }, [])

    // Primeiro, filtramos pela trilha se a trilha estiver selecionada, senão retornamos todos os projetos.
    const filteredByTrilha = trilhaSelecionada
    ? projetos.filter((elem) => elem.trilha === trilhaSelecionada)
    : projetos;

    // Depois, filtramos pela aplicação se a aplicação estiver selecionada, senão retornamos todos os projetos.
    const filteredByAplicacao = aplicacaoSelecionada
    ? projetos.filter((elem) => elem.aplicação === aplicacaoSelecionada)
    : projetos;

    // A seguir, combinamos os dois filtros. Se ambos forem filtrados, fazemos a interseção, ou seja, projetos que passam em ambos os filtros.
    // Se um deles não estiver filtrado (ou seja, tiver todos os projetos), então ele não altera o resultado final.
    const filteredProjetos = projetos
    .filter((elem) => filteredByTrilha.includes(elem))
    .filter((elem) => filteredByAplicacao.includes(elem))
    .filter((elem) =>
        elem.nome.toLowerCase().includes(search.toLowerCase()) ||
        elem.Codernador.toLowerCase().includes(search.toLowerCase()) 
    );
    const auth = getAuth();
    const user = auth.currentUser;

    const handleImageClick = (path: string) => {
        navigate(path); // Caminho para onde quer redirecionar
    };

    if (user){
        console.log(user)
        return(
            <div className="body">
            <div className="header">
                <img src={logo_expedition} alt="logo" className="logo" />
                <div className="header-trilhas">
                    <a href="">Sistemas</a>
                    <a href="">Design</a>
                    <a href="">Audiovisual</a>
                    <a href="">Jogos</a>
                    <a href="">Aplicações</a>
                </div>
            </div>
            

            <div className="carrosselAdmin">
                <Carousel></Carousel>
            </div>

            <img className="ondaAdmin" src={ondaSemFundo}></img>

            
            <div className="body-container">
                
                <div className="projetos-containerAdmin">
                    <div className="projetos-title">
                        <h2>Projetos de pesquisa</h2>
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
                            <DropdownAplicacao setAplicacaoSelecionada={setAplicacaoSelecionada} aplicacaoSelecionada={aplicacaoSelecionada}/>
                            <Slider/>
                        </div>
                        <div className="listaProjetos">
                            {filteredProjetos.map((elem) => (
                                <a href={`/details/${elem.documentId}`}>
                                    <div className="card bg-base-100 w-96 shadow-xl" key={elem.documentId}>
                                    <a className="button_Editar" href={`/editarProjeto/${elem.documentId}`}>
                                    <img src={edit}></img>
                                    </a>
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
        )
    }
      

    return(
        <div className="body">
            <div className="header">
                <img src={logo_expedition} alt="logo" className="logo" />
                <div className="header-trilhas">
                    <a href="">Sistemas</a>
                    <a href="">Design</a>
                    <a href="">Audiovisual</a>
                    <a href="">Jogos</a>
                    <a href="">Aplicações</a>
                </div>
            </div>
            <div className="carrossel">
                <Carousel></Carousel>
            </div>
            <div className="personagem">
                <img src={personagem_falando} alt="" />
            </div>
            <div className="body-container">
                <div className="trilhas">
                    <h2 className="-">Trilhas</h2>
                    <div className="trilhas-container">
                        <img onClick={() => handleImageClick('/design')} src={design_mini} alt="trilha-design" className="img-trilha"/>
                        <img onClick={() => handleImageClick('/audiovisual')} src={audiovisualapp} alt="trilha-audiovisual" />
                        <img onClick={() => handleImageClick('/sistemas')} src={sistemas_mini} alt="trilha-programacao" />
                        <img onClick={() => handleImageClick('/jogos')} src={jogos_mini} alt="trilha-jogos" />
                    </div>
                </div>
                <div className="projetos-container">
                    <div className="projetos-title">
                        <h2>Projetos de pesquisa</h2>
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
                            <DropdownAplicacao setAplicacaoSelecionada={setAplicacaoSelecionada} aplicacaoSelecionada={aplicacaoSelecionada}/>
                            <Slider/>
                        </div>
                        <div className="listaProjetos">
                            {filteredProjetos.map((elem) => (
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
    )

    
}

