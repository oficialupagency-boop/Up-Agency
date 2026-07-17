import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  showArrow?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  showArrow = false,
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium transition-all duration-300 ease-premium whitespace-nowrap";

  const variants: Record<string, string> = {
    primary: "bg-ink text-paper hover:bg-signal",
    secondary: "bg-transparent text-ink border border-ink/15 hover:border-ink/40",
    ghost: "bg-transparent text-ink/70 hover:text-ink",
  };

  const isAnchor = href.startsWith("#");

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1"
          strokeWidth={2}
        />
      )}
    </>
  );

  if (isAnchor) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {content}
    </Link>
  );
}
