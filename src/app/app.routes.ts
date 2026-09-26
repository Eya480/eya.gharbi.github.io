import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
// import { Testimonials } from './components/testimonials/testimonials';
import { Interests } from './components/interests/interests';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: Hero,
    data: { title: 'Accueil - Développeuse Full Stack', description: 'Portfolio professionnel d\'Eya GHARBI, développeuse full stack' }
  },
  {
    path: 'about',
    component: About,
    data: { title: 'À propos - Mon Parcours', description: 'Découvrez mon parcours, mes expériences et ma passion pour le développement' }
  },
  {
    path: 'skills',
    component: Skills,
    data: { title: 'Compétences Techniques', description: 'Mes compétences en développement full stack, bases de données et outils modernes' }
  },
  {
    path: 'projects',
    component: Projects,
    data: { title: 'Projets Réalisés', description: 'Découvrez mes projets de développement full stack et mes réalisations techniques' }
  },
  {
    path: 'interests',
    component: Interests,
    data: { title: 'Centres d\'Intérêt', description: 'Ce qui me passionne au-delà du code' }
  },
  // {
  //   path: 'testimonials',
  //   component: Testimonials,
  //   data: { title: 'Témoignages', description: 'Retours de collègues, binômes et encadrants' }
  // },
  {
    path: 'contact',
    component: Contact,
    data: { title: 'Contact - Travaillons Ensemble', description: 'Contactez-moi pour discuter de vos projets de développement' }
  },
  { path: '**', redirectTo: 'home' }
];
