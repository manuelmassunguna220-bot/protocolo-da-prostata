import { PrimaryButton } from "../QuizShell";

export function Screen14() {
  return (
    <div className="space-y-5">
      <div className="rounded-xl overflow-hidden border-2 border-[oklch(0.55_0.16_145)] bg-black">
        <video
          controls
          className="w-full h-auto"
          poster="https://placehold.co/480x270/27ae60/ffffff?text=▶+VSL+Oferta"
        >
          <source src="/video2.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </div>

      <h2 className="text-center text-xl font-extrabold leading-tight">
        <span className="text-red-600">OFERTA EXCLUSIVA:</span>{" "}
        <span className="text-[oklch(0.5_0.17_145)]">
          Acesso completo ao Protocolo Desinflamação da Próstata
        </span>
      </h2>

      <div className="text-center">
        <div className="text-gray-500 text-base line-through">De R$ 297,00</div>
        <div className="text-[oklch(0.5_0.17_145)] font-extrabold text-4xl">
          por R$ 47,00
        </div>
        <div className="text-sm text-gray-600">à vista ou em até 12x no cartão</div>
      </div>

      <PrimaryButton href="#checkout">
        QUERO GARANTIR O MEU ACESSO AGORA →
      </PrimaryButton>

      <div className="flex items-center justify-center gap-2 text-sm text-gray-700 font-medium">
        <span>🔒</span> Compra 100% Segura
      </div>

      <div className="border-2 border-dashed border-[oklch(0.55_0.16_145)] rounded-xl p-4 text-center">
        <div className="text-3xl mb-2">🛡️</div>
        <div className="font-bold text-gray-900">Garantia incondicional de 7 dias</div>
        <div className="text-sm text-gray-700 mt-1">
          Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do
          seu dinheiro. Sem perguntas.
        </div>
      </div>
    </div>
  );
}
