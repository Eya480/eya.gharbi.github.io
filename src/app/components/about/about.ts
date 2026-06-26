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

  stats: Stat[] = [
    // ✅ 12 projets (11 existants + SolidMaint)
    { icon: 'fas fa-project-diagram', value: '12+', label: 'Projets Réalisés' },
    // ✅ Technologies réelles comptées dans skills
    { icon: 'fas fa-code', value: '20+', label: 'Technologies Maîtrisées' },
    // ✅ Diplôme obtenu — PFE terminé juin 2026
    { icon: 'fas fa-graduation-cap', value: '1', label: 'Diplôme Obtenu' },
    // ✅ Stages réels : CNI + STEG + SolidWall
    { icon: 'fas fa-briefcase', value: '3', label: 'Stages Professionnels' }
  ];

  experiences: Experience[] = [

    // ==================== WORK ====================

    {
      id: 1,
      title: 'Stagiaire Développeur Full Stack — PFE',
      company: 'SolidWall Consulting, Ben Arous',
      period: 'Fév 2026 - Mai 2026',
      description: 'Conception et réalisation en binôme de SolidMaint, une plateforme B2B intelligente de gestion des contrats de maintenance. Intégration d\'un module IA complet basé sur LLaMA 3.3 70B via Groq Cloud : classification automatique des demandes, analyse des blocages et génération d\'articles de base de connaissances. Pipeline de robustesse : anonymisation PII, cache MD5, retry avec backoff exponentiel, rate limiting et traçabilité complète. Authentification RBAC avec JWT et OAuth Google/GitHub, gestion SLA, messagerie temps réel WebSocket, notifications multicanaux et génération de rapports PDF.',
      technologies: [
        'Next.js', 'NestJS', 'TypeScript', 'PostgreSQL',
        'Redis', 'Docker', 'Prisma', 'LLaMA 3.3 70B',
        'Groq Cloud', 'WebSocket', 'Tailwind CSS', 'shadcn/ui',
        'Vitest', 'Playwright', 'Grafana k6', 'OWASP ZAP'
      ],
      type: 'work'
    },
    {
      id: 2,
      title: 'Stagiaire Développeur Full Stack',
      company: 'Centre National de l\'Informatique (CNI)',
      period: 'Jan 2025 - Fév 2025',
      description: 'Développement full-stack d\'une application de gestion des congés avec Angular et Spring Boot. Création d\'API RESTful, interface responsive et sécurisation avec JWT.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'JPA/Hibernate', 'JWT'],
      type: 'work'
    },
    {
      id: 3,
      title: 'Formatrice en Gestion de Projet',
      company: 'USAID, Ma3an — Programme YLN',
      period: 'Juil 2024 - Nov 2024',
      description: 'Encadrement de participants pour l\'élaboration de plans de projet concrets et animation de formations en gestion de projet.',
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

    // ==================== EDUCATION ====================

    {
      id: 5,
      title: 'Licence Nationale en Technologies de l\'Informatique',
      company: 'ISET Radès — Spécialité : Développement des Systèmes d\'Information',
      period: '2023 - 2026',
      // ✅ Diplômée juin 2026
      description: 'Formation complète en développement des systèmes d\'information, technologies web et mobiles. Projet de Fin d\'Études : SolidMaint — plateforme B2B de gestion de maintenance avec IA intégrée, réalisé chez SolidWall Consulting. Diplômée avec mention.',
      technologies: [
        'Java', 'Angular', 'Spring Boot', 'NestJS',
        'Next.js', 'Python', 'Bases de données', 'Réseaux',
        'UML', 'Agile Scrum'
      ],
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

  ngOnInit(): void {}

  getExperienceIcon(type: string): string {
    return type === 'work' ? 'fas fa-briefcase' : 'fas fa-graduation-cap';
  }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}