import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useState } from "react";
import { z } from "zod";
import { Mail, Trash2, Download, ShieldCheck, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Data Requests: Crimson Music" },
      { name: "description", content: "Exercise your GDPR/CCPA rights: request access, export, or erasure of your personal data." },
      { property: "og:title", content: "Contact & Data Requests: Crimson Music" },
      { property: "og:description", content: "Exercise your data rights with Crimson Music." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  requestType: z.enum(["access", "erasure", "portability", "rectification", "other"]),
  message: z.string().trim().min(10, "Please provide a few details").max(2000),
});

const RECIPIENT = "crimson1446@gmail.com";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgqnolr";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    requestType: "erasure" as z.infer<typeof schema>["requestType"],
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          requestType: form.requestType,
          message: form.message,
          _subject: `[Data Request: ${form.requestType}] Crimson Music`,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", requestType: "erasure", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <PageShell>
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-semibold">
            <ShieldCheck className="h-3.5 w-3.5" /> GDPR & CCPA
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Your data, your <span className="text-gradient-crimson">rights</span>
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Request access, correction, portability, or full erasure of your personal data. We
            respond within 30 days.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {[
            { icon: Download, title: "Access / Export", desc: "Get a copy of your data in a machine-readable format." },
            { icon: Trash2, title: "Right to be Forgotten", desc: "Permanently delete your account and personal data." },
            { icon: Mail, title: "Direct email", desc: RECIPIENT },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-2xl p-5">
              <div className="h-10 w-10 rounded-lg bg-primary/15 ring-1 ring-primary/30 text-primary flex items-center justify-center">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div className="mt-3 font-semibold">{title}</div>
              <div className="mt-1 text-sm text-muted-foreground break-words">{desc}</div>
            </div>
          ))}
        </div>

        <form onSubmit={submit} className="mt-8 glass-strong rounded-3xl p-6 sm:p-10 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your name" error={errors.name}>
              <input
                type="text"
                value={form.name}
                maxLength={100}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="input-base"
                placeholder="Jane Doe"
              />
            </Field>
            <Field label="Email address" error={errors.email}>
              <input
                type="email"
                value={form.email}
                maxLength={255}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="input-base"
                placeholder="jane@example.com"
              />
            </Field>
          </div>

          <Field label="Request type" error={errors.requestType}>
            <select
              value={form.requestType}
              onChange={(e) =>
                setForm((f) => ({ ...f, requestType: e.target.value as typeof f.requestType }))
              }
              className="input-base"
            >
              <option value="access">Access: copy of my data</option>
              <option value="erasure">Erasure: right to be forgotten</option>
              <option value="portability">Portability: export my data</option>
              <option value="rectification">Rectification: correct my data</option>
              <option value="other">Other privacy question</option>
            </select>
          </Field>

          <Field label="Message" error={errors.message}>
            <textarea
              rows={5}
              value={form.message}
              maxLength={2000}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="input-base resize-y"
              placeholder="Tell us a bit about your request so we can verify your identity and respond quickly."
            />
          </Field>

          {status === "success" ? (
            <div className="flex items-center gap-2 rounded-xl bg-primary/10 ring-1 ring-primary/30 text-primary px-4 py-3 text-sm font-medium">
              <CheckCircle2 className="h-4 w-4" />
              Request sent, we'll respond within 30 days.
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground">
                {status === "error"
                  ? "Something went wrong sending your request, please try again, or email us directly."
                  : "Submitted directly and securely, no email client required."}
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-crimson hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                {status === "submitting" ? "Sending…" : "Send request"}
              </button>
            </div>
          )}
        </form>
      </div>
    </PageShell>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
