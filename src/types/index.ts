export interface Milestone {
  id: string;
  title: string;
  dateRange?: string;
  description: string;
  marks?: string;
  status: "completed" | "in-progress" | "upcoming";
  image: {
    src: string;
    alt: string;
  };
}

export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  link?: string;
  isVideo?: boolean;
}

export interface DocumentGroup {
  id: string;
  title: string;
  description: string;
  items: DocumentItem[];
}

export interface Presentation {
  id: string;
  title: string;
  date: string;
  description: string;
  link: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface Person {
  id: string;
  name: string;
  studentId?: string;
  role: string;
  department?: string;
  initials: string;
  image?: string;
  email?: string;
}
