import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  showText?: boolean;
  text?: string;
  gradientId?: string;
  className?: string;
  markClassName?: string;
  textClassName?: string;
};

export function Logo({
  showText = true,
  text = siteConfig.author,
  gradientId = "logo-signal",
  className,
  markClassName,
  textClassName
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-signal-600 text-signal-50 shadow-sm ring-1 ring-signal-700/30 dark:ring-signal-400/40",
          markClassName
        )}
      >
        <svg viewBox="0 0 36 36" role="img" className="h-full w-full" aria-label={`${siteConfig.author} 标识`}>
          <text
            x="18"
            y="18"
            dominantBaseline="central"
            textAnchor="middle"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            fontSize="22"
            fontWeight="800"
            fill="#fef6e7"
            letterSpacing="-0.5"
          >H</text>
        </svg>
      </span>
      {showText ? (
        <span className={cn("font-semibold tracking-normal text-primary", textClassName)}>
          {text}
        </span>
      ) : null}
    </span>
  );
}
