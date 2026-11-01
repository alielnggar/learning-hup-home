import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions.html',
})
export class questionsComponent {
  openIndex = signal<number | null>(0);

  faqs = [
    {
      q: 'ما الفرق بين شراء برنامج والاشتراك في الـHub؟',
      a: 'شراء البرنامج يفتح لك برنامجًا واحدًا. الاشتراك الشهري أو السنوي يفتح كلّ البرامج، ومعها الأبحاث والأدوات والكتب وأعداد المجلة.'
    },
    {
      q: 'كم تبقى صلاحية الوصول للبرنامج؟',
      a: 'تحصل على وصولٍ للمحتوى لمدة 12 شهرًا من تاريخ الاشتراك.'
    },
    {
      q: 'هل أحصل على شهادة؟',
      a: 'نعم. بعد إتمام وحدات البرنامج وتسليم الـAssignments تحصل على شهادة إتمامٍ من DPC Consulting.'
    },
    {
      q: 'هل المحاضرات مسجّلة أم مباشرة؟',
      a: 'تختلف حسب البرنامج، وتجد طريقة الحضور في صفحة كلّ برنامج.'
    },
    {
      q: 'هل يمكنني استرداد المبلغ؟',
      a: 'نعم. يمكنك طلب استردادٍ كامل خلال 14 يومًا من تاريخ الشراء إذا لم تجد في البرنامج ما وعدناك به.'
    },
    {
      q: 'كيف أشترك لفريق شركتي؟',
      a: 'تواصل معنا وسيجهّز لك فريقنا عرضًا مناسبًا لحجم فريقك واحتياجه.'
    }
  ];

  toggleFaq(index: number) {
    this.openIndex.set(this.openIndex() === index ? null : index);
  }
}