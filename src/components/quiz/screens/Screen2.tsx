const ages = [
  { label: "Até 40 anos", color: "oklch(0.85 0.1 145)", emoji: "🧑" },
  { label: "41 anos a 50 anos", color: "oklch(0.8 0.1 100)", emoji: "👨" },
  { label: "51 anos a 60 anos", color: "oklch(0.75 0.1 60)", emoji: "👨‍🦳" },
  { label: "Mais de 61 anos", color: "oklch(0.7 0.08 30)", emoji: "👴" },
];

export function Screen2({ onAnswer }: { onAnswer: (v: string) => void }) {
  return (
    <div className="space-y-5">
      <h2 className="text-center text-xl font-bold text-gray-900">
        Qual é a sua idade?
      </h2>
      <p className="text-center text-sm text-gray-600">
        A HPB está fortemente ligada ao envelhecimento. Sua idade nos ajuda a
        personalizar a análise.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {ages.map((a) => (
          <button
            key={a.label}
            onClick={() => onAnswer(a.label)}
            className="bg-white border-2 border-[oklch(0.55_0.16_145)] rounded-2xl p-3 flex flex-col items-center text-center hover:bg-[oklch(0.97_0.03_145)] transition active:scale-[0.98]"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-2"
              style={{ backgroundColor: a.color }}
            >
              {a.emoji}
            </div>
            <div className="text-sm font-semibold text-gray-900">
              {a.label} <span className="text-[oklch(0.55_0.16_145)]">›</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
