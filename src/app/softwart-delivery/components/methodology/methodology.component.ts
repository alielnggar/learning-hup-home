import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './methodology.component.html',
})
export class MethodologyComponent {
  
  scatteredConcepts = signal([
    { name: 'Agile', top: '15%', right: '15%', rotate: '-rotate-6' },
    { name: 'scrum', top: '20%', right: '65%', rotate: 'rotate-15' },
    { name: 'RAID Log', top: '30%', right: '35%', rotate: '-rotate-3' },
    { name: 'Metrics', top: '65%', right: '25%', rotate: '-rotate-3' },
    { name: 'Kanban', top: '45%', right: '10%', rotate: 'rotate-6' },
    { name: 'Stakeholders', top: '50%', right: '60%', rotate: 'rotate-6' },
  ]);

  
  unifiedSteps = signal([
    { num: '01', title: 'التخطيط' },
    { num: '02', title: 'القيادة' },
    { num: '03', title: 'إدارة المخاطر' },
    { num: '04', title: 'الفرق وأصحاب المصلحة' },
    { num: '05', title: 'ربط الأعمال بالتنفيذ' },
  ]);
}
