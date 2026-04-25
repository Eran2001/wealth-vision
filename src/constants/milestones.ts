import { Milestone } from "@/types";

export const milestones: Milestone[] = [
  {
    id: "proposal",
    title: "Project Proposal",
    dateRange: "Aug 2024 — Sep 2024",
    description:
      "Initial proposal presentation and report submission outlining the research scope, problem statement, and methodology. Reviewed by the supervisory panel for feasibility and contribution.",
    marks: "10%",
    status: "completed",
  },
  {
    id: "progress-1",
    title: "Progress Presentation 1",
    dateRange: "Nov 2024 — Dec 2024",
    description:
      "Mid-cycle review covering literature consolidation, system design, and early prototype implementation. Demonstrates feasibility of the proposed approach.",
    marks: "15%",
    status: "completed",
  },
  {
    id: "progress-2",
    title: "Progress Presentation 2",
    dateRange: "Mar 2025 — Apr 2025",
    description:
      "Comprehensive evaluation of component-level implementation, integration progress, and preliminary experimental results against defined objectives.",
    marks: "20%",
    status: "in-progress",
  },
  {
    id: "final",
    title: "Final Assessment",
    dateRange: "Aug 2025 — Sep 2025",
    description:
      "Final demonstration of the complete system, full evaluation against benchmarks, and submission of the final thesis document with all supporting deliverables.",
    marks: "35%",
    status: "upcoming",
  },
  {
    id: "viva",
    title: "Viva Voce",
    dateRange: "Sep 2025 — Oct 2025",
    description:
      "Oral defense of the research before the examination panel. Covers methodology, contributions, limitations, and future directions of the work.",
    marks: "20%",
    status: "upcoming",
  },
];
