// programs-list.component.ts
import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-programs-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programs-list.html',
})
export class ProgramsListComponent {
  @Input() set searchParams(params: { query: string; level: string } | null) {
    if (params) {
      this.searchQuery.set(params.query);
      if (params.level !== this.selectedLevel()) {
        this.selectedLevel.set(params.level);
      }
    }
  }

  searchQuery = signal('');
  selectedLevel = signal('all');
  selectedDomain = signal('all');

  domains = [
    { value: 'all', label: 'كلّ المجالات' },
    { value: 'pm', label: 'إدارة المنتجات' },
    { value: 'ba', label: 'تحليل الأعمال' },
    { value: 'agile', label: 'Delivery & Agile' },
    { value: 'dt', label: 'التحوّل الرقمي' },
    { value: 'cert', label: 'الشهادات المهنية' },
  ];

  programs = [
    {
      title: 'Advanced Product Management',
      domain: 'pm',
      tag: 'إدارة المنتجات',
      tone: 'bg-violet-100 text-purple-600',
      cover: 'cover-advanced.png',
      desc: 'برنامجٌ متقدّم لقادة المنتج: من صياغة الاستراتيجية إلى Roadmap مرتبط بالنتائج.',
      level: 'متقدّم',
      units: '5 وحدات',
      hours: '15 ساعة',
    },
    {
      title: 'Business Analysis Masterclass',
      domain: 'ba',
      tag: 'تحليل الأعمال',
      tone: 'bg-sage-100 text-sage-800',
      cover: 'cover-ba.png',
      desc: 'برنامجٌ متقدّم لقادة المنتج: من صياغة الاستراتيجية إلى Roadmap مرتبط بالنتائج.',
      level: 'متقدّم',
      units: '5 وحدات',
      hours: '15 ساعة',
    },
    {
      title: 'Boost Your Tech Productivity',
      domain: 'agile',
      tag: 'Delivery & Agile',
      tone: 'bg-sky-100 text-sky-800',
      cover: 'cover-boost.png',
      desc: 'برنامجٌ متقدّم لقادة المنتج: من صياغة الاستراتيجية إلى Roadmap مرتبط بالنتائج.',
      level: 'متقدّم',
      units: '5 وحدات',
      hours: '15 ساعة',
    },
     {
      title: 'Boost Your Tech Productivity',
      domain: 'agile',
      tag: 'Delivery & Agile',
      tone: 'bg-sky-100 text-sky-800',
      cover: 'cover-boost.png',
      desc: 'برنامجٌ متقدّم لقادة المنتج: من صياغة الاستراتيجية إلى Roadmap مرتبط بالنتائج.',
      level: 'متقدّم',
      units: '5 وحدات',
      hours: '15 ساعة',
    },
     {
      title: 'Boost Your Tech Productivity',
      domain: 'agile',
      tag: 'Delivery & Agile',
      tone: 'bg-sky-100 text-sky-800',
      cover: 'cover-boost.png',
      desc: 'برنامجٌ متقدّم لقادة المنتج: من صياغة الاستراتيجية إلى Roadmap مرتبط بالنتائج.',
      level: 'متقدّم',
      units: '5 وحدات',
      hours: '15 ساعة',
    },
     {
      title: 'Boost Your Tech Productivity',
      domain: 'agile',
      tag: 'Delivery & Agile',
      tone: 'bg-sky-100 text-sky-800',
      cover: 'cover-boost.png',
      desc: 'برنامجٌ متقدّم لقادة المنتج: من صياغة الاستراتيجية إلى Roadmap مرتبط بالنتائج.',
      level: 'متقدّم',
      units: '5 وحدات',
      hours: '15 ساعة',
    },
     {
      title: 'Boost Your Tech Productivity',
      domain: 'agile',
      tag: 'Delivery & Agile',
      tone: 'bg-sky-100 text-sky-800',
      cover: 'cover-boost.png',
      desc: 'برنامجٌ متقدّم لقادة المنتج: من صياغة الاستراتيجية إلى Roadmap مرتبط بالنتائج.',
      level: 'متقدّم',
      units: '5 وحدات',
      hours: '15 ساعة',
    },
     {
      title: 'Boost Your Tech Productivity',
      domain: 'agile',
      tag: 'Delivery & Agile',
      tone: 'bg-sky-100 text-sky-800',
      cover: 'cover-boost.png',
      desc: 'برنامجٌ متقدّم لقادة المنتج: من صياغة الاستراتيجية إلى Roadmap مرتبط بالنتائج.',
      level: 'متقدّم',
      units: '5 وحدات',
      hours: '15 ساعة',
    },
     {
      title: 'Boost Your Tech Productivity',
      domain: 'agile',
      tag: 'Delivery & Agile',
      tone: 'bg-sky-100 text-sky-800',
      cover: 'cover-boost.png',
      desc: 'برنامجٌ متقدّم لقادة المنتج: من صياغة الاستراتيجية إلى Roadmap مرتبط بالنتائج.',
      level: 'متقدّم',
      units: '5 وحدات',
      hours: '15 ساعة',
    },
  ];

  visiblePrograms = computed(() => {
    const q = this.searchQuery().trim().toLowerCase();
    const d = this.selectedDomain();
    const l = this.selectedLevel();

    return this.programs.filter(
      (p) =>
        (d === 'all' || p.domain === d) &&
        (l === 'all' || p.level === l) &&
        (!q || `${p.title} ${p.tag} ${p.desc}`.toLowerCase().includes(q)),
    );
  });
}
