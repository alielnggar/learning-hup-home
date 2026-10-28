import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navItems = [
    { label: 'المنهج', id: 'curriculum-section' },
    { label: 'المحاضر', id: 'lecturer-section' },
    { label: 'الآراء', id: 'reviews-section' },
    { label: 'الباقة', id: 'offer-section' },
    { label: 'الأسئلة', id: 'quesions-section' },
  ];

  scrollTo(elementId: string) {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
