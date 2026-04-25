import * as Icon from "@/components/icons";

export const domainPage = {
  header: {
    eyebrow: "Domain",
    title: "Research Domain & Approach",
    subtitle:
      "From literature to methodology - the foundations of Wealth Vision laid out section by section.",
  },
};

export const domainSections = [
  {
    id: "literature",
    icon: Icon.BookOpen,
    title: "Literature Survey",
    content: [
      {
        type: "paragraph",
        text: "The literature survey examines existing investor profiling approaches, robo-advisory systems, and ESG (Environmental, Social, Governance) integration frameworks across global financial markets. We reviewed peer-reviewed journals, fintech research reports, and industry whitepapers from the last seven years.",
      },
      {
        type: "paragraph",
        text: "Investor profiling identifies preferences such as risk appetite, investment horizon, sector and region interest, and ESG priorities. Modern profiling combines both quantitative measures (data inputs) and qualitative aspects (preferences, ESG), ensuring investment decisions align with individual goals and responsibilities.",
      },
      {
        type: "paragraph",
        text: "Current methods include advisor-led questionnaires, conventional robo-advisors, and institutional advisory tools - each with significant limitations in personalisation, ESG coverage, and global market reach.",
      },
    ],
  },
  {
    id: "gap",
    icon: Icon.Search,
    title: "Research Gap",
    content: [
      {
        type: "paragraph",
        text: "Despite progress in robo-advisory technology, current solutions exhibit recurring limitations:",
      },
      {
        type: "list",
        items: [
          "Most existing systems use manual or rule-based processes that lack adaptability and personalisation.",
          "Conventional robo-advisors focus on local/domestic markets and lack meaningful ESG integration.",
          "Small advisory firms face significant cost and technical barriers to adopting advanced AI systems.",
          "There is a need for integrated systems that utilise AI and predictive analytics to provide real-time, globally inclusive, and ESG-aware investment guidance.",
        ],
      },
    ],
  },
  {
    id: "problem",
    icon: Icon.AlertCircle,
    title: "Research Problem",
    content: [
      {
        type: "paragraph",
        text: "Global investing offers thousands of stocks, commodities, indices, and funds - making personalised guidance complex:",
      },
      {
        type: "list",
        items: [
          "Manual profiling is subjective, time-consuming, and inconsistent across advisors.",
          "Current robo-advisors focus on local markets and lack ESG integration.",
          "Small advisory firms face cost and technical barriers to adopt advanced systems.",
        ],
      },
      {
        type: "callout",
        text: "How can we design a system that delivers personalized, transparent, and globally inclusive investment recommendations integrating risk tolerance, ESG preferences, and real-time market data?",
      },
    ],
  },
  {
    id: "objectives",
    icon: Icon.Target,
    title: "Research Objectives",
    content: [
      {
        type: "heading",
        text: "Main Objective",
      },
      {
        type: "paragraph",
        text: "To design and develop Wealth Vision - an Investor Profiling and Recommendation System that provides personalized, transparent, and globally inclusive investment options integrating risk and Environmental, Social, Governance (ESG) preferences.",
      },
      {
        type: "heading",
        text: "Specific Objectives",
      },
      {
        type: "list",
        items: [
          "Build an intelligent investor profiling engine that captures risk appetite, investment horizon, and ESG priorities.",
          "Develop an ESG scoring and integration module that evaluates investment options against sustainability criteria.",
          "Design a recommendation engine using ML models to match investor profiles with suitable global assets.",
          "Create an interactive dashboard for transparent, explainable investment recommendations.",
          "Evaluate the system against real-world investor scenarios and established benchmarks.",
        ],
      },
    ],
  },
  {
    id: "methodology",
    icon: Icon.Workflow,
    title: "Methodology",
    content: [
      {
        type: "paragraph",
        text: "Wealth Vision follows an agile, component-driven research methodology across four phases:",
      },
      {
        type: "list",
        items: [
          {
            label: "Phase 1 - Requirement Analysis:",
            text: "Define investor profiling criteria, ESG scoring dimensions, and market data sources.",
          },
          {
            label: "Phase 2 - System Design:",
            text: "Architect the profiling engine, recommendation model, and ESG integration layer.",
          },
          {
            label: "Phase 3 - Implementation:",
            text: "Develop and integrate all four components into a unified platform.",
          },
          {
            label: "Phase 4 - Evaluation:",
            text: "Validate recommendations against real investor profiles and measure ESG alignment accuracy.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Quantitative evaluation uses market benchmark datasets; qualitative evaluation uses structured feedback from domain participants and financial advisors.",
      },
    ],
  },
  {
    id: "tech",
    icon: Icon.Cpu,
    title: "Technologies Used",
    content: [
      {
        type: "badges",
        items: [
          "Python",
          "TypeScript",
          "React",
          "FastAPI",
          "PostgreSQL",
          "MongoDB",
          "scikit-learn",
          "TensorFlow",
          "Pandas",
          "NumPy",
          "Docker",
          "GitHub Actions",
        ],
      },
    ],
  },
] as const;
