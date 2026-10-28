import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LogoComponent } from '../../ui/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, LogoComponent],
  templateUrl: './header.component.share.html',
})
export class HeaderComponent {
  scrolled = signal(false);
  mobileOpen = signal(false);

  navItems = [
    { label: 'المنهج', id: 'curriculum-section' },
    { label: 'المحاضر', id: 'lecturer-section' },
    { label: 'الآراء', id: 'reviews-section' },
    { label: 'الباقة', id: 'offer-section' },
    { label: 'الأسئلة', id: 'faq-section' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 24);
  }

  toggleMobileMenu() {
    this.mobileOpen.update((v) => !v);
  }

  scrollTo(elementId: string) {
    this.mobileOpen.set(false); // إغلاق قائمة الموبايل بعد النقر
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
