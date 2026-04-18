export interface Milestone {
  id: string;
  title: string;
  dateRange: string;
  description: string;
  marks: string;
  status: "completed" | "in-progress" | "upcoming";
}

export interface DocumentItem {
  id: string;
  title: string;
  category: string;
  status: "submitted" | "pending";
  link: string;
}

export interface Presentation {
  id: string;
  title: string;
  date: string;
  description: string;
  link: string;
}

export interface Person {
  id: string;
  name: string;
  studentId?: string;
  role: string;
  department?: string;
  initials: string;
}
