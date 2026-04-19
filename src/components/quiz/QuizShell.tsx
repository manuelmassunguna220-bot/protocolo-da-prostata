import { ReactNode } from "react";

interface QuizShellProps {
  children: ReactNode;
  showHeader?: boolean;
  showProgress?: boolean;
  progress?: number;
  onBack?: () => void;
  fadeKey?: number | string;
}

export function QuizShell({
  children,
  showHeader = true,
  showProgress = true,
  progress = 0,
  onBack,
  fadeKey,
}: QuizShellProps) {
  return (
    <div className="min-h-screen w-full flex justify-center bg-white">
      <div className="w-full max-w-[480px] flex flex-col px-4 pb-8">
        {showHeader && (
          <div className="pt-4 relative">
            {onBack && (
              <button
                onClick={onBack}
                aria-label="Voltar"
                className="absolute left-0 top-4 text-2xl text-[oklch(0.55_0.16_145)] hover:opacity-70"
              >
                ←
              </button>
            )}
            <div className="text-center text-[oklch(0.45_0.14_145)] font-extrabold text-sm sm:text-base tracking-tight uppercase">
              Protocolo Desinflamação<br />
              <span className="text-[oklch(0.55_0.16_145)]">da Próstata</span>
            </div>
            {showProgress && (
              <div className="mt-3 h-2 w-full bg-[oklch(0.94_0.02_145)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[oklch(0.55_0.16_145)] transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        )}

        <div
          key={fadeKey}
          className="flex-1 mt-4 animate-[quizFade_300ms_ease-out]"
        >
          {children}
        </div>
      </div>

      <style>{`
        @keyframes quizFade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export function PrimaryButton({
  children,
  onClick,
  type = "button",
  href,
}: {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  href?: string;
}) {
  const cls =
    "inline-block w-full text-center bg-[oklch(0.55_0.16_145)] hover:bg-[oklch(0.5_0.16_145)] text-white font-bold text-base sm:text-lg py-4 px-6 rounded-full shadow-md transition active:scale-[0.98]";
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function AnswerButton({
  children,
  onClick,
  selected = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  selected?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-2xl border-2 font-medium text-base text-black transition active:scale-[0.98] ${
        selected
          ? "bg-[oklch(0.85_0.12_145)] border-[oklch(0.45_0.16_145)]"
          : "bg-[oklch(0.94_0.06_145)] border-[oklch(0.55_0.16_145)] hover:bg-[oklch(0.9_0.08_145)]"
      }`}
    >
      {children}
    </button>
  );
}
