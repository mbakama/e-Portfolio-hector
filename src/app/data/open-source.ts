import type { Repo, Lang } from '../types';

export const openSourceReposByLang: Record<Lang, Repo[]> = {
  fr: [
    {
      name: 'enterprise-dynamic-form-engine',
      description: 'Moteur de formulaires dynamiques orienté règles métier.',
      stars: '412',
    },
    {
      name: 'nestjs-fiscal-workflow-kit',
      description: 'Boîte à outils NestJS pour l\'orchestration de workflows fiscaux complexes.',
      stars: '289',
    },
    {
      name: 'angular-erp-ui-patterns',
      description: 'Bibliothèque de composants Angular pour interfaces ERP modernes.',
      stars: '357',
    },
  ],
  en: [
    {
      name: 'enterprise-dynamic-form-engine',
      description: 'Dynamic form engine tailored for enterprise business rules.',
      stars: '412',
    },
    {
      name: 'nestjs-fiscal-workflow-kit',
      description: 'NestJS toolkit for complex fiscal workflow orchestration.',
      stars: '289',
    },
    {
      name: 'angular-erp-ui-patterns',
      description: 'Angular pattern library for modern ERP interfaces.',
      stars: '357',
    },
  ],
};
