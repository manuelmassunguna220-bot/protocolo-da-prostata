import { AnswerButton } from "../QuizShell";

export function Screen9({ onAnswer }: { onAnswer: (v: string) => void }) {
  return (
    <div className="space-y-5">
      <h2 className="text-center text-base font-bold text-gray-900 leading-snug">
        Você concorda comigo que na maioria das vezes o{" "}
        <span className="text-[oklch(0.5_0.17_145)]">aumento da próstata</span>{" "}
        não é nossa culpa.{" "}
        <span className="text-[oklch(0.5_0.17_145)]">
          Somos taxados de machistas, ignorantes e desleixados
        </span>
        , mas isso se deve ao nosso organismo estar inflamado por conta de
        parasitas intestinais?
      </h2>
      <p className="text-center text-sm text-gray-600">
        Por favor, seja sincero, quero ajudar!
      </p>

      <div className="space-y-3">
        <AnswerButton onClick={() => onAnswer("Concordo")}>
          Eu concordo sim!
        </AnswerButton>
        <AnswerButton onClick={() => onAnswer("Concordo em partes")}>
          Concordo em partes.
        </AnswerButton>
      </div>
    </div>
  );
}
