import { PageHeader } from "@/components/partials/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { documents } from "@/constants/documents";
import { ExternalLink, FileText } from "lucide-react";
import { DocumentItem } from "@/types";

const DocCard = ({ doc }: { doc: DocumentItem }) => {
  const disabled = !doc.link || doc.link === "[PLACEHOLDER]";
  return (
    <Card className="p-6 shadow-card-soft hover:shadow-elevated transition-all hover:-translate-y-0.5 flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <FileText className="h-5 w-5" />
        </div>
        <Badge variant="secondary">{doc.category}</Badge>
      </div>
      <h3 className="font-display text-body-lg font-heading leading-close">
        {doc.title}
      </h3>
      <p className="mt-1 text-caption text-muted-foreground capitalize">
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
          <span>
            Open document <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
          </span>
        ) : (
          <a href={doc.link} target="_blank" rel="noreferrer">
            Open document <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
          </a>
        )}
      </Button>
    </Card>
  );
};

const Documents = () => {
  const submitted = documents.filter((d) => d.status === "submitted");
  const pending = documents.filter((d) => d.status === "pending");

  return (
    <>
      <PageHeader
        eyebrow="Documents"
        title="Project Documentation"
        subtitle="Charter, proposal, checklists, and the final thesis bundle — versioned, reviewed, and openly accessible."
      />
      <section className="container py-16">
        <Tabs defaultValue="submitted" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-sm grid-cols-2 mb-10">
            <TabsTrigger value="submitted">
              Submitted ({submitted.length})
            </TabsTrigger>
            <TabsTrigger value="pending">
              Pending ({pending.length})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="submitted">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {submitted.map((d) => (
                <DocCard key={d.id} doc={d} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="pending">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pending.map((d) => (
                <DocCard key={d.id} doc={d} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default Documents;
