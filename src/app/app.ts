import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Navigation } from './components/navigation/navigation';
import { Footer } from './components/footer/footer';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,Navigation, Footer],
  template: `
    <app-navigation></app-navigation>
    <main role="main">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('mon-portfolio');
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateMetaTags();
        window.scrollTo(0, 0);
      });
  }

  private updateMetaTags(): void {
    const currentRoute = this.router.routerState.snapshot.root;
    let title = this.title;
    let description = 'Portfolio professionnel';

    // Parcourir les routes enfants pour trouver les données
    let child = currentRoute.firstChild;
    while (child) {
      if (child.data) {
        title = child.data['title'] || title;
        description = child.data['description'] || description;
      }
      child = child.firstChild;
    }

    
    // Mettre à jour la meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }
}