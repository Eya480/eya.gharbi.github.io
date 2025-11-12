import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface SocialLink {
  icon: string;
  url: string;
  label: string;
  color: string;
}

interface QuickLink {
  label: string;
  fragment: string;
  icon: string;
}
@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();
  
  socialLinks: SocialLink[] = [
    { 
      icon: 'fab fa-github', 
      url: 'https://github.com/Eya480', 
      label: 'GitHub',
      color: '#333'
    },
    { 
      icon: 'fab fa-linkedin', 
      url: 'https://www.linkedin.com/in/eyaelgharbi/', 
      label: 'LinkedIn',
      color: '#0077b5'
    },
    { 
      icon: 'fab fa-facebook', 
      url: 'https://www.facebook.com/eya.gharbi.237458/', 
      label: 'Facebook',
      color: '#1da1f2'
    },
    { 
      icon: 'fas fa-envelope', 
      url: 'mailto:eyaelgharbi889@gmail.com', 
      label: 'Email',
      color: '#ea4335'
    }
  ];

  quickLinks: QuickLink[] = [
    { label: 'Accueil', fragment: 'home', icon: 'fas fa-home' },
    { label: 'À propos', fragment: 'about', icon: 'fas fa-user' },
    { label: 'Compétences', fragment: 'skills', icon: 'fas fa-code' },
    { label: 'Projets', fragment: 'projects', icon: 'fas fa-briefcase' },
    { label: 'Contact', fragment: 'contact', icon: 'fas fa-envelope' }
  ];

  contactInfo = {
    email: 'eyaelgharbi889@gmail.com',
    phone: '00 216 26 087 318',
    location: 'Tunis, Tunis 2'
  };

  scrollTo(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}