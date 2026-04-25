import * as Icon from "@/components/icons";
import { PageHeader } from "@/components/partials/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { presentations, presentationsPage } from "@/constants/presentations";

const Presentations = () => {
  return (
    <>
      <PageHeader
        eyebrow={presentationsPage.header.eyebrow}
        title={presentationsPage.header.title}
        subtitle={presentationsPage.header.subtitle}
      />
      <section className="container py-16">
        <div className="grid max-w-5xl mx-auto gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {presentations.map((presentation) => {
            const disabled = presentation.link === "[PLACEHOLDER]";

            return (
              <Card
                key={presentation.id}
                className="overflow-hidden shadow-card-soft hover:shadow-elevated transition-all hover:-translate-y-0.5"
              >
                <div className="relative flex aspect-video items-center justify-center bg-hero-gradient">
                  <div className="absolute inset-0 opacity-subtle bg-dot-grid-sm" />
                  <Icon.Presentation className="relative h-14 w-14 text-primary-foreground/80" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-caption leading-body tracking-default text-muted-foreground">
                    <Icon.Calendar className="h-3.5 w-3.5" />
                    {presentation.date}
                  </div>
                  <h3 className="mt-2 font-display text-subhead font-heading leading-compact tracking-close">
                    {presentation.title}
                  </h3>
                  <p className="mt-2 text-fine leading-airy tracking-default text-muted-foreground">
                    {presentation.description}
                  </p>
                  <Button
                    asChild={!disabled}
                    disabled={disabled}
                    className="mt-5"
                    variant="default"
                  >
                    {disabled ? (
                      <span>
                        {presentationsPage.viewLabel}
                        <Icon.ExternalLink className="ml-1.5 h-4 w-4" />
                      </span>
                    ) : (
                      <a href={presentation.link} target="_blank" rel="noreferrer">
                        {presentationsPage.viewLabel}
                        <Icon.ExternalLink className="ml-1.5 h-4 w-4" />
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
