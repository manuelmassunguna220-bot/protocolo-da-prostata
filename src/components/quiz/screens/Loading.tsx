import { useEffect, useState } from "react";

const STAGES = [
  "Analisando seus sintomas...",
  "Calculando nível de inflamação...",
  "Montando protocolo personalizado...",
  "Finalizando...",
];

const TOTAL_MS = 3000;

export function Loading({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [stageIdx, setStageIdx] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / TOTAL_MS) * 100);
      setProgress(pct);

      const idx = Math.min(
        STAGES.length - 1,
        Math.floor((elapsed / TOTAL_MS) * STAGES.length),
      );
      setStageIdx(idx);

      if (elapsed < TOTAL_MS) {
        raf = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setStageIdx(STAGES.length - 1);
        const t = setTimeout(onDone, 300);
        return () => clearTimeout(t);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-2">
      <img
        src="/logo.png"
        alt="Protocolo Desinflamação da Próstata"
        className="w-40 h-40 object-contain mb-8"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
        }}
      />

      <p className="text-center text-gray-600 text-base leading-relaxed mb-2">
        Estou analisando as suas respostas e gerando o
      </p>
      <div className="text-center mb-6">
        <span className="inline-block bg-[oklch(0.55_0.16_145)] text-white font-bold text-base rounded-md px-2 py-1">
          seu protocolo personalizado.
        </span>
      </div>

      <div className="w-full max-w-sm">
        <div className="flex justify-end mb-1">
          <span className="font-bold text-gray-900 text-sm">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full h-2 bg-[oklch(0.94_0.02_145)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[oklch(0.55_0.16_145)] transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-xs text-gray-500 mt-3">
          {STAGES[stageIdx]}
        </p>
      </div>
    </div>
  );
}
