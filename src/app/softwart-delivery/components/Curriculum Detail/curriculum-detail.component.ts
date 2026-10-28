import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Module {
  id: string;
  title: string;
  count: string;
  lessons: string[];
}

@Component({
  selector: 'app-curriculum-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculum-detail.component.html'
})
export class CurriculumDetailComponent {
  
  openModuleId = signal<string | null>('01');

  curriculum = signal<Module[]>([
    {
      id: '01',
      title: 'قيادة المنتج في المؤسسة',
      count: '3 دروس',
      lessons: [
        'دور قائد المنتج',
        'العلاقة مع الإدارة العليا',
        'Assignment: خريطة أصحاب المصلحة'
      ]
    },
    {
      id: '02',
      title: 'الاستراتيجية والرؤية',
      count: '3 دروس',
      lessons: ['درس تجريبي 1', 'درس تجريبي 2', 'درس تجريبي 3']
    },
    {
      id: '03',
      title: 'نموذج تشغيل المنتج',
      count: '3 دروس',
      lessons: ['درس تجريبي 1', 'درس تجريبي 2', 'درس تجريبي 3']
    },
    {
      id: '04',
      title: 'Discovery على مستوى المحفظة',
      count: '3 دروس',
      lessons: ['درس تجريبي 1', 'درس تجريبي 2', 'درس تجريبي 3']
    },
    {
      id: '05',
      title: 'القياس وتحقيق القيمة',
      count: '3 دروس',
      lessons: ['درس تجريبي 1', 'درس تجريبي 2', 'درس تجريبي 3']
    }
  ]);

  toggleModule(id: string) {
    this.openModuleId.update(current => (current === id ? null : id));
  }

  buyNow() {
    console.log('Redirecting to checkout from Curriculum Detail...');
  }
}