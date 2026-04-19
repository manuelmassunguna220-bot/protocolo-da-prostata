import { AnswerButton } from "../QuizShell";

const tags = [
  "Urina Presa?",
  "Dor ao urinar",
  "Diminuição da Libido",
  "Demora para urinar",
  "Infecções urinárias recorrentes",
  "Esforço para urinar",
  "Disfunção erétil",
  "Aumento da frequência urinária à noite",
];

export function Screen1({ onAnswer }: { onAnswer: (v: string) => void }) {
  return (
    <div className="space-y-5">
      <h2 className="text-center text-xl font-bold text-gray-900 leading-snug">
        VOCÊ SENTE ALGUM DESSES SINTOMAS{" "}
        <span className="text-[oklch(0.5_0.17_145)]">A MAIS DE 2 MESES?</span>
      </h2>

      <div className="bg-[oklch(0.97_0.03_145)] rounded-2xl p-4 flex flex-col items-center">
        <div className="text-7xl mb-3">👴</div>
        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="bg-[oklch(0.55_0.16_145)] text-white text-xs font-medium px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <AnswerButton onClick={() => onAnswer("Sinto mais de 1")}>
          Sinto mais de 1 😓
        </AnswerButton>
        <AnswerButton onClick={() => onAnswer("Sinto 2 ou mais")}>
          Sinto 2 ou mais 😬
        </AnswerButton>
      </div>
    </div>
  );
}
