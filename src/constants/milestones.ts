import * as Icon from "@/components/icons";
import type { Milestone } from "@/types";

export const milestonesPage = {
  header: {
    eyebrow: "Milestones",
    title: "Project Timeline",
    subtitle:
      "Five formal checkpoints from initial proposal through final viva, each with clear deliverables.",
  },
  summaryLabel: "Showing",
  summarySuffix: "milestones",
  selectPlaceholder: "Jump to a milestone",
  allOption: "All milestones",
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
    description:
      "Initial proposal presentation and report submission outlining the research scope, problem statement, and methodology. Reviewed by the supervisory panel for feasibility and contribution.",
    status: "completed",
    image: {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
      alt: "Research notes and charts spread across a desk for proposal planning",
    },
  },
  {
    id: "progress-1",
    title: "Progress Presentation 1",
    description:
      "Mid-cycle review covering literature consolidation, system design, and early prototype implementation. Demonstrates feasibility of the proposed approach.",
    status: "completed",
    image: {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
      alt: "Students collaborating around a laptop during project development",
    },
  },
  {
    id: "progress-2",
    title: "Progress Presentation 2",
    description:
      "Comprehensive evaluation of component-level implementation, integration progress, and preliminary experimental results against defined objectives.",
    status: "completed",
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      alt: "Analytics dashboard charts used to evaluate project progress",
    },
  },
  {
    id: "final",
    title: "Final Presentation",
    description:
      "Final demonstration of the complete system, full evaluation against benchmarks, and submission of the final thesis document with all supporting deliverables.",
    status: "in-progress",
    image: {
      src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80",
      alt: "Speaker presenting final project work to an audience",
    },
  },
  {
    id: "viva",
    title: "Viva",
    description:
      "Oral defense of the research before the examination panel. Covers methodology, contributions, limitations, and future directions of the work.",
    status: "in-progress",
    image: {
      src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/University%20graduation%20%28Unsplash%29.jpg",
      alt: "Students attending a university graduation ceremony",
    },
  },
];
