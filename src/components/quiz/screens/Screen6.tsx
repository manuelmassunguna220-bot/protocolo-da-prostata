import { AnswerButton } from "../QuizShell";

export function Screen6({ onAnswer }: { onAnswer: (v: string) => void }) {
  return (
    <div className="space-y-5">
      <h2 className="text-center text-xl font-bold text-gray-900">
        Você já <span className="text-[oklch(0.5_0.17_145)]">Desparasitou</span>{" "}
        de alguma maneira?
      </h2>
      <p className="text-center text-sm text-gray-600">
        Utilizando remédios ou formas naturais.
      </p>

      <div className="space-y-3">
        <AnswerButton onClick={() => onAnswer("Não, nunca desparasitei")}>
          😐 Não, eu nunca desparasitei.
        </AnswerButton>
        <AnswerButton onClick={() => onAnswer("Sim, já desparasitei")}>
          😊 Sim, eu já desparasitei.
        </AnswerButton>
      </div>
    </div>
  );
}
