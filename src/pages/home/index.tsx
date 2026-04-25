import { Link } from "react-router-dom";

import * as Icon from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { homeBenefits, homeHighlights } from "@/constants/home";
import { site } from "@/constants/site";

import HeroVisual from "./components/HeroVisual";

const HomePage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div className="absolute inset-0 opacity-subtle bg-dot-grid" />
        <div className="absolute -top-40 -right-40 h-125 w-125 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-100 w-100 rounded-full bg-primary-glow/40 blur-3xl" />

        <div className="container relative py-24 md:py-32 lg:py-40">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-caption font-ui label-case tracking-airy">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Final Year Research Project - 2025 / 2026 - {site.groupId}
              </div>
              <h1 className="font-display text-display font-heading leading-display tracking-close text-balance md:text-display-lg lg:text-hero">
                {site.projectName}
              </h1>
              <p className="mt-6 max-w-2xl font-display text-subhead leading-close tracking-default text-primary-foreground/85 md:text-title">
                {site.tagline}
              </p>
              <p className="mt-6 max-w-2xl text-body leading-airy tracking-default text-primary-foreground/70 md:text-body-lg">
                {site.abstract}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow"
                >
                  <Link to="/domain">
                    Explore the research{" "}
                    <Icon.ArrowRight className="ml-1.5 h-4 w-4" />
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
              </div>
            </div>
            <div className="hidden h-64 lg:block">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-caption font-label label-case tracking-airy text-accent">
            At a Glance
          </p>
          <h2 className="font-display text-heading font-heading leading-compact tracking-close text-balance md:text-heading-lg">
            A focused project, structured for real contribution.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {homeHighlights.map((highlight) => (
            <Card
              key={highlight.title}
              className="p-7 shadow-card-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border/80"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <highlight.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-subhead font-heading leading-compact tracking-close">
                {highlight.title}
              </h3>
              <p className="mt-2 text-fine leading-airy tracking-default text-muted-foreground">
                {highlight.text}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-subtle-gradient border-y border-border">
        <div className="container py-20 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mb-3 text-caption font-label label-case tracking-airy text-accent">
                Why Wealth Vision
              </p>
              <h2 className="font-display text-heading font-heading leading-compact tracking-close text-balance md:text-heading-lg">
                Why this project matters.
              </h2>
              <p className="mt-4 text-body leading-airy tracking-default text-muted-foreground">
                Global investing is complex and fragmented. Wealth Vision
                bridges the gap between generic robo-advisors and fully
                personalised, ESG-aware, globally inclusive investment guidance.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
              {homeBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card-soft hover:shadow-elevated transition-shadow"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-foreground">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-body font-heading leading-compact text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-fine leading-airy tracking-default text-muted-foreground">
                      {benefit.text}
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
          <h2 className="mx-auto max-w-2xl font-display text-heading font-heading leading-compact tracking-close text-balance md:text-heading-lg">
            Read the full domain breakdown and methodology.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body leading-airy tracking-default text-primary-foreground/75">
            Literature survey, research gap, problem statement, objectives, and
            the technologies powering Wealth Vision.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-7 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/domain">
              Go to Domain <Icon.ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
