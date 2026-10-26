import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { LogoComponent } from '../shared/ui/logo.component';
import { navItems, menus, footerLabel } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, LogoComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  scrolled = signal(false);
  mobileOpen = signal(false);

  openMobileMenu = signal<string | null>(null);

  navItems = navItems;
  menus = menus;
  footerLabel = footerLabel;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 24);
  }

  toggleMobileMenu() {
    this.mobileOpen.update((v) => !v);
  }

  toggleMobileSubmenu(menu: string) {
    this.openMobileMenu.update((current) => (current === menu ? null : menu));
  }
}
