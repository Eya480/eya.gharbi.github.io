import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface SocialLink {
  icon: string;
  url: string;
  label: string;
  color: string;
}

interface QuickLink {
  label: string;
  path: string;
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
    { icon: 'fab fa-github',   url: 'https://github.com/Eya480',                       label: 'GitHub',   color: '#333'     },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/eyaelgharbi/',        label: 'LinkedIn', color: '#0077b5'  },
    { icon: 'fab fa-facebook', url: 'https://www.facebook.com/eya.gharbi.237458/',     label: 'Facebook', color: '#1877f2'  },
    { icon: 'fas fa-envelope', url: 'mailto:eya.elgharbi.pro@gmail.com',               label: 'Email',    color: '#ea4335'  }
  ];

  quickLinks: QuickLink[] = [
    { label: 'Accueil',      path: '/home',         icon: 'fas fa-home'          },
    { label: 'À propos',     path: '/about',        icon: 'fas fa-user'          },
    { label: 'Compétences',  path: '/skills',       icon: 'fas fa-code'          },
    { label: 'Projets',      path: '/projects',     icon: 'fas fa-briefcase'     },
    { label: 'Intérêts',     path: '/interests',    icon: 'fas fa-heart'         },
    { label: 'Contact',      path: '/contact',      icon: 'fas fa-envelope'      }
  ];

  contactInfo = {
    email: 'eya.elgharbi.pro@gmail.com',
    phone: '+216 26 087 318',
    location: 'Tunis, Tunisie'
  };

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
