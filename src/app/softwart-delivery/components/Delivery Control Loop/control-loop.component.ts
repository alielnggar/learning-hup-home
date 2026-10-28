import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control-loop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-loop.component.html'
})
export class ControlLoopComponent {
  steps = signal([
    { num: '01', eng: 'ALIGN', ar: 'الاصطفاف', desc: 'اربط الـBusiness Need بالقيمة وبأصحاب المصلحة.' },
    { num: '02', eng: 'LEAD', ar: 'القيادة', desc: 'قُد الأشخاص دون أن تصبح أنت عنق الزجاجة.' },
    { num: '03', eng: 'PLAN', ar: 'التخطيط', desc: 'خطّط للـScope والوقت والمخاطر والـDependencies بصورةٍ أكثر واقعية.' },
    { num: '04', eng: 'ENGINEER', ar: 'التنفيذ التقني', desc: 'افهم التنفيذ بما يكفي لقيادة الحوار واتخاذ قراراتٍ أفضل.' },
    { num: '05', eng: 'FLOW', ar: 'التدفّق', desc: 'اختر واستخدم Scrum أو Kanban أو Hybrid وفقًا للسياق.' },
    { num: '06', eng: 'GOVERN', ar: 'الحوكمة', desc: 'وضِّح المسؤوليات والقرارات والتصعيد والتنسيق.' },
    { num: '07', eng: 'MEASURE', ar: 'القياس', desc: 'اعرف هل الـDelivery صحيحةٌ فعلًا، أم أنّ الجميع مشغولٌ فقط.' },
    { num: '08', eng: 'IMPROVE', ar: 'التحسين', desc: 'حوّل كلّ Delivery Cycle إلى نظامٍ أفضل في الدورة التالية.' }
  ]);
}