import './DropdownFilter.scss';

interface DropdownFilterProps {
  setTrilhaSelecionada: (trilha: string | null) => void;
  trilhaSelecionada: string | null;
}

export default function DropdownFilterProps({ setTrilhaSelecionada, trilhaSelecionada }: DropdownFilterProps) {
  return (
    <div className="filtros">
      <div className="dropdown dropdown-end">
        {}
        <div tabIndex={0} role="button" className="btn m-1">Trilhas</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a 
            onClick={() => setTrilhaSelecionada('design')}
            className={`trilha-selecionada ${
              trilhaSelecionada === 'design' ? "active" : ""
            }`}
            >Design</a></li>
            <li><a 
            onClick={() => setTrilhaSelecionada('audiovisual')}
            className={`trilha-selecionada ${
              trilhaSelecionada === 'audiovisual' ? "active" : ""
            }`}
            >Audiovisual</a></li>
            <li><a 
            onClick={() => setTrilhaSelecionada('sistemas')}
            className={`trilha-selecionada ${
              trilhaSelecionada === 'sistemas' ? "active" : ""
            }`}
            >Sistemas</a></li>
            <li><a 
            onClick={() => setTrilhaSelecionada('jogos')}
            className={`trilha-selecionada ${
              trilhaSelecionada === 'jogos' ? "active" : ""
            }`}
            >Jogos</a></li>
            <li><a onClick={() => setTrilhaSelecionada(null)} className='limpar-filtro'>Limpar filtro</a></li> {/* Opção para limpar o filtro */}
        </ul>
      </div>
      
    </div>
  )
}