import { Link } from "react-router-dom";
import {
  ArrowRight,
  Telescope,
  ListChecks,
  FileText,
  Sparkles,
  BookOpen,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { site } from "@/data/site";
import { useToast } from "@/hooks/use-toast";

const highlights = [
  {
    icon: Telescope,
    title: "Research Scope",
    text: "A clearly bounded investigation with four interconnected components, each contributing a measurable advance to the chosen domain.",
  },
  {
    icon: ListChecks,
    title: "Milestones",
    text: "Five formal checkpoints — from proposal through viva — track progress with transparent assessment criteria.",
  },
  {
    icon: FileText,
    title: "Documentation",
    text: "Charter, proposal, checklists, and the final thesis bundle are versioned, reviewed, and openly accessible to the panel.",
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: "Practical Impact",
    text: "Outputs are designed for real-world adoption, not just academic novelty.",
  },
  {
    icon: BookOpen,
    title: "Reproducibility",
    text: "Every experiment ships with code, data definitions, and evaluation scripts.",
  },
  {
    icon: Target,
    title: "Measurable Goals",
    text: "Quantitative success criteria are defined upfront and tracked across milestones.",
  },
  {
    icon: Users,
    title: "Collaborative",
    text: "Four-member team with clearly scoped responsibilities and shared accountability.",
  },
];

const HomePage = () => {
  const { toast } = useToast();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-primary-glow/40 blur-3xl" />

        <div className="container relative py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-wider mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Final Year Research Project · 2024 / 2025
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-balance">
              {site.projectName}
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-display text-primary-foreground/85 max-w-2xl">
              {site.tagline}
            </p>
            <p className="mt-6 text-base md:text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
              {site.abstract}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow"
              >
                <Link to="/domain">
                  Explore the research <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/milestones">View milestones</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => toast.error("Completed")}
                className="border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Click
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            At a Glance
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-balance">
            A focused project, structured for real contribution.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <Card
              key={h.title}
              className="p-7 shadow-card-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border/80"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {h.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {h.text}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-subtle-gradient border-y border-border">
        <div className="container py-20 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                Research Benefits
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-balance">
                Why this project matters.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Beyond the academic deliverable, the work is built for genuine
                usefulness — measurable outcomes, reproducible methods, and an
                open documentation trail.
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="group flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card-soft hover:shadow-elevated transition-shadow"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-foreground">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{b.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {b.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <div className="rounded-2xl bg-hero-gradient text-primary-foreground p-10 md:p-14 text-center shadow-elevated">
          <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-2xl mx-auto text-balance">
            Read the full domain breakdown and methodology.
          </h2>
          <p className="mt-4 text-primary-foreground/75 max-w-xl mx-auto">
            Literature survey, research gap, problem, objectives, and the
            technologies underpinning the work.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-7 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/domain">
              Go to Domain <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
