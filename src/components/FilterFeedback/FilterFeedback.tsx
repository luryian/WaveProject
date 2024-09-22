import './FilterFeedback.css'

interface FilterFeedbackProps {
    aplicacaoSelecionada: string | null;
    trilhaSelecionada: string | null;
}

export default function FilterFeedback({ aplicacaoSelecionada, trilhaSelecionada }: FilterFeedbackProps) {
    return (
        <div className="feedback-container">
            <h1>{aplicacaoSelecionada || "Nenhuma aplicação selecionada"}</h1>
            <h1>{trilhaSelecionada || "Nenhuma trilha selecionada"}</h1>
        </div>
    );
}   