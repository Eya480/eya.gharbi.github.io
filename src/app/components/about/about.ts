import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: 'work' | 'education';
}

interface Stat {
  icon: string;
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {

  activeSection: 'bio' | 'work' | 'education' = 'bio';

  setSection(section: 'bio' | 'work' | 'education'): void {
    this.activeSection = section;
  }

  stats: Stat[] = [
    { icon: 'fas fa-project-diagram', value: '11+', label: 'Projets Réalisés' },
    { icon: 'fas fa-code', value: '20+', label: 'Technologies Maîtrisées' },
    { icon: 'fas fa-graduation-cap', value: '1', label: 'Diplôme Obtenu' },
    { icon: 'fas fa-briefcase', value: '3', label: 'Stages Professionnels' }
  ];

  experiences: Experience[] = [
    {
      id: 1,
      title: 'Stagiaire Développeur Full Stack — PFE',
      company: 'SolidWall Consulting, Ben Arous',
      period: 'Fév 2026 - Mai 2026',
      description: 'Conception et réalisation en binôme de SolidMaint, une plateforme B2B intelligente de gestion des contrats de maintenance. Module IA basé sur LLaMA 3.3 70B via Groq Cloud, authentification RBAC, messagerie WebSocket, génération de rapports PDF.',
      technologies: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Prisma', 'LLaMA 3.3 70B', 'Groq Cloud', 'WebSocket', 'Tailwind CSS', 'Vitest', 'Playwright'],
      type: 'work'
    },
    {
      id: 2,
      title: 'Stagiaire Développeur Full Stack',
      company: 'Centre National de l\'Informatique (CNI)',
      period: 'Jan 2025 - Fév 2025',
      description: 'Développement d\'une application de gestion des congés avec Angular et Spring Boot, API RESTful et sécurisation JWT.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'JPA/Hibernate', 'JWT'],
      type: 'work'
    },
    {
      id: 3,
      title: 'Formatrice en Gestion de Projet',
      company: 'USAID, Ma3an — Programme YLN',
      period: 'Juil 2024 - Nov 2024',
      description: 'Animation de formations en gestion de projet et encadrement de participants pour l\'élaboration de plans concrets.',
      technologies: ['Gestion de Projet', 'Formation', 'Animation'],
      type: 'work'
    },
    {
      id: 4,
      title: 'Stagiaire en Informatique',
      company: 'Société Tunisienne d\'Électricité et de Gaz (STEG)',
      period: 'Jan 2024 - Fév 2024',
      description: 'Support technique : formatage, réinstallation de systèmes d\'exploitation et assistance aux utilisateurs.',
      technologies: ['Support Technique', 'Windows', 'Systèmes d\'Exploitation'],
      type: 'work'
    },
    {
      id: 7,
      title: 'Cycle Ingénieur — Génie Logiciel & Intelligence Artificielle',
      company: 'ISAMM — Institut Supérieur des Arts Multimédias de la Manouba',
      period: 'Sept 2026 - En cours',
      description: 'Première année du cycle ingénieur, approfondissement en ingénierie logicielle, intelligence artificielle et systèmes distribués.',
      technologies: ['Intelligence Artificielle', 'Génie Logiciel', 'Architecture Logicielle', 'Systèmes Distribués', 'Machine Learning'],
      type: 'education'
    },
    {
      id: 5,
      title: 'Licence Nationale en Technologies de l\'Informatique',
      company: 'ISET Radès — Spécialité : Développement des Systèmes d\'Information',
      period: '2023 - 2026',
      description: 'Formation en développement des systèmes d\'information, web et mobile. PFE : SolidMaint — plateforme B2B avec IA intégrée chez SolidWall Consulting. Diplômée avec mention.',
      technologies: ['Java', 'Angular', 'Spring Boot', 'NestJS', 'Next.js', 'Python', 'Bases de données', 'UML', 'Agile Scrum'],
      type: 'education'
    },
    {
      id: 6,
      title: 'Baccalauréat en Sciences Informatiques — Mention Bien',
      company: 'Lycée Secondaire Zaahrouni',
      period: '2019 - 2023',
      description: 'Formation fondamentale en informatique, algorithmique et sciences exactes. Obtenu avec mention Bien.',
      technologies: ['Algorithmique', 'Programmation', 'Mathématiques'],
      type: 'education'
    }
  ];

  get workExperiences(): Experience[] {
    return this.experiences.filter(e => e.type === 'work');
  }

  get educationExperiences(): Experience[] {
    return this.experiences.filter(e => e.type === 'education');
  }

  ngOnInit(): void {}

  getExperienceIcon(type: string): string {
    return type === 'work' ? 'fas fa-briefcase' : 'fas fa-graduation-cap';
  }
}
