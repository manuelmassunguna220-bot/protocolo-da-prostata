import { useState } from "react";
import { PrimaryButton } from "../QuizShell";

export interface MultiOption {
  label: string;
  emoji: string;
}

interface Props {
  title: React.ReactNode;
  subtitle?: string;
  options: MultiOption[];
  onContinue: (selected: string[]) => void;
}

export function MultiSelect({ title, subtitle, options, onContinue }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  return (
    <div className="space-y-5">
      <h2 className="text-center text-xl font-bold text-gray-900 leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="text-center text-sm text-gray-600">{subtitle}</p>
      )}

      <div className="space-y-3">
        {options.map((o) => {
          const isSel = selected.includes(o.label);
          return (
            <button
              key={o.label}
              onClick={() => toggle(o.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl border-2 transition active:scale-[0.98] ${
                isSel
                  ? "bg-[oklch(0.85_0.12_145)] border-[oklch(0.45_0.16_145)]"
                  : "bg-[oklch(0.94_0.06_145)] border-[oklch(0.55_0.16_145)] hover:bg-[oklch(0.9_0.08_145)]"
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl shrink-0 border border-[oklch(0.85_0.05_145)]">
                {o.emoji}
              </div>
              <span className="flex-1 text-left text-base font-medium text-black">
                {o.label}
              </span>
              <span
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center text-white text-sm ${
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
