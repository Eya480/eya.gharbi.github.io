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
  imports: [CommonModule,RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  stats: Stat[] = [
    { icon: 'fas fa-project-diagram', value: '7+', label: 'Projets Réalisés' },
    { icon: 'fas fa-code', value: '10+', label: 'Technologies Dominées' },
    { icon: 'fas fa-graduation-cap', value: '2', label: 'Diplômes' },
    { icon: 'fas fa-certificate', value: '10+', label: 'Certifications' }
  ];

  experiences: Experience[] = [
    {
      id: 1,
      title: 'Stagiaire Développeur Full Stack',
      company: 'Centre National de l\'Informatique (CNI)',
      period: 'Jan 2025 - Fév 2025',
      description: 'Développement full-stack d\'une application de gestion des congés avec Angular et Spring Boot. Création d\'API RESTful, interface responsive et sécurisation avec JWT.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'JPA/Hibernate', 'JWT'],
      type: 'work'
    },
    {
      id: 2,
      title: 'Formatrice en gestion de projet',
      company: 'USAID, Ma3an - Programme YLN',
      period: 'Jul 2024 - Nov 2024',
      description: 'Encadrement de participants pour l\'élaboration de plans de projet concrets et animation de formations en gestion de projet.',
      technologies: ['Gestion de Projet', 'Formation', 'Animation'],
      type: 'work'
    },
    {
      id: 3,
      title: 'Stagiaire en Informatique',
      company: 'Société Tunisienne d\'Électricité et de Gaz',
      period: 'Jan 2024 - Fév 2024',
      description: 'Support technique : formatage, réinstallation de systèmes d\'exploitation et assistance aux utilisateurs.',
      technologies: ['Support Technique', 'Systèmes d\'Exploitation'],
      type: 'work'
    },
    {
      id: 4,
      title: 'Licence en Technologie de l\'Information',
      company: 'ISET Radès - Développement des Systèmes d\'Information',
      period: '2023 - En cours',
      description: 'Formation en développement des systèmes d\'information et technologies web.',
      technologies: ['Java', 'Web', 'Bases de données', 'Réseaux'],
      type: 'education'
    },
    {
      id: 5,
      title: 'Baccalauréat en Sciences Informatiques',
      company: 'Lycée secondaire Zaahrouni - Mention Bien',
      period: '2019 - 2023',
      description: 'Formation fondamentale en informatique et sciences.',
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