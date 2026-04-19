const opts = [
  "Menos de 6 meses",
  "Entre 6 meses e 1 ano",
  "Entre 1 e 3 anos",
  "Mais de 3 anos",
];

export function Screen4({ onAnswer }: { onAnswer: (v: string) => void }) {
  return (
    <div className="space-y-5">
      <h2 className="text-center text-xl font-bold text-gray-900 leading-snug">
        Há quanto tempo você recebeu o diagnóstico de HPB?
      </h2>
      <p className="text-center text-sm text-gray-600">
        Essa informação é essencial para uma análise mais precisa da sua
        condição.
      </p>

      <div className="space-y-3">
        {opts.map((o) => (
          <button
            key={o}
            onClick={() => onAnswer(o)}
            className="w-full flex items-center justify-between gap-3 bg-[oklch(0.94_0.06_145)] border-2 border-[oklch(0.55_0.16_145)] rounded-2xl px-4 py-4 text-base text-black font-medium hover:bg-[oklch(0.9_0.08_145)] transition active:scale-[0.98]"
          >
            <span className="flex items-center gap-2">
              <span>✅</span>
              <span>{o}</span>
            </span>
            <span className="text-[oklch(0.55_0.16_145)] text-xl">›</span>
          </button>
        ))}
      </div>
    </div>
  );
}
