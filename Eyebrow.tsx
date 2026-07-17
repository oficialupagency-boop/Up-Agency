export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <span className="h-[6px] w-[6px] rounded-full bg-signal shrink-0" aria-hidden="true" />
      <span className="text-[13px] font-medium tracking-[0.14em] uppercase text-ink/60">
        {children}
      </span>
    </div>
  );
}
