import './DropdownFilter.scss'

export default function DropdownFilter() {
  return (
    <div className="filtros">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">Trilhas</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Design</a></li>
            <li><a>Audiovisual</a></li>
            <li><a>Sistemas</a></li>
            <li><a>Jogos</a></li>
        </ul>
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">Coordenador</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
        </ul>
      </div>
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