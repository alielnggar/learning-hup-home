import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lab.html',
})
export class LabComponent {
  stages = ['السؤال', 'جمع البيانات', 'التحليل', 'النشر'];
  lab = [
    {
      domain: 'التحوّل الرقمي',
      domainCls: 'bg-[#e4e2f6] text-purple-600', 
      status: 'صياغة السؤال',
      statusCls: 'bg-[#EFE4FB] text-[#7A45B8]',
      title: 'تكلفة القرارات المتأخّرة في مشاريع التحوّل',
      body: 'كم تكلّف القرارات التي تتأخّر أسابيع؟ نبني طريقةً لتقديرها قبل أن تتراكم.',
      stage: 0,
      cta: 'اقترح زاويةً للبحث ←',
      image: '/reasearchpage/calc.jpg' 
    },
    {
      domain: 'إدارة المنتجات',
      domainCls: 'bg-[#f0e6ff] text-[#6b21a8]',
      status: 'قيد التحليل',
      statusCls: 'bg-[#efebfb] text-purple-600',
      title: 'مؤشّر نضج فرق المنتجات في المنطقة',
      body: 'نموذجٌ لقياس نضج فرق المنتجات عبر الاستراتيجية والاكتشاف والتسليم والقياس.',
      stage: 2,
      cta: 'تابع المشروع ←',
      image: '/reasearchpage/art.jpg' 
    },
    {
      domain: 'تحليل الأعمال',
      domainCls: 'bg-[#e0f2fe] text-[#0284c7]', 
      status: 'نستقبل المشاركات',
      statusCls: 'bg-[#DFF0FA] text-[#2F6F96]',
      title: 'الذكاء الاصطناعي في تحليل المتطلبات: أين يساعد وأين يضلّل؟',
      body: 'نجمع تجارب فرقٍ استخدمت أدوات الذكاء الاصطناعي في كتابة المتطلبات ومراجعتها.',
      stage: 1,
      cta: 'شارك في الاستبيان ←',
      image: '/reasearchpage/ai.png' 
    },
  ];
}