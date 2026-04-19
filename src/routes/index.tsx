import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { QuizShell } from "@/components/quiz/QuizShell";
import { Landing } from "@/components/quiz/screens/Landing";
import { Screen1 } from "@/components/quiz/screens/Screen1";
import { Screen2 } from "@/components/quiz/screens/Screen2";
import { Screen3 } from "@/components/quiz/screens/Screen3";
import { Screen4 } from "@/components/quiz/screens/Screen4";
import { Screen4B } from "@/components/quiz/screens/Screen4B";
import { MultiSelect } from "@/components/quiz/screens/MultiSelect";
import { Screen6 } from "@/components/quiz/screens/Screen6";
import { Screen7 } from "@/components/quiz/screens/Screen7";
import { Screen8 } from "@/components/quiz/screens/Screen8";
import { Screen9 } from "@/components/quiz/screens/Screen9";
import { Screen11 } from "@/components/quiz/screens/Screen11";
import { Screen12 } from "@/components/quiz/screens/Screen12";
import { Screen13 } from "@/components/quiz/screens/Screen13";
import { Screen14 } from "@/components/quiz/screens/Screen14";
import { Loading } from "@/components/quiz/screens/Loading";
import { ProtocoloGerado } from "@/components/quiz/screens/ProtocoloGerado";

export const Route = createFileRoute("/")({
  component: Index,
});

type Answers = Record<string, string | string[]>;

function Index() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const next = () => setStep((s) => Math.min(s + 1, 16));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const answer = (key: string, value: string | string[]) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    next();
  };

  // Quiz screens (1..13) get header + progress
  const isQuiz = step >= 1 && step <= 13;
  const showHeader = step >= 1; // landing has none
  const showProgress = isQuiz;
  const progress = isQuiz ? (step / 13) * 100 : 0;

  let content: React.ReactNode = null;
  switch (step) {
    case 0:
      content = <Landing onStart={next} />;
      break;
    case 1:
      content = <Screen1 onAnswer={(v) => answer("symptoms_count", v)} />;
      break;
    case 2:
      content = <Screen2 onAnswer={(v) => answer("age", v)} />;
      break;
    case 3:
      content = <Screen3 onAnswer={(v) => answer("hpb_diagnosis", v)} />;
      break;
    case 4:
      content = <Screen4 onAnswer={(v) => answer("hpb_time", v)} />;
      break;
    case 5:
      content = <Screen4B onContinue={next} />;
      break;
    case 6:
      content = (
        <MultiSelect
          title="Você tem alguma dessas condições?"
          subtitle="Elas podem influenciar diretamente o crescimento da sua próstata. Para uma orientação mais precisa, responda à pergunta abaixo, selecione uma ou mais:"
          options={[
            { label: "Tenho obesidade ou sobrepeso", emoji: "🧑‍🦱" },
            { label: "Tenho diabetes tipo 2", emoji: "🩸" },
            { label: "Tenho distúrbios hormonais", emoji: "🧪" },
            { label: "Tenho pressão alta (hipertensão)", emoji: "🩺" },
            { label: "Não tenho nenhuma dessas condições", emoji: "🙌" },
          ]}
          onContinue={(s) => answer("conditions", s)}
        />
      );
      break;
    case 7:
      content = <Screen6 onAnswer={(v) => answer("desparasitou", v)} />;
      break;
    case 8:
      content = <Screen7 onContinue={next} />;
      break;
    case 9:
      content = <Screen8 onAnswer={(v) => answer("ciencia_gravidade", v)} />;
      break;
    case 10:
      content = <Screen9 onAnswer={(v) => answer("concorda", v)} />;
      break;
    case 11:
      content = (
        <MultiSelect
          title="Você comeu algum desses alimentos nos ultimos 3 meses?"
          subtitle="Responda com atenção estamos avaliando cada resposta."
          options={[
            { label: "Queijo", emoji: "🧀" },
            { label: "Alcool", emoji: "🍺" },
            { label: "Batata Frita", emoji: "🍟" },
            { label: "Refrigerante", emoji: "🥤" },
            { label: "Salsicha", emoji: "🌭" },
          ]}
          onContinue={(s) => answer("alimentos", s)}
        />
      );
      break;
    case 12:
      content = <Screen11 onContinue={(s) => answer("sintomas_incomodam", s)} />;
      break;
    case 13:
      content = <Screen12 onAnswer={(v) => answer("tempo_sintomas", v)} />;
      break;
    case 14:
      content = <Screen13 onContinue={next} />;
      break;
    case 15:
      content = <Loading onDone={next} />;
      break;
    case 16:
      content = <Screen14 />;
      break;
  }

  const isLoading = step === 15;
  const showHeaderFinal = showHeader && !isLoading;
  const showProgressFinal = showProgress && !isLoading;

  return (
    <QuizShell
      showHeader={showHeaderFinal}
      showProgress={showProgressFinal}
      progress={progress}
      onBack={step > 0 && step <= 14 ? prev : undefined}
      fadeKey={step}
    >
      {content}
    </QuizShell>
  );
}
