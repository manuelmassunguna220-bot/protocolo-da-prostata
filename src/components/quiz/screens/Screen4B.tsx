import { useRef, useState } from "react";
import { PrimaryButton } from "../QuizShell";

export function Screen4B({ onContinue }: { onContinue: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  // Waveform bars heights (simulated)
  const bars = [6, 10, 14, 8, 18, 22, 14, 10, 24, 18, 12, 8, 16, 22, 18, 12, 8, 14, 20, 14, 8, 6, 12, 18, 22, 16, 10, 6, 14, 20];

  return (
    <div className="space-y-5">
      {/* 1. Banner de alerta */}
      <div className="rounded-xl p-4 bg-[oklch(0.55_0.16_145)] text-white">
        <div className="font-bold flex items-center gap-2 text-base">
          <span>⚠️</span>
          <span>Os Resultados Não Mentem:</span>
        </div>
        <p className="text-sm mt-1 leading-snug">
          Seus Sintomas estão indicando Algo Muito Perigoso –{" "}
          <span className="underline font-bold">Ouça Com Atenção!</span>
        </p>
      </div>

      {/* 2. Título áudio */}
      <div className="text-center mt-6">
        <h2 className="text-xl font-bold text-gray-900">
          Escute essa rápida explicação 👇
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Caso o áudio não inicie, basta clicar nele!
        </p>
      </div>

      {/* 3. Player de áudio estilo WhatsApp */}
      <div className="bg-white shadow-md rounded-2xl p-4 flex items-center gap-3 border border-gray-100">
        <img
          src="/audio-avatar.jpg"
          alt="Ana Lima"
          className="w-10 h-10 rounded-full object-cover bg-gray-300 flex-shrink-0"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
          }}
        />
        <div className="flex-1 min-w-0">
          <div className="text-xs text-gray-600 mb-1 font-medium">Ana Lima</div>
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              aria-label={playing ? "Pausar" : "Reproduzir"}
              className="w-9 h-9 rounded-full bg-[oklch(0.55_0.16_145)] text-white flex items-center justify-center flex-shrink-0 hover:opacity-90 active:scale-95 transition"
            >
              {playing ? (
                <span className="text-base leading-none">⏸</span>
              ) : (
                <span className="text-base leading-none ml-0.5">▶</span>
              )}
            </button>
            <div className="flex-1 flex items-center gap-[2px] h-6">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="w-[3px] rounded-full bg-[oklch(0.55_0.16_145)] opacity-80"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 font-medium">00:39</span>
          </div>
          <audio ref={audioRef} src="/audio1.mp3" preload="metadata" onEnded={() => setPlaying(false)} />
        </div>
      </div>

      {/* 4. Título caso */}
      <div className="text-center mt-8">
        <h2 className="text-[22px] font-bold text-gray-900 leading-tight">
          Veja so esse caso
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          1 semana após iniciar a desparasitação
        </p>
      </div>

      {/* 5. Imagem antes/depois */}
      <img
        src="/antes-depois.jpg"
        alt="Antes 90cm e Após 30cm - Diminuição de 70% da próstata"
        className="w-full rounded-xl bg-gray-200"
      />

      {/* 6. Card de depoimento */}
      <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <img
            src="/roberto.jpg"
            alt="Roberto Limeira"
            className="w-12 h-12 rounded-full object-cover bg-gray-300 flex-shrink-0"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
            }}
          />
          <div>
            <div className="font-bold text-gray-900">Roberto Limeira</div>
            <div className="text-sm text-gray-500">Porto Alegre, RS</div>
          </div>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">
          Eu vivia indo ao banheiro, principalmente à noite. A bexiga nunca
          esvaziava direito e o jato era fraco. Achei que era normal da idade,
          mas descobri que meu corpo estava inflamado por parasitas. Fiz a
          desparasitação e, em menos de 2 semanas, tudo mudou. Urino
          normalmente, durmo a noite toda e até meu desempenho voltou. Me sinto
          outro homem.
        </p>
      </div>

      {/* 7. Botão continuar */}
      <PrimaryButton onClick={onContinue}>Continuar</PrimaryButton>
    </div>
  );
}
