import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill } from '../models/skill';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class Portfolio {
  private skills: Skill[] = [
    // Frontend
    { id: 1, name: 'Angular', level: 90, category: 'frontend', icon: 'fab fa-angular', yearsOfExperience: 2 },
    { id: 2, name: 'TypeScript', level: 85, category: 'frontend', icon: 'fab fa-js-square', yearsOfExperience: 2 },
    { id: 3, name: 'HTML/CSS', level: 95, category: 'frontend', icon: 'fab fa-html5', yearsOfExperience: 5 },
    { id: 4, name: 'JavaScript', level: 95, category: 'frontend', icon: 'fab fa-js', yearsOfExperience: 5 },
    { id: 5, name: 'Bootstrap', level: 90, category: 'frontend', icon: 'fab fa-bootstrap', yearsOfExperience: 2 },
    
    // Backend
    { id: 6, name: 'Spring Boot', level: 80, category: 'backend', icon: 'fas fa-leaf', yearsOfExperience: 2 },
    { id: 7, name: 'Java', level: 90, category: 'backend', icon: 'fab fa-java', yearsOfExperience: 2 },
    { id: 8, name: 'Node.js', level: 90, category: 'backend', icon: 'fab fa-node-js', yearsOfExperience: 2 },
    { id: 9, name: 'PHP', level: 95, category: 'backend', icon: 'fab fa-php', yearsOfExperience: 2 },
    { id: 10, name: 'Symfony', level: 95, category: 'backend', icon: 'fab fa-symfony', yearsOfExperience: 1 },
    { id: 11, name: 'Python', level: 80, category: 'backend', icon: 'fab fa-python', yearsOfExperience: 2 },
    
    // Database
    { id: 12, name: 'MySQL', level: 95, category: 'database', icon: 'fas fa-database', yearsOfExperience: 2 },
    { id: 13, name: 'MongoDB', level: 70, category: 'database', icon: 'fas fa-database', yearsOfExperience: 1 },
    { id: 14, name: 'Oracle', level: 95, category: 'database', icon: 'fas fa-database', yearsOfExperience: 4 },
    { id: 15, name: 'SQL Server', level: 80, category: 'database', icon: 'fas fa-database', yearsOfExperience: 2 },
    
    // Mobile
    { id: 16, name: 'React Native', level: 50, category: 'mobile', icon: 'fab fa-react', yearsOfExperience: 1 },
    { id: 17, name: 'Kotlin', level: 60, category: 'mobile', icon: 'fas fa-mobile-alt', yearsOfExperience: 1 },
    
    // Tools
    { id: 18, name: 'Git', level: 90, category: 'tools', icon: 'fab fa-git-alt', yearsOfExperience: 4 },
    { id: 20, name: 'Postman', level: 95, category: 'tools', icon: 'fas fa-api', yearsOfExperience: 2 }
  ];

  private projects: Project[] = [
    {
      id: 1,
      title: 'Application de Gestion des Congés',
      description: 'Application web de gestion des congés développée avec Angular et Spring Boot',
      detailedDescription: 'Application complète de gestion des congés développée durant mon stage au Centre National de l\'Informatique. Features incluant système d\'authentification JWT, interface responsive Angular, API RESTful Spring Boot, modélisation BDD MySQL avec JPA/Hibernate, et workflow d\'approbation des congés.',
      imageUrl: 'assets/GestionC.jpg',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'JWT', 'JPA/Hibernate', 'Bootstrap', 'REST API'],
      githubUrl: 'https://github.com/Eya480/Application-de-Gestion-de-Projets-Scolaires-SpringBoot-Angular-MongoDB-',
      demoUrl: null,
      category: 'web',
      featured: true,
      startDate: new Date('2025-01-06'),
      endDate: new Date('2025-02-02'),
      status: 'completed'
    },
    {
      id: 2,
    title: 'Gestion de Projets Académiques - Mobile',
    description: 'Application mobile de gestion des projets pédagogiques',
    detailedDescription: 'Application mobile dédiée à la gestion des projets pédagogiques. Fonctionnalités mobiles : notifications push, consultation hors ligne, dépôt de photos, géolocalisation pour les projets terrain.',
    imageUrl: 'assets/gestionPMobile.png',
    technologies: ['Android', 'Angular', 'TypeScript', 'Kotlib', 'MongoDB'],
    githubUrl: ' ',
    demoUrl: null,
    category: 'mobile',
    featured: true,
    startDate: new Date('2025-10-20'),
    endDate: null,
    status: 'in-progress'
    },
    {
      id: 3,
    title: 'Gestion de Projets Académiques - Web',
    description: 'Plateforme web de gestion des projets pédagogiques',
    detailedDescription: 'Application web complète pour la gestion administrative des projets. Interface d\'administration avancée, génération de rapports PDF, gestion des utilisateurs, tableau de bord analytique.',
    imageUrl: 'assets/gestionPWeb.png',
    technologies: ['Spring Boot', 'Angular', 'MongoDB', 'TypeScript', 'Bootstrap', 'Chart.js'],
    githubUrl: ' ',
    demoUrl: null,
    category: 'web',
    featured: true,
    startDate: new Date('2025-10-20'),
    endDate: null,
    status: 'in-progress'
    },
    {
      id: 4,
      title: 'Plateforme E-Commerce SymBook',
      description: 'Site e-commerce de vente de livres avec Symfony',
      detailedDescription: 'Plateforme e-commerce complète de vente de livres développée avec Symfony. Features incluant authentification avec confirmation email, paiement Stripe, OAuth2 Google, gestion de panier, espace admin avec tableau de bord dynamique et recherche avancée.',
      imageUrl: 'assets/projects/symbook.jpg',
      technologies: ['Symfony', 'PHP', 'Oracle', 'Stripe', 'OAuth2', 'Bootstrap'],
      githubUrl: 'https://github.com/Eya480/symbook',
      demoUrl: null,
      category: 'web',
      featured: false,
      startDate: new Date('2025-02-10'),
      endDate: new Date('2025-05-01'),
      status: 'completed'
    },
    {
      id: 5,
      title: 'Plateforme E-Commerce HelloCommerce',
      description: 'Application e-commerce full stack pour la vente de produits avec gestion avancée des catégories et sous-catégories.',
      detailedDescription: 'Développement d\'une plateforme e-commerce complète avec Spring Boot (backend) et Angular (frontend). Fonctionnalités : gestion des produits, catégories et sous-catégories, recherche filtrée, panier, commandes, espace administrateur, statistiques, authentification (email, Google OAuth2), paiement Stripe, gestion des stocks, et tableau de bord dynamique. Architecture RESTful, base de données relationnelle (MySQL), interface responsive et sécurisée.',
      imageUrl: 'assets/ecommerceP.png',
      technologies: ['Spring Boot', 'Angular', 'MySQL', 'Stripe', 'OAuth2', 'Bootstrap', 'Gestion catégories', 'Gestion sous-catégories', 'Gestion produits'],
      githubUrl: 'https://github.com/Eya480/HelloCommerce',
      demoUrl: null,
      category: 'web',
      featured: false,
      startDate: new Date('2025-10-01'),
      endDate: new Date('2025-12-01'),
      status: 'completed'
    },
    {
      id: 6,
      title: 'Gestion des Sessions de Formation ISET Radès',
      description: 'Système de gestion des sessions de formation pour l\'ISET Radès',
      detailedDescription: 'Application web développée pour la gestion complète des sessions de formation à l\'ISET Radès. Permet l\'organisation, le planning, le suivi des participants et la gestion des ressources pédagogiques.',
      imageUrl: 'assets/gestionF.png',
      technologies: ['Angular', 'Node.js', 'Bootstrap'],
      githubUrl: 'https://github.com/Eya480/Gestion-Formation-IsetR',
      demoUrl: null,
      category: 'web',
      featured: true,
      startDate: new Date('2024-12-01'),
      endDate: new Date('2024-12-15'),
      status: 'completed'
    }
    ,
    {
      id: 7,
      title: 'Gestion des Vols Tunisair',
      description: 'Application desktop de gestion des vols aériens',
      detailedDescription: 'Application desktop développée en Java avec JavaFX et SceneBuilder pour la gestion complète des vols de Tunisair. Interface intuitive pour la gestion des vols, passagers, réservations et statistiques.',
      imageUrl: 'assets/projects/gestion-vols.jpg',
      technologies: ['Java', 'JavaFX', 'SceneBuilder', 'MySQL', 'JDBC'],
      githubUrl: 'https://github.com/Eya480/JavaDesktopApp-GestionVols',
      demoUrl: null,
      category: 'desktop',
      featured: false,
      startDate: new Date('2025-04-01'),
      endDate: new Date('2025-05-14'),
      status: 'completed'
    },
    {
      id: 8,
      title: 'Jeu Mathématique Python',
      description: 'Jeu éducatif de mathématiques développé en Python',
      detailedDescription: 'Application ludique pour pratiquer les mathématiques avec différents niveaux de difficulté. Génération aléatoire d\'opérations mathématiques, système de score et progression du joueur.',
      imageUrl: 'assets/projects/math-game.jpg',
      technologies: ['Python', 'Pygame', 'Algorithmique', 'UI/UX'],
      githubUrl: 'https://github.com/Eya480/math-game-python',
      demoUrl: null,
      category: 'desktop',
      featured: false,
      startDate: new Date('2024-11-01'),
      endDate: new Date('2024-12-15'),
      status: 'completed'
    },
    {
      id: 9,
      title: 'Gestion de Clubs ISET Radès',
      description: 'Application de gestion des clubs étudiants',
      detailedDescription: 'Application Full Stack pour la gestion des clubs étudiants de l\'ISET Radès. Développée avec Spring Boot, Angular 19 et MySQL. Gestion des membres, activités et événements.',
      imageUrl: 'assets/projects/gestion-clubs.jpg',
      technologies: ['Spring Boot', 'Angular', 'MySQL', 'TypeScript'],
      githubUrl: 'https://github.com/Eya480/GestionClubsIsetRades',
      demoUrl: null,
      category: 'web',
      featured: false,
      startDate: new Date('2024-03-07'),
      endDate: new Date('2024-05-10'),
      status: 'completed'
    }
    ,
    {
      id: 10,
      title: 'Meet Ordonna: Connecting Patients & Pharmacies',
      description: 'Application mobile React Native pour la gestion des ordonnances et commandes en pharmacie.',
      detailedDescription: `Excited to share Ordonna, a React Native mobile app that makes managing prescriptions and pharmacy orders simple and intuitive.\n\nPour les patients : visualisation des ordonnances, suivi des commandes, localisation des pharmacies à proximité.\nPour les pharmaciens : gestion des commandes, suivi du stock, statistiques journalières.\n\nTech Stack : React Native 0.81 & Expo SDK 54, React Navigation v7 (stack & bottom tabs), Zustand v5 (state management), AsyncStorage (offline persistence), React Native Maps, expo-location, expo-image-picker.`,
      imageUrl: 'assets/projects/mobileGestionO.png',
      technologies: [
        'React Native 0.81',
        'Expo SDK 54',
        'React Navigation v7',
        'Zustand v5',
        'AsyncStorage',
        'React Native Maps',
        'expo-location',
        'expo-image-picker'
      ],
      githubUrl: '',
      demoUrl: null,
      category: 'mobile',
      featured: true,
      startDate: new Date('2026-01-01'),
      endDate: null,
      status: 'in-progress'
    }
    ,
    {
      id: 11,
      title: 'Gestion des Vols - Desktop Java',
      description: 'Application desktop Java pour la gestion des vols avec sécurité renforcée.',
      detailedDescription: `Application desktop complète développée en Java (JavaFX) pour la gestion des vols aériens : gestion des vols, passagers, réservations, statistiques. Sécurité avancée avec hashage des mots de passe via BCrypt, connexion à une base MySQL, gestion des rôles utilisateurs, et interface moderne.`,
      imageUrl: 'assets/projects/gestion-vols.jpg',
      technologies: [
        'Java',
        'JavaFX',
        'MySQL',
        'JDBC',
        'BCrypt',
        'Hashage mot de passe',
        'Gestion rôles'
      ],
      githubUrl: 'https://github.com/Eya480/JavaDesktopApp-GestionVols',
      demoUrl: null,
      category: 'desktop',
      featured: false,
      startDate: new Date('2025-02-10'),
      endDate: new Date('2025-05-01'),
      status: 'completed'
    }
  ];
    
    

  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }

  getSkillsByCategory(category: string): Observable<Skill[]> {
    return of(this.skills.filter(skill => skill.category === category));
  }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectsByCategory(category: string): Observable<Project[]> {
    if (category === 'all') {
      return of(this.projects);
    }
    return of(this.projects.filter(project => project.category === category));
  }

  getProjectCategories(): Observable<string[]> {
    const categories = ['all', 'web', 'mobile', 'desktop'];
    return of(categories);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return of(this.projects.filter(project => project.featured));
  }

  getProjectCountByCategory(category: string): number {
    if (category === 'all') return this.projects.length;
    return this.projects.filter(project => project.category === category).length;
  }

  getProjectById(id: number): Observable<Project | undefined> {
    return of(this.projects.find(project => project.id === id));
  }
}