import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  imports: [CommonModule, RouterLink],
  styleUrls: ['./hero.scss'],
})
export class Hero implements OnInit {
  title = 'Développeuse Full Stack';
  subtitle = 'Passionnée par les technologies modernes et innovantes';
  typedText = '';
  private phrases = [
    'Développeuse Full Stack passionnée par l\'innovation',
    'Diplômée ISET Radès — Licence en Systèmes d\'Information',
    'NestJS · Next.js · IA · Architecture logicielle',
    'Ouverte aux nouvelles opportunités professionnelles',
  ];
  private currentPhraseIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private typingSpeed = 100;
  private deletingSpeed = 50;
  private pauseTime = 2000;

  // Animation states
  imageLoaded = false;
  showContent = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startTypingAnimation();
    setTimeout(() => {
      this.showContent = true;
    }, 500);
  }

  private startTypingAnimation(): void {
    const type = () => {
      const currentPhrase = this.phrases[this.currentPhraseIndex];

      if (this.isDeleting) {
        this.typedText = currentPhrase.substring(0, this.currentCharIndex - 1);
        this.currentCharIndex--;
      } else {
        this.typedText = currentPhrase.substring(0, this.currentCharIndex + 1);
        this.currentCharIndex++;
      }

      let typeSpeed = this.typingSpeed;

      if (this.isDeleting) {
        typeSpeed = this.deletingSpeed;
      }

      if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
        typeSpeed = this.pauseTime;
        this.isDeleting = true;
      } else if (this.isDeleting && this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    };

    setTimeout(type, 1000);
  }

  onImageLoad(): void {
    this.imageLoaded = true;
  }

  scrollTo(section: string): void {
    // Les sections sont des routes séparées — on navigue vers la route
    this.router.navigate(['/' + section]).then(() => {
      // Scroll vers le haut après navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    // parallax désactivé — évite le déplacement de la section
  }
}
