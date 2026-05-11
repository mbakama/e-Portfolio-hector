export type Lang = 'fr' | 'en';

export type NavLink = { key: string; label: string };

export type TechGroup = {
  category: string;
  summary: string;
  items: string[];
};

export type FeaturedProject = {
  title: string;
  subtitle: string; // ERP name or project type
  type: 'professional' | 'personal';
  description: string;
  technologies: string[];
  modules: string[]; // list of modules worked on
  role: string; // e.g. "Full-Stack" or "Frontend"
  metrics: string;
  demoUrl?: string;
  details: {
    problem: string;
    solution: string;
    architecture: string;
    formLogic: string;
    apiStructure: string;
    sqlOptimization: string;
  };
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type Repo = {
  name: string;
  description: string;
  stars: string;
};

export type I18nText = {
  navLinks: NavLink[];
  resume: string;
  profileTitle: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaProjects: string;
  ctaContact: string;
  dashboardTitle: string;
  throughput: string;
  latency: string;
  compliance: string;
  stackTitle: string;
  stackSubtitle: string;
  featuredProjectsTitle: string;
  featuredProjectsSubtitle: string;
  professionalProjectsTitle: string;
  professionalProjectsSubtitle: string;
  personalProjectsTitle: string;
  personalProjectsSubtitle: string;
  result: string;
  liveDemo: string;
  github: string;
  architecture: string;
  modulesLabel: string;
  roleLabel: string;
  detailsProblem: string;
  detailsSolution: string;
  detailsArchitecture: string;
  detailsFormLogic: string;
  detailsApiStructure: string;
  detailsSqlOptimization: string;
  experienceTitle: string;
  openSourceTitle: string;
  openSourceSubtitle: string;
  stars: string;
  contactTitle: string;
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  sendMessage: string;
  footer: string;
};
