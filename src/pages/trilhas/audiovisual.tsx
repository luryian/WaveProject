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
import { getAuth } from "firebase/auth"; 


import CategoryFilters from "../../components/CategoryFilters/CategoryFilters";
import { useNavigate} from 'react-router-dom';

import edit from "../../assets/Edit.svg"
import jogos_icon from '../../assets/jogos_icon.svg'
import design_icon from '../../assets/design_icon.svg'
import audiovisual_icon from '../../assets/audiovisual_icon.svg'
import sistemas_icon from '../../assets/sistemas_icon.svg'
import notrilha_icon from "../../assets/notrilha_icon.svg"
import comVagas_icon from "../../assets/comVagas.svg"
import semVagas_icon from "../../assets/semVagas.svg"
import inativo_icon from "../../assets/inativo.svg"
import ativo_icon from "../../assets/ativo.svg"


import audiovisualapp from '../../assets/audiouvisualpp.svg'
import sistemas_mini from '../../assets/sistemas_mini.svg'
import jogos_mini from '../../assets/jogos_mini.svg'
import design_mini from '../../assets/design_mini.svg';

export function Audiovisual(){  

    
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [projetos, setProjetos] = useState<Project[]>([]) 
    var trilhaCerta = 'design'
    const projetoosss: any[] = []
    const [trilhaSelecionada, setTrilhaSelecionada] = useState<string | null>(null);
    const [aplicacaoSelecionada, setAplicacaoSelecionada] = useState<string | null>(null);
    const [atividade, setAtividade] = useState<boolean | null>(null);
    const [vagaDisponivel, setVagaDisponivel] = useState<boolean| null>(null);
  

    useEffect (() => {
        if (projetos.length === 0) {
            getProjetos(setProjetos)
            console.log('é pra exucuutar uma vez')
          
        }

         
    })

    // Primeiro, filtramos pela trilha se a trilha estiver selecionada, senão retornamos todos os projetos.
    const filteredByTrilha = trilhaSelecionada
    ? projetos.filter((elem) => elem.trilha === trilhaSelecionada)
    : projetos;

    // Depois, filtramos pela aplicação se a aplicação estiver selecionada, senão retornamos todos os projetos.
    const filteredByAplicacao = aplicacaoSelecionada
    ? projetos.filter((elem) => elem.aplicação === aplicacaoSelecionada)
    : projetos;

    const filteredByVagas = vagaDisponivel
    ? projetos.filter((elem) => parseInt(elem.vagas) >= 1)
    : projetos;

    const filteredByAtividade = atividade
    ? projetos.filter((elem) => Boolean(elem.finalizado) === true)
    : projetos;

    // A seguir, combinamos os dois filtros. Se ambos forem filtrados, fazemos a interseção, ou seja, projetos que passam em ambos os filtros.
    // Se um deles não estiver filtrado (ou seja, tiver todos os projetos), então ele não altera o resultado final.
    const filteredProjetos = projetos
    .filter((elem) => filteredByTrilha.includes(elem))
    .filter((elem) => filteredByAplicacao.includes(elem))
    .filter((elem) => filteredByVagas.includes(elem))
    .filter((elem) => filteredByAtividade.includes(elem))

    .filter((elem) =>
        elem.nome.toLowerCase().includes(search.toLowerCase()) ||
        elem.Codernador.toLowerCase().includes(search.toLowerCase()) 
    );
    const auth = getAuth();
    const user = auth.currentUser;

    const handleImageClick = (path: string) => {
        navigate(path); // Caminho para onde quer redirecionar
    };

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
                               
                            </div>
                            <div className="filter-projetos">
                            <div className="left">
                            <CategoryFilters setTrilhaSelecionada={setTrilhaSelecionada} trilhaSelecionada={trilhaSelecionada}  setAplicacaoSelecionada={setAplicacaoSelecionada} aplicacaoSelecionada={aplicacaoSelecionada}/>
                            <Slider setVagaDisponivel={setVagaDisponivel} vagaDisponivel={vagaDisponivel} setAtividade={setAtividade} atividade={atividade}/>
                        </div>
                                <div className="left-filter">
                                   
                                </div>
                                <div className="listaProjetos">
                                <div className="filter-feedback">
                                <FilterFeedback trilhaSelecionada={trilhaSelecionada} aplicacaoSelecionada={aplicacaoSelecionada} atividade={atividade} vagaDisponivel={vagaDisponivel}/>
                            </div>
                            <div className="cards-projetos">
                                {projetos.map((elem) => (
                                    <a href={`/details/${elem.documentId}`}>
                                        <div className="card bg-base-100 w-96 h-38 shadow-xl" key={elem.documentId}>
                                            <div className="Button_SM" onClick={() => getProject(elem.documentId)}> 
                                            </div>
                                            <a className="button_Editar" href={`/editarProjeto/${elem.documentId}`}>
                                                <img src={edit}></img>
                                            </a>
                                            <div key={elem.documentId} className="card-text">
                                                <h2 className="card-title">{elem.nome}</h2>
                                            </div>
                                            <div className="card-actions justify-between items-center;">
                                                <p className="nome-coordenador">{elem.Codernador}</p>
                                                
                                                <div className="card-actions">
                                                    <div>
                                                    {elem.trilha === "jogos" && (
                                                        <img src={jogos_icon} alt="Jogos" className="icone-trilha" />
                                                    )}
                                                    {elem.trilha === "design" && (
                                                        <img src={design_icon} alt="Design" className="icone-trilha" />
                                                    )}
                                                    {elem.trilha === "sistemas" && (
                                                        <img src={sistemas_icon} alt="Sistemas" className="icone-trilha" />
                                                    )}
                                                    {elem.trilha === "audiovisual" && (
                                                        <img src={audiovisual_icon} alt="Audiovisual" className="icone-trilha" />
                                                    )}
                                                    {elem.trilha === "" && (
                                                        <img src={notrilha_icon} alt="Sem trilha" className="icone-trilha" />
                                                    )}
                                                    </div>

                                                    <div>
                                                    {parseInt(elem.vagas) >= 1 && (
                                                        <img src={comVagas_icon} className="icone-trilha" />
                                                    )}
                                                    {parseInt(elem.vagas) < 1 && (
                                                        <img src={semVagas_icon} alt="Jogos" className="icone-trilha" />
                                                    )}
                                                    </div>

                                                    <div>
                                                    {Boolean(elem.finalizado) === true && (
                                                        <img src={inativo_icon} className="icone-trilha" />
                                                    )}
                                                    {Boolean(elem.finalizado) === false && (
                                                        <img src={ativo_icon} alt="Jogos" className="icone-trilha" />
                                                    )}
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                        </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                    </div>
        </div>
        
        

       
    )

}