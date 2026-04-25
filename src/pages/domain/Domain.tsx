import { PageHeader } from "@/components/partials/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Search,
  AlertCircle,
  Target,
  Workflow,
  Cpu,
} from "lucide-react";

const sections = [
  {
    id: "literature",
    icon: BookOpen,
    title: "Literature Survey",
    body: (
      <>
        <p>
          The literature survey examines existing investor profiling approaches,
          robo-advisory systems, and ESG (Environmental, Social, Governance)
          integration frameworks across global financial markets. We reviewed
          peer-reviewed journals, fintech research reports, and industry
          whitepapers from the last seven years.
        </p>
        <p>
          Investor profiling identifies preferences such as risk appetite,
          investment horizon, sector and region interest, and ESG priorities.
          Modern profiling combines both quantitative measures (data inputs) and
          qualitative aspects (preferences, ESG), ensuring investment decisions
          align with individual goals and responsibilities.
        </p>
        <p>
          Current methods include: <strong>Advisor-led Questionnaires</strong>{" "}
          (manual, subjective),
          <strong> Conventional Robo-Advisors</strong> (algorithm-driven,
          domestic scope), and
          <strong> Institutional Advisory Tools</strong> — each with significant
          limitations in personalisation, ESG coverage, and global market reach.
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
          Despite progress in robo-advisory technology, current solutions
          exhibit recurring limitations:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Most existing systems use manual or rule-based processes that lack
            adaptability and personalisation.
          </li>
          <li>
            Conventional robo-advisors focus on local/domestic markets and lack
            meaningful ESG integration.
          </li>
          <li>
            Small advisory firms face significant cost and technical barriers to
            adopting advanced AI systems.
          </li>
          <li>
            There is a need for integrated systems that utilise AI and
            predictive analytics to provide real-time, globally inclusive, and
            ESG-aware investment guidance.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "problem",
    icon: AlertCircle,
    title: "Research Problem",
    body: (
      <>
        <p>
          Global investing offers thousands of stocks, commodities, indices, and
          funds — making personalised guidance complex:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Manual profiling is subjective, time-consuming, and inconsistent
            across advisors.
          </li>
          <li>
            Current robo-advisors focus on local markets and lack ESG
            integration.
          </li>
          <li>
            Small advisory firms face cost and technical barriers to adopt
            advanced systems.
          </li>
        </ul>
        <p className="mt-3 font-medium text-foreground">
          How can we design a system that delivers personalized, transparent,
          and globally inclusive investment recommendations integrating risk
          tolerance, ESG preferences, and real-time market data?
        </p>
      </>
    ),
  },
  {
    id: "objectives",
    icon: Target,
    title: "Research Objectives",
    body: (
      <>
        <p className="font-medium text-foreground">Main Objective</p>
        <p>
          To design and develop Wealth Vision — an Investor Profiling and
          Recommendation System that provides personalized, transparent, and
          globally inclusive investment options integrating risk and
          Environmental, Social, Governance (ESG) preferences.
        </p>
        <p className="font-medium text-foreground mt-4">Specific Objectives</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Build an intelligent investor profiling engine that captures risk
            appetite, investment horizon, and ESG priorities.
          </li>
          <li>
            Develop an ESG scoring and integration module that evaluates
            investment options against sustainability criteria.
          </li>
          <li>
            Design a recommendation engine using ML models to match investor
            profiles with suitable global assets.
          </li>
          <li>
            Create an interactive dashboard for transparent, explainable
            investment recommendations.
          </li>
          <li>
            Evaluate the system against real-world investor scenarios and
            established benchmarks.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "methodology",
    icon: Workflow,
    title: "Methodology",
    body: (
      <>
        <p>
          Wealth Vision follows an agile, component-driven research methodology
          across four phases:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Phase 1 — Requirement Analysis:</strong> Define investor
            profiling criteria, ESG scoring dimensions, and market data sources.
          </li>
          <li>
            <strong>Phase 2 — System Design:</strong> Architect the profiling
            engine, recommendation model, and ESG integration layer.
          </li>
          <li>
            <strong>Phase 3 — Implementation:</strong> Develop and integrate all
            four components into a unified platform.
          </li>
          <li>
            <strong>Phase 4 — Evaluation:</strong> Validate recommendations
            against real investor profiles and measure ESG alignment accuracy.
          </li>
        </ul>
        <p>
          Quantitative evaluation uses market benchmark datasets; qualitative
          evaluation uses structured feedback from domain participants and
          financial advisors.
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
          "MongoDB",
          "scikit-learn",
          "TensorFlow",
          "Pandas",
          "NumPy",
          "Docker",
          "GitHub Actions",
        ].map((t) => (
          <Badge
            key={t}
            variant="secondary"
            className="text-caption font-ui px-3 py-1"
          >
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
        subtitle="From literature to methodology — the foundations of Wealth Vision laid out section by section."
      />
      <section className="container py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Accordion
            type="multiple"
            defaultValue={["literature"]}
            className="space-y-3"
          >
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
                    <span className="font-display text-body-lg font-heading text-left">
                      {s.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-14 pr-2 text-muted-foreground space-y-3 leading-airy">
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
