import * as Icon from "@/components/icons";
import type { Milestone } from "@/types";

export const milestonesPage = {
  header: {
    eyebrow: "Milestones",
    title: "Project Timeline",
    subtitle:
      "Five formal checkpoints from initial proposal through final viva - each with allocated marks and clear deliverables.",
  },
  summaryLabel: "Showing",
  summarySuffix: "milestones",
  selectPlaceholder: "Jump to a milestone",
  allOption: "All milestones",
  marksSuffix: "marks",
};

export const milestoneStatusMeta = {
  completed: {
    label: "Completed",
    icon: Icon.CheckCircle2,
    className: "bg-status-ok text-status-ok-fg border-status-ok-border",
  },
  "in-progress": {
    label: "In progress",
    icon: Icon.Clock,
    className: "bg-status-warn text-status-warn-fg border-status-warn-border",
  },
  upcoming: {
    label: "Upcoming",
    icon: Icon.Circle,
    className: "bg-secondary text-muted-foreground border-border",
  },
} as const;

export const milestones: Milestone[] = [
  {
    id: "proposal",
    title: "Project Proposal",
    dateRange: "Aug 2024 - Sep 2024",
    description:
      "Initial proposal presentation and report submission outlining the research scope, problem statement, and methodology. Reviewed by the supervisory panel for feasibility and contribution.",
    marks: "10%",
    status: "completed",
  },
  {
    id: "progress-1",
    title: "Progress Presentation 1",
    dateRange: "Nov 2024 - Dec 2024",
    description:
      "Mid-cycle review covering literature consolidation, system design, and early prototype implementation. Demonstrates feasibility of the proposed approach.",
    marks: "15%",
    status: "completed",
  },
  {
    id: "progress-2",
    title: "Progress Presentation 2",
    dateRange: "Mar 2025 - Apr 2025",
    description:
      "Comprehensive evaluation of component-level implementation, integration progress, and preliminary experimental results against defined objectives.",
    marks: "20%",
    status: "in-progress",
  },
  {
    id: "final",
    title: "Final Assessment",
    dateRange: "Aug 2025 - Sep 2025",
    description:
      "Final demonstration of the complete system, full evaluation against benchmarks, and submission of the final thesis document with all supporting deliverables.",
    marks: "35%",
    status: "upcoming",
  },
  {
    id: "viva",
    title: "Viva Voce",
    dateRange: "Sep 2025 - Oct 2025",
    description:
      "Oral defense of the research before the examination panel. Covers methodology, contributions, limitations, and future directions of the work.",
    marks: "20%",
    status: "upcoming",
  },
];
