import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-hero">
      <SiteHeader />
      <main className="pt-28">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="glass-strong rounded-3xl p-8 sm:p-12">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">Legal</div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
          <div className="mt-8 prose-legal">{children}</div>
        </div>
      </div>
    </PageShell>
  );
}
