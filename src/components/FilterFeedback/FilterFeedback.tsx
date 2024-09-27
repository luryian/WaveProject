import './FilterFeedback.css'

interface FilterFeedbackProps {
    aplicacaoSelecionada: string | null;
    trilhaSelecionada: string | null;
    atividade: boolean | null;
    vagaDisponivel: boolean | null;
}

export default function FilterFeedback({ aplicacaoSelecionada, trilhaSelecionada, atividade, vagaDisponivel}: FilterFeedbackProps) {

    function capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function booleanToString(value: boolean): string {
        return value ? "Projetos finalizados" : "";
    }

    function booleanToStringVagas(value: boolean): string {
        return value ? "Projetos com vagas" : "";
    }

    console.log(aplicacaoSelecionada, trilhaSelecionada, atividade, vagaDisponivel )

    return (
        <div className="feedback-container">
            {aplicacaoSelecionada && (
                <h1>{capitalizeFirstLetter(aplicacaoSelecionada)}</h1>
            )}
            
            {trilhaSelecionada && (
                <h1>{capitalizeFirstLetter(trilhaSelecionada)}</h1>
            )}
            
            {atividade !== null && (
                <h1>{booleanToString(atividade)}</h1>
            )}
            
            {vagaDisponivel !== null && (
                <h1>{booleanToStringVagas(vagaDisponivel)}</h1>
            )}
        </div>
    );
}   