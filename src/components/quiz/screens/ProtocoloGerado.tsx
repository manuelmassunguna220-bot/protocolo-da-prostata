import { useEffect, useState } from "react";
import { PrimaryButton } from "../QuizShell";

type Bar = { label: string; pct: number };

const RED_BARS: Bar[] = [
  { label: "Chances de possuir bactérias inflamatórias", pct: 95 },
  { label: "Chances de possuir Infecção urinária Frequente nos próximos meses", pct: 80 },
  { label: "Chances de possuir pedras na bexiga", pct: 88 },
  { label: "Chances de contrair cancer de prostata", pct: 95 },
  { label: "Chances de voltar a ir ao banheiro normalmente sem a desparasitação", pct: 5 },
];

const GREEN_BARS: Bar[] = [
  { label: "Chances de diminuir a próstata em 80% com a desparasitação", pct: 100 },
  { label: "Chances de eliminar parasita em 2 dias", pct: 95 },
  { label: "Chances de eliminar parasitas por completo", pct: 100 },
];

function RiskBar({ label, pct, color }: { label: string; pct: number; color: "red" | "green" }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(pct), 50);
    return () => clearTimeout(t);
  }, [pct]);

  const fill =
    color === "red"
      ? "bg-[oklch(0.6_0.22_25)]"
      : "bg-[oklch(0.55_0.16_145)]";
  const knob =
    color === "red"
      ? "bg-[oklch(0.55_0.22_25)]"
      : "bg-[oklch(0.5_0.17_145)]";

  return (
    <div className="mb-3">
      <div className="flex justify-between items-start gap-3 mb-1">
        <span className="text-sm text-gray-800 font-medium leading-snug flex-1">
          {label}
        </span>
        <span className="text-sm font-bold text-gray-900 flex-shrink-0">
          {pct}%
        </span>
      </div>
      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-visible">
        <div
          className={`absolute left-0 top-0 h-2 rounded-full ${fill} transition-[width] duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${knob} transition-[left] duration-1000 ease-out shadow`}
          style={{ left: `calc(${width}% - 6px)` }}
        />
      </div>
    </div>
  );
}

export function ProtocoloGerado({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="space-y-6">
      {/* Tabela comparativa */}
      <div className="rounded-xl border-2 border-[oklch(0.6_0.16_240)] overflow-hidden bg-white">
        <div className="grid grid-cols-2">
          <div className="p-3 text-center border-r border-[oklch(0.6_0.16_240)]">
            <div className="text-3xl mb-1">❌</div>
            <div className="text-red-600 font-extrabold text-lg">Remédios</div>
          </div>
          <div className="p-3 text-center">
            <div className="text-3xl mb-1">✅</div>
            <div className="text-[oklch(0.5_0.17_145)] font-extrabold text-base leading-tight">
              Nosso Protocolo da Próstata
            </div>
          </div>
        </div>
        {[
          ["Não acaba com as bactérias.", "Acaba com as bactérias em 14 dias."],
          ["Causa Disfunção Erétil", "Recupera a Firmeza Que Você Tinha aos 25."],
          ["Fazem muito mal para sua saúde.", "É 100% Natural."],
          ["Destrói seu intestino", "Receita simples e fácil de fazer."],
        ].map(([bad, good], i) => (
          <div
            key={i}
            className="grid grid-cols-2 border-t border-[oklch(0.6_0.16_240)]"
          >
            <div className="p-3 text-sm text-gray-800 border-r border-[oklch(0.6_0.16_240)] flex gap-2">
              <span className="text-red-600 flex-shrink-0">❌</span>
              <span>{bad}</span>
            </div>
            <div className="p-3 text-sm text-gray-800 flex gap-2">
              <span className="text-[oklch(0.5_0.17_145)] flex-shrink-0">✅</span>
              <span>{good}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Título análise */}
      <h2 className="text-center text-lg font-bold text-gray-900 leading-snug mt-6">
        Abaixo está a análise da sua situação atual,{" "}
        <span className="text-[oklch(0.5_0.17_145)]">
          baseada nas suas respostas. 👇
        </span>
      </h2>

      {/* Barras vermelhas */}
      <div>
        {RED_BARS.map((b, i) => (
          <RiskBar key={i} label={b.label} pct={b.pct} color="red" />
        ))}
      </div>

      {/* Barras verdes */}
      <div>
        {GREEN_BARS.map((b, i) => (
          <RiskBar key={i} label={b.label} pct={b.pct} color="green" />
        ))}
      </div>

      {/* Possível agente parasitário */}
      <div className="text-center mt-6">
        <h3 className="text-lg font-bold leading-snug">
          <span className="text-[oklch(0.5_0.17_145)]">
            Possível agente parasitário
          </span>{" "}
          <span className="text-gray-900">de acordo com os seus sintomas:</span>
        </h3>
        <p className="italic underline text-gray-800 mt-2">
          Ascaris lumbricoides
        </p>
      </div>

      <img
        src="/parasita.jpg"
        alt="Ascaris lumbricoides"
        className="w-full h-auto rounded-xl object-cover bg-gray-200"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
        }}
      />

      {/* Card de atenção */}
      <div className="bg-white shadow-md rounded-xl p-4 border border-gray-100">
        <div className="font-bold text-gray-900 mb-2">⚠️ Atenção !</div>
        <p className="text-sm text-gray-800 leading-relaxed">
          No nosso Protocolo, você pode ficar tranquilo!{" "}
          <span className="text-[oklch(0.5_0.17_145)] font-bold">
            Nenhum verme ou parasita sairá vivo
          </span>{" "}
          de forma incômoda. Eles são eliminados{" "}
          <span className="text-[oklch(0.5_0.17_145)] font-bold">
            já mortos e desmanchados,
          </span>{" "}
          quase imperceptíveis. 😌
        </p>
      </div>

      {/* Texto desparasitação */}
      <p className="text-center text-base leading-relaxed mt-6">
        <span className="text-[oklch(0.5_0.17_145)] font-bold">
          A Desparasitação ocorrerá primeiramente
        </span>{" "}
        <span className="text-gray-900 font-bold">
          através de um chá de tomate com um ingrediente secreto facilmente
          encontrado nos mercados e pouco utilizado.
        </span>
      </p>

      <img
        src="/tomates.jpg"
        alt="Tomates"
        className="w-full h-auto rounded-xl object-cover bg-gray-200"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
        }}
      />

      <PrimaryButton onClick={onContinue}>
        Gerar Protocolo de Tratamento! ✅
      </PrimaryButton>
    </div>
  );
}
