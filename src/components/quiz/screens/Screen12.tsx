const opts = [
  {
    title: "Menos de 6 meses",
    sub: "Está começando agora, mas já tá me deixando preocupado.",
  },
  {
    title: "Entre 6 meses e 1 ano",
    sub: "Já faz um tempo... e percebo que tá piorando aos poucos.",
  },
  {
    title: "Entre 1 e 3 anos",
    sub: "Convivo com isso há um bom tempo e quero resolver.",
  },
  {
    title: "Mais de 3 anos",
    sub: "Já sofro há muito tempo e preciso urgentemente de ajuda.",
  },
];

export function Screen12({ onAnswer }: { onAnswer: (v: string) => void }) {
  return (
    <div className="space-y-5">
      <h2 className="text-center text-lg font-bold text-gray-900 leading-snug">
        Há quanto tempo você convive com esses sintomas?
      </h2>
      <p className="text-center text-sm text-gray-600">
        Essa informação é essencial para entendermos melhor a sua situação atual.
      </p>

      <div className="space-y-3">
        {opts.map((o) => (
          <button
            key={o.title}
            onClick={() => onAnswer(o.title)}
            className="w-full flex items-center justify-between gap-3 bg-[oklch(0.94_0.06_145)] border-2 border-[oklch(0.55_0.16_145)] rounded-2xl px-4 py-3 hover:bg-[oklch(0.9_0.08_145)] transition active:scale-[0.98] text-left"
          >
            <div className="flex-1">
              <div className="font-bold text-black text-base">{o.title}</div>
              <div className="text-xs text-gray-700 italic mt-1">"{o.sub}"</div>
            </div>
            <span className="text-[oklch(0.55_0.16_145)] text-xl shrink-0">›</span>
          </button>
        ))}
      </div>
    </div>
  );
}
