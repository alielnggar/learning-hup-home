import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './problem.html',
})
export class ProblemComponent {
  problems = signal([
    'تعمل كـProject Manager بدلًا من Product Manager',
    'تكتب Requirements بدلًا من قيادة Product Decisions',
    'تحضر Meetings كثيرة بدون قرارٍ واضح',
    'تبني Features بدون Strategy',
    'تواجه صعوبةً في الـPrioritization مع الـStakeholders',
    'لا تعرف كيف تختار Metrics صحيحة',
    'ولا تعرف إلى أين يتّجه مسارك المهني في Product',
  ]);

  scatteredConcepts = signal([
    { name: 'Agile', top: '15%', right: '15%', delay: '0' },
    { name: 'Requirements', top: '20%', right: '65%', delay: '100' },
    { name: 'UX', top: '45%', right: '10%', delay: '200' },
    { name: 'Delivery', top: '75%', right: '25%', delay: '300' },
    { name: 'Stakeholders', top: '55%', right: '70%', delay: '400' },
    { name: 'Metrics', top: '80%', right: '60%', delay: '500' },
  ]);
}
