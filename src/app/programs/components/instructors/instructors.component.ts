import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instructors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instructors.html',
})
export class InstructorsComponent {
  instructors = signal([
    {
      name: 'معاذ المصري',
      title: 'مستشار استراتيجية المنتج',
      bio: 'قاد فرق منتجاتٍ رقمية في القطاع المالي، ويكتب عن ربط الاستراتيجية بالتنفيذ.',
      image: '/reasearchpage/Photo.png',
      tags: ['Enterprise UX', 'Discovery'],
    },
    {
      name: 'معاذ المصري',
      title: 'مستشار استراتيجية المنتج',
      bio: 'قاد فرق منتجاتٍ رقمية في القطاع المالي، ويكتب عن ربط الاستراتيجية بالتنفيذ.',
      image: '/reasearchpage/Photo.png',
      tags: ['Enterprise UX', 'Discovery'],
    },
    {
      name: 'معاذ المصري',
      title: 'مستشار استراتيجية المنتج',
      bio: 'قاد فرق منتجاتٍ رقمية في القطاع المالي، ويكتب عن ربط الاستراتيجية بالتنفيذ.',
      image: '/reasearchpage/Photo.png',
      tags: ['Enterprise UX', 'Discovery'],
    },
    {
      name: 'معاذ المصري',
      title: 'مستشار استراتيجية المنتج',
      bio: 'قاد فرق منتجاتٍ رقمية في القطاع المالي، ويكتب عن ربط الاستراتيجية بالتنفيذ.',
      image: '/reasearchpage/Photo.png',
      tags: ['Enterprise UX', 'Discovery'],
    },
  ]);
}
