/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./home.css";

import CategoryFilters from "../components/CategoryFilters/CategoryFilters";
import FilterFeedback from "../components/FilterFeedback/FilterFeedback";
import { useNavigate} from 'react-router-dom';
import personagem_falando from '../assets/personagem_falando.svg'
import logo_expedition from '../assets/logo_expedition.svg';
import trilhas from '../assets/trilhas.png';
import audiovisualapp from '../assets/audiouvisualpp.svg'
import sistemas_mini from '../assets/sistemas_mini.svg'
import jogos_mini from '../assets/jogos_mini.svg'
import design_mini from '../assets/design_mini.svg';
import { getProject } from "../components/Cards/cards";
import DropdownFilter from '../components/DropdownFilter/DropdownFilter';
import Search from "../components/Search/Search";
import { getProjetos, logout } from "../services/firebase";
import { getAuth } from "firebase/auth"; 
import Carousel from "../components/Carousel/Carousel"
import { Slider } from "../components/Slider/Slider";

export interface Project {
    [x: string]: string;
    aplicacao: string;
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
                <h3> Página de Admin </h3>
            </div>
            <div className="carrossel">
                <Carousel></Carousel>
            </div>

            <div className="body-container">
                <div className="trilhas-container">
                    <img onClick={() => handleImageClick('/design')} src={trilhas} alt="trilha-design" />
                    <button onClick={() => handleImageClick('/design')}> </button>
                    <img src={audiovisualapp} alt="trilha-audiovisual" />
                    <img src={trilhas} alt="trilha-programacao" />
                    <img src={trilhas} alt="trilha-jogos" />
                </div>
                <div className="navbar-container">
                    <Search search={search} setSearch={setSearch}/>
                    <DropdownFilter setTrilhaSelecionada={setTrilhaSelecionada} trilhaSelecionada={trilhaSelecionada} />
                    <Slider/>
                </div> 
                <div className="listaProjetos">
                    {filteredProjetos.map((elem) => (
                        <div className="card bg-base-100 w-96 shadow-xl" key={elem.documentId}>
                            <div className="Button_SM" onClick={() => getProject(elem.documentId)}> 
                                <a href={`/details/${elem.documentId}`}><button className="Button_SM_details"> saiba mais</button></a>
                                <a className="button_Editar" href={`/details/${elem.documentId}`}>
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
                    
                    <div className="filter-projetos">
                        <div className="left-filter">
                            <CategoryFilters setTrilhaSelecionada={setTrilhaSelecionada} trilhaSelecionada={trilhaSelecionada} />
                        </div>
                        <div className="listaProjetos">
                            <div className="filter-feedback">
                                <FilterFeedback trilhaSelecionada={trilhaSelecionada} aplicacaoSelecionada={aplicacaoSelecionada}/>
                            </div>
                            <div className="cards-projetos">
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
            </div>
        </div>
    )

    
}

// criar as variações com diferentes returns na home de acordo com cadda área 
