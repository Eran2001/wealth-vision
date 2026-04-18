import { Person } from "@/types";

export const teamMembers: Person[] = [
  { id: "m1", name: "A. Perera", studentId: "IT21000001", role: "Team Lead — System Architecture", initials: "AP" },
  { id: "m2", name: "B. Fernando", studentId: "IT21000002", role: "Research — Data Pipelines & Modeling", initials: "BF" },
  { id: "m3", name: "C. Silva", studentId: "IT21000003", role: "Research — Evaluation & Benchmarking", initials: "CS" },
  { id: "m4", name: "D. Jayasinghe", studentId: "IT21000004", role: "Research — Frontend & Visualization", initials: "DJ" },
];

export const supervisors: Person[] = [
  { id: "s1", name: "Dr. Jane Doe", role: "Supervisor", department: "Department of Information Technology", initials: "JD" },
  { id: "s2", name: "Mr. John Smith", role: "Co-Supervisor", department: "Department of Computer Science", initials: "JS" },
  { id: "s3", name: "Dr. Anjali Rao", role: "External Supervisor", department: "Industry Collaborator", initials: "AR" },
];
