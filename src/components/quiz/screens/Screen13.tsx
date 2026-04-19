import { PrimaryButton } from "../QuizShell";

export function Screen13({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="space-y-5">
      <h2 className="text-center text-lg font-bold text-gray-900 leading-snug">
        Com base nas suas respostas, preparei uma{" "}
        <span className="text-[oklch(0.5_0.17_145)]">mensagem especial</span>{" "}
        para você. Assista até o final, isso pode mudar a sua vida.
      </h2>

      <div className="rounded-xl overflow-hidden border-2 border-[oklch(0.55_0.16_145)] bg-black">
        <video
          controls
          className="w-full h-auto"
          poster="https://placehold.co/480x270/27ae60/ffffff?text=▶+Assista+Agora"
        >
          <source src="/video1.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </div>

      <p className="text-center text-sm text-gray-700 leading-relaxed">
        Depois de assistir, clique no botão abaixo para descobrir o{" "}
        <strong>protocolo natural completo</strong> que está mudando a vida de
        milhares de homens.
      </p>

      <PrimaryButton onClick={onContinue}>Continuar →</PrimaryButton>
    </div>
  );
}
