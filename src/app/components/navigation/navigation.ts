import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation implements OnInit {
  isMenuOpen = false;
  isScrolled = false;
  currentSection = 'home';

  navItems = [
    { id: 'home', label: 'Accueil', icon: 'fas fa-home', path: '/home' },
    { id: 'about', label: 'À propos', icon: 'fas fa-user', path: '/about' },
    { id: 'skills', label: 'Compétences', icon: 'fas fa-code', path: '/skills' },
    { id: 'projects', label: 'Projets', icon: 'fas fa-briefcase', path: '/projects' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope', path: '/contact' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveSectionFromUrl();
        this.closeMenu();
      }
    });

    this.updateActiveSectionFromUrl();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
    
    // Mettre à jour la section active seulement sur la page d'accueil
    if (this.router.url === '/' || this.router.url === '/home') {
      this.updateActiveSection();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  navigateTo(item: any): void {
    if (item.path === '/home') {
      // Si c'est la page d'accueil, scroller vers la section
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => {
          this.scrollToSection(item.id);
        }, 100);
      });
    } else {
      // Pour les autres pages, naviguer normalement
      this.router.navigate([item.path]);
    }
    this.closeMenu();
  }

  private scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }

  private updateActiveSection(): void {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.currentSection = section;
          break;
        }
      }
    }
  }

  private updateActiveSectionFromUrl(): void {
    const url = this.router.url;
    
    if (url === '/' || url === '/home') {
      this.currentSection = 'home';
    } else if (url.includes('about')) {
      this.currentSection = 'about';
    } else if (url.includes('skills')) {
      this.currentSection = 'skills';
    } else if (url.includes('projects')) {
      this.currentSection = 'projects';
    } else if (url.includes('contact')) {
      this.currentSection = 'contact';
    }
  }

  isActive(section: string): boolean {
    return this.currentSection === section;
  }

  // Méthode pour le logo - retour à l'accueil avec scroll en haut
  goToHome(): void {
    this.router.navigate(['/home']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    this.closeMenu();
  }

  getScrollProgress(): number {
  if (typeof window === 'undefined') return 0;
  
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  
  return scrolled;
}
}