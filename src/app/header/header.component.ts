import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { LogoComponent } from '../shared/ui/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, LogoComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  scrolled = signal(false);
  mobileOpen = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 24);
  }

  toggleMobileMenu() {
    this.mobileOpen.update(v => !v);
  }
}