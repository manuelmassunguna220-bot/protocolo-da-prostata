import { AnswerButton } from "../QuizShell";

export function Screen8({ onAnswer }: { onAnswer: (v: string) => void }) {
  return (
    <div className="space-y-5">
      <h2 className="text-center text-lg font-bold text-gray-900 leading-snug">
        Você tem ciência que{" "}
        <span className="text-[oklch(0.5_0.17_145)]">
          a falta de cuidados com esse assunto
        </span>{" "}
        pode piorar sua próstata e deixar sequelas que podem ser irreversíveis?
      </h2>
      <p className="text-center text-sm text-gray-600">Por favor, seja sincero.</p>

      <div className="space-y-3">
        <AnswerButton onClick={() => onAnswer("Sim, sei da gravidade")}>
          😔 Sim, eu sei da gravidade que é ter parasitas habitando o meu
          intestino
        </AnswerButton>
        <AnswerButton onClick={() => onAnswer("Não sabia, mas quero cuidar")}>
          🤯 Não sabia da gravidade, mais quero cuidar.
        </AnswerButton>
      </div>
    </div>
  );
}
