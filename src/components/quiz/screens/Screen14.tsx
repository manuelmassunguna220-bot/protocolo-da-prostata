import { useRef, useState } from "react";
import { PrimaryButton } from "../QuizShell";

const GREEN = "oklch(0.55_0.16_145)";
const GREEN_DARK = "oklch(0.5_0.17_145)";

function AudioPlayer() {
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
          <span className="text-xs text-gray-500 font-medium">00:31</span>
        </div>
        <audio
          id="audio-vsl"
          ref={audioRef}
          src="/audio-vsl.mp3"
          preload="metadata"
          onEnded={() => setPlaying(false)}
        />
      </div>
    </div>
  );
}

type FaqItem = { q: string; a: string };
const FAQS: FaqItem[] = [
  {
    q: "E se eu não tiver resultados com o protocolo?",
    a: "Se dentro de até 180 dias você achar que não é para você, basta solicitar o reembolso e devolveremos 100% do seu dinheiro.",
  },
  {
    q: "O que exatamente eu vou receber ao comprar?",
    a: "Você receberá acesso imediato ao Protocolo Desinflamação da Próstata completo, com o passo a passo do tratamento natural de 14 dias, além dos bônus gratuitos.",
  },
  {
    q: "Este produto é um remédio ou tratamento médico?",
    a: "Não. Este é um protocolo natural baseado em receitas caseiras e hábitos de saúde. Não substitui acompanhamento médico, mas pode ser utilizado como complemento.",
  },
  {
    q: "Em quanto tempo posso esperar resultados?",
    a: "A maioria dos homens começa a sentir melhora nos primeiros 7 a 14 dias seguindo o protocolo corretamente.",
  },
  {
    q: "O protocolo funciona para qualquer pessoa?",
    a: "O protocolo foi desenvolvido especialmente para homens acima de 40 anos que sofrem com sintomas de próstata aumentada e HPB.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-gray-200">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-gray-200">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-4 text-left gap-3"
            >
              <span className="font-bold text-gray-900 text-sm leading-snug flex-1">
                {item.q}
              </span>
              <span
                className={`text-[oklch(0.5_0.17_145)] text-lg transition-transform flex-shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ∨
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Testimonial({
  src,
  name,
  loc,
  text,
}: {
  src: string;
  name: string;
  loc: string;
  text: string;
}) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={src}
          alt={name}
          className="w-12 h-12 rounded-full object-cover bg-gray-300 flex-shrink-0"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
          }}
        />
        <div>
          <div className="font-bold text-gray-900">{name}</div>
          <div className="text-xs text-gray-500">{loc}</div>
        </div>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}

function CtaButton() {
  return (
    <PrimaryButton href="#checkout">
      Acessar meu Protocolo Agora! ✅
    </PrimaryButton>
  );
}

function PriceCard() {
  return (
    <div className="bg-[#d5f5e3] rounded-xl p-5 flex items-center justify-between gap-3">
      <div className="flex-1">
        <div className="text-[oklch(0.5_0.17_145)] font-extrabold text-lg leading-tight">
          TESTE 180 DIAS
        </div>
        <div className="text-[oklch(0.5_0.17_145)] text-sm font-medium">
          sem compromisso
        </div>
      </div>
      <div className="bg-white rounded-lg px-3 py-3 text-center shadow-sm">
        <div className="text-xs text-gray-500 line-through leading-tight">
          De 22.500 Kz
        </div>
        <div className="text-[oklch(0.5_0.17_145)] font-extrabold text-xl leading-tight mt-1">
          por 3.500 Kz
        </div>
      </div>
    </div>
  );
}

export function Screen14() {
  return (
    <div className="space-y-6">
      {/* SECÇÃO 1 — ÁUDIO */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-900">
          Escute o áudio abaixo: 👇
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Caso o AUDIO não inicie, basta clicar nele!
        </p>
      </div>
      <AudioPlayer />

      {/* SECÇÃO 2 — CARD ATENÇÃO + BULLETS */}
      <div className="bg-white shadow-md rounded-xl p-4 border border-gray-100">
        <div className="font-bold text-[oklch(0.5_0.17_145)] mb-2">Atenção</div>
        <p className="text-sm text-gray-800 leading-relaxed">
          Este protocolo foi cuidadosamente desenvolvido para homens que sofrem
          com a próstata aumentada e{" "}
          <span className="text-[oklch(0.5_0.17_145)] font-bold">
            fariam de tudo para recuperar o controle da urina, dormir melhor e
            se sentir confiantes novamente.
          </span>
        </p>
      </div>

      <ul className="space-y-3 text-base text-gray-800">
        <li className="flex gap-2">
          <span className="flex-shrink-0">✅</span>
          <span>
            Então, se você convive com sintomas como jato fraco, vontade
            frequente de urinar ou sensação de bexiga cheia...
          </span>
        </li>
        <li className="flex gap-2">
          <span className="flex-shrink-0">✅</span>
          <span>
            Se já não dorme mais uma noite inteira por causa das idas ao
            banheiro...
          </span>
        </li>
        <li className="flex gap-2">
          <span className="flex-shrink-0">✅</span>
          <span>
            Ou se sente que seu desempenho sexual não é mais o mesmo — e os
            médicos dizem que "é normal para a sua idade"...
          </span>
        </li>
      </ul>

      <h3 className="font-extrabold text-gray-900 text-xl sm:text-2xl leading-snug text-center">
        E você não aguenta mais viver limitado, com medo de depender de fraldas,
        sondas ou cirurgia...
      </h3>

      <p className="text-gray-700 text-sm sm:text-base text-center leading-relaxed">
        Então o protocolo natural de 14 dias foi feito pra você.
      </p>

      {/* SECÇÃO 3 — VÍDEO PRINCIPAL */}
      <div className="rounded-xl overflow-hidden border-2 border-[oklch(0.55_0.16_145)] bg-black aspect-video">
        <iframe
          src="https://www.youtube.com/embed/xXA8mJer56k"
          title="Vídeo do Protocolo"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* SECÇÃO 5 — DEPOIMENTOS */}
      <div className="space-y-4">
        <Testimonial
          src="/fernando.jpg"
          name="Fernando Martins"
          loc="Blumenau, SC"
          text="Minha próstata estava com 42 cm e eu nem sabia que isso era considerado grande. Ia ao banheiro toda hora, o jato era fraco e eu acordava 3 vezes por noite. Após seguir o protocolo, refiz o exame e meu volume caiu para 28 cm³. Hoje urino com força, durmo direto e até minha energia voltou."
        />
        <Testimonial
          src="/diego.jpg"
          name="Diego Ramalho"
          loc="São Paulo, RJ"
          text="Minha próstata media 38 cm³ e os sintomas eram horríveis: jato fraco, vontade constante de urinar e sensação de bexiga cheia. Hoje meu exame mostra 26 cm³. Durmo a noite inteira sem levantar e até minha autoestima melhorou."
        />
        <Testimonial
          src="/fernanda.jpg"
          name="Fernanda Silva"
          loc="Natal, RN"
          text="Meu marido passou anos sofrendo calado. Ele levantava várias vezes à noite, ficava irritado, cansado, e evitava até os momentos a dois. Eu via o quanto aquilo mexia com a autoestima dele, mas ele nunca falava muito sobre. Quando ele começou o protocolo, confesso que fiquei com o pé atrás... mas em poucos dias vi meu marido voltar a sorrir, dormir melhor e recuperar a confiança. Hoje ele mesmo diz que se sente mais homem, mais leve e com energia de novo. E eu? Me sinto casada com o homem de antes — ou até melhor."
        />
      </div>

      {/* SECÇÃO 5B — BENEFÍCIOS + GARANTIA + PREÇO + CTA */}
      <h3 className="font-bold text-gray-900 text-base">
        Nas primeiras semanas seguindo nosso protocolo, você vai...
      </h3>
      <ul className="space-y-2 text-gray-800 text-sm pl-4 list-disc">
        <li>Sentir a urina fluir com mais facilidade e menos esforço.</li>
        <li>Dormir melhor, sem precisar levantar várias vezes durante a noite.</li>
        <li>Perceber o retorno gradual da libido e da firmeza nas relações.</li>
      </ul>

      {/* GARANTIA (movida para acima do preço) */}
      <div className="bg-[#f2f2f2] rounded-2xl p-6 text-center">
        <div className="text-5xl mb-3">🏅</div>
        <div className="font-bold text-gray-900 text-lg mb-3">
          Seu risco é zero!
        </div>
        <p className="text-xs font-bold text-gray-800 uppercase leading-relaxed">
          O CÓDIGO DE DEFESA DO CONSUMIDOR GARANTE 7 DIAS DE GARANTIA
          INCONDICIONAL EM SEU ART 49. MAS NÓS CONFIAMOS TANTO NA QUALIDADE DO
          NOSSO PRODUTO QUE IREMOS ESTENDER PARA 180 DIAS. CASO CUMPRA O
          PROTOCOLO E NÃO TENHA RESULTADOS IREMOS DEVOLVER SEU DINHEIRO SEM
          BUROCRACIA! FAÇA O TESTE SEM COMPROMISSO!
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <span className="text-[oklch(0.5_0.17_145)] flex-shrink-0">✅</span>
          <div>
            <div className="font-bold text-gray-900 text-sm">Pagamento Único</div>
            <div className="text-sm text-gray-700">Sem mensalidades.</div>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-[oklch(0.5_0.17_145)] flex-shrink-0">✅</span>
          <div>
            <div className="font-bold text-gray-900 text-sm">Acesso Imediato</div>
            <div className="text-sm text-gray-700">
              Acesso imediato após o pagamento.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a2e] rounded-xl p-4 flex items-center gap-3">
        <div className="text-4xl flex-shrink-0">🏅</div>
        <div className="flex-1">
          <div className="text-white font-bold text-sm leading-tight">
            TESTE SEGURO 180 DIAS DE GARANTIA
          </div>
          <div className="text-white text-xs mt-1">
            Resultado Garantido ou Seu Dinheiro de Volta.
          </div>
        </div>
      </div>

      <PriceCard />
      <CtaButton />

      {/* SECÇÃO 6 — BÓNUS GUIA + CTA */}
      <h3 className="font-bold text-gray-900 text-center text-xl leading-snug">
        Você também vai receber, de forma gratuita, o "Guia Inabalável da
        Virilidade Masculina", com conteúdos como:
      </h3>
      <ul className="space-y-3 text-gray-800 text-sm pl-4 list-disc">
        <li>
          Os principais inimigos ocultos na sua rotina que estão{" "}
          <strong>roubando sua libido e sua potência sexual</strong> sem que
          você perceba.
        </li>
        <li>
          <strong>Hábitos simples e naturais</strong> que ajudam a restaurar o
          desejo e a firmeza nas relações.
        </li>
        <li>
          Como identificar{" "}
          <strong>sinais silenciosos de desequilíbrio hormonal</strong>, mesmo
          sem exames ou consultas frequentes.
        </li>
        <li>
          Estratégias naturais para{" "}
          <strong>aumentar a testosterona</strong>, reduzir o estresse e{" "}
          <strong>recuperar sua confiança como homem.</strong>
        </li>
      </ul>
      <CtaButton />

      {/* SECÇÃO 7 — PRESENTE SURPRESA */}
      <h3 className="text-[oklch(0.5_0.17_145)] font-bold text-center text-xl leading-snug">
        Você também vai receber um presente surpresa, totalmente gratuito, ao
        entrar hoje para o grupo de homens que decidiram cuidar da próstata
        ainda em Junho de 2025!
      </h3>
      <img
        src="/presente.jpg"
        alt="Presente surpresa"
        className="w-full h-auto rounded-xl object-cover bg-gray-200"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
        }}
      />
      <CtaButton />

      {/* SECÇÃO 8 — GARANTIA */}
      <div className="bg-[#f2f2f2] rounded-2xl p-6 text-center">
        <div className="text-5xl mb-3">🏅</div>
        <div className="font-bold text-gray-900 text-lg mb-3">
          Seu risco é zero!
        </div>
        <p className="text-xs font-bold text-gray-800 uppercase leading-relaxed">
          O CÓDIGO DE DEFESA DO CONSUMIDOR GARANTE 7 DIAS DE GARANTIA
          INCONDICIONAL EM SEU ART 49. MAS NÓS CONFIAMOS TANTO NA QUALIDADE DO
          NOSSO PRODUTO QUE IREMOS ESTENDER PARA 180 DIAS. CASO CUMPRA O
          PROTOCOLO E NÃO TENHA RESULTADOS IREMOS DEVOLVER SEU DINHEIRO SEM
          BUROCRACIA! FAÇA O TESTE SEM COMPROMISSO!
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <span className="text-[oklch(0.5_0.17_145)] flex-shrink-0">✅</span>
          <div>
            <div className="font-bold text-gray-900 text-sm">Pagamento Único</div>
            <div className="text-sm text-gray-700">Sem mensalidades.</div>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-[oklch(0.5_0.17_145)] flex-shrink-0">✅</span>
          <div>
            <div className="font-bold text-gray-900 text-sm">Acesso Imediato</div>
            <div className="text-sm text-gray-700">
              Acesso imediato após o pagamento.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a2e] rounded-xl p-4 flex items-center gap-3">
        <div className="text-4xl flex-shrink-0">🏅</div>
        <div className="flex-1">
          <div className="text-white font-bold text-sm leading-tight">
            TESTE SEGURO 180 DIAS DE GARANTIA
          </div>
          <div className="text-white text-xs mt-1">
            Resultado Garantido ou Seu Dinheiro de Volta.
          </div>
        </div>
      </div>

      {/* SECÇÃO 9 — TEXTO MOTIVACIONAL + CTA */}
      <p className="font-bold text-gray-900">
        Quantas vezes você já ouviu que é normal conviver com isso depois dos
        40?
      </p>
      <p className="text-gray-800">
        A verdade é que o seu corpo <strong>ainda responde</strong> — ele só
        precisa do <strong>estímulo certo no momento certo.</strong>
      </p>
      <p className="text-gray-800">
        🌿 Este protocolo natural já ajudou centenas de homens a{" "}
        <strong>reduzirem o volume da próstata, voltarem a urinar com força</strong>{" "}
        e{" "}
        <strong>
          recuperarem sua confiança na vida sexual.
        </strong>
      </p>
      <p className="text-gray-800">E agora, pode ser a sua vez.</p>
      <p className="text-gray-800">
        ✨ Não aceite que a idade defina sua qualidade de vida.
      </p>
      <p className="text-center text-gray-600 text-sm">
        Clique no botão abaixo e comece hoje a retomar o controle da sua saúde
        masculina.
      </p>
      <CtaButton />

      {/* SECÇÃO 10 — FAQ */}
      <h3 className="text-center text-2xl mt-4">
        <span className="font-extrabold">FAQ:</span>{" "}
        <span className="italic font-semibold">PERGUNTAS FREQUENTES</span>
      </h3>
      <Faq />
      <CtaButton />
      <div className="h-12" />
    </div>
  );
}
