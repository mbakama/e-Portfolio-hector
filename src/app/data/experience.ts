import type { ExperienceItem, Lang } from '../types';

export const experiencesByLang: Record<Lang, ExperienceItem[]> = {
  fr: [
    {
      company: 'Hologram Identification Service',
      role: 'Développeur Frontend',
      period: 'Juillet 2023 - Présent',
      highlights: [
        'Développement de modules Angular sur les plateformes ERP fiscales e-Recettes DRGK, e-Recettes DRGPI et ERP DGI.',
        'Implémentation de modules transverses : taxation d\'office, fiches de prise en charge, gestion utilisateurs & privilèges, authentification multi-tenant.',
        'Contribution frontend sur YokaStart (plateforme de vidéos personnalisées par des célébrités).',
        'Développement de l\'interface e-Patente pour la gestion des cartes patentes du marché central de Kinshasa.',
      ],
    },
    {
      company: 'Hologram Identification Service',
      role: 'Stagiaire Développeur Full-Stack',
      period: 'Avril 2023 - Juillet 2023',
      highlights: [
        'Conception et développement Full-Stack du module de contrôle fiscal (Angular + Laravel) pour la DRGK et la DGI.',
        'Prise en main de l\'architecture Angular modulaire sur des projets ERP à fort volume.',
        'Développement d\'APIs Laravel RESTful pour les workflows de contrôle et de validation fiscale.',
      ],
    },
  ],
  en: [
    {
      company: 'Hologram Identification Service',
      role: 'Frontend Developer',
      period: 'July 2023 - Present',
      highlights: [
        'Developed Angular modules across fiscal ERP platforms: e-Recettes DRGK, e-Recettes DRGPI, and ERP DGI.',
        'Implemented cross-platform modules: default taxation, charge sheets, user & privilege management, multi-tenant authentication.',
        'Frontend contributions on YokaStart, a celebrity personalized video marketplace.',
        'Built the e-Patente interface for license card management at Kinshasa\'s central market.',
      ],
    },
    {
      company: 'Hologram Identification Service',
      role: 'Full-Stack Developer Intern',
      period: 'April 2023 - July 2023',
      highlights: [
        'Designed and built the fiscal audit module end-to-end (Angular + Laravel) for DRGK and DGI.',
        'Onboarded onto modular Angular architecture on high-volume ERP projects.',
        'Developed RESTful Laravel APIs for fiscal audit and validation workflows.',
      ],
    },
  ],
};
