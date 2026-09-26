import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  relation: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  activeIndex = 0;

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ma binôme PFE',
      role: 'Étudiante Ingénieur',
      company: 'ISAMM',
      avatar: 'fas fa-user-graduate',
      relation: 'Binôme — Projet SolidMaint',
      text: 'Travailler avec Eya sur SolidMaint a été une expérience très enrichissante. Elle s\'implique à 100%, propose des solutions techniques pertinentes et garde toujours le cap sur les délais. Son intégration du module IA était particulièrement impressionnante.'
    },
    {
      id: 2,
      name: 'Encadrant SolidWall Consulting',
      role: 'Responsable Technique',
      company: 'SolidWall Consulting',
      avatar: 'fas fa-user-tie',
      relation: 'Encadrant — Stage PFE',
      text: 'Eya a fait preuve d\'une grande autonomie et d\'une réelle capacité à apprendre rapidement. Elle a su maîtriser NestJS, Next.js et l\'intégration IA en un temps remarquable. Un profil sérieux et prometteur.'
    },
    {
      id: 3,
      name: 'Collègue ISET Radès',
      role: 'Développeur Full Stack',
      company: 'ISET Radès',
      avatar: 'fas fa-user',
      relation: 'Collègue de promotion',
      text: 'Eya est quelqu\'un sur qui on peut compter. Curieuse, rigoureuse et toujours prête à partager ses connaissances. Nos projets en commun étaient toujours bien structurés grâce à son sens de l\'organisation.'
    }
  ];

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  goTo(index: number): void {
    this.activeIndex = index;
  }
}
