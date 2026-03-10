import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { CopyToClipboard } from "@/components/CopyToClipboard";
import { Figure } from "@/components/Figure";
import { ViewCounter } from "@/components/ViewCounter";
import { CORAL } from "@/lib/coral";

export const metadata: Metadata = {
  title: "CORAL",
  description: CORAL.tagline,
};

function SectionTitle({
  id,
  title,
  subtitle,
}: {
  id?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-base text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "blue" | "yellow";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20";
  let styles = "";
  if (variant === "primary") {
    styles = "bg-slate-900 text-white hover:bg-slate-800";
  } else if (variant === "blue") {
    styles = "bg-[#3b82f6] text-white hover:bg-[#2563eb]";
  } else if (variant === "yellow") {
    styles = "bg-[#FFD21E] text-slate-900 hover:bg-[#f0c400]";
  } else {
    styles = "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50";
  }

  const isExternal = /^https?:\/\//.test(href);
  const extraProps = isExternal
    ? { target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <a href={href} className={`${base} ${styles}`} {...extraProps}>
      {children}
    </a>
  );
}

function Icon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "chart-bar":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
          />
        </svg>
      );
    case "database":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      );
    case "lightning-bolt":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          />
        </svg>
      );
    case "cube":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />
        </svg>
      );
    default:
      return null;
  }
}


