import { Component, HostListener, signal } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-floating-cta',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './floating-cta.component.html',
  animations: [
    trigger('slideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(48px) scale(0.96)' }),
        animate('400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(32px) scale(0.98)' }))
      ])
    ])
  ]
})
export class FloatingCtaComponent {
  isVisible = signal(false);
  isDismissed = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const end = document.documentElement.scrollHeight - window.innerHeight;
    
    
    if (scrollY > 640 && scrollY < end - 900) {
      this.isVisible.set(true);
    } else {
      this.isVisible.set(false);
    }
  }

  dismiss() {
    this.isDismissed.set(true);
  }
}