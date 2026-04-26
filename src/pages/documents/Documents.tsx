import * as Icon from "@/components/icons";
import { PageHeader } from "@/components/partials/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { documents, documentsPage } from "@/constants/documents";
import type { DocumentItem } from "@/types";

const DocCard = ({ doc }: { doc: DocumentItem }) => {
  const disabled = !doc.link || doc.link === "[PLACEHOLDER]";

  return (
    <Card className="flex flex-col p-6 shadow-card-soft hover:shadow-elevated transition-all hover:-translate-y-0.5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Icon.FileText className="h-5 w-5" />
        </div>
        <Badge variant="secondary">{doc.category}</Badge>
      </div>
      <h3 className="font-display text-body-lg font-heading leading-close tracking-close">
        {doc.title}
      </h3>
      <p className="mt-1 text-caption leading-body tracking-default text-muted-foreground capitalize">
        Status: {doc.status}
      </p>
      <Button
        asChild={!disabled}
        disabled={disabled}
        variant="outline"
        size="sm"
        className="mt-5 self-start"
      >
        {disabled ? (
          <span className="inline-flex items-center gap-1.5">
            {documentsPage.openLabel}
            <Icon.ExternalLink className="h-3.5 w-3.5" />
          </span>
        ) : (
          <a href={doc.link} target="_blank" rel="noreferrer">
            {documentsPage.openLabel}
            <Icon.ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </Button>
    </Card>
  );
};

const Documents = () => {
  const submitted = documents.filter((doc) => doc.status === "submitted");
  const pending = documents.filter((doc) => doc.status === "pending");

  return (
    <>
      <PageHeader
        eyebrow={documentsPage.header.eyebrow}
        title={documentsPage.header.title}
        subtitle={documentsPage.header.subtitle}
      />
      <section className="container py-16">
        <Tabs defaultValue="submitted" className="max-w-5xl mx-auto">
          <TabsList className="mb-10 grid w-full max-w-sm grid-cols-2">
            <TabsTrigger value="submitted">
              {documentsPage.tabs.submitted} ({submitted.length})
            </TabsTrigger>
            <TabsTrigger value="pending">
              {documentsPage.tabs.pending} ({pending.length})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="submitted">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {submitted.map((doc) => (
                <DocCard key={doc.id} doc={doc} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="pending">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pending.map((doc) => (
                <DocCard key={doc.id} doc={doc} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default Documents;
