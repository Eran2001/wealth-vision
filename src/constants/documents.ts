import type { DocumentItem } from "@/types";

export const documentsPage = {
  header: {
    eyebrow: "Documents",
    title: "Project Documentation",
    subtitle:
      "Charter, proposal, checklists, and the final thesis bundle - versioned, reviewed, and openly accessible.",
  },
  tabs: {
    submitted: "Submitted",
    pending: "Pending",
  },
  openLabel: "Open document",
};

export const documents: DocumentItem[] = [
  {
    id: "charter",
    title: "Project Charter",
    category: "Charter",
    status: "submitted",
    link: "[PLACEHOLDER]",
  },
  {
    id: "proposal",
    title: "Proposal Document",
    category: "Proposal",
    status: "submitted",
    link: "[PLACEHOLDER]",
  },
  {
    id: "checklist-1",
    title: "Checklist - Proposal Stage",
    category: "Checklist",
    status: "submitted",
    link: "[PLACEHOLDER]",
  },
  {
    id: "checklist-2",
    title: "Checklist - Progress Stage",
    category: "Checklist",
    status: "submitted",
    link: "[PLACEHOLDER]",
  },
  {
    id: "final-main",
    title: "Final Document - Main Thesis",
    category: "Final",
    status: "pending",
    link: "[PLACEHOLDER]",
  },
  {
    id: "final-1",
    title: "Final Document - Part I (Member A)",
    category: "Final",
    status: "pending",
    link: "[PLACEHOLDER]",
  },
  {
    id: "final-2",
    title: "Final Document - Part II (Member B)",
    category: "Final",
    status: "pending",
    link: "[PLACEHOLDER]",
  },
  {
    id: "final-3",
    title: "Final Document - Part III (Member C)",
    category: "Final",
    status: "pending",
    link: "[PLACEHOLDER]",
  },
  {
    id: "final-4",
    title: "Final Document - Part IV (Member D)",
    category: "Final",
    status: "pending",
    link: "[PLACEHOLDER]",
  },
];
