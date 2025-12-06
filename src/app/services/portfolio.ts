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
    title: 'Gestion de Projets Scolaires - Mobile',
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
    title: 'Gestion de Projets Scolaires - Web',
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
      endDate: new Date('2024-05-01'),
      status: 'completed'
    },
    {
      id: 5,
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
      id: 6,
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
    },
    {
      id: 10,
      title: 'MenuFragApp - Application Android',
      description: 'Application Android avec fragments et navigation',
      detailedDescription: 'Application Android développée pour démontrer l\'utilisation des fragments et de la navigation entre différentes sections. Lors du développement, j\'ai rencontré une erreur Git courante : tentative de commit sans ajout préalable des fichiers (git commit avant git add). Cette expérience m\'a appris l\'importance du workflow Git : d\'abord "git add ." pour ajouter les fichiers au staging area, puis "git commit -m "message"" pour valider les changements.',
      imageUrl: 'assets/projects/menufragapp.jpg',
      technologies: ['Android', 'Java', 'Fragments', 'Git', 'Android Studio'],
      githubUrl: 'https://github.com/Eya480/MenuFragApp-master',
      demoUrl: null,
      category: 'mobile',
      featured: false,
      startDate: new Date('2024-01-15'),
      endDate: new Date('2024-02-28'),
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