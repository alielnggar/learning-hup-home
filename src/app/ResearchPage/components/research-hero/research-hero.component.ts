import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-research-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research-hero.html',
})
export class ResearchHeroComponent {
  searchQuery = signal('');

  stackCards = signal([
    {
      kind: 'دراسة حالة',
      title: 'تحليل الأعمال وإعادة العمل',
      cover: 'from-sage-100 to-sage-200',
      shade: 'bg-navy/10',
      pos: 'left-[30px] top-[45px] -rotate-12',
      author: 'فريق DPC', 
      year: '2025', 
    },
    {
      kind: 'ورقة بحثية تطبيقية',
      title: 'كيف نقيس قيمة التحوّل الرقمي داخل المؤسسات؟',
      cover: 'from-sky-100 to-sky-200',
      shade: 'bg-navy/5',
      pos: 'left-[120px] top-[24px] -rotate-8',
      author: 'فريق DPC للبحث والابتكار', 
      year: '2026', 
    },
  ]);

  @Output() search = new EventEmitter<string>();
  @Output() openPaywall = new EventEmitter<{ kind: string; title: string }>();

  updateQuery(event: Event) {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.search.emit(this.searchQuery());
  }
}
