import type { BuilderStep, Experience, Profile, Project, SkillGroup, SocialLink } from '../types'

export const profile: Profile = {
  name: 'Lucas Germe',
  role: 'Développeur full-stack junior & AI Builder',
  location: 'Thiant — mobilité France entière',
  availability: 'À la recherche d’un CDI',
  introduction:
    'Ancien gérant devenu développeur, je transforme des besoins métier en applications utilisables, du cadrage jusqu’au déploiement.',
  about: [
    'Pendant plus de deux ans, j’ai dirigé une entreprise de services à la personne : équipes, plannings, clients, contrats, trésorerie et décisions quotidiennes. Cette expérience me donne une lecture très concrète des problèmes qu’un produit doit résoudre.',
    'Je construis aujourd’hui des applications web, mobiles et interactives avec une approche assistée par IA. Les agents accélèrent l’exploration et l’exécution ; je reste responsable du besoin, des arbitrages, de l’intégration, des tests et du résultat livré.',
  ],
  email: 'lucas.germe@gmail.com',
  cvPath: '/cv-lucas-germe.pdf',
}

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'] },
  { title: 'Backend & données', skills: ['Node.js', 'Express', 'API REST', 'SQL', 'PostgreSQL', 'SQLite', 'Supabase'] },
  { title: 'Tests & qualité', skills: ['Playwright', 'Tests end-to-end', 'Non-régression', 'Validation du build'] },
  { title: 'AI Builder', skills: ['Codex', 'Agents de développement', 'Cadrage fonctionnel', 'Contrôle des diffs', 'Tests & validation'] },
  { title: 'Mobile & jeu', skills: ['React Native', 'Flutter', 'Unity 6', 'C#', 'Google Play'] },
  { title: 'Outils', skills: ['Git', 'GitHub', 'npm', 'Vercel', 'Terminal'] },
  { title: 'Notions en progression', skills: ['Kotlin', 'Java', 'Spring Boot', 'Docker', 'CI/CD', 'Sécurité backend'] },
]

export const aiBuilderSteps: BuilderStep[] = [
  { title: 'Cadrer', description: 'Transformer un besoin réel en périmètre, comportements attendus et critères vérifiables.' },
  { title: 'Orchestrer', description: 'Guider les agents dans une codebase, découper le travail et maintenir une direction produit cohérente.' },
  { title: 'Contrôler', description: 'Relire les changements, reproduire les bugs, demander les tests et vérifier les builds.' },
  { title: 'Livrer', description: 'Faire converger les itérations vers une application fonctionnelle, compréhensible et déployée.' },
]

export const experiences: Experience[] = [
  {
    title: 'Gérant',
    organization: 'LG Services / Domicile Clean Cambrai',
    period: 'Mars 2024 — octobre 2026 (fin prévue)',
    location: 'Cambrai',
    description: 'Création et pilotage quotidien d’une entreprise de services à la personne.',
    highlights: [
      'Organisation de 200 à 230 heures de prestations par mois et adaptation des plannings aux absences et contraintes clients.',
      'Recrutement, intégration et suivi des intervenants ; gestion des contrats clients et salariés.',
      'Devis, facturation, administration, relation client, trésorerie, charges et suivi de la rentabilité.',
      'Développement d’une activité réalisant environ 70 000 à 83 000 € de chiffre d’affaires annuel.',
    ],
  },
  {
    title: 'Développeur Unity freelance',
    organization: 'ALTAR VISION — ALTAR CORP',
    period: 'Avril — mai 2026',
    location: 'Mission de 6 semaines',
    description: 'Seul développeur de la démo Windows jouable d’un FPS rythmique.',
    highlights: [
      'Développement des systèmes de gameplay, armes, ennemis, score, interface et réglages.',
      'Synchronisation de la musique avec les tirs, apparitions, éclairages et retours visuels.',
      'Intégration des assets fournis, débogage, itérations client et livraison du build.',
    ],
  },
]

