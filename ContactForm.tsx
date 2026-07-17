"use client";

import { useState, FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const fields = [
  { id: "name", label: "Nome", type: "text", autoComplete: "name" },
  { id: "company", label: "Empresa", type: "text", autoComplete: "organization" },
  { id: "role", label: "Cargo", type: "text", autoComplete: "organization-title" },
  { id: "phone", label: "Telefone", type: "tel", autoComplete: "tel" },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Falha no envio");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-ink/10 bg-paper px-8 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper">
          <Check className="h-6 w-6" strokeWidth={2} />
        </div>
        <h3 className="mt-6 text-[19px] font-semibold text-ink">Diagnóstico solicitado.</h3>
        <p className="mt-2 max-w-[42ch] text-[14.5px] leading-relaxed text-ink/60">
          Recebemos suas informações. Nossa equipe entrará em contato em até 1 dia útil para
          agendar o Diagnóstico Estratégico.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-ink/10 bg-paper p-7 md:p-9">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.id} className={field.id === "email" ? "sm:col-span-2" : ""}>
            <label htmlFor={field.id} className="mb-2 block text-[13px] font-medium text-ink/70">
              {field.label}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              autoComplete={field.autoComplete}
              required
              className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-ink/30 focus:border-ink/40"
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-[13px] font-medium text-ink/70">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full resize-none rounded-lg border border-ink/15 bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-ink/30 focus:border-ink/40"
            placeholder="Conte um pouco sobre o momento atual da sua empresa."
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-[13.5px] text-signal">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-paper transition-all duration-300 ease-premium hover:bg-signal disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "loading" ? "Enviando..." : "Solicitar Diagnóstico Estratégico"}
      </button>
    </form>
  );
}
