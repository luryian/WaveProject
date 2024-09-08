import './DropdownFilter.scss';
import { useState } from 'react';

interface DropdownFilterProps {
  setTrilhaSelecionada: (trilha: string | null) => void;
}

export default function DropdownFilterProps({ setTrilhaSelecionada }: DropdownFilterProps) {

  return (
    <div className="filtros">
      <div className="dropdown dropdown-end">
        {}
        <div tabIndex={0} role="button" className="btn m-1">Trilhas</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a className='trilha-selecionada' onClick={() => setTrilhaSelecionada('design')}>Design</a></li>
            <li><a onClick={() => setTrilhaSelecionada('audiovisual')}>Audiovisual</a></li>
            <li><a onClick={() => setTrilhaSelecionada('sistemas')}>Sistemas</a></li>
            <li><a onClick={() => setTrilhaSelecionada('jogos')}>Jogos</a></li>
            <li><a onClick={() => setTrilhaSelecionada(null)}>Limpar filtro</a></li> {/* Opção para limpar o filtro */}
        </ul>
      </div>
      {/* <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div> */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">Aplicações</div> 
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
        </ul>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Possui vagas?</span>
          <input type="checkbox" className="toggle" defaultChecked />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer"> 
          <span className="label-text">Está ativo?</span>
          <input type="checkbox" className="toggle" defaultChecked />
        </label>
      </div>
    </div>
  )
}