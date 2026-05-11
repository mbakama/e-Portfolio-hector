import type { FeaturedProject, Lang } from '../types';

export const projectsByLang: Record<Lang, FeaturedProject[]> = {
  fr: [
    // Professional projects
    {
      title: 'e-Recettes DRGK',
      subtitle: 'Direction des Recettes de Kinshasa — Ville-Province',
      type: 'professional',
      description:
        'Plateforme ERP fiscale complète pour la gestion des recettes, déclarations, contrôles et recouvrement des impôts régionaux.',
      technologies: ['Angular', 'Laravel', 'PostgreSQL', 'Redis', 'Docker'],
      modules: [
        'Analyse de déclarations',
        'Contrôle fiscal (Full-Stack)',
        'Répertoire des contribuables',
        'Gestion immobilière',
        'Exonérations fiscales',
        'Gestion des vignettes',
        'Taxation d\'office',
        'Fiches de prise en charge',
        'Gestion utilisateurs & privilèges',
        'Comptes télédéclaration',
        'Authentification multi-tenant',
        'Recoupement fiscal',
      ],
      role: 'Full-Stack (Contrôle fiscal) · Frontend (autres modules)',
      metrics: 'Plateforme utilisée par 200+ agents fiscaux pour gérer 15 000+ contribuables.',
      demoUrl: 'https://erp-dgrk-dev.apps.kubedev.hologram.cd/#/',
      details: {
        problem:
          'Les processus fiscaux étaient fragmentés entre plusieurs outils, causant des erreurs de saisie, des doublons et des délais de traitement importants.',
        solution:
          'ERP centralisé avec modules métier interconnectés, workflows automatisés et traçabilité complète des opérations fiscales.',
        architecture:
          'Frontend Angular modulaire, API Laravel RESTful, workers Redis pour les traitements asynchrones, PostgreSQL pour la persistance.',
        formLogic:
          'Formulaires dynamiques adaptés au type de déclaration, validation croisée entre modules, règles fiscales paramétrables.',
        apiStructure:
          'API REST avec authentification JWT, ACL par rôle et contexte fiscal, endpoints versionnés et documentation OpenAPI.',
        sqlOptimization:
          'Indexation sur les colonnes de recherche fréquentes, requêtes paginées, vues matérialisées pour les rapports de synthèse.',
      },
    },
    {
      title: 'e-Recettes DRGPI',
      subtitle: 'Direction des Recettes de la Province de l\'Ituri',
      type: 'professional',
      description:
        'Plateforme ERP fiscale pour la gestion des télédéclarations, taxation d\'office et administration des agents fiscaux.',
      technologies: ['Angular', 'Laravel', 'MySQL', 'Redis'],
      modules: [
        'Comptes télédéclaration',
        'Authentification ERP & télédéclaration',
        'Taxation d\'office',
        'Fiches de prise en charge',
        'Gestion utilisateurs & privilèges',
        'Répertoire des contribuables',
        'Gestion du personnel',
      ],
      role: 'Frontend Angular',
      metrics: 'Gestion de 8 000+ comptes télédéclaration et 120+ agents fiscaux.',
      details: {
        problem:
          'Les agents devaient jongler entre plusieurs interfaces pour gérer les télédéclarations et les dossiers de taxation d\'office.',
        solution:
          'Interface unifiée avec navigation contextuelle, tableau de bord centralisé et accès rapide aux dossiers en cours.',
        architecture:
          'Frontend Angular avec state management NgRx, API Laravel backend, cache Redis pour les sessions.',
        formLogic:
          'Formulaires réactifs avec validation temps réel, sauvegarde automatique des brouillons, historique des modifications.',
        apiStructure:
          'Endpoints REST pour la gestion des comptes, webhooks pour les notifications de télédéclaration, logs d\'audit.',
        sqlOptimization:
          'Index composites sur les recherches multi-critères, partitionnement des tables d\'historique par année fiscale.',
      },
    },
    {
      title: 'ERP DGI',
      subtitle: 'Direction Générale des Impôts — République Démocratique du Congo',
      type: 'professional',
      description:
        'Système ERP national pour la gestion des exonérations, contrôles fiscaux, mises en demeure et taxation d\'office.',
      technologies: ['Angular', 'Laravel', 'PostgreSQL', 'Elasticsearch'],
      modules: [
        'Exonérations fiscales',
        'Analyse de déclarations',
        'Contrôle fiscal',
        'Mises en demeure de payer',
        'Fiches de prise en charge',
        'Taxation d\'office',
      ],
      role: 'Frontend Angular',
      metrics: 'Déployé à l\'échelle nationale, utilisé par 500+ agents de la DGI.',
      demoUrl: 'https://erp-dgi-dev.apps.kubedev.hologram.cd/#/',
      details: {
        problem:
          'Les processus de contrôle fiscal et de recouvrement étaient manuels, entraînant des retards et un manque de traçabilité.',
        solution:
          'Workflows automatisés avec étapes de validation, notifications automatiques et tableaux de bord de suivi en temps réel.',
        architecture:
          'Frontend Angular, API Laravel, Elasticsearch pour la recherche full-text sur les déclarations et contribuables.',
        formLogic:
          'Formulaires multi-étapes pour les contrôles fiscaux, validation conditionnelle selon le type d\'exonération.',
        apiStructure:
          'API REST avec gestion des états de dossier, endpoints de recherche avancée, export de rapports PDF/Excel.',
        sqlOptimization:
          'Requêtes optimisées pour les recherches de contribuables, index sur les dates de MEP, agrégations pour les statistiques.',
      },
    },
    {
      title: 'YokaStart',
      subtitle: 'Plateforme de vidéos personnalisées par des célébrités',
      type: 'professional',
      description:
        'Marketplace permettant aux fans de commander des vidéos personnalisées (anniversaires, félicitations, etc.) auprès de leurs célébrités préférées.',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Stripe'],
      modules: [
        'Catalogue des célébrités',
        'Formulaire de commande personnalisée',
        'Paiement en ligne (Stripe)',
        'Tableau de bord fan',
        'Interface de livraison vidéo',
      ],
      role: 'Frontend Angular',
      metrics: 'Plateforme en production avec 50+ célébrités inscrites.',
      details: {
        problem:
          'Les fans n\'avaient pas de moyen simple et sécurisé pour obtenir des vidéos personnalisées de leurs idoles.',
        solution:
          'Marketplace avec sélection de célébrité, formulaire de requête détaillé, paiement sécurisé et livraison vidéo dans l\'interface.',
        architecture:
          'Frontend Angular, API NestJS, intégration Stripe pour les paiements, stockage vidéo sur cloud.',
        formLogic:
          'Formulaire de commande avec champs dynamiques selon la célébrité, prévisualisation du message, validation du paiement.',
        apiStructure:
          'API REST avec gestion des commandes, webhooks Stripe pour les confirmations de paiement, notifications email.',
        sqlOptimization:
          'Index sur les recherches de célébrités par catégorie, requêtes paginées pour le catalogue, cache des profils populaires.',
      },
    },
    {
      title: 'e-Patente',
      subtitle: 'Gestion des cartes patentes du Marché Central de Kinshasa',
      type: 'professional',
      description:
        'Système de gestion des cartes patentes pour l\'attribution et le renouvellement des étallages au marché central de Kinshasa.',
      technologies: ['Laravel', 'Blade', 'MySQL', 'Bootstrap'],
      modules: [
        'Vente de cartes patentes',
        'Renouvellement annuel',
        'Fiches de recensement des commerçants',
        'Gestion des étallages',
        'Rapports de revenus',
      ],
      role: 'Frontend Blade (Laravel monolithique)',
      metrics: 'Gestion de 3 000+ cartes patentes actives.',
      demoUrl: 'https://patente.hologram.cd/login',
      details: {
        problem:
          'L\'attribution des étallages était manuelle et papier, causant des pertes de données et des conflits d\'attribution.',
        solution:
          'Système centralisé avec enregistrement numérique, suivi des renouvellements et génération automatique des cartes.',
        architecture:
          'Application Laravel monolithique avec vues Blade, MySQL pour la persistance, génération de PDF pour les cartes.',
        formLogic:
          'Formulaires de vente et renouvellement avec validation des données commerçant, calcul automatique des frais annuels.',
        apiStructure:
          'Routes Laravel pour la gestion CRUD des patentes, middleware d\'authentification, logs des transactions.',
        sqlOptimization:
          'Index sur les dates d\'expiration pour les alertes de renouvellement, requêtes groupées pour les rapports mensuels.',
      },
    },
    // Personal project
    {
      title: 'Recensement & Élections Bahá\'íes',
      subtitle: 'Projet personnel',
      type: 'personal',
      description:
        'Plateforme complète de gestion du recensement des membres et d\'organisation des élections au sein de la communauté Bahá\'íe.',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Docker'],
      modules: [
        'Recensement des membres',
        'Gestion des unités locales (quartiers, secteurs)',
        'Processus électoral (éligibilité, scrutin)',
        'Gestion des bulletins de correspondance',
        'Calcul et publication des résultats',
        'Rapports statistiques',
      ],
      role: 'Full-Stack (conception et développement complet)',
      metrics: 'Utilisé pour gérer 2 000+ membres et 5 cycles électoraux.',
      details: {
        problem:
          'Le recensement manuel était incomplet et sujet aux doublons — un même membre pouvait être enregistré plusieurs fois ou pas du tout, rendant impossible d\'avoir une liste fiable des membres éligibles. Pour les élections, le défi principal était la gestion des bulletins de correspondance — des membres géographiquement éloignés devaient pouvoir voter sans être physiquement présents.',
        solution:
          'Recensement centralisé avec détection automatique des doublons et profils uniques par membre. Couverture complète grâce à une gestion hiérarchique par quartier et secteur. Système de bulletins de correspondance numérique permettant aux membres distants de soumettre leur vote de manière sécurisée et traçable.',
        architecture:
          'Frontend Angular avec routing modulaire, API NestJS avec authentification JWT, PostgreSQL pour la persistance, déploiement Docker.',
        formLogic:
          'Formulaires de recensement avec validation des données membres, interface de vote sécurisée avec confirmation, gestion du statut des bulletins de correspondance (envoyé, reçu, comptabilisé).',
        apiStructure:
          'API REST avec endpoints pour le recensement, la soumission des bulletins et les résultats, ACL par rôle (admin, scrutateur, membre).',
        sqlOptimization:
          'Index sur les critères d\'éligibilité, requêtes optimisées pour le décompte des votes, vues pour les statistiques par unité locale.',
      },
    },
  ],
  en: [
    // Professional projects
    {
      title: 'e-Recettes DRGK',
      subtitle: 'Kinshasa Revenue Directorate — City-Province',
      type: 'professional',
      description:
        'Comprehensive fiscal ERP platform for revenue management, tax declarations, audits, and regional tax collection.',
      technologies: ['Angular', 'Laravel', 'PostgreSQL', 'Redis', 'Docker'],
      modules: [
        'Tax declaration analysis',
        'Fiscal audit (Full-Stack)',
        'Taxpayer registry',
        'Property management',
        'Tax exemptions',
        'Vehicle sticker management',
        'Default taxation',
        'Charge sheets',
        'User & privilege management',
        'E-filing accounts',
        'Multi-tenant authentication',
        'Fiscal cross-checking',
      ],
      role: 'Full-Stack (Fiscal audit) · Frontend (other modules)',
      metrics: 'Platform used by 200+ tax agents managing 15,000+ taxpayers.',
      demoUrl: 'https://erp-dgrk-dev.apps.kubedev.hologram.cd/#/',
      details: {
        problem:
          'Tax processes were fragmented across multiple tools, causing data entry errors, duplicates, and significant processing delays.',
        solution:
          'Centralized ERP with interconnected business modules, automated workflows, and full traceability of fiscal operations.',
        architecture:
          'Modular Angular frontend, RESTful Laravel API, Redis workers for async processing, PostgreSQL for persistence.',
        formLogic:
          'Dynamic forms adapted to declaration type, cross-module validation, configurable tax rules.',
        apiStructure:
          'REST API with JWT authentication, role and fiscal context ACL, versioned endpoints, and OpenAPI documentation.',
        sqlOptimization:
          'Indexing on frequently searched columns, paginated queries, materialized views for summary reports.',
      },
    },
    {
      title: 'e-Recettes DRGPI',
      subtitle: 'Ituri Province Revenue Directorate',
      type: 'professional',
      description:
        'Fiscal ERP platform for e-filing management, default taxation, and tax agent administration.',
      technologies: ['Angular', 'Laravel', 'MySQL', 'Redis'],
      modules: [
        'E-filing accounts',
        'ERP & e-filing authentication',
        'Default taxation',
        'Charge sheets',
        'User & privilege management',
        'Taxpayer registry',
        'Staff management',
      ],
      role: 'Frontend Angular',
      metrics: 'Managing 8,000+ e-filing accounts and 120+ tax agents.',
      details: {
        problem:
          'Agents had to juggle multiple interfaces to manage e-filings and default taxation cases.',
        solution:
          'Unified interface with contextual navigation, centralized dashboard, and quick access to ongoing cases.',
        architecture:
          'Angular frontend with NgRx state management, Laravel backend API, Redis cache for sessions.',
        formLogic:
          'Reactive forms with real-time validation, auto-save drafts, modification history.',
        apiStructure:
          'REST endpoints for account management, webhooks for e-filing notifications, audit logs.',
        sqlOptimization:
          'Composite indexes on multi-criteria searches, historical table partitioning by fiscal year.',
      },
    },
    {
      title: 'ERP DGI',
      subtitle: 'General Tax Directorate — Democratic Republic of Congo',
      type: 'professional',
      description:
        'National ERP system for managing tax exemptions, fiscal audits, payment notices, and default taxation.',
      technologies: ['Angular', 'Laravel', 'PostgreSQL', 'Elasticsearch'],
      modules: [
        'Tax exemptions',
        'Tax declaration analysis',
        'Fiscal audit',
        'Payment notices (MEP)',
        'Charge sheets',
        'Default taxation',
      ],
      role: 'Frontend Angular',
      metrics: 'Deployed nationwide, used by 500+ DGI agents.',
      demoUrl: 'https://erp-dgi-dev.apps.kubedev.hologram.cd/#/',
      details: {
        problem:
          'Fiscal audit and collection processes were manual, leading to delays and lack of traceability.',
        solution:
          'Automated workflows with validation steps, automatic notifications, and real-time tracking dashboards.',
        architecture:
          'Angular frontend, Laravel API, Elasticsearch for full-text search on declarations and taxpayers.',
        formLogic:
          'Multi-step forms for fiscal audits, conditional validation based on exemption type.',
        apiStructure:
          'REST API with case state management, advanced search endpoints, PDF/Excel report exports.',
        sqlOptimization:
          'Optimized queries for taxpayer searches, indexes on MEP dates, aggregations for statistics.',
      },
    },
    {
      title: 'YokaStart',
      subtitle: 'Celebrity personalized video platform',
      type: 'professional',
      description:
        'Marketplace allowing fans to order personalized videos (birthdays, congratulations, etc.) from their favorite celebrities.',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Stripe'],
      modules: [
        'Celebrity catalog',
        'Custom order form',
        'Online payment (Stripe)',
        'Fan dashboard',
        'Video delivery interface',
      ],
      role: 'Frontend Angular',
      metrics: 'Platform in production with 50+ registered celebrities.',
      details: {
        problem:
          'Fans had no simple and secure way to get personalized videos from their idols.',
        solution:
          'Marketplace with celebrity selection, detailed request form, secure payment, and in-app video delivery.',
        architecture:
          'Angular frontend, NestJS API, Stripe integration for payments, cloud video storage.',
        formLogic:
          'Order form with dynamic fields per celebrity, message preview, payment validation.',
        apiStructure:
          'REST API with order management, Stripe webhooks for payment confirmations, email notifications.',
        sqlOptimization:
          'Indexes on celebrity searches by category, paginated catalog queries, popular profile caching.',
      },
    },
    {
      title: 'e-Patente',
      subtitle: 'Kinshasa Central Market license card management',
      type: 'professional',
      description:
        'License card management system for stall allocation and renewal at Kinshasa\'s central market.',
      technologies: ['Laravel', 'Blade', 'MySQL', 'Bootstrap'],
      modules: [
        'License card sales',
        'Annual renewal',
        'Merchant census forms',
        'Stall management',
        'Revenue reports',
      ],
      role: 'Frontend Blade (Laravel monolith)',
      metrics: 'Managing 3,000+ active license cards.',
      demoUrl: 'https://patente.hologram.cd/login',
      details: {
        problem:
          'Stall allocation was manual and paper-based, causing data loss and allocation conflicts.',
        solution:
          'Centralized system with digital registration, renewal tracking, and automatic card generation.',
        architecture:
          'Laravel monolithic application with Blade views, MySQL for persistence, PDF generation for cards.',
        formLogic:
          'Sale and renewal forms with merchant data validation, automatic annual fee calculation.',
        apiStructure:
          'Laravel routes for license CRUD management, authentication middleware, transaction logs.',
        sqlOptimization:
          'Indexes on expiration dates for renewal alerts, grouped queries for monthly reports.',
      },
    },
    // Personal project
    {
      title: 'Bahá\'í Census & Elections',
      subtitle: 'Personal project',
      type: 'personal',
      description:
        'Comprehensive platform for managing member census and organizing elections within the Bahá\'í community.',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Docker'],
      modules: [
        'Member census',
        'Local unit management (neighborhoods, sectors)',
        'Electoral process (eligibility, voting)',
        'Correspondence ballot management',
        'Result calculation and publication',
        'Statistical reports',
      ],
      role: 'Full-Stack (complete design and development)',
      metrics: 'Used to manage 2,000+ members and 5 electoral cycles.',
      details: {
        problem:
          'The manual census was incomplete and prone to duplicates — the same member could be registered multiple times or not at all, making it impossible to maintain a reliable list of eligible members. For elections, the main challenge was managing correspondence ballots — geographically distant members needed to vote without being physically present.',
        solution:
          'Centralized census with automatic duplicate detection and unique member profiles. Full coverage through hierarchical management by neighborhood and sector. Digital correspondence ballot system allowing remote members to submit their vote securely and traceably.',
        architecture:
          'Angular frontend with modular routing, NestJS API with JWT authentication, PostgreSQL for persistence, Docker deployment.',
        formLogic:
          'Census forms with member data validation, secure voting interface with confirmation, correspondence ballot status tracking (sent, received, counted).',
        apiStructure:
          'REST API with endpoints for census, ballot submission, and results, role-based ACL (admin, scrutineer, member).',
        sqlOptimization:
          'Indexes on eligibility criteria, optimized queries for vote counting, views for statistics by local unit.',
      },
    },
  ],
};
