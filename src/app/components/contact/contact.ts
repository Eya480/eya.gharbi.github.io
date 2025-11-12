import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link?: string;
  description: string;
}
@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  contactInfo: ContactInfo[] = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'eyaelgharbi889@gmail.com',
      link: 'mailto:eyaelgharbi889@gmail.com',
      description: 'Envoyez-moi un email à tout moment'
    },
    {
      icon: 'fas fa-phone',
      title: 'Téléphone',
      value: '00 26 087 318',
      link: 'tel:00 26 087 31',
      description: 'Appelez-moi du lundi au vendredi'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Localisation',
      value: 'Tunisie, Tunis 2',
      description: 'Disponible pour des missions en Île-de-France'
    },
    {
      icon: 'fas fa-clock',
      title: 'Disponibilité',
      value: 'Temps plein',
      description: 'Ouvert à de nouvelles opportunités'
    }
  ];

  socialLinks = [
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
      icon: 'fab fa-discord',
      url: 'https://discord.com/users/fiery_puppy_42062',
      label: 'Discord',
      color: '#5865f2'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitError = false;
      
      // Simulation d'envoi d'email
      console.log('Formulaire soumis:', this.contactForm.value);
      
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();
        
        // Cacher le message de succès après 5 secondes
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      }, 2000);
    } else {
      this.markFormGroupTouched();
      this.submitError = true;
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.markAsTouched();
    });
  }

  getFieldError(field: string): string {
    const control = this.contactForm.get(field);
    if (control?.errors && control.touched) {
      if (control.errors['required']) return 'Ce champ est requis';
      if (control.errors['email']) return 'Format d\'email invalide';
      if (control.errors['minlength']) {
        const requiredLength = control.errors['minlength'].requiredLength;
        return `Minimum ${requiredLength} caractères`;
      }
      if (control.errors['maxlength']) {
        const requiredLength = control.errors['maxlength'].requiredLength;
        return `Maximum ${requiredLength} caractères`;
      }
    }
    return '';
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && control.touched);
  }

  // Méthode pour télécharger le CV
  downloadCV(): void {
    // Simuler le téléchargement du CV
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf';
    link.download = 'cv.pdf';
    link.click();
  }

  // Méthode pour planifier un appel
  scheduleCall(): void {
    window.open('https://calendly.com/eyaelgharbi889/30min', '_blank');
  }
}