import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instructors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Instructors.html',
})
export class InstructorsComponent {
  instructors = signal([
    {
      name: 'معاذ المصري',
      title: 'مؤسّس DPC Consulting · مستشار استراتيجية المنتج',
      desc: 'قائد منتجاتٍ عملي يجمع بين الخلفية الأكاديمية والتطبيق الميداني. عمل مع منصّاتٍ حكومية وشركاتٍ تقنية رائدة في السعودية ومصر والمنطقة، وقاد فرق منتجاتٍ وتحوّلٍ رقمي من التخطيط إلى التسليم.',
      badges: ['DBA', 'MBA', 'PMP'],
      currentRole: 'حاليًا Head of Products @ SAR',
      stats: ['+15 سنة خبرة', '+1000 خرّيج'],
      image: 'https://placehold.co/208x252',
    },
   
    {
      name: 'معاذ المصري',
      title: 'مؤسّس DPC Consulting · مستشار استراتيجية المنتج',
      desc: 'قائد منتجاتٍ عملي يجمع بين الخلفية الأكاديمية والتطبيق الميداني. عمل مع منصّاتٍ حكومية وشركاتٍ تقنية رائدة في السعودية ومصر والمنطقة، وقاد فرق منتجاتٍ وتحوّلٍ رقمي من التخطيط إلى التسليم.',
      badges: ['PMP', 'MBA', 'DBA'],
      currentRole: 'حاليًا Head of Products @ SAR',
      stats: ['+15 سنة خبرة', '+1000 خرّيج'],
      image: 'https://placehold.co/208x252',
    },
    {
      name: 'معاذ المصري',
      title: 'مؤسّس DPC Consulting · مستشار استراتيجية المنتج',
      desc: 'قائد منتجاتٍ عملي يجمع بين الخلفية الأكاديمية والتطبيق الميداني. عمل مع منصّاتٍ حكومية وشركاتٍ تقنية رائدة في السعودية ومصر والمنطقة، وقاد فرق منتجاتٍ وتحوّلٍ رقمي من التخطيط إلى التسليم.',
      badges: ['PMP', 'MBA', 'DBA'],
      currentRole: 'حاليًا Head of Products @ SAR',
      stats: ['+15 سنة خبرة', '+1000 خرّيج'],
      image: 'https://placehold.co/208x252',
    },
  ]);
}
