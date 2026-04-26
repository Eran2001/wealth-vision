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
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <img
                    src={presentation.image.src}
                    alt={presentation.image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10" />
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
                      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                        {presentationsPage.viewLabel}
                        <Icon.ExternalLink className="h-4 w-4" />
                      </span>
                    ) : (
                      <a
                        href={presentation.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 whitespace-nowrap"
                      >
                        {presentationsPage.viewLabel}
                        <Icon.ExternalLink className="h-4 w-4" />
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