export default function CoralPage() {
  return (
    <div className="min-h-dvh bg-[#faf8f2]">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#faf8f2]/80 backdrop-blur">
        <Container className="py-3">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#"
              className="text-3xl font-semibold tracking-tight text-slate-900 hover:text-slate-700"
            >
              Frontier Robotics
            </a>

            <nav className="hidden items-center gap-6 text-lg text-slate-600 md:flex">
              <div className="relative group">
                <button className="flex items-center gap-1 font-semibold hover:text-slate-900 focus:outline-none">
                  Research
                  <svg
                    className="h-4 w-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-full py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a
                    href="https://frontierrobo.github.io/CORAL/"
                    className="block px-1 py-1 text-sm font-medium text-slate-900"
                  >
                    CORAL
                  </a>
                  <a
                    href="https://frontierrobo.github.io/SimVLA/"
                    className="block px-1 py-1 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    SimVLA
                  </a>
                </div>
              </div>
              <a className="hover:text-slate-900" href="#overview">
                Overview
              </a>
              <a className="hover:text-slate-900" href="#method">
                Method
              </a>
              <a className="hover:text-slate-900" href="#evaluation">
                Evaluation
              </a>
              <a className="hover:text-slate-900" href="#citation">
                Citation
              </a>
            </nav>
          </div>
        </Container>
      </header>

      <main>
        {/* Hero */}
        <section className="pt-12 pb-0">
          <Container>
            <div className="mx-auto text-center max-w-[90rem]">
              <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-[2.75rem] lg:text-5xl whitespace-nowrap">
                {CORAL.titleLine1}
                <br />
                {CORAL.titleLine2}
              </h1>
              <p className="mt-4 text-pretty text-base text-slate-700 sm:text-lg">
                {CORAL.authors}
              </p>
              <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                {CORAL.tagline}
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button href="#citation" variant="secondary">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  Citation
                </Button>
                <Button href="https://frontierrobo.github.io/SimVLA/" variant="secondary">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  SimVLA
                </Button>
                <div className="flex items-center gap-2">
                  <ViewCounter slug="coral" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* System Overview Figure */}
        <section className="pt-10 pb-0">
          <Container>
            <Figure {...CORAL.figures.overview} maxWidthPx={1100} />
          </Container>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-16" id="overview">
          <Container>
            <SectionTitle
              title="Overview"
              subtitle="A concise summary of the motivation, contributions, and key takeaways."
            />
            <div className="mt-6 space-y-6">
              <p className="whitespace-pre-line text-base leading-relaxed text-slate-700">
                {CORAL.abstract}
              </p>

              <div>
                <h3 className="mb-4 text-base font-semibold text-slate-900">
                  Main contributions
                </h3>
                <div className="grid gap-6 sm:grid-cols-3">
                  {CORAL.contributions.map((item) => (
                    <div
                      key={item.title}
                      className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50">
                          <Icon
                            name={item.icon}
                            className={`h-6 w-6 ${
                              item.color === "indigo"
                                ? "text-indigo-600"
                                : item.color === "emerald"
                                  ? "text-emerald-600"
                                  : "text-amber-600"
                            }`}
                          />
                        </div>
                        <h4 className="text-base font-bold text-slate-900">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Method */}
        <section
          className="border-y border-slate-200/70 bg-white/70 py-12 sm:py-16"
          id="method"
        >
          <Container>
            <SectionTitle
              title="Method"
              subtitle="A two-stage pipeline that disentangles general embodiment learning from task-specific specialization."
            />
            <div className="mt-8 space-y-10">
              <p className="whitespace-pre-line text-base leading-relaxed text-slate-700">
                {CORAL.method.intro}
              </p>

              {/* First row: two smaller stages side by side */}
              <div className="grid gap-6 sm:grid-cols-2">
                {CORAL.method.stages
                  .filter((stage) => !("algorithmImage" in stage))
                  .map((stage) => (
                    <div
                      key={stage.title}
                      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                            stage.color === "blue"
                              ? "bg-blue-600"
                              : stage.color === "emerald"
                                ? "bg-emerald-600"
                                : "bg-amber-600"
                          }`}
                        >
                          <Icon name={stage.icon} className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="text-base font-bold text-slate-900">
                          {stage.title}
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {stage.content}
                      </p>
                    </div>
                  ))}
              </div>

              {/* Second row: CORAL Manager narrower + centered with algorithm image */}
              {CORAL.method.stages
                .filter((stage) => "algorithmImage" in stage)
                .map((stage) => (
                  <div
                    key={stage.title}
                    className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                  >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                      <div className="lg:w-3/5">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-600">
                            <Icon name={stage.icon} className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="text-base font-bold text-slate-900">
                            {stage.title}
                          </h4>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">
                          {stage.content}
                        </p>
                      </div>
                      {"algorithmImage" in stage && (
                        <div className="lg:w-2/5">
                          <img
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${stage.algorithmImage}`}
                            alt="Dynamic Expert Switching Protocol"
                            className="w-full rounded-xl border border-slate-200"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}

            </div>
          </Container>
        </section>

        {/* Evaluation */}
        <section className="py-12 sm:py-16" id="evaluation">
          <Container>
            <SectionTitle
              title="Evaluation"
              subtitle="Comprehensive results across simulation benchmarks and real-world robotic settings."
            />

            <div className="mt-8 space-y-14">
              {/* Simulation Benchmarks */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Simulation Benchmarks
                </h3>

                {/* LIBERO */}
                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-slate-800">
                    {CORAL.results.libero.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {CORAL.results.libero.description}
                  </p>
                  <Figure {...CORAL.figures.tableLibero} maxWidthPx={800} />
                </div>

                {/* WidowX + Google side by side */}
                <div className="space-y-4">
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="text-base font-semibold text-slate-800">
                        {CORAL.results.widowx.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {CORAL.results.widowx.description}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-base font-semibold text-slate-800">
                        {CORAL.results.google.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {CORAL.results.google.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
                    <Figure {...CORAL.figures.tableWidowx} maxWidthPx={600} />
                    <Figure {...CORAL.figures.tableGoogle} maxWidthPx={600} />
                  </div>
                </div>
              </div>

              {/* Real-World Deployment */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Real-World Deployment
                </h3>

                {/* Zero-Shot Generalization */}
                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-slate-800">
                    Cross-Scene Zero-Shot Generalization
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600">
                    We evaluate on 8 complex real-world tasks in completely
                    unseen, held-out scenes, emphasizing dexterous and
                    fine-grained bimanual manipulation. CORAL significantly
                    enhances the base model's cross-scene robustness by
                    activating task-specific LoRA experts.
                  </p>
                  <Figure {...CORAL.figures.zeroShot} caption={undefined} maxWidthPx={700} />
                </div>

                {/* New Capability & Real Robot */}
                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-slate-800">
                    New Capability Acquisition
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600">
                    CORAL is evaluated on acquiring entirely new, out-of-domain
                    capabilities: <em>Open Door</em> (3 variants) and{" "}
                    <em>Press Elevator Button</em> (5 variants). CORAL achieves
                    performance comparable to resource-intensive independent full
                    fine-tuning while demanding only a tiny fraction of the storage footprint.
                  </p>
                  <Figure {...CORAL.figures.newCapability} caption={undefined} maxWidthPx={700} />
                  <h4 className="text-base font-semibold text-slate-800 mt-6">
                    Qualitative examples
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600 mb-4">
                    We deploy CORAL on a real Galaxea R1 dual-arm mobile manipulator to acquire entirely new capabilities. Through lightweight LoRA experts, the robot smoothly executes intricate, multi-stage manipulation tasks—such as operating different types of doors and interacting with various elevator buttons—demonstrating real-time, zero-overhead inference in the physical world.
                  </p>
                  <Figure {...CORAL.figures.realWorld} caption={undefined} maxWidthPx={900} />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Citation */}
        <section
          className="border-t border-slate-200/70 bg-white/70 py-12 sm:py-16"
          id="citation"
        >
          <Container>
            <SectionTitle
              title="Citation"
              subtitle="BibTeX entry for this work."
            />

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-medium text-slate-700">BibTeX</p>
                <CopyToClipboard text={CORAL.bibtex} />
              </div>
              <pre className="mt-4 overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-xs leading-relaxed text-slate-800 sm:text-sm">
                <code>{CORAL.bibtex}</code>
              </pre>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-10">
        <Container>
          <p className="text-sm text-slate-600">
            The right of final interpretation is reserved by the
            <span className="font-bold"> Frontier Robotics </span>
            development team.
          </p>
        </Container>
      </footer>
    </div>
  );
}
