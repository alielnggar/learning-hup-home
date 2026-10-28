import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Module {
  id: string;
  title: string;
  count: string;
  lessons: string[];
}

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculum.html'
})
export class CurriculumComponent {
  
  openModuleId = signal<string | null>('01');

  
  curriculum = signal<Module[]>([
    {
      id: '01',
      title: 'Product Mindset & Agile Foundations',
      count: '4 محاور',
      lessons: [
        'Agile كطريقة تفكير، لا كمجموعة Frameworks',
        'الفرق بين Being Agile وDoing Agile',
        'البيئات الديناميكية VUCA',
        'الفرق بين Waterfall وAgile'
      ]
    },
    {
      id: '02',
      title: 'Business, Tech & Market Language',
      count: '4 محاور',
      lessons: ['محور مؤقت 1', 'محور مؤقت 2', 'محور مؤقت 3', 'محور مؤقت 4']
    },
    {
      id: '03',
      title: 'Product Role Clarity',
      count: '3 محاور',
      lessons: ['محور مؤقت 1', 'محور مؤقت 2', 'محور مؤقت 3']
    },
    {
      id: '04',
      title: 'Product Strategy',
      count: '4 محاور',
      lessons: ['محور مؤقت 1', 'محور مؤقت 2', 'محور مؤقت 3', 'محور مؤقت 4']
    },
    {
      id: '05',
      title: 'Customer Discovery',
      count: '4 محاور',
      lessons: ['محور مؤقت 1', 'محور مؤقت 2', 'محور مؤقت 3', 'محور مؤقت 4']
    },
    {
      id: '06',
      title: 'Prioritization & Stakeholder Alignment',
      count: '3 محاور',
      lessons: ['محور مؤقت 1', 'محور مؤقت 2', 'محور مؤقت 3']
    },
    {
      id: '07',
      title: 'MVP & Solution Design',
      count: '4 محاور',
      lessons: ['محور مؤقت 1', 'محور مؤقت 2', 'محور مؤقت 3', 'محور مؤقت 4']
    },
    {
      id: '08',
      title: 'Product Delivery',
      count: '4 محاور',
      lessons: ['محور مؤقت 1', 'محور مؤقت 2', 'محور مؤقت 3', 'محور مؤقت 4']
    },
    {
      id: '09',
      title: 'Product Analytics & Launch',
      count: '4 محاور',
      lessons: ['محور مؤقت 1', 'محور مؤقت 2', 'محور مؤقت 3', 'محور مؤقت 4']
    },
    {
      id: '10',
      title: 'Practical Product Workshop',
      count: '3 محاور',
      lessons: ['محور مؤقت 1', 'محور مؤقت 2', 'محور مؤقت 3']
    }
  ]);

  
  toggleModule(id: string) {
    this.openModuleId.update(current => (current === id ? null : id));
  }
}