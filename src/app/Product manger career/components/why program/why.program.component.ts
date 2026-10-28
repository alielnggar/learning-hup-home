import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-program',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why.program.html',
})
export class WhyProgramComponent {
  features = signal(['ليس محتوًى أجنبيًا مترجمًا', 'ليس مجرّد مصطلحات', 'ليس شرحًا نظريًا']);

  diplomaTraits = signal([
    { text: 'عربية عملية', color: 'bg-purple-600' },
    { text: 'خبرة أكاديمية وتطبيقية', color: 'bg-violet' },
    { text: 'مشاريع عربية', color: 'bg-sky' },
  ]);

  steps = signal([
    { num: '09', title: 'Growth', color: 'text-neutral-text', borderColor: 'outline-neutral-text' },
    { num: '08', title: 'Launch', color: 'text-neutral-text', borderColor: 'outline-neutral-text' },
    { num: '07', title: 'Analytics', color: 'text-sky-ink', borderColor: 'outline-sky-ink' },
    { num: '06', title: 'Delivery', color: 'text-sky-ink', borderColor: 'outline-sky-ink' },
    { num: '05', title: 'MVP', color: 'text-violet', borderColor: 'outline-violet' },
    { num: '04', title: 'Requirements', color: 'text-violet', borderColor: 'outline-violet' },
    { num: '03', title: 'Discovery', color: 'text-violet', borderColor: 'outline-violet' },
    {
      num: '02',
      title: 'الاستراتيجية',
      color: 'text-purple-600',
      borderColor: 'outline-purple-600',
    },
    { num: '01', title: 'الفكرة', color: 'text-purple-600', borderColor: 'outline-purple-600' },
  ]);
}
