import { PageHeader } from "@/components/partials/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { domainPage, domainSections } from "@/constants/domain";

type DomainContentBlock = (typeof domainSections)[number]["content"][number];

const DomainContent = ({ block }: { block: DomainContentBlock }) => {
  if (block.type === "paragraph") {
    return <p>{block.text}</p>;
  }

  if (block.type === "heading") {
    return (
      <p className="mt-4 text-body font-heading leading-compact tracking-default text-foreground first:mt-0">
        {block.text}
      </p>
    );
  }

  if (block.type === "callout") {
    return (
      <p className="mt-3 text-body font-ui leading-airy tracking-default text-foreground">
        {block.text}
      </p>
    );
  }

  if (block.type === "badges") {
    return (
      <div className="flex flex-wrap gap-2">
        {block.items.map((technology) => (
          <Badge
            key={technology}
            variant="secondary"
            className="px-3 py-1 text-caption font-ui"
          >
            {technology}
          </Badge>
        ))}
      </div>
    );
  }

  return (
    <ul className="list-disc pl-5 space-y-1.5">
      {block.items.map((item) => (
        <li key={typeof item === "string" ? item : item.label}>
          {typeof item === "string" ? (
            item
          ) : (
            <>
              <strong>{item.label}</strong> {item.text}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

const Domain = () => {
  return (
    <>
      <PageHeader
        eyebrow={domainPage.header.eyebrow}
        title={domainPage.header.title}
        subtitle={domainPage.header.subtitle}
      />
      <section className="container py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Accordion
            type="multiple"
            defaultValue={["literature"]}
            className="space-y-3"
          >
            {domainSections.map((section) => (
              <AccordionItem
                key={section.id}
                value={section.id}
                className="border border-border rounded-xl bg-card shadow-card-soft px-5 data-[state=open]:shadow-elevated transition-shadow"
              >
                <AccordionTrigger className="py-5 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <section.icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-body-lg font-heading leading-close tracking-close text-left">
                      {section.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-14 pr-2 text-body leading-airy tracking-default text-muted-foreground space-y-3">
                  {section.content.map((block, index) => (
                    <DomainContent
                      key={`${section.id}-${block.type}-${index}`}
                      block={block}
                    />
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Domain;
