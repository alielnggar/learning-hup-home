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
        style({
          opacity: 0,
          transform: 'scale(0.96) translateY(8px)',
        }),
        animate(
          '400ms cubic-bezier(0.25, 1, 0.5, 1)',
          style({
            opacity: 1,
            transform: 'scale(1) translateY(0)',
          }),
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-out',
          style({
            opacity: 0,
            transform: 'translateY(-6px)',
          }),
        ),
      ]),
    ]),
    trigger('scaleSpring', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate(
          '500ms 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          style({ transform: 'scale(1)' }),
        ),
      ]),
    ]),
  ],
})
export class NewsletterComponent {
  email = signal('');
  error = signal<string | null>(null);
  status = signal<Status>('idle');
  submitted = signal(false);

  benefits = ['أحدث الأبحاث والمقالات', 'أعداد مجلة المنتجات الرقمية', 'مواعيد الندوات والفعاليات'];

  private readonly emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  private validateEmail(value: string): string | null {
    const email = value.trim();

    if (!email) {
      return 'البريد الإلكتروني أو رقم الجوال مطلوب';
    }

    if (email.length > 254) {
      return 'البريد الإلكتروني طويل جدًا.';
    }

    if (email.length > 64 && email.indexOf('@') > 64) {
      return 'الجزء السابق لعلامة @ طويل جدًا.';
    }

    if (!this.emailRegex.test(email)) {
      return 'البريد الإلكتروني أو رقم الهاتف غير صحيح.';
    }

    return null;
  }

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();

    if (this.status() === 'loading' || this.status() === 'success') {
      return;
    }

    this.submitted.set(true);

    const value = this.email().trim();
    const validationError = this.validateEmail(value);

    if (validationError) {
      this.error.set(validationError);
      return;
    }

    this.email.set(value);
    this.error.set(null);
    this.status.set('loading');

    try {
      // استبدل الجزء ده بطلب الاشتراك الحقيقي للـ API.
      await new Promise<void>((resolve) => setTimeout(resolve, 900));

      this.status.set('success');
    } catch {
      this.status.set('idle');
      this.error.set('حدث خطأ أثناء الاشتراك، حاول مرة أخرى.');
    }
  }

  onEmailChange(value: string): void {
    this.email.set(value);

    if (this.submitted()) {
      this.error.set(this.validateEmail(value));
    } else {
      this.error.set(null);
    }
  }
}
