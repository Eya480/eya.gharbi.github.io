import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Interest {
  icon: string;
  title: string;
  description: string;
  anecdote: string;
  color: string;
}

@Component({
  selector: 'app-interests',
  imports: [CommonModule],
  templateUrl: './interests.html',
  styleUrl: './interests.scss',
})
export class Interests {
  interests: Interest[] = [
    {
      icon: 'fas fa-brain',
      title: 'Intelligence Artificielle',
      description: 'Passionnée par les LLMs, le prompt engineering et l\'IA appliquée au développement logiciel.',
      anecdote: 'Module IA intégré dans SolidMaint avec LLaMA 3.3 70B — classification automatique des demandes avec score de confiance via Groq Cloud.',
      color: '#8b5cf6'
    },
    {
      icon: 'fas fa-code',
      title: 'Développement Logiciel',
      description: 'J\'aime concevoir des architectures propres, explorer de nouveaux frameworks et relever des défis techniques.',
      anecdote: '11 projets livrés en 3 ans, du desktop Java au B2B cloud-native avec NestJS et Next.js.',
      color: '#3b82f6'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Développement Mobile',
      description: 'Création d\'expériences mobiles fluides et intuitives avec React Native et Expo.',
      anecdote: 'Ordonna — application de gestion d\'ordonnances connectant patients et pharmacies, avec géolocalisation et suivi en temps réel.',
      color: '#14b8a6'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Sécurité Applicative',
      description: 'Intérêt pour les bonnes pratiques OWASP et la conception d\'API robustes et sécurisées.',
      anecdote: 'Tests de sécurité OWASP ZAP intégrés dans le pipeline CI de SolidMaint aux côtés de Playwright et Grafana k6.',
      color: '#f59e0b'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Apprentissage Continu',
      description: 'Toujours en train d\'apprendre — documentation officielle, projets personnels, nouvelles technologies.',
      anecdote: 'NestJS, Next.js, Docker et Prisma appris en autonomie lors du stage PFE chez SolidWall Consulting en quelques semaines.',
      color: '#10b981'
    },
    {
      icon: 'fas fa-users',
      title: 'Travail en Équipe',
      description: 'Expérience en méthodologie Agile Scrum, travail en binôme et encadrement de formations.',
      anecdote: 'Formatrice en gestion de projet pour le programme USAID/Ma3an YLN — encadrement de participants sur 4 mois.',
      color: '#ec4899'
    }
  ];
}
