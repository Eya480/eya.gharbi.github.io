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
  pagedProjects: Project[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';
  searchTerm: string = '';
  selectedProject: Project | null = null;

  // Pagination
  currentPage = 1;
  pageSize = 6;
  totalPages = 1;

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
        this.applyPagination();
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
    this.currentPage = 1;

    this.projects$
      .pipe(takeUntil(this.destroy$))
      .subscribe(projects => {
        let filtered = projects;

        if (category !== 'all') {
          filtered = filtered.filter(project => project.category === category);
        }

        if (this.searchTerm.trim()) {
          const term = this.searchTerm.toLowerCase();
          filtered = filtered.filter(project =>
            project.title.toLowerCase().includes(term) ||
            project.description.toLowerCase().includes(term) ||
            project.technologies.some(tech => tech.toLowerCase().includes(term))
          );
        }

        this.filteredProjects = filtered;
        this.applyPagination();
      });
  }

  private applyPagination(): void {
    this.totalPages = Math.ceil(this.filteredProjects.length / this.pageSize);
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedProjects = this.filteredProjects.slice(start, start + this.pageSize);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.applyPagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onSearchChange(): void {
    this.currentPage = 1;
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