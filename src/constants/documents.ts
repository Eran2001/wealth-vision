import tafPdf from "@/assets/TAF.pdf?url";
import proposalReportPdf from "@/assets/Proposal Report.pdf?url";
import canvasPdf from "@/assets/canvas.pdf?url";
import videoMp4 from "@/assets/Video.mp4?url";
import srsPdf from "@/assets/SRS.pdf?url";
import uatXlsx from "@/assets/UAT.xlsx?url";
import type { DocumentGroup } from "@/types";

export const documentsPage = {
  header: {
    eyebrow: "Documents",
    title: "Project Documentation",
    subtitle:
      "Proposal, canvas, checklists, and the final thesis bundle — openly accessible.",
  },
};

export const documentGroups: DocumentGroup[] = [
  {
    id: "proposal",
    title: "Research Proposal Documents",
    description: "Initial project proposal and planning documents",
    items: [
      {
        id: "taf",
        title: "TAF",
        description: "Topic Approval Form",
        link: tafPdf,
      },
      {
        id: "proposal-report",
        title: "Proposal Report",
        description: "Complete project proposal report",
        link: proposalReportPdf,
      },
    ],
  },
  {
    id: "canvas",
    title: "Business Canvas",
    description: "Business model canvas and presentation video",
    items: [
      {
        id: "canvas-doc",
        title: "Canvas",
        description: "Business model canvas document",
        link: canvasPdf,
      },
      {
        id: "video",
        title: "Video",
        description: "Business canvas presentation video",
        link: "https://drive.google.com/file/d/1PMUhdn9cKHhvFTsUKpP8whDuXY0jXOFB/view?usp=sharing",
        isVideo: true,
      },
    ],
  },
  {
    id: "checklist",
    title: "Check List Documents",
    description: "Project requirement and testing checklists",
    items: [
      {
        id: "srs",
        title: "SRS",
        description: "Software Requirements Specification",
        link: srsPdf,
      },
      {
        id: "uat",
        title: "UAT",
        description: "User Acceptance Testing document",
        link: uatXlsx,
      },
    ],
  },
  {
    id: "final",
    title: "Final Documentation",
    description: "Final thesis and project reports",
    items: [
      {
        id: "thesis",
        title: "Thesis Document",
        description: "Complete research thesis document",
      },
      {
        id: "final-report",
        title: "Final Report",
        description: "Final project report and deliverables",
      },
    ],
  },
];
