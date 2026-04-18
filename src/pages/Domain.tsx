import { PageHeader } from "@/components/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Search, AlertCircle, Target, Workflow, Cpu } from "lucide-react";

const sections = [
  {
    id: "literature",
    icon: BookOpen,
    title: "Literature Survey",
    body: (
      <>
        <p>
          The literature survey examines prior work across three converging streams: foundational methods, recent applied
          systems, and evaluation frameworks within the chosen domain. We reviewed peer-reviewed journals, top-tier
          conferences, and credible technical reports from the last seven years.
        </p>
        <p>
          Existing approaches typically optimise for a single dimension — accuracy, latency, or interpretability — rarely
          all three. The survey grounds our design choices and motivates the gap we address.
        </p>
      </>
    ),
  },
  {
    id: "gap",
    icon: Search,
    title: "Research Gap",
    body: (
      <>
        <p>
          Despite substantial progress, current solutions exhibit three recurring limitations: (1) limited generalisation
          across heterogeneous inputs, (2) opaque decision pathways that hinder adoption, and (3) absence of unified
          evaluation under realistic operating conditions.
        </p>
        <p>The gap is therefore both methodological and infrastructural — we address both.</p>
      </>
    ),
  },
  {
    id: "problem",
    icon: AlertCircle,
    title: "Research Problem",
    body: (
      <p>
        How can we design an end-to-end framework that delivers reliable, interpretable, and reproducible outcomes for
        the target task across realistic, heterogeneous conditions, while remaining feasible to deploy in
        resource-constrained environments?
      </p>
    ),
  },
  {
    id: "objectives",
    icon: Target,
    title: "Research Objectives",
    body: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Characterise the problem space through structured analysis of representative scenarios.</li>
        <li>Design a modular framework with four interoperable components.</li>
        <li>Implement and integrate the components into a working system.</li>
        <li>Evaluate the system against established benchmarks and ablations.</li>
        <li>Document the methodology, results, and limitations transparently.</li>
      </ul>
    ),
  },
  {
    id: "methodology",
    icon: Workflow,
    title: "Methodology",
    body: (
      <>
        <p>
          The work follows a design-science approach across four phases: <strong>requirement formalisation</strong>,
          <strong> component design</strong>, <strong>integration</strong>, and <strong>empirical evaluation</strong>.
          Each phase produces a verifiable artefact reviewed by the supervisory panel.
        </p>
        <p>
          Quantitative evaluation uses public benchmarks and a curated internal dataset; qualitative evaluation uses
          structured walkthroughs with domain participants.
        </p>
      </>
    ),
  },
  {
    id: "tech",
    icon: Cpu,
    title: "Technologies Used",
    body: (
      <div className="flex flex-wrap gap-2">
        {[
          "Python",
          "TypeScript",
          "React",
          "FastAPI",
          "PostgreSQL",
          "Docker",
          "PyTorch",
          "scikit-learn",
          "Pandas",
          "MLflow",
          "GitHub Actions",
          "AWS",
        ].map((t) => (
          <Badge key={t} variant="secondary" className="text-xs font-medium px-3 py-1">
            {t}
          </Badge>
        ))}
      </div>
    ),
  },
];

const Domain = () => {
  return (
    <>
      <PageHeader
        eyebrow="Domain"
        title="Research Domain & Approach"
        subtitle="From literature to methodology — the foundations of the project laid out section by section."
      />
      <section className="container py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Accordion type="multiple" defaultValue={["literature"]} className="space-y-3">
            {sections.map((s) => (
              <AccordionItem
                key={s.id}
                value={s.id}
                className="border border-border rounded-xl bg-card shadow-card-soft px-5 data-[state=open]:shadow-elevated transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-lg font-semibold text-left">{s.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-14 pr-2 text-muted-foreground space-y-3 leading-relaxed">
                  {s.body}
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
