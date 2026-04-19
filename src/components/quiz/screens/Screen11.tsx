import { useState } from "react";
import { PrimaryButton } from "../QuizShell";

const symptoms = [
  "JATO FRACO DE URINA",
  "VONTADE FREQUENTE DE URINAR",
  "DIFICULDADE PARA COMEÇAR A URINAR",
  "SENSAÇÃO DE BEXIGA CHEIA APÓS URINAR",
  "URGÊNCIA PARA URINAR",
  "GOTEJAMENTO NO FINAL DO XIXI",
  "EJACULAÇÃO PRECOCE",
];

export function Screen11({ onContinue }: { onContinue: (s: string[]) => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (s: string) =>
    setSelected((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  return (
    <div className="space-y-5">
      <h2 className="text-center text-lg font-bold text-gray-900 leading-snug">
        Dentro dos{" "}
        <span className="text-[oklch(0.5_0.17_145)]">sintomas listados abaixo</span>
        , quais mais te incomodam?
      </h2>
      <p className="text-center text-sm text-gray-600">Selecione um ou mais.</p>

      <div className="space-y-3">
        {symptoms.map((s) => {
          const isSel = selected.includes(s);
          return (
            <button
              key={s}
              onClick={() => toggle(s)}
              className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border-2 text-sm font-bold transition active:scale-[0.98] ${
                isSel
                  ? "bg-[oklch(0.85_0.12_145)] border-[oklch(0.45_0.16_145)]"
                  : "bg-[oklch(0.94_0.06_145)] border-[oklch(0.55_0.16_145)] hover:bg-[oklch(0.9_0.08_145)]"
              }`}
            >
              <span className="text-left text-black">{s}</span>
              <span
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center text-white text-sm shrink-0 ${
                  isSel
                    ? "bg-[oklch(0.55_0.16_145)] border-[oklch(0.45_0.16_145)]"
                    : "border-gray-400 bg-white"
                }`}
              >
                {isSel ? "✓" : ""}
              </span>
            </button>
          );
        })}
      </div>

      {selected.length > 0 && (
        <PrimaryButton onClick={() => onContinue(selected)}>
          Continuar
        </PrimaryButton>
      )}
    </div>
  );
}
