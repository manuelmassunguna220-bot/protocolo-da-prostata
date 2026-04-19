import { PrimaryButton } from "../QuizShell";

export function Landing({ onStart }: { onStart: () => void }) {
  return (
    <div className="space-y-5 pt-2">
      <h1 className="text-center leading-tight">
        <span className="inline-block bg-black text-white px-3 py-1 text-xl font-extrabold">
          URGENTE:
        </span>{" "}
        <span className="text-[oklch(0.5_0.17_145)] font-extrabold text-2xl sm:text-3xl">
          TRUQUE NATURAL CASEIRO DE 14 DIAS ESTÁ DESINCHANDO A PRÓSTATA E
          ELIMINANDO A HPB NATURALMENTE!
        </span>
      </h1>

      <p className="text-center text-base leading-relaxed text-gray-800">
        Homens estão{" "}
        <span className="text-[oklch(0.5_0.17_145)] font-semibold">
          voltando a urinar com força, dormindo a noite inteira sem levantar e
          recuperando o desempenho na cama
        </span>
        . Tudo graças a uma simples{" "}
        <span className="text-[oklch(0.5_0.17_145)] font-semibold">
          receita natural que elimina o parasita
        </span>{" "}
        escondido por trás do aumento da próstata.
      </p>

      <div className="grid grid-cols-2 gap-3">
        <div className="border-2 border-[oklch(0.55_0.16_145)] rounded-xl p-3 flex flex-col items-center text-center bg-white">
          <div className="text-4xl mb-2">🔴</div>
          <div className="text-red-600 font-bold text-xs">PRÓSTATA AUMENTADA</div>
        </div>
        <div className="border-2 border-[oklch(0.55_0.16_145)] rounded-xl p-3 flex flex-col items-center text-center bg-white">
          <div className="text-4xl mb-2">🟢</div>
          <div className="text-[oklch(0.5_0.17_145)] font-bold text-xs">
            PRÓSTATA DIMINUÍDA
          </div>
        </div>
        <div className="border-2 border-[oklch(0.55_0.16_145)] rounded-xl p-3 flex flex-col items-center text-center bg-white aspect-square justify-center">
          <div className="text-5xl">😣</div>
          <div className="text-xs text-gray-600 mt-2">Homem com dor</div>
        </div>
        <div className="border-2 border-[oklch(0.55_0.16_145)] rounded-xl p-3 flex flex-col items-center text-center bg-white aspect-square justify-center">
          <div className="text-5xl">🍅</div>
          <div className="text-xs text-gray-600 mt-2">Suco de tomate</div>
        </div>
      </div>

      <PrimaryButton onClick={onStart}>QUERO APRENDER TAMBÉM !</PrimaryButton>
    </div>
  );
}
