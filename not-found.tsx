import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="text-[13px] font-medium tracking-[0.14em] uppercase text-ink/40">
        Erro 404
      </span>
      <h1 className="mt-5 text-display-2 font-semibold text-ink">
        Essa página não foi encontrada.
      </h1>
      <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-ink/60">
        O conteúdo que você procura pode ter sido movido ou não existe mais.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary">
          Voltar ao início
        </Button>
      </div>
      <Link href="/" className="sr-only">
        UP Agency
      </Link>
    </main>
  );
}
