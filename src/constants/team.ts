import { Person } from "@/types";
import profileImg from "@/assets/images/porfileImg.webp";
import supervisorImg from "@/assets/images/supervisor.webp";

export const teamMembers: Person[] = [
  {
    id: "m1",
    name: "Dahanayake K.A.",
    studentId: "IT21232404",
    role: "Project Owner & Researcher",
    department: "Investor Profiling and Risk Assessment Module",
    initials: "DK",
    image: profileImg,
  },
];

export const supervisors: Person[] = [
  {
    id: "s1",
    name: "Ms. Jenny Krishara",
    role: "Senior Lecturer",
    department: "Faculty of Computing",
    initials: "JK",
    image: supervisorImg,
  },
];
