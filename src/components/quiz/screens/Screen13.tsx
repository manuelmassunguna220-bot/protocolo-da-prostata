import { useRef, useState } from "react";
import { PrimaryButton } from "../QuizShell";

export function Screen13({ onContinue }: { onContinue: () => void }) {
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

  const bars = [6, 10, 14, 8, 18, 22, 14, 10, 24, 18, 12, 8, 16, 22, 18, 12, 8, 14, 20, 14, 8, 6, 12, 18, 22, 16, 10, 6, 14, 20];

  return (
    <div className="space-y-5">
      <h2 className="text-center text-lg font-bold text-gray-900 leading-snug">
        Com base nas suas respostas, preparei uma{" "}
        <span className="text-[oklch(0.5_0.17_145)]">mensagem especial</span>{" "}
        para você. Assista até o final, isso pode mudar a sua vida.
      </h2>

      {/* Áudio estilo WhatsApp */}
      <div className="text-center mt-4">
        <h3 className="text-lg font-bold text-gray-900">
          Escute o áudio abaixo: 👇
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Caso o AUDIO não inicie, basta clicar nele!
        </p>
      </div>

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
            <span className="text-xs text-gray-500 font-medium">00:35</span>
          </div>
          <audio
            id="audio-penultima"
            ref={audioRef}
            src="/audio2.mp3"
            preload="metadata"
            onEnded={() => setPlaying(false)}
          />
        </div>
      </div>

      {/* Vídeo do Roberto */}
      <div className="rounded-xl overflow-hidden border-2 border-[oklch(0.55_0.16_145)] bg-black aspect-video">
        <iframe
          src="https://www.youtube.com/embed/OyyqCS0UFDw"
          title="Depoimento Roberto"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <p className="text-center text-sm text-gray-700 leading-relaxed">
        Depois de assistir, clique no botão abaixo para descobrir o{" "}
        <strong>protocolo natural completo</strong> que está mudando a vida de
        milhares de homens.
      </p>

      <PrimaryButton onClick={onContinue}>
        Gerar Protocolo Personalizado →
      </PrimaryButton>
    </div>
  );
}
