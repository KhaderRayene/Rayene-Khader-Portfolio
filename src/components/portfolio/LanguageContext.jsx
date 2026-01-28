import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      impact: 'Impact',
      contact: 'Contact'
    },
    hero: {
      title: 'Full-Stack Software Engineer',
      subtitle: 'Automation & Systems',
      tagline: 'Engineering products. Automating complexity.',
      viewProjects: 'View Projects',
      downloadCV: 'Download CV'
    },
    about: {
      title: 'About Me',
      role1: 'Software Engineer at KEOS TELECOM',
      role2: 'Co-founder of OptionWeb',
      role3: 'Engineering Graduate from ISEP',
      description: 'Specialized in designing complex systems, automating business processes, and building robust products. I create internal solutions that replace existing SaaS tools with superior performance. My approach is product-oriented, focused on performance and business value.',
      age: '22 years old'
    },
    skills: {
      title: 'Technical Skills',
      backend: 'Backend',
      frontend: 'Frontend',
      mobile: 'Mobile',
      automation: 'Automation & Data',
      other: 'Other'
    },
    projects: {
      title: 'Featured Projects',
      viewDetails: 'View Details',
      problem: 'Problem',
      solution: 'Solution',
      impact: 'Impact',
      stack: 'Tech Stack',
      items: [
        {
          title: 'Planning Management System',
          subtitle: 'Praxedo Replacement',
          problem: 'Expensive SaaS solution with limited customization for enterprise planning needs.',
          solution: 'Enterprise-grade planning application with automation, scheduling optimization, reporting, and real-time updates.',
          impact: 'Eliminated SaaS costs, 40% faster scheduling, full customization.',
          stack: ['Angular', 'Spring Boot', 'MySQL']
        },
        {
          title: 'Massive Excel Import System',
          subtitle: '200+ columns streaming processing',
          problem: 'Processing large Excel files caused memory issues and system crashes.',
          solution: 'Streaming-based import system with Apache POI for handling massive datasets efficiently.',
          impact: '10x faster imports, 90% memory reduction, zero crashes.',
          stack: ['Java', 'Apache POI', 'Spring Boot']
        },
        {
          title: 'Stock Management Platform',
          subtitle: 'Enterprise Inventory Solution',
          problem: 'Manual inventory tracking leading to errors and inefficiencies.',
          solution: 'Full-stack inventory management with real-time tracking and automated alerts.',
          impact: 'Real-time accuracy, automated reordering, reduced manual work by 80%.',
          stack: ['Angular', 'Spring Boot', 'MySQL']
        },
        {
          title: 'Trading Bot with ML',
          subtitle: 'Automated Trading System',
          problem: 'Manual trading missing optimal opportunities in fast markets.',
          solution: 'Machine learning-powered trading bot with Discord integration for alerts.',
          impact: 'Automated analysis, real-time notifications, data-driven decisions.',
          stack: ['Python', 'ML Libraries', 'Discord API']
        },
        {
          title: 'Mobile Business Application',
          subtitle: 'Cross-platform Solution',
          problem: 'Business processes not accessible on mobile devices.',
          solution: 'Flutter-based mobile app bringing core business features to smartphones.',
          impact: 'Mobile accessibility, improved field operations efficiency.',
          stack: ['Flutter', 'REST APIs']
        },
        {
          title: 'E-commerce Platform',
          subtitle: 'Full-Stack Commerce Solution',
          problem: 'Need for custom e-commerce with specific business requirements.',
          solution: 'Complete e-commerce platform with payment integration and inventory sync.',
          impact: 'Fully customized solution, integrated with existing systems.',
          stack: ['Angular', 'Spring Boot', 'MySQL']
        }
      ]
    },
    impact: {
      title: 'Business Impact',
      items: [
        { title: 'Automation & Time Saving', desc: 'Automating repetitive processes to free up valuable time' },
        { title: 'Cost Reduction', desc: 'Replacing expensive SaaS tools with custom solutions' },
        { title: 'Performance Optimization', desc: 'Building systems that scale and perform' },
        { title: 'Scalable Architecture', desc: 'Designing for growth and future needs' },
        { title: 'Data-Driven Systems', desc: 'Leveraging data for smarter decisions' }
      ]
    },
    mindset: {
      title: 'Engineering Philosophy',
      subtitle: 'No bullshit. No theater. Just systems that scale.',
      items: [
        {
          title: 'Being busy ≠ Making progress',
          desc: 'Activity without leverage is self-deception. Real progress requires clarity, systems, and execution — not endless meetings and fake productivity.'
        },
        {
          title: 'Meetings are productivity theater',
          desc: 'Constant coordination creates the illusion of advancement while slowing real execution. I optimize for building, not talking about building.'
        },
        {
          title: 'Manual work is a long-term liability',
          desc: 'Repetitive tasks waste time now and forever. Automation is not optional — it is the most underexploited force for scalable progress.'
        },
        {
          title: 'Systems > Effort',
          desc: 'Hard work without systems is a trap. I build leverage through automation, architecture, and ruthless prioritization.'
        }
      ]
    },
    contact: {
      title: "Let's build powerful systems together.",
      subtitle: 'Ready to discuss your next project?',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Tell me about your project...'
    }
  },
  fr: {
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      impact: 'Impact',
      contact: 'Contact'
    },
    hero: {
      title: 'Ingénieur Logiciel Full-Stack',
      subtitle: 'Automatisation & Systèmes',
      tagline: 'Concevoir des produits. Automatiser la complexité.',
      viewProjects: 'Voir les projets',
      downloadCV: 'Télécharger CV'
    },
    about: {
      title: 'À propos',
      role1: 'Software Engineer chez KEOS TELECOM',
      role2: 'Co-fondateur de OptionWeb',
      role3: 'Diplômé Ingénieur de l\'ISEP',
      description: 'Spécialisé dans la conception de systèmes complexes, l\'automatisation de processus métier et le développement de produits robustes. Je crée des solutions internes qui remplacent les outils SaaS existants avec des performances supérieures. Mon approche est orientée produit, performance et valeur business.',
      age: '22 ans'
    },
    skills: {
      title: 'Compétences Techniques',
      backend: 'Backend',
      frontend: 'Frontend',
      mobile: 'Mobile',
      automation: 'Automatisation & Data',
      other: 'Autres'
    },
    projects: {
      title: 'Projets Phares',
      viewDetails: 'Voir détails',
      problem: 'Problème',
      solution: 'Solution',
      impact: 'Impact',
      stack: 'Technologies',
      items: [
        {
          title: 'Système de Gestion de Planning',
          subtitle: 'Remplacement de Praxedo',
          problem: 'Solution SaaS coûteuse avec personnalisation limitée pour les besoins de planification.',
          solution: 'Application de planification enterprise avec automatisation, optimisation, reporting et mises à jour temps réel.',
          impact: 'Élimination des coûts SaaS, planification 40% plus rapide, personnalisation totale.',
          stack: ['Angular', 'Spring Boot', 'MySQL']
        },
        {
          title: 'Import Excel Massif',
          subtitle: 'Traitement streaming 200+ colonnes',
          problem: 'Le traitement de gros fichiers Excel causait des problèmes mémoire et des crashs.',
          solution: 'Système d\'import basé sur le streaming avec Apache POI pour gérer des datasets massifs.',
          impact: 'Imports 10x plus rapides, réduction mémoire de 90%, zéro crash.',
          stack: ['Java', 'Apache POI', 'Spring Boot']
        },
        {
          title: 'Plateforme de Gestion de Stock',
          subtitle: 'Solution d\'inventaire Enterprise',
          problem: 'Suivi manuel des stocks menant à des erreurs et inefficacités.',
          solution: 'Gestion d\'inventaire full-stack avec suivi temps réel et alertes automatisées.',
          impact: 'Précision temps réel, réapprovisionnement automatique, réduction travail manuel de 80%.',
          stack: ['Angular', 'Spring Boot', 'MySQL']
        },
        {
          title: 'Bot de Trading ML',
          subtitle: 'Système de Trading Automatisé',
          problem: 'Trading manuel manquant des opportunités optimales sur les marchés rapides.',
          solution: 'Bot de trading avec machine learning et intégration Discord pour les alertes.',
          impact: 'Analyse automatisée, notifications temps réel, décisions data-driven.',
          stack: ['Python', 'ML Libraries', 'Discord API']
        },
        {
          title: 'Application Mobile Business',
          subtitle: 'Solution Cross-platform',
          problem: 'Processus métier non accessibles sur mobile.',
          solution: 'Application mobile Flutter apportant les fonctionnalités métier sur smartphones.',
          impact: 'Accessibilité mobile, efficacité terrain améliorée.',
          stack: ['Flutter', 'REST APIs']
        },
        {
          title: 'Plateforme E-commerce',
          subtitle: 'Solution Commerce Full-Stack',
          problem: 'Besoin d\'un e-commerce personnalisé avec des exigences métier spécifiques.',
          solution: 'Plateforme e-commerce complète avec intégration paiement et sync inventaire.',
          impact: 'Solution entièrement personnalisée, intégrée aux systèmes existants.',
          stack: ['Angular', 'Spring Boot', 'MySQL']
        }
      ]
    },
    impact: {
      title: 'Impact Business',
      items: [
        { title: 'Automatisation & Gain de Temps', desc: 'Automatiser les processus répétitifs pour libérer du temps précieux' },
        { title: 'Réduction des Coûts', desc: 'Remplacer les outils SaaS coûteux par des solutions sur mesure' },
        { title: 'Optimisation Performance', desc: 'Construire des systèmes scalables et performants' },
        { title: 'Architecture Évolutive', desc: 'Concevoir pour la croissance et les besoins futurs' },
        { title: 'Systèmes Data-Driven', desc: 'Exploiter les données pour des décisions plus intelligentes' }
      ]
    },
    mindset: {
      title: 'Philosophie d\'Ingénierie',
      subtitle: 'Pas de bullshit. Pas de théâtre. Juste des systèmes qui scalent.',
      items: [
        {
          title: 'Être occupé ≠ Progresser',
          desc: 'L\'activité sans effet de levier est de l\'auto-illusion. Le vrai progrès nécessite clarté, systèmes et exécution — pas des réunions interminables et une productivité factice.'
        },
        {
          title: 'Les réunions sont du théâtre de productivité',
          desc: 'La coordination constante crée l\'illusion d\'avancement tout en ralentissant l\'exécution réelle. J\'optimise pour construire, pas pour parler de construction.'
        },
        {
          title: 'Le travail manuel est un passif à long terme',
          desc: 'Les tâches répétitives font perdre du temps maintenant et pour toujours. L\'automatisation n\'est pas optionnelle — c\'est la force la plus sous-exploitée pour un progrès scalable.'
        },
        {
          title: 'Systèmes > Effort',
          desc: 'Le travail acharné sans systèmes est un piège. Je crée de l\'effet de levier par l\'automatisation, l\'architecture et une priorisation impitoyable.'
        }
      ]
    },
    contact: {
      title: 'Construisons des systèmes puissants ensemble.',
      subtitle: 'Prêt à discuter de votre prochain projet ?',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'votre@email.com',
      messagePlaceholder: 'Parlez-moi de votre projet...'
    }
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  
  const t = translations[language];
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}