import * as Icon from "@/components/icons";
import { PageHeader } from "@/components/partials/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { documentGroups, documentsPage } from "@/constants/documents";
import type { DocumentItem } from "@/types";

const DocRow = ({ item }: { item: DocumentItem }) => {
  const hasFile = !!item.link;
  const ItemIcon = item.isVideo ? Icon.Play : Icon.FileText;

  return (
    <div className="flex items-center gap-4 py-4 border-b border-border last:border-0">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
        <ItemIcon className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-body font-heading leading-compact text-foreground">
          {item.title}
        </h4>
        <p className="text-fine leading-body tracking-default text-muted-foreground">
          {item.description}
        </p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {hasFile ? (
          <Button asChild size="sm">
            <a href={item.link} target="_blank" rel="noreferrer">
              View
            </a>
          </Button>
        ) : (
          <Button size="sm" disabled>
            View
          </Button>
        )}
        {hasFile ? (
          <Button asChild variant="outline" size="sm">
            <a href={item.link} download>
              Download
            </a>
          </Button>
        ) : (
          <Button variant="outline" size="sm" disabled>
            Download
          </Button>
        )}
      </div>
    </div>
  );
};

const Documents = () => {
  return (
    <>
      <PageHeader
        eyebrow={documentsPage.header.eyebrow}
        title={documentsPage.header.title}
        subtitle={documentsPage.header.subtitle}
      />
      <section className="container py-16">
        <div className="max-w-5xl mx-auto space-y-8">
          {documentGroups.map((group) => (
            <Card key={group.id} className="overflow-hidden shadow-card-soft">
              <div
                className="px-6 py-5"
                style={{ background: "var(--gradient-hero)" }}
              >
                <div className="flex items-center gap-3">
                  <Icon.FolderOpen className="h-5 w-5 text-primary-foreground/80" />
                  <h2 className="font-display text-subhead font-heading leading-compact tracking-close text-primary-foreground">
                    {group.title}
                  </h2>
                </div>
                <p className="mt-1 text-fine leading-body tracking-default text-primary-foreground/70">
                  {group.description}
                </p>
              </div>
              <div className="px-6">
                {group.items.map((item) => (
                  <DocRow key={item.id} item={item} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Documents;
