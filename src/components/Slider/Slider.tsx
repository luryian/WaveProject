import './Slider.scss' 

interface SliderProps {
    setVagaDisponivel: (vagas: boolean | null) => void;
    vagaDisponivel: boolean | null;
    setAtividade: (finalizado: boolean | null) => void;
    atividade: boolean | null;
  }

export function Slider({ setVagaDisponivel, vagaDisponivel, setAtividade, atividade }: SliderProps) {

    const handleToggle = () => {
        setVagaDisponivel(vagaDisponivel ? null : true); // Alterna entre null e true
    };

    const handleToggleAtividade = () => {
        setAtividade(atividade ? null : true); // Alterna entre null e true
    };

    return (
        <div className="slider-container">
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Possui vagas?</span>
                    <input type="checkbox" checked={vagaDisponivel !== null} onChange={handleToggle} className="checkbox checkbox-sm" />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Está ativo?</span>
                    <input type="checkbox" checked={atividade !== null} onChange={handleToggleAtividade} className="checkbox checkbox-sm" />
                </label>
            </div>
        </div>
    )
}