import type { Presentation } from "@/types";

export const presentationsPage = {
  header: {
    eyebrow: "Slides",
    title: "Presentations",
    subtitle:
      "Slide decks for each formal milestone - proposal through final defence.",
  },
  viewLabel: "View slides",
};

export const presentations: Presentation[] = [
  {
    id: "proposal",
    title: "Project Proposal",
    date: "September 2024",
    description:
      "Initial proposal outlining research scope, problem statement, objectives, and proposed methodology.",
    link: "/assets/slides/project-proposal.html",
    image: {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      alt: "Research planning documents and charts arranged on a desk",
    },
  },
  {
    id: "progress-1",
    title: "Progress Presentation 1",
    date: "December 2024",
    description:
      "Literature review consolidation, refined system design, and early prototype walkthrough.",
    link: "/assets/slides/progress-presentation-1.html",
    image: {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      alt: "Students collaborating on a project around a laptop",
    },
  },
  {
    id: "progress-2",
    title: "Progress Presentation 2",
    date: "April 2025",
    description:
      "Component implementation, integration status, and preliminary evaluation results.",
    link: "/assets/slides/progress-presentation-2.html",
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      alt: "Analytics dashboard with charts for project evaluation",
    },
  },
  {
    id: "final",
    title: "Final Presentation",
    date: "September 2025",
    description:
      "Complete system demonstration, full evaluation, contributions, and concluding remarks.",
    link: "/assets/slides/final-presentation.html",
    image: {
      src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
      alt: "Presenter speaking to an audience during a formal presentation",
    },
  },
];
