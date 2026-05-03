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
    link: "https://drive.google.com/file/d/1-WsEt0cscEjSeWdFLNa2Kr65vsIiol4S/view",
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
    link: "https://drive.google.com/file/d/1i1tqh8pc9fY80nlCcBb05U-u20elvLIE/view",
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
    link: "https://drive.google.com/file/d/1cxDMKeb2RKDTE6LtBzTlAQci3d7_pc99/view?usp=sharing",
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
    link: "[PLACEHOLDER]",
    image: {
      src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
      alt: "Presenter speaking to an audience during a formal presentation",
    },
  },
];
