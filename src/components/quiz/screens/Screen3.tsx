import { AnswerButton } from "../QuizShell";

export function Screen3({ onAnswer }: { onAnswer: (v: string) => void }) {
  return (
    <div className="space-y-5">
      <h2 className="text-center text-xl font-bold text-gray-900 leading-snug">
        Você já foi diagnosticado com HPB (Hiperplasia Prostática Benigna)?
      </h2>
      <p className="text-center text-sm text-gray-600">
        Por favor, responda com atenção — essa informação é essencial para a
        nossa análise.
      </p>

      <div className="space-y-3">
        <AnswerButton onClick={() => onAnswer("Sim, já fui diagnosticado")}>
          🙏 Sim, ja fui diagnosticado.
        </AnswerButton>
        <AnswerButton onClick={() => onAnswer("Não, mas estou desconfiado")}>
          ⏳ Não, mas estou desconfiado.
        </AnswerButton>
      </div>
    </div>
  );
}
