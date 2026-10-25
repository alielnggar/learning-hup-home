import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

type Status = 'idle' | 'loading' | 'success';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.component.html',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.96) translateY(8px)' }),
        animate('400ms cubic-bezier(0.25, 1, 0.5, 1)', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(-6px)' }))
      ])
    ]),
    trigger('scaleSpring', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('500ms 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class NewsletterComponent {
  email = signal('');
  error = signal<string | null>(null);
  status = signal<Status>('idle');
  benefits = ["أحدث الأبحاث والمقالات", "أعداد مجلة المنتجات الرقمية", "مواعيد الندوات والفعاليات"];
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  async onSubmit(event: Event) {
    event.preventDefault();
    const value = this.email().trim();
    
    if (!value) {
      this.error.set("من فضلك اكتب بريدك الإلكتروني.");
      return;
    }
    if (!this.emailRegex.test(value)) {
      this.error.set("صيغة البريد الإلكتروني غير صحيحة، تأكّد منه وحاول مرة أخرى.");
      return;
    }
    
    this.error.set(null);
    this.status.set('loading');
    
    try {
      // Simulate API Call
      await new Promise(resolve => setTimeout(resolve, 900));
      this.status.set('success');
    } catch {
      this.status.set('idle');
      this.error.set("حدث خطأ أثناء الاشتراك، حاول مرة أخرى.");
    }
  }

  onEmailChange(value: string) {
    this.email.set(value);
    if (this.error()) this.error.set(null);
  }
}