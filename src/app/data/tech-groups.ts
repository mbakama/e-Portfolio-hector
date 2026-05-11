import type { TechGroup, Lang } from '../types';

export const techGroupsByLang: Record<Lang, TechGroup[]> = {
  fr: [
    {
      category: 'Frontend',
      summary: 'Architecture Angular d\'entreprise, orientée performance et maintenabilité.',
      items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'TailwindCSS'],
    },
    {
      category: 'Backend',
      summary: 'APIs métier robustes pour plateformes fiscales et ERP transactionnels.',
      items: ['Laravel', 'NestJS', 'Node.js', 'REST', 'OpenAPI'],
    },
    {
      category: 'Base de données',
      summary: 'Conception SQL avancée pour de gros volumes et des règles métier complexes.',
      items: ['PostgreSQL', 'MySQL', 'SQL Tuning', 'Indexing', 'Query Plans'],
    },
    {
      category: 'DevOps',
      summary: 'Livraison fiable et observabilité pour des environnements d\'entreprise.',
      items: ['Docker', 'GitHub Actions', 'CI/CD', 'Nginx', 'Monitoring'],
    },
    {
      category: 'Architecture',
      summary: 'Modélisation de flux de travail dynamiques et moteurs de règles évolutifs.',
      items: ['DDD', 'Event-driven', 'ACL', 'Modular Monolith', 'BPMN-inspired'],
    },
  ],
  en: [
    {
      category: 'Frontend',
      summary: 'Enterprise Angular architecture focused on performance and maintainability.',
      items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'TailwindCSS'],
    },
    {
      category: 'Backend',
      summary: 'Robust APIs for fiscal platforms and transactional ERP systems.',
      items: ['Laravel', 'NestJS', 'Node.js', 'REST', 'OpenAPI'],
    },
    {
      category: 'Database',
      summary: 'Advanced SQL design for high-volume data and complex business rules.',
      items: ['PostgreSQL', 'MySQL', 'SQL Tuning', 'Indexing', 'Query Plans'],
    },
    {
      category: 'DevOps',
      summary: 'Reliable delivery pipelines and observability for enterprise workloads.',
      items: ['Docker', 'GitHub Actions', 'CI/CD', 'Nginx', 'Monitoring'],
    },
    {
      category: 'Architecture',
      summary: 'Dynamic workflow modeling and scalable business rule engines.',
      items: ['DDD', 'Event-driven', 'ACL', 'Modular Monolith', 'BPMN-inspired'],
    },
  ],
};
