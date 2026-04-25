interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export const PageHeader = ({ eyebrow, title, subtitle }: PageHeaderProps) => {
  return (
    <section className="relative overflow-hidden border-b border-border bg-hero-gradient text-primary-foreground">
      <div className="absolute inset-0 opacity-faint bg-dot-grid-md" />
      <div className="container relative py-20 md:py-24">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-caption font-ui label-case tracking-airy mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-heading-lg md:text-display lg:text-display-lg font-heading text-balance max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-body md:text-body-lg text-primary-foreground/75 max-w-2xl leading-airy">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
