import Link from "next/link";
import { Layout } from "./Layout";
import { contactInfo } from "@/app/data";

export const Error404 = () => {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden py-24">
      <div className="dot-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]" />
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <Layout className="relative">
        <div className="flex flex-col items-start gap-8">
          <p className="font-mono text-xs tracking-[0.2em] text-ink-3 uppercase">
            Error 404
          </p>
          <h1 className="font-display text-7xl font-bold tracking-tight md:text-[9rem]">
            Page{" "}
            <span className="text-outline">not found</span>
          </h1>
          <p className="max-w-md leading-relaxed text-ink-2">
            The route you requested doesn&apos;t exist. It may have moved, or the
            address is incomplete — either way, there&apos;s a way back.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-accent px-6 py-3.5 font-mono text-xs font-medium tracking-[0.14em] text-white uppercase transition-colors hover:bg-accent/90 dark:text-bg"
            >
              Return home
            </Link>
            <Link
              href={`mailto:${contactInfo.email}`}
              className="rounded-full border border-line-strong px-6 py-3.5 font-mono text-xs font-medium tracking-[0.14em] text-ink uppercase transition-colors hover:border-accent hover:text-accent"
            >
              Contact me
            </Link>
          </div>
          <p className="font-mono text-xs text-ink-3">
            <span className="text-accent">$</span> ls / —{" "}
            <span className="text-ink-2">try navigating from the root</span>
          </p>
        </div>
      </Layout>
    </main>
  );
};
