import { Person } from "@/types";
import profileImg from "@/assets/images/porfileImg.webp";

export const teamMembers: Person[] = [
  {
    id: "m1",
    name: "Dahanayake K.A.",
    studentId: "IT21232404",
    role: "Investor Profiling & Risk Assessment Module",
    initials: "DK",
    image: profileImg,
  },
  {
    id: "m2",
    name: "Member 2",
    studentId: "IT2100000X",
    role: "ESG Integration & Scoring Module",
    initials: "M2",
  },
  {
    id: "m3",
    name: "Member 3",
    studentId: "IT2100000X",
    role: "Recommendation Engine & ML Models",
    initials: "M3",
  },
  {
    id: "m4",
    name: "Member 4",
    studentId: "IT2100000X",
    role: "Frontend, Dashboard & Visualization",
    initials: "M4",
  },
];

export const supervisors: Person[] = [
  {
    id: "s1",
    name: "Supervisor Name",
    role: "Supervisor",
    department: "Department of Information Technology, SLIIT",
    initials: "SN",
  },
  {
    id: "s2",
    name: "Co-Supervisor Name",
    role: "Co-Supervisor",
    department: "Department of Computer Science, SLIIT",
    initials: "CN",
  },
];
