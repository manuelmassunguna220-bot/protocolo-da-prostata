import { PrimaryButton } from "../QuizShell";

export function Screen7({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold leading-snug text-center">
        <span className="text-red-600">
          Se você nunca fez uma Desparasitação Natural, cuidado:
        </span>{" "}
        <span className="text-black">
          os vermes podem se multiplicar no seu corpo e alcançar órgãos vitais
          como próstata, cérebro, coração e pulmões. Não ignore esse risco,
        </span>{" "}
        <span className="text-[oklch(0.5_0.17_145)]">
          é essencial desparasitar pelo menos uma vez ao ano!
        </span>
      </h2>

      <p className="text-center underline text-blue-700 font-medium">
        Veja essa Notícia do G1 👇
      </p>

      <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
        <div className="bg-red-600 text-white text-sm font-bold px-3 py-2 flex items-center justify-between">
          <span>≡ g1 &nbsp; CIÊNCIA E SAÚDE</span>
          <span>🔍</span>
        </div>
        <div className="p-4 space-y-3">
          <h3 className="font-bold text-base text-gray-900 leading-snug">
            Homem de 42 anos descobre parasita após sintomas de próstata
            aumentada.
          </h3>
          <div className="bg-gray-100 h-32 rounded-md flex items-center justify-center text-4xl">
            🏥
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Carlos Santos de Oliveira</strong>, 42 anos, procurou ajuda
            médica após meses sofrendo com idas frequentes ao banheiro durante
            a madrugada e dificuldade para urinar. O que parecia ser apenas
            sintomas de próstata aumentada se revelou algo muito mais grave:
            uma infestação intensa de parasitas intestinais que estavam
            inflamando todo o seu organismo.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Após iniciar um protocolo natural de desparasitação,{" "}
            <strong>Carlos relatou melhora em poucas semanas</strong> — voltou
            a dormir a noite inteira, recuperou o jato urinário e a libido. Sua
            história alerta milhares de homens que ignoram a relação entre
            parasitas intestinais e saúde da próstata.
          </p>
        </div>
      </div>

      <PrimaryButton onClick={onContinue}>Continuar !</PrimaryButton>
    </div>
  );
}
