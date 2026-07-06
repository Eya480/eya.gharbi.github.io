import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Project } from '../../models/project';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit, OnDestroy {
  projects$!: Observable<Project[]>;
  filteredProjects: Project[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';
  searchTerm: string = '';
  selectedProject: Project | null = null;

  private destroy$ = new Subject<void>();

  constructor(private portfolioService: Portfolio) {}

  ngOnInit(): void {
    this.loadProjects();
    this.loadCategories();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadProjects(): void {
    this.projects$ = this.portfolioService.getProjects();
    this.projects$
      .pipe(takeUntil(this.destroy$))
      .subscribe(projects => {
        this.filteredProjects = projects;
      });
  }

  private loadCategories(): void {
    this.portfolioService.getProjectCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  filterProjects(category: string = this.selectedCategory): void {
    this.selectedCategory = category;
    
    this.projects$
      .pipe(takeUntil(this.destroy$))
      .subscribe(projects => {
        let filtered = projects;

        // Filtre par catégorie
        if (category !== 'all') {
          filtered = filtered.filter(project => project.category === category);
        }

        // Filtre par recherche
        if (this.searchTerm.trim()) {
          const term = this.searchTerm.toLowerCase();
          filtered = filtered.filter(project =>
            project.title.toLowerCase().includes(term) ||
            project.description.toLowerCase().includes(term) ||
            project.technologies.some(tech => tech.toLowerCase().includes(term))
          );
        }

        this.filteredProjects = filtered;
      });
  }

  onSearchChange(): void {
    this.filterProjects();
  }

  openProjectModal(project: Project): void {
    this.selectedProject = project;
  }

  closeProjectModal(): void {
    this.selectedProject = null;
  }

  getStatusBadgeClass(status: string): string {
    const classes: { [key: string]: string } = {
      'completed': 'status-completed',
      'in-progress': 'status-in-progress',
      'planned': 'status-planned'
    };
    return classes[status] || 'status-default';
  }

  getStatusText(status: string): string {
    const texts: { [key: string]: string } = {
      'completed': 'Terminé',
      'in-progress': 'En cours',
      'planned': 'Planifié'
    };
    return texts[status] || status;
  }

  getFeaturedProjects(): Project[] {
    let featured: Project[] = [];
    this.projects$
      .pipe(takeUntil(this.destroy$))
      .subscribe(projects => {
        featured = projects.filter(project => project.featured);
      });
    return featured;
  }

  getProjectCountByCategory(category: string): number {
    let count = 0;
    this.projects$
      .pipe(takeUntil(this.destroy$))
      .subscribe(projects => {
        if (category === 'all') {
          count = projects.length;
        } else {
          count = projects.filter(project => project.category === category).length;
        }
      });
    return count;
  }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/iconP.jpg';
  }
}