export const projects: Project[] = [
  {
    slug: 'planning-interventions',
    title: 'Planning d’interventions',
    role: 'Conception et développement full-stack en autonomie',
    period: 'Juillet 2026',
    image: '/projects/planning-interventions/planning.webp',
    imageHref: 'https://planning-interventions.vercel.app/',
    featured: true,
    description:
      'Une application web de gestion d’équipe permettant d’organiser les interventions, les clients et les intervenantes depuis un planning visuel.',
    challenge:
      'Construire une expérience de planification fluide avec des vues jour, semaine et mois, tout en gérant les déplacements, redimensionnements et chevauchements des interventions.',
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Vercel'],
    links: [
      { label: 'Voir le projet', href: 'https://planning-interventions.vercel.app/', external: true },
      { label: 'Voir sur GitHub', href: 'https://github.com/germelucas/planning-interventions', external: true },
    ],
    status: 'publie',
  },
  {
    slug: 'altar-corp',
    title: 'ALTAR CORP',
    role: 'Développeur Unity freelance — seul développeur de la démo',
    period: '20 avril — fin mai 2026',
    duration: '6 semaines',
    image: '/projects/altar-corp/hero.webp',
    featured: true,
    description:
      'Conception et intégration complète d’une démo jouable pour un FPS rythmique solo situé dans la ville abandonnée de Yerneth.',
    challenge:
      'Faire de la musique un système de gameplay central : tirs, dégâts, score, combo, apparitions ennemies, éclairages et interface réagissent aux marqueurs du morceau.',
    technologies: ['Unity 6', 'C#', 'URP', 'Input System', 'NavMesh', 'JSON', 'Audio DSP'],
    links: [
      { label: 'Lire l’étude de cas', href: '/projets/altar-corp' },
      { label: 'Voir sur Steam', href: 'https://store.steampowered.com/app/4577310/ALTAR_CORP/', external: true },
    ],
    status: 'publie',
    caseStudy: {
      context: [
        'ALTAR CORP est un FPS rythmique solo développé par ALTAR VISION. Le jeu suit Leyla dans Yerneth, une ville abandonnée envahie par des créatures aveugles appelées Lowkihs.',
        'J’ai été missionné en freelance pour transformer la vision du créateur en une démo Windows jouable. Pendant six semaines, j’étais le seul développeur : j’ai écrit le code, intégré les assets et animations fournis, puis relié l’ensemble des systèmes.',
        'Des points d’avancement réguliers avec le créateur permettaient de valider la direction et d’ajuster rapidement les sensations de jeu.',
      ],
      responsibilities: [
        'Architecture et développement de tous les systèmes gameplay de la démo',
        'Intégration des modèles, animations, sons et éléments visuels fournis',
        'Création du contrôleur FPS, des armes, des ennemis et de la boucle de combat',
        'Développement de l’interface, des menus, des réglages et des statistiques',
        'Équilibrage, débogage, itérations client et livraison du build Windows',
      ],
      rhythmSystems: [
        'Chargement de marqueurs musicaux depuis des données JSON triées dans une timeline.',
        'Lecture planifiée sur l’horloge DSP de Unity afin de conserver une référence temporelle stable.',
        'Évaluation de chaque tir selon sa proximité avec le marqueur le plus proche : Perfect, Good ou Miss.',
        'Variation des dégâts, des points et du multiplicateur de combo selon la précision rythmique.',
        'Diffusion d’événements aux spawns ennemis, aux éclairages et au feedback du crosshair.',
      ],
      fpsSystems: [
        'Déplacement avec accélération, sprint, saut, coyote time et jump buffer',
        'Dash, glissade, contrôle aérien et compensation du champ de vision',
        'Arme hitscan, rechargement, recul, impacts, headshots et effets caméra',
        'IA ennemie et apparitions sur NavMesh synchronisées avec la musique',
      ],
      supportingSystems: [
        'Difficulté et densité d’ennemis configurables',
        'Score, combo, précision et statistiques de fin de partie',
        'Pause, mort, fin de niveau et rechargement de scène',
        'Réglages audio, graphiques, sensibilité, FOV et contrôles',
      ],
      architecture: ['Audio + marqueurs JSON', 'RhythmManager', 'Gameplay & ennemis', 'Score & combo', 'Éclairages', 'Interface'],
      results: [
        'Livraison d’un build Windows jouable réunissant la boucle FPS et la mécanique rythmique.',
        'Mise en place d’une architecture événementielle permettant de synchroniser plusieurs systèmes sans les coupler directement.',
        'Expérience complète d’autonomie technique : estimation, implémentation, intégration, retours client et stabilisation.',
      ],
      media: [
        { src: '/projects/altar-corp/rhythm.webp', alt: 'Vue FPS de la démo ALTAR CORP face à plusieurs Lowkihs avec le crosshair rythmique', caption: 'Le crosshair animé donne au joueur une référence visuelle pour tirer sur le rythme.' },
        { src: '/projects/altar-corp/combat.webp', alt: 'Combat dans ALTAR CORP avec le jugement GOOD et le score affichés', caption: 'Chaque tir produit un jugement immédiat qui alimente dégâts, score et combo.' },
        { src: '/projects/altar-corp/world.webp', alt: 'Combat sombre dans ALTAR CORP avec un jugement PERFECT et un multiplicateur de combo', caption: 'Une série de tirs précis augmente le multiplicateur et renforce le feedback de maîtrise.' },
      ],
      credit: 'Direction créative, univers, modèles et animations : ALTAR VISION.',
      codeExcerpt: `public RhythmTimingJudgement EvaluateCurrentTiming()\n{\n    float delta = GetNearestMarkerDelta();\n    if (delta <= perfectWindow) return RhythmTimingJudgement.Perfect;\n    if (delta <= goodWindow) return RhythmTimingJudgement.Good;\n    return RhythmTimingJudgement.Miss;\n}`,
    },
  },
  {
    slug: 'applications-mobiles',
    title: 'Deux applications Android publiées',
    role: 'Conception, développement et publication en autonomie complète',
    period: 'Octobre 2025 — mars 2026',
    duration: '2 cycles produit complets',
    cardImages: ['/projects/zen-sleep/screen-1.webp', '/projects/good/screen-1.webp'],
    description: 'Zen Sleep et GOOD : deux applications imaginées, développées puis publiées seul pour apprendre à transformer une idée en produit mobile disponible sur Google Play.',
    challenge: 'Aller au-delà du prototype : architecture, fonctions natives, monétisation, tests sur appareil, signature Android, validation du store et découverte des enjeux d’acquisition.',
    technologies: ['Flutter', 'Dart', 'React Native', 'Expo', 'TypeScript', 'SQLite', 'Firebase', 'Google Play'],
    links: [
      { label: 'Lire l’étude de cas', href: '/projets/applications-mobiles' },
      { label: 'Zen Sleep sur Google Play', href: 'https://play.google.com/store/apps/details?id=com.zensoundscape.app.zensoundscape', external: true },
      { label: 'GOOD sur Google Play', href: 'https://play.google.com/store/apps/details?id=com.anonymous.DailyAffirmations', external: true },
    ],
    status: 'publie',
  },
  {
    slug: 'zen-sleep',
    hidden: true,
    title: 'Zen Sleep',
    role: 'Conception, développement et publication en autonomie complète',
    period: 'Octobre — 24 novembre 2025',
    duration: '≈ 2 mois jusqu’à publication',
    image: '/projects/zen-sleep/screen-1.webp',
    description: 'Une application Android pour composer des ambiances sonores personnalisées dédiées au sommeil et à la relaxation.',
    challenge: 'Gérer plusieurs pistes audio en parallèle, conserver les réglages et transformer un prototype Flutter en produit publié sur Google Play.',
    technologies: ['Flutter', 'Dart', 'Provider', 'Audioplayers', 'SQLite', 'Google Play Billing', 'Firebase'],
    links: [
      { label: 'Lire l’étude de cas', href: '/projets/zen-sleep' },
      { label: 'Voir sur Google Play', href: 'https://play.google.com/store/apps/details?id=com.zensoundscape.app.zensoundscape', external: true },
    ],
    status: 'publie',
    mobileCaseStudy: {
      subtitle: 'Sons et ambiances pour dormir',
      launchDate: '24 novembre 2025',
      updateDate: '18 janvier 2026',
      developmentPeriod: 'Environ 1 mois de développement',
      releasePeriod: 'Environ 1 mois de préparation et de publication',
      problem: 'Permettre à chacun de créer une ambiance sonore adaptée à son sommeil plutôt que d’écouter une piste unique et figée.',
      overview: [
        'Zen Sleep est ma première application mobile menée jusqu’à une publication publique. J’ai conçu le produit, développé l’application Flutter, préparé les contenus et assuré seul toute la chaîne de livraison Android.',
        'Le premier mois a été consacré au produit et au développement. Le suivant m’a confronté aux contraintes moins visibles d’une sortie réelle : builds de production, signature, achats intégrés, tests sur appareil et validation Google Play.',
      ],
      responsibilities: [
        'Définition du périmètre et conception de l’expérience',
        'Développement Flutter et architecture des services',
        'Traitement, intégration et normalisation des contenus audio',
        'Tests Android, monétisation et préparation des fiches store',
        'Signature, publication et mises à jour Google Play',
      ],
      features: [
        'Plus de 100 sons organisés par ambiances',
        'Lecture simultanée et bouclage de plusieurs pistes',
        'Volume indépendant pour chaque son',
        'Mixages personnalisés sauvegardés',
        'Minuteur d’arrêt pour l’endormissement',
        'Contenus gratuits et premium',
      ],
      technicalHighlights: [
        'Service audio centralisé avec plusieurs lecteurs et libération explicite des ressources.',
        'Normalisation des niveaux par multiplicateurs calculés pour éviter les écarts de volume entre les fichiers.',
        'Persistance des mixages et volumes avec SQLite et SharedPreferences.',
        'Téléchargements premium limités en concurrence pour protéger le réseau et la mémoire du téléphone.',
        'Achats intégrés, restauration des droits et instrumentation Firebase Analytics.',
      ],
      aiUsage: 'J’ai utilisé des agents IA de code comme accélérateurs d’apprentissage et d’exécution. Je suis resté responsable du périmètre, des choix techniques, de l’intégration, des tests, du débogage et de la publication.',
      outcome: 'L’application a été publiée et fonctionne comme un produit Android réel. Son audience est toutefois restée trop faible pour fournir assez de données fiables et guider une véritable boucle d’amélioration produit.',
      learnings: [
        'Une application terminée techniquement n’est pas encore un produit distribué.',
        'La gestion audio mobile demande autant d’attention aux ressources qu’à l’interface.',
        'Acquisition, mesure et retours utilisateurs doivent être pensés avant la sortie.',
      ],
      media: [
        { src: '/projects/zen-sleep/screen-1.webp', alt: 'Présentation Google Play de Zen Sleep avec une ambiance sonore composée de plusieurs pistes', caption: 'Composer une ambiance et régler chaque source indépendamment.' },
        { src: '/projects/zen-sleep/screen-2.webp', alt: 'Bibliothèque de plus de 100 sons relaxants dans Zen Sleep', caption: 'Une bibliothèque organisée pour trouver rapidement le son recherché.' },
        { src: '/projects/zen-sleep/screen-3.webp', alt: 'Création d’un mix sonore personnalisé dans Zen Sleep', caption: 'Les mixages personnalisés sont sauvegardés localement avec leurs volumes.' },
      ],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.zensoundscape.app.zensoundscape',
      playStoreLabel: 'Zen Sleep — Sons pour Dormir',
    },
  },
  {
    slug: 'good',
    hidden: true,
    title: 'GOOD',
    role: 'Conception, développement et publication en autonomie complète',
    period: 'Janvier — 26 février 2026',
    duration: '≈ 2 mois jusqu’à publication',
    image: '/projects/good/screen-1.webp',
    description: 'Une application d’affirmations positives personnalisables conçue pour installer une routine simple en une minute par jour.',
    challenge: 'Faire évoluer une idée simple vers une application React Native complète avec personnalisation, notifications, widget Android et monétisation.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'AsyncStorage', 'Notifications', 'Firebase', 'Google Play Billing'],
    links: [
      { label: 'Lire l’étude de cas', href: '/projets/good' },
      { label: 'Voir sur Google Play', href: 'https://play.google.com/store/apps/details?id=com.anonymous.DailyAffirmations', external: true },
    ],
    status: 'publie',
    mobileCaseStudy: {
      subtitle: 'Affirmations positives personnalisées',
      launchDate: '26 février 2026',
      updateDate: '5 mars 2026',
      developmentPeriod: 'Environ 1 mois de développement',
      releasePeriod: 'Environ 1 mois de préparation et de publication',
      problem: 'Créer un rituel positif très court, personnalisable et suffisamment simple pour être répété quotidiennement.',
      overview: [
        'GOOD est ma seconde application Android publiée en autonomie complète. Après Zen Sleep, je voulais approfondir React Native et TypeScript tout en construisant davantage de logique produit autour de la personnalisation et de l’engagement.',
        'J’ai pris en charge la conception, le développement, les composants Android nécessaires, les achats intégrés, les tests, la fiche Google Play et la publication.',
      ],
      responsibilities: [
        'Conception du parcours et de la direction fonctionnelle',
        'Développement React Native et TypeScript',
        'Création du moteur de recommandations et des routines',
        'Intégration des notifications et du widget Android',
        'Monétisation, analytics, builds et publication Google Play',
      ],
      features: [
        'Plus de 1 000 affirmations par catégories',
        'Flux personnalisé, favoris et créations personnelles',
        'Rappels configurables et notifications quotidiennes',
        'Séries quotidiennes pour suivre sa régularité',
        'Thèmes visuels, partage et français/anglais',
        'Widget Android et contenus premium',
      ],
      technicalHighlights: [
        'État et préférences persistés localement avec AsyncStorage.',
        'Moteur de recommandation construit à partir des catégories et préférences utilisateur.',
        'Planification de notifications selon des plages horaires, jours et sélections de contenu.',
        'Ponts et composants Android pour le widget et les fonctions absentes du socle JavaScript.',
        'Parcours d’achat, essai, restauration et événements Firebase Analytics.',
      ],
      aiUsage: 'Ce projet a approfondi mon expérimentation des agents IA de code. Ils m’ont aidé à explorer plus vite, mais j’ai assuré la direction du produit, la sélection des solutions, l’intégration, le débogage sur appareil et toute la publication.',
      outcome: 'GOOD a été publiée avec une chaîne Android complète et des fonctionnalités allant au-delà du prototype. Comme pour Zen Sleep, l’acquisition limitée n’a pas permis d’obtenir un volume de données suffisant pour décider objectivement des prochaines évolutions.',
      learnings: [
        'Un périmètre produit doit rester compatible avec la capacité réelle à tester chaque fonctionnalité.',
        'Les notifications et achats intégrés exigent des tests natifs au-delà de l’environnement Expo.',
        'Le marketing et la distribution font partie du produit dès le début du développement.',
      ],
      media: [
        { src: '/projects/good/screen-1.webp', alt: 'Flux principal de GOOD présentant une affirmation positive', caption: 'Une interaction courte centrée sur une affirmation à la fois.' },
        { src: '/projects/good/screen-2.webp', alt: 'Écran de configuration des rappels dans GOOD', caption: 'Les rappels sont configurables selon la fréquence et la plage horaire.' },
        { src: '/projects/good/screen-3.webp', alt: 'Notification GOOD affichant une affirmation positive sur un téléphone', caption: 'Le contenu accompagne l’utilisateur en dehors de l’application.' },
      ],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.anonymous.DailyAffirmations',
      playStoreLabel: 'Affirmations positives — GOOD',
    },
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucas-germe-5669b9208/' },
  { label: 'E-mail', href: 'mailto:lucas.germe@gmail.com' },
]
