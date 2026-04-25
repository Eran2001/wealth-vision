import { PageHeader } from "@/components/partials/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { presentations } from "@/constants/presentations";
import {
  Calendar,
  ExternalLink,
  Presentation as PresentationIcon,
} from "lucide-react";

const Presentations = () => {
  return (
    <>
      <PageHeader
        eyebrow="Slides"
        title="Presentations"
        subtitle="Slide decks for each formal milestone — proposal through final defence."
      />
      <section className="container py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {presentations.map((p) => {
            const disabled = p.link === "[PLACEHOLDER]";
            return (
              <Card
                key={p.id}
                className="overflow-hidden shadow-card-soft hover:shadow-elevated transition-all hover:-translate-y-0.5"
              >
                <div className="aspect-video bg-hero-gradient relative flex items-center justify-center">
                  <div className="absolute inset-0 opacity-subtle bg-dot-grid-sm" />
                  <PresentationIcon className="h-14 w-14 text-primary-foreground/80 relative" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {p.date}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                  <Button
                    asChild={!disabled}
                    disabled={disabled}
                    className="mt-5"
                    variant="default"
                  >
                    {disabled ? (
                      <span>
                        View slides <ExternalLink className="ml-1.5 h-4 w-4" />
                      </span>
                    ) : (
                      <a href={p.link} target="_blank" rel="noreferrer">
                        View slides <ExternalLink className="ml-1.5 h-4 w-4" />
                      </a>
                    )}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Presentations;
