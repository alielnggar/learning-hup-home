import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

type MenuKey = 'tools' | 'indicators';

export const navItems = [
  { label: 'الرئيسية', href: '/Home' },
  { label: 'البرامج', href: '/programs' },
  { label: 'الأبحاث والتقارير', href: '/ResearchPageComponent' },
  { label: 'الكتب', href: '/books' },
  { label: 'الأدوات', href: '/tools', menu: 'tools' as MenuKey },
  { label: 'المؤشرات', href: '/indicators', menu: 'indicators' as MenuKey },
  { label: 'المجلة', href: '/journal' },
];

export const menus: Record<string, any[]> = {
  tools: [
    {
      title: 'Frameworks',
      body: 'أُطر عمل تربط الاستراتيجية بالتنفيذ',
      icon: 'menu-tools-frameworks.svg',
      bg: '#efe4fb',
      href: '/tools/frameworks',
    },
    {
      title: 'Kits',
      body: 'حزم ملفات جاهزة للورش والمشاريع',
      icon: 'menu-tools-kits.svg',
      bg: '#dff0fa',
      href: '/tools/kits',
    },
    {
      title: 'Playbooks',
      body: 'أدلة عملية خطوة بخطوة: Discovery وRoadmap وغيرها…',
      icon: 'menu-tools-playbooks.svg',
      bg: '#e6eedf',
      href: '/tools/playbooks',
    },
  ],
  indicators: [
    {
      title: 'مؤشر فكرة',
      body: 'يقيس وضوح الفكرة وجدواها قبل بناء المنتج',
      icon: 'menu-ind-idea.svg',
      bg: '#f3e9fc',
      href: '/indicators/idea',
    },
    {
      title: 'مؤشر قيمة',
      body: 'يقيس القيمة التي يحقّقها المنتج لأعمالك',
      icon: 'menu-ind-value.svg',
      bg: '#efe4fb',
      href: '/indicators/value',
    },
    {
      title: 'مؤشر تجربة',
      body: 'يقيس تجربة المستخدم ورضا العملاء',
      icon: 'menu-ind-experience.svg',
      bg: '#deeef9',
      href: '/indicators/experience',
    },
    {
      title: 'مؤشر تسليم',
      body: 'يقيس انتظام التسليم وسرعته وجودة التنفيذ',
      icon: 'menu-ind-delivery.svg',
      bg: '#e6efdd',
      href: '/indicators/delivery',
    },
  ],
};

export const footerLabel: Record<string, string> = {
  tools: 'كلّ الأدوات ←',
  indicators: 'كلّ المؤشرات ←',
};

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  private router = inject(Router);

  navItems = navItems;
  menus = menus;
  footerLabel = footerLabel;

  openMenu = signal<MenuKey | null>(null);
  mobileOpen = signal(false);

  isActive(href: string): boolean {
    if (href === '/Home') return this.router.url === '/Home' || this.router.url === '/';
    return this.router.url.startsWith(href);
  }

  toggleMenu(menu: MenuKey) {
    this.openMenu.set(this.openMenu() === menu ? null : menu);
  }

  closeMenu() {
    this.openMenu.set(null);
  }
  
  toggleMobileMenu() {
    this.mobileOpen.update(v => !v);
  }
}