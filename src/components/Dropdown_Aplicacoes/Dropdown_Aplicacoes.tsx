import './Dropdown_Aplicacoes.scss';
import { useEffect, useState } from "react";
import { getProjetos } from "../../services/firebase";
import { Project } from '../../pages/home';

interface DropdownAplicacoesProps {
    setAplicacaoSelecionada: (aplicacao: string | null) => void;
    aplicacaoSelecionada: string | null;
}

export default function DropdownAplicacao({ setAplicacaoSelecionada, aplicacaoSelecionada }: DropdownAplicacoesProps) {
    const [projetos, setProjetos] = useState<Project[]>([]);
    
    useEffect(() => {
        getProjetos(setProjetos);
    }, []);

    // Filtra valores únicos e remove valores vazios ou null
    const aplicacoesUnicas = Array.from(new Set(projetos
        .map((elem) => elem.aplicação)
        .filter((aplicacao) => aplicacao && aplicacao.trim() !== "")) // Remove valores vazios e null
    );

    return (
        <div>
            <div className="filtros">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Aplicações</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        {/* Renderiza as aplicações únicas e não vazias */}
                        {aplicacoesUnicas.map((aplicacao, index) => (
                            <li key={index}>
                                <a 
                                    onClick={() => setAplicacaoSelecionada(aplicacao)}
                                    className={`aplicacao-selecionada ${
                                        aplicacaoSelecionada === aplicacao ? "active" : ""
                                    }`}
                                >
                                    {aplicacao}
                                </a>
                            </li>
                        ))}
                        {/* Opção para limpar o filtro */}
                        <li>
                            <a onClick={() => setAplicacaoSelecionada(null)} className='limpar-filtro'>
                                Limpar filtro
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
