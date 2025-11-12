import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';
import { Portfolio } from '../../services/portfolio';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit {
  skills$!: Observable<Skill[]>;
  categories = ['frontend', 'backend', 'database', 'mobile', 'tools'];
  softSkills = [
    { 
      name: 'Gestion de Projet', 
      icon: 'fas fa-tasks', 
      description: 'Planification et suivi de projets' 
    },
    { 
      name: 'Formation', 
      icon: 'fas fa-chalkboard-teacher', 
      description: 'Animation et encadrement' 
    },
    { 
      name: 'Communication', 
      icon: 'fas fa-comments', 
      description: 'Échange efficace en équipe' 
    },
    { 
      name: 'Résolution de problèmes', 
      icon: 'fas fa-puzzle-piece', 
      description: 'Analyse et solutions innovantes' 
    }
  ];

  constructor(private portfolioService: Portfolio) {}

  ngOnInit(): void {
    this.skills$ = this.portfolioService.getSkills();
  }

  getSkillsByCategory(skills: Skill[] | null, category: string): Skill[] {
    if (!skills) return [];
    return skills.filter(skill => skill.category === category);
  }

  getCategoryTitle(category: string): string {
    const titles: { [key: string]: string } = {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Bases de données',
      mobile: 'Mobile',
      tools: 'Outils & Méthodologies'
    };
    return titles[category] || category;
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      frontend: 'fas fa-code',
      backend: 'fas fa-server',
      database: 'fas fa-database',
      mobile: 'fas fa-mobile-alt',
      tools: 'fas fa-tools'
    };
    return icons[category] || 'fas fa-star';
  }

  getProgressBarClass(category: string): string {
    const classes: { [key: string]: string } = {
      frontend: 'progress-bar-frontend',
      backend: 'progress-bar-backend',
      database: 'progress-bar-database',
      mobile: 'progress-bar-mobile',
      tools: 'progress-bar-tools'
    };
    return classes[category] || 'progress-bar-primary';
  }
